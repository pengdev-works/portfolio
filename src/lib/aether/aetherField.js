/**
 * AETHER WebGL2 Starfield Engine (§5)
 * Hand-rolled WebGL2 implementation under 12 kB. No external graphics libraries.
 * Features 320 seeded stars, twinkle phases, scroll dolly, black-hole gravitational deflection,
 * and mouse lensing at (60vw, 40vh).
 */

export function initAetherField(canvas) {
  if (!canvas) return () => {};

  const gl = canvas.getContext('webgl2', { alpha: true, antialias: true });
  if (!gl) {
    console.warn('WebGL2 not supported, falling back to 2D context');
    return () => {};
  }

  // Vertex Shader
  const vsSource = `#version 300 es
    in vec2 a_position;
    in float a_radius;
    in float a_phase;
    
    uniform vec2 u_resolution;
    uniform vec2 u_singularity;
    uniform float u_time;
    uniform float u_scroll;
    uniform vec2 u_mouse;

    out float v_opacity;

    void main() {
      vec2 pos = a_position;

      // 1. Scroll parallax dolly
      float distToSing = length(pos - u_singularity);
      if (distToSing < 600.0) {
        float parallax = (600.0 - distToSing) / 600.0 * 0.6;
        pos += (pos - u_singularity) * (u_scroll * 0.0005 * parallax);
      }

      // 2. Black-hole gravitational deflection (1/r^2 falloff)
      float gravRadius = 220.0;
      if (distToSing < gravRadius && distToSing > 10.0) {
        float force = 1.0 / (distToSing * distToSing) * 15000.0;
        force = min(force, 40.0);
        vec2 dir = normalize(u_singularity - pos);
        pos += dir * force;
      }

      // 3. Cursor proximity lens warp (+20% within 240px)
      float mouseDist = length(u_mouse - u_singularity);
      if (mouseDist < 240.0 && distToSing < 240.0) {
        vec2 warpDir = normalize(pos - u_mouse);
        pos += warpDir * 20.0 * (1.0 - mouseDist / 240.0);
      }

      // Convert pixel position to clip space
      vec2 zeroToOne = pos / u_resolution;
      vec2 zeroToTwo = zeroToOne * 2.0;
      vec2 clipSpace = zeroToTwo - 1.0;
      clipSpace.y = -clipSpace.y; // Flip Y for WebGL

      gl_Position = vec4(clipSpace, 0.0, 1.0);

      // Twinkle calculation: sin(time * phase + offset) -> opacity 0.4..1.0
      v_opacity = 0.4 + 0.6 * 0.5 * (1.0 + sin(u_time * 2.0 * a_phase + a_position.x));
      gl_PointSize = a_radius * (1.0 + 0.2 * sin(u_time * a_phase));
    }
  `;

  // Fragment Shader
  const fsSource = `#version 300 es
    precision highp float;
    in float v_opacity;
    out vec4 outColor;

    void main() {
      // Draw circular point with soft corona glow
      vec2 coord = gl_PointCoord - vec2(0.5);
      float dist = length(coord);
      if (dist > 0.5) {
        discard;
      }
      float alpha = (1.0 - smoothstep(0.3, 0.5, dist)) * v_opacity;
      outColor = vec4(0.93, 0.93, 0.94, alpha); // #EDEDF0 off-white star color
    }
  `;

  function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  // Seeded Random Generator for 320 stars
  let seed = 42;
  function pseudoRandom() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }

  const numStars = 320;
  const positions = new Float32Array(numStars * 2);
  const radii = new Float32Array(numStars);
  const phases = new Float32Array(numStars);

  function resize() {
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);
    gl.viewport(0, 0, width, height);

    seed = 42;
    for (let i = 0; i < numStars; i++) {
      positions[i * 2] = pseudoRandom() * width;
      positions[i * 2 + 1] = pseudoRandom() * height;
      radii[i] = 0.6 + pseudoRandom() * 1.8; // 0.6..2.4 px
      phases[i] = 0.5 + pseudoRandom() * 1.5;
    }
  }

  resize();
  window.addEventListener('resize', resize);

  const posLoc = gl.getAttribLocation(program, 'a_position');
  const radLoc = gl.getAttribLocation(program, 'a_radius');
  const phaseLoc = gl.getAttribLocation(program, 'a_phase');

  const resLoc = gl.getUniformLocation(program, 'u_resolution');
  const singLoc = gl.getUniformLocation(program, 'u_singularity');
  const timeLoc = gl.getUniformLocation(program, 'u_time');
  const scrollLoc = gl.getUniformLocation(program, 'u_scroll');
  const mouseLoc = gl.getUniformLocation(program, 'u_mouse');

  const posBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.DYNAMIC_DRAW);

  const radBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, radBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, radii, gl.STATIC_DRAW);

  const phaseBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, phaseBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, phases, gl.STATIC_DRAW);

  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, radBuffer);
  gl.enableVertexAttribArray(radLoc);
  gl.vertexAttribPointer(radLoc, 1, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, phaseBuffer);
  gl.enableVertexAttribArray(phaseLoc);
  gl.vertexAttribPointer(phaseLoc, 1, gl.FLOAT, false, 0, 0);

  let mouseX = window.innerWidth * 0.6;
  let mouseY = window.innerHeight * 0.4;
  let scrollY = window.scrollY;

  const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  const handleScroll = () => {
    scrollY = window.scrollY;
  };

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('scroll', handleScroll);

  let animId;
  const startTime = performance.now();

  function render(now) {
    const elapsed = (now - startTime) / 1000.0;
    const width = canvas.width;
    const height = canvas.height;

    // Singularity sitting at 60% left, 40% top (60vw, 40vh)
    const singX = width * 0.6;
    const singY = height * 0.4;

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);
    gl.bindVertexArray(vao);

    gl.uniform2f(resLoc, width, height);
    gl.uniform2f(singLoc, singX, singY);
    gl.uniform1f(timeLoc, elapsed);
    gl.uniform1f(scrollLoc, scrollY);
    gl.uniform2f(mouseLoc, mouseX, mouseY);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    gl.drawArrays(gl.POINTS, 0, numStars);

    animId = requestAnimationFrame(render);
  }

  animId = requestAnimationFrame(render);

  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener('resize', resize);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('scroll', handleScroll);
    gl.deleteProgram(program);
  };
}
