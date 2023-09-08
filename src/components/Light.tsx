"use client";

import React, { useEffect } from "react";
import * as THREE from "three";

export default function Light() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1); // Adjust the direction of the light
    scene.add(directionalLight);
  }, []);
  return <div />;
}
