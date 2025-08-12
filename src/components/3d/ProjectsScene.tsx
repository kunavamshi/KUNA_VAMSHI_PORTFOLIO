import { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface ProjectCard3DProps {
  position: [number, number, number];
  title: string;
  color: string;
  index: number;
}

const ProjectCard3D = ({ position, title, color, index }: ProjectCard3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + index) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef} castShadow receiveShadow>
          <boxGeometry args={[2, 1.2, 0.1]} />
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.8}
            metalness={0.3}
            roughness={0.2}
          />
        </mesh>
        
        <Text
          position={[0, 0, 0.08]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
          textAlign="center"
        >
          {title}
        </Text>
      </Float>
    </group>
  );
};

const ProjectsScene = () => {
  const projects = [
    { title: 'Python ML', color: '#3B82F6', position: [-3, 2, 0] as [number, number, number] },
    { title: 'Full Stack', color: '#8B5CF6', position: [3, 2, 0] as [number, number, number] },
    { title: 'AI/ML', color: '#10B981', position: [-3, -2, 0] as [number, number, number] },
    { title: 'Analytics', color: '#F59E0B', position: [3, -2, 0] as [number, number, number] },
  ];

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 60 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3B82F6" />
        <pointLight position={[10, -10, -5]} intensity={0.5} color="#8B5CF6" />

        {projects.map((project, index) => (
          <ProjectCard3D
            key={project.title}
            position={project.position}
            title={project.title}
            color={project.color}
            index={index}
          />
        ))}

        <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={[0, 0, 0]} castShadow>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial 
              color="#6366F1"
              transparent
              opacity={0.8}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          
          <Text
            position={[0, 0, 0.6]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Projects
          </Text>
        </Float>

        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default ProjectsScene;
