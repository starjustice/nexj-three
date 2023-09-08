"use client";

import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function ThreeScene() {
  const [model, setModel] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create a cube
    // const geometry = new THREE.RingGeometry();
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    const loader = new GLTFLoader();

    loader.load(
      "assets/shiba/scene.gltf",
      async function (gltf) {
        setModel(gltf.scene);

        scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error("error ??>>>>>>>", error);
      }
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    // controls.enableZoom = false;
    // controls.enableDamping = true;
    // controls.minPolarAngle = 0.8;
    // controls.maxPolarAngle = 2.4;
    // controls.dampingFactor = 0.07;
    // controls.rotateSpeed = 0.07;
    controls.update();

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;

      if (model) {
        model.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div />;
}

export default ThreeScene;
