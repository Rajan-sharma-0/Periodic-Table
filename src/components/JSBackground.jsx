import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJSBackground = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x111111); // Background color
    containerRef.current.appendChild(renderer.domElement);

    // Add nucleus (protons and neutrons)
    const nucleusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red for nucleus
    const nucleus = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), nucleusMaterial);
    scene.add(nucleus);

    // Reusable geometries
    const protonGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const neutronGeometry = new THREE.SphereGeometry(0.2, 16, 16);

    // Add protons and neutrons randomly in the nucleus
    const protonMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red for protons
    const neutronMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Blue for neutrons
    for (let i = 0; i < 8; i++) {
      const proton = new THREE.Mesh(protonGeometry, protonMaterial);
      proton.position.set(Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.5);
      scene.add(proton);

      const neutron = new THREE.Mesh(neutronGeometry, neutronMaterial);
      neutron.position.set(Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.5);
      scene.add(neutron);
    }

    // Electron material
    const electronMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green for electrons
    const electronSize = 0.2;
    const electrons = [];

    // Create orbit helper function
    const createOrbit = (radius, electronCount, color) => {
      const orbitPoints = [];
      for (let i = 0; i < 100; i++) {
        const angle = (i / 100) * Math.PI * 2;
        orbitPoints.push(new THREE.Vector3(
          radius * Math.cos(angle),
          radius * Math.sin(angle),
          0
        ));
      }
      const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
      const orbitMaterial = new THREE.LineBasicMaterial({ color, opacity: 0.5, transparent: true });
      const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
      scene.add(orbit);

      // Add electrons to the orbit
      for (let i = 0; i < electronCount; i++) {
        const electron = new THREE.Mesh(new THREE.SphereGeometry(electronSize, 16, 16), electronMaterial);
        const angle = (i * Math.PI * 2) / electronCount;
        electron.position.set(
          radius * Math.cos(angle),
          radius * Math.sin(angle),
          0
        );
        electrons.push({ electron, radius, offset: i });
        scene.add(electron);
      }
    };

    // First shell: 2 electrons
    createOrbit(1.5, 2, 0xffffff);

    // Second shell: 6 electrons
    createOrbit(3, 6, 0xffffff);

    // Add lighting (optional)
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Set up the camera position
    camera.position.z = 10;

    // Array to store spark particles
    const sparks = [];

    // Function to create spark particles
    const createSpark = (x, y) => {
      const sparkMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 }); // Yellow spark
      const sparkGeometry = new THREE.SphereGeometry(0.1, 8, 8);
      const spark = new THREE.Mesh(sparkGeometry, sparkMaterial);
      spark.position.set(x, y, Math.random() * 0.5 - 0.25);
      sparks.push({ spark, lifetime: 0 });
      scene.add(spark);
    };

    // Mouse move event
    const onMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      const vector = new THREE.Vector3(mouseX, mouseY, 0.5).unproject(camera);
      createSpark(vector.x, vector.y);
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate electrons around the nucleus
      const time = Date.now() * 0.001;
      electrons.forEach(({ electron, radius, offset }) => {
        const angle = time + (offset * Math.PI * 2) / electrons.length;
        electron.position.x = radius * Math.cos(angle);
        electron.position.y = radius * Math.sin(angle);
      });

      // Update sparks and fade them out
      for (let i = sparks.length - 1; i >= 0; i--) {
        const spark = sparks[i];
        spark.lifetime += 0.02;
        spark.spark.material.opacity = 1 - spark.lifetime; // Fade effect
        if (spark.lifetime > 1) {
          scene.remove(spark.spark); // Remove faded sparks
          sparks.splice(i, 1);
        }
      }

      // Render the scene
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Place behind other content
      }}
    />
  );
};

export default ThreeJSBackground;
