import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, Text3D, Center } from '@react-three/drei';
import { Group } from 'three';
import FloatingCube from './FloatingCube';

const AnimatedGroup = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  const groupRef = useRef<Group>(null);
  const { size } = useThree();

  useFrame((state) => {
    if (groupRef.current) {
      // Base rotation
      const baseRotation = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      
      // Mouse-based rotation
      const mouseX = (mousePosition.x / size.width) * 2 - 1;
      const mouseY = -(mousePosition.y / size.height) * 2 + 1;
      
      groupRef.current.rotation.y = baseRotation + mouseX * 0.5;
      groupRef.current.rotation.x = mouseY * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating geometric shapes */}
      <FloatingCube position={[-3, 2, -2]} color="#8B5CF6" size={0.8} speed={0.8} />
      <FloatingCube position={[3, -1, -1]} color="#06B6D4" size={0.6} speed={1.2} />
      <FloatingCube position={[-2, -2, 1]} color="#10B981" size={0.4} speed={1.5} />
      <FloatingCube position={[2, 2, 2]} color="#F59E0B" size={0.5} speed={0.9} />
      
      {/* Central wireframe sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial
          color="#8B5CF6"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
};

const HeroScene = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 scene-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#8B5CF6" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06B6D4" />
          
          {/* Background stars */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          {/* 3D Content */}
          <AnimatedGroup mousePosition={mousePosition} />
          
          {/* Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;