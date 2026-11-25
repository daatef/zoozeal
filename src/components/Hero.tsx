"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

import { Float, MeshDistortMaterial, Environment, Sparkles, ContactShadows } from "@react-three/drei";

import { PawPrint, ArrowRight, Play, Leaf } from "lucide-react";
import "./hero.css";

function LiquidBlob({
  position,
  scale,
  color,
  speed,
  distort,
}: {
  position: [number, number, number];
  scale: [number, number, number];
  color: string;
  speed: number;
  distort: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 64]} />
        <MeshDistortMaterial
          color={color}
          metalness={0.9}
          roughness={0.12}
          distort={distort}
          speed={2}
          radius={1}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
}

function LiquidRing() {
  return (
    <Float speed={1.4} rotationIntensity={0.7} floatIntensity={0.4}>
      <mesh position={[0.1, -0.1, -0.7]} rotation={[1.1, 0.3, 0.5]} scale={1.15}>
        <torusGeometry args={[1.1, 0.22, 32, 120]} />
        <MeshDistortMaterial
          color="#ffed72"
          metalness={1}
          roughness={0.09}
          distort={0.35}
          speed={2.5}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
}

function LiquidScene() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, state.pointer.x * 0.35, 2.5, delta);

    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -state.pointer.y * 0.2, 2.5, delta);
  });

  return (
    <>
      <Environment preset="studio" />
      <ambientLight intensity={0.45} />

      <directionalLight position={[5, 5, 5]} intensity={3} color="#ffffff" />

      <pointLight position={[-4, 2, 3]} intensity={8} color="#ffdb35" />

      <pointLight position={[4, -2, 2]} intensity={5} color="#ffc400" />

      <pointLight position={[0, 4, -3]} intensity={5} color="#fff2b4" />

      <group ref={group}>
        <LiquidBlob position={[0, 0.1, 0]} scale={[1.35, 1.45, 1.05]} color="#e8bd24" speed={1.3} distort={0.48} />

        <LiquidBlob
          position={[-1.15, 0.8, -0.5]}
          scale={[0.58, 0.68, 0.55]}
          color="#ffe87c"
          speed={1.8}
          distort={0.55}
        />

        <LiquidBlob position={[1.15, -0.85, 0.2]} scale={[0.5, 0.62, 0.48]} color="#c99512" speed={2} distort={0.5} />

        <LiquidRing />

        <LiquidBlob position={[1.55, 1.15, -1]} scale={[0.2, 0.2, 0.2]} color="#fff0bd" speed={2.2} distort={0.3} />

        <LiquidBlob
          position={[-1.65, -1.15, -0.8]}
          scale={[0.24, 0.24, 0.24]}
          color="#ffcf58"
          speed={1.6}
          distort={0.4}
        />
      </group>

      <Sparkles count={30} scale={5} size={2} speed={0.35} opacity={0.65} color="#ffe47a" />

      <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={5} blur={2.5} far={4} />
    </>
  );
}

export default function HeroSection() {
  return (
    <div>
      <div className="liquid-content">
        <div className="liquid-text">
          <div className="liquid-eyebrow">
            <Leaf size={18} />
            Together for a Kinder World
          </div>

          <h1>
            Give Animals
            <br />A <span>Voice.</span>
            <br />
            Give Them
            <br />
            <span>Freedom.</span>
          </h1>

          <p>
            Every animal deserves a life free from cruelty. Join us in protecting wildlife, defending animal rights, and
            creating a kinder world for all.
          </p>

          <div className="liquid-buttons">
            <a href="#donate" className="liquid-primary">
              <PawPrint size={20} />
              Support Our Cause
              <ArrowRight size={19} />
            </a>

            <a href="#about" className="liquid-secondary">
              <Play size={17} fill="currentColor" />
              Discover Our Story
            </a>
          </div>

          <div className="liquid-social-proof">
            <div className="liquid-avatars">
              <span>🐶</span>
              <span>🐱</span>
              <span>🐰</span>
            </div>

            <div>
              <strong>10,000+ Animal Lovers</strong>
              <small>United for a better tomorrow</small>
            </div>
          </div>
        </div>

        <div className="liquid-visual">
          <div className="liquid-canvas">
            <Canvas
              camera={{ position: [0, 0, 6], fov: 40 }}
              dpr={[1, 1.5]}
              gl={{
                alpha: true,
                antialias: true,
                powerPreference: "high-performance",
              }}
            >
              <LiquidScene />
            </Canvas>
          </div>
        </div>
      </div>

      <div className="hero-bottom-line">
        <span>ANIMALS. NATURE. LIFE.</span>
        <span>
          SCROLL TO EXPLORE <ArrowRight size={14} />
        </span>
      </div>
    </div>
  );
}
