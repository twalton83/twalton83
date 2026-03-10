'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WireSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  );

  const vertexShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    uniform float uTime;
    uniform vec2 uMouse;

    void main() {
      vNormal = normal;
      vPosition = position;

      vec3 pos = position;

      // Gentle, tight displacement that stays spherical
      float wave = sin(pos.x * 4.0 + uTime * 0.5) * 0.04;
      wave += cos(pos.y * 3.5 + uTime * 0.4) * 0.04;
      wave += sin(pos.z * 3.0 + uTime * 0.3) * 0.03;

      // Mouse nudge
      pos.x += uMouse.x * 0.15;
      pos.y += uMouse.y * 0.1;

      pos += normal * wave;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    uniform float uTime;

    void main() {
      // Edge glow
      float edge = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
      edge = pow(edge, 1.5);

      // Muted silver-cyan
      vec3 baseColor = mix(vec3(0.55, 0.65, 0.75), vec3(0.4, 0.55, 0.7), edge);

      float alpha = 0.06 + edge * 0.25;

      gl_FragColor = vec4(baseColor, alpha);
    }
  `;

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    uniforms.uTime.value = t;

    mouseRef.current.x += (pointer.x - mouseRef.current.x) * 0.05;
    mouseRef.current.y += (pointer.y - mouseRef.current.y) * 0.05;
    uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);

    meshRef.current.rotation.y = t * 0.06;
    meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.6, 5]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        wireframe
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-50">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.2]}
          gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
          style={{ background: 'transparent' }}
        >
          <WireSphere />
        </Canvas>
      </Suspense>
    </div>
  );
}
