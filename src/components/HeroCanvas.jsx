import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './AetherField.css'; /* reuse the full-canvas style */

const HeroCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width  = container.clientWidth  || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    /* ── Scene / Camera / Renderer ── */
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    /* ── Main Mesh: Glass TorusKnot ── */
    const geometry = new THREE.TorusKnotGeometry(1.1, 0.38, 140, 32);
    const material = new THREE.MeshPhysicalMaterial({
      color:              0x5B6CFF,
      emissive:           new THREE.Color(0x1A103C),
      emissiveIntensity:  0.4,
      roughness:          0.12,
      metalness:          0.85,
      clearcoat:          1.0,
      clearcoatRoughness: 0.08,
      transparent:        true,
      opacity:            0.88,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(2.0, 0, 0); // offset right so hero text is on left
    scene.add(mesh);

    /* ── Wireframe Overlay ── */
    const wireGeo = new THREE.TorusKnotGeometry(1.12, 0.385, 64, 16);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xA78BFA,
      wireframe:   true,
      transparent: true,
      opacity:     0.20,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    wireMesh.position.copy(mesh.position);
    scene.add(wireMesh);

    /* ── Outer Glow Ring ── */
    const ringGeo = new THREE.TorusGeometry(1.7, 0.012, 8, 120);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00E5FF,
      transparent: true,
      opacity: 0.35,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.copy(mesh.position);
    ring.rotation.x = Math.PI / 2.5;
    scene.add(ring);

    /* ── Particle Field ── */
    const COUNT = 280;
    const positions = new Float32Array(COUNT * 3);
    const colors    = new Float32Array(COUNT * 3);
    const colorA = new THREE.Color('#5B6CFF');
    const colorB = new THREE.Color('#A78BFA');
    const colorC = new THREE.Color('#00E5FF');

    for (let i = 0; i < COUNT; i++) {
      // Spread around the right half to frame the mesh
      positions[i * 3]     = (Math.random() - 0.2) * 8 + 1.0;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

      const t = Math.random();
      let pColor;
      if (t < 0.45)      pColor = colorA.clone().lerp(colorB, t / 0.45);
      else if (t < 0.75) pColor = colorB.clone().lerp(colorC, (t - 0.45) / 0.30);
      else               pColor = colorC.clone();
      colors[i * 3]     = pColor.r;
      colors[i * 3 + 1] = pColor.g;
      colors[i * 3 + 2] = pColor.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));
    const particleMat = new THREE.PointsMaterial({
      size:          0.045,
      vertexColors:  true,
      transparent:   true,
      opacity:       0.65,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    /* ── Lighting ── */
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    const pl1 = new THREE.PointLight(0x5B6CFF, 4.5, 12);
    pl1.position.set(4, 4, 3);
    scene.add(pl1);

    const pl2 = new THREE.PointLight(0xF472B6, 3.5, 12);
    pl2.position.set(-3, -3, -2);
    scene.add(pl2);

    const pl3 = new THREE.PointLight(0x00E5FF, 2.0, 10);
    pl3.position.set(2, -4, 4);
    scene.add(pl3);

    /* ── Mouse Tracking ── */
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
      targetY = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    /* ── Animation Loop ── */
    const clock = new THREE.Clock();
    let raf;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth lerp cursor
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      const baseY = t * (Math.PI * 2 / 32);  // ~32s per revolution
      mesh.rotation.x  = baseY * 0.8 + mouseY * 0.35;
      mesh.rotation.y  = baseY       + mouseX * 0.35;
      wireMesh.rotation.x = mesh.rotation.x * 1.08;
      wireMesh.rotation.y = mesh.rotation.y * 1.08;

      // Ring slow orbit
      ring.rotation.z = t * 0.12;
      ring.rotation.y = t * 0.05;

      // Subtle float
      const floatY = Math.sin(t * 0.4) * 0.15;
      mesh.position.y    = floatY;
      wireMesh.position.y = floatY;
      ring.position.y     = floatY;

      particles.rotation.y = t * 0.04;
      particles.rotation.x = t * 0.015;

      renderer.render(scene, camera);
    };
    animate();

    /* ── Resize ── */
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="hero-3d-canvas" />;
};

export default HeroCanvas;
