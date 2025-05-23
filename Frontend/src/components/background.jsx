import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { TextureLoader } from 'three';

export default function Background() {
  const canvasRef = useRef();

  // Handle WebGL context loss/restoration
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleContextLost = (event) => {
      console.warn('WebGL context lost:', event);
      event.preventDefault();
    };
    const handleContextRestored = () => {
      console.log('WebGL context restored');
    };

    canvas.addEventListener('webglcontextlost', handleContextLost);
    canvas.addEventListener('webglcontextrestored', handleContextRestored);

    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
    };
  }, []);

  // ← New: listen for Esc to go back home
  React.useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        window.location.href = '/';
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 15], fov: 45 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
        gl={{ antialias: true, preserveDrawingBuffer: false }}
      >
        {/* Deep space background color */}
        <color attach="background" args={['#000000']} />

        {/* General ambient light */}
        <ambientLight intensity={0.2} />

        {/* Soft directional fill */}
        <directionalLight position={[-5, 5, 5]} intensity={0.4} />

        {/* Sunlight rim light positioned to the right of Earth */}
        <pointLight
          position={[20, 2, 2]}
          intensity={3}
          distance={30}
          decay={2}
        />

        {/* Starfield */}
        <Stars radius={120} depth={80} count={4000} factor={4} fade />

        <Suspense fallback={null}>
          <RotatingMoon />
          <RotatingEarth />
        </Suspense>
      </Canvas>

      {/* Prompt */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        color: 'white',
        background: 'rgba(0,0,0,0.5)',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '0.875rem'
      }}>
        Press Esc to go back
      </div>
      {/* Purpose Text */}
      <div style={{
        position: 'absolute',
        bottom: '60px',
        left: '10px',
        maxWidth: '400px',
        color: 'white',
        background: 'rgba(0,0,0,0.5)',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        animation: 'fadeInUp 2s ease-out',
      }}>
        I created this space scene to creatively showcase my frontend skills.
      </div>

      <style>
        {`
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`}
      </style>

    </>
  );
}

// Rotating Moon component
function RotatingMoon() {
  const moonRef = useRef();

  // Load textures for the moon
  const [colorMap, bumpMap] = useLoader(TextureLoader, [
    '/textures/moon_color_4k.jpg',
    '/textures/moon_bump_4k.jpg',
  ]);

  // Rotate moon
  useFrame((_, delta) => {
    if (moonRef.current) {
      moonRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <mesh ref={moonRef} position={[-5, 1, 0]}>
      <sphereGeometry args={[1.5, 16, 16]} />
      <meshStandardMaterial
        map={colorMap}
        bumpMap={bumpMap}
        bumpScale={0.05}
        metalness={0.1}
        roughness={1}
      />
    </mesh>
  );
}

// Rotating Earth (sphere) on the right side with glow
function RotatingEarth() {
  const earthRef = useRef();

  // Load textures for Earth
  const [colorMap, bumpMap] = useLoader(TextureLoader, [
    '/textures/earth_color.jpg',
  ]);

  // Rotate Earth
  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <mesh ref={earthRef} position={[9, 1, 0]} scale={[7, 7, 7]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={colorMap}
        bumpMap={bumpMap}
        bumpScale={0.1}
        metalness={0.4}
        roughness={0.5}
        emissive="#223355"
        emissiveMap={colorMap}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}
