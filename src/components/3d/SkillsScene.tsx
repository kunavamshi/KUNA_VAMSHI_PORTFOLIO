import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, Text3D, Center, Html } from '@react-three/drei';
import { Group, Mesh, MeshStandardMaterial } from 'three';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface SkillOrb {
  id: string;
  name: string;
  category: string;
  level: number;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  orbitAngle: number;
  orbitHeight: number;
  size: number;
  speed: number;
}

const skillsData: SkillOrb[] = [
  // LANGUAGES - Inner orbit
  { id: 'c', name: 'C', category: 'Languages', level: 85, color: '#1e293b', orbitRadius: 4, orbitSpeed: 0.8, orbitAngle: 0, orbitHeight: 0, size: 0.7, speed: 0.8 },
  { id: 'cpp', name: 'C++', category: 'Languages', level: 80, color: '#2563eb', orbitRadius: 4, orbitSpeed: 0.8, orbitAngle: 60, orbitHeight: 0, size: 0.7, speed: 0.9 },
  { id: 'python', name: 'Python', category: 'Languages', level: 95, color: '#059669', orbitRadius: 4, orbitSpeed: 0.8, orbitAngle: 120, orbitHeight: 0, size: 0.9, speed: 0.7 },
  { id: 'java', name: 'Java', category: 'Languages', level: 75, color: '#dc2626', orbitRadius: 4, orbitSpeed: 0.8, orbitAngle: 180, orbitHeight: 0, size: 0.6, speed: 1.1 },
  { id: 'html', name: 'HTML', category: 'Frontend', level: 90, color: '#ea580c', orbitRadius: 4, orbitSpeed: 0.8, orbitAngle: 240, orbitHeight: 0, size: 0.8, speed: 0.8 },
  { id: 'css', name: 'CSS', category: 'Frontend', level: 88, color: '#2563eb', orbitRadius: 4, orbitSpeed: 0.8, orbitAngle: 300, orbitHeight: 0, size: 0.8, speed: 0.9 },
  
  // FRONTEND - Middle orbit
  { id: 'javascript', name: 'JavaScript', category: 'Frontend', level: 92, color: '#ca8a04', orbitRadius: 6, orbitSpeed: 0.6, orbitAngle: 30, orbitHeight: 0, size: 0.9, speed: 0.7 },
  { id: 'typescript', name: 'TypeScript', category: 'Frontend', level: 85, color: '#2563eb', orbitRadius: 6, orbitSpeed: 0.6, orbitAngle: 90, orbitHeight: 0, size: 0.7, speed: 0.9 },
  { id: 'react', name: 'React.js', category: 'Frontend', level: 90, color: '#0891b2', orbitRadius: 6, orbitSpeed: 0.6, orbitAngle: 150, orbitHeight: 0, size: 0.8, speed: 0.8 },
  { id: 'nextjs', name: 'Next.js', category: 'Frontend', level: 82, color: '#1e293b', orbitRadius: 6, orbitSpeed: 0.6, orbitAngle: 210, orbitHeight: 0, size: 0.7, speed: 1.0 },
  { id: 'tailwind', name: 'TailwindCSS', category: 'Frontend', level: 88, color: '#0891b2', orbitRadius: 6, orbitSpeed: 0.6, orbitAngle: 270, orbitHeight: 0, size: 0.8, speed: 0.9 },
  { id: 'bootstrap', name: 'Bootstrap', category: 'Frontend', level: 85, color: '#7c3aed', orbitRadius: 6, orbitSpeed: 0.6, orbitAngle: 330, orbitHeight: 0, size: 0.7, speed: 0.9 },
  
  // BACKEND & DATABASE - Outer orbit
  { id: 'nodejs', name: 'Node.js', category: 'Backend', level: 85, color: '#059669', orbitRadius: 8, orbitSpeed: 0.4, orbitAngle: 45, orbitHeight: 0, size: 0.7, speed: 0.9 },
  { id: 'express', name: 'Express.js', category: 'Backend', level: 82, color: '#1e293b', orbitRadius: 8, orbitSpeed: 0.4, orbitAngle: 105, orbitHeight: 0, size: 0.7, speed: 1.0 },
  { id: 'mongodb', name: 'MongoDB', category: 'Database', level: 80, color: '#059669', orbitRadius: 8, orbitSpeed: 0.4, orbitAngle: 165, orbitHeight: 0, size: 0.6, speed: 1.1 },
  { id: 'mysql', name: 'MySQL', category: 'Database', level: 75, color: '#2563eb', orbitRadius: 8, orbitSpeed: 0.4, orbitAngle: 225, orbitHeight: 0, size: 0.5, speed: 1.2 },
  { id: 'sql', name: 'SQL', category: 'Database', level: 85, color: '#ca8a04', orbitRadius: 8, orbitSpeed: 0.4, orbitAngle: 285, orbitHeight: 0, size: 0.7, speed: 0.9 },
  
  // TOOLS - Upper orbit
  { id: 'git', name: 'Git', category: 'Tools', level: 88, color: '#dc2626', orbitRadius: 7, orbitSpeed: 0.5, orbitAngle: 20, orbitHeight: 2, size: 0.8, speed: 0.8 },
  { id: 'github', name: 'GitHub', category: 'Tools', level: 85, color: '#1e293b', orbitRadius: 7, orbitSpeed: 0.5, orbitAngle: 80, orbitHeight: 2, size: 0.7, speed: 0.9 },
  { id: 'vscode', name: 'VS Code', category: 'Tools', level: 90, color: '#2563eb', orbitRadius: 7, orbitSpeed: 0.5, orbitAngle: 140, orbitHeight: 2, size: 0.8, speed: 0.8 },
  { id: 'pycharm', name: 'PyCharm', category: 'Tools', level: 80, color: '#ca8a04', orbitRadius: 7, orbitSpeed: 0.5, orbitAngle: 200, orbitHeight: 2, size: 0.6, speed: 1.1 },
  { id: 'eclipse', name: 'Eclipse', category: 'Tools', level: 70, color: '#7c3aed', orbitRadius: 7, orbitSpeed: 0.5, orbitAngle: 260, orbitHeight: 2, size: 0.5, speed: 1.2 },
  { id: 'material-ui', name: 'Material UI', category: 'Frontend', level: 80, color: '#2563eb', orbitRadius: 7, orbitSpeed: 0.5, orbitAngle: 320, orbitHeight: 2, size: 0.6, speed: 1.1 },
  
  // AI/ML Skills - Lower orbit
  { id: 'tensorflow', name: 'TensorFlow', category: 'AI/ML', level: 88, color: '#ea580c', orbitRadius: 7, orbitSpeed: 0.5, orbitAngle: 15, orbitHeight: -2, size: 0.7, speed: 0.9 },
  { id: 'pytorch', name: 'PyTorch', category: 'AI/ML', level: 85, color: '#dc2626', orbitRadius: 7, orbitSpeed: 0.5, orbitAngle: 75, orbitHeight: -2, size: 0.7, speed: 1.0 },
  { id: 'scikit', name: 'Scikit-learn', category: 'AI/ML', level: 90, color: '#ca8a04', orbitRadius: 7, orbitSpeed: 0.5, orbitAngle: 135, orbitHeight: -2, size: 0.8, speed: 0.8 },
  { id: 'pandas', name: 'Pandas', category: 'AI/ML', level: 92, color: '#7c3aed', orbitRadius: 7, orbitSpeed: 0.5, orbitAngle: 195, orbitHeight: -2, size: 0.8, speed: 0.8 },
  { id: 'numpy', name: 'NumPy', category: 'AI/ML', level: 94, color: '#0891b2', orbitRadius: 7, orbitSpeed: 0.5, orbitAngle: 255, orbitHeight: -2, size: 0.8, speed: 0.8 },
  { id: 'matplotlib', name: 'Matplotlib', category: 'AI/ML', level: 87, color: '#2563eb', orbitRadius: 7, orbitSpeed: 0.5, orbitAngle: 315, orbitHeight: -2, size: 0.7, speed: 0.9 },
  { id: 'neural-nets', name: 'Neural Networks', category: 'AI/ML', level: 88, color: '#7c3aed', orbitRadius: 9, orbitSpeed: 0.3, orbitAngle: 180, orbitHeight: 0, size: 0.9, speed: 0.7 },
  { id: 'redux', name: 'Redux Toolkit', category: 'Frontend', level: 78, color: '#7c3aed', orbitRadius: 9, orbitSpeed: 0.3, orbitAngle: 240, orbitHeight: 0, size: 0.6, speed: 1.1 },
  { id: 'redux-query', name: 'Redux Query', category: 'Frontend', level: 75, color: '#7c3aed', orbitRadius: 9, orbitSpeed: 0.3, orbitAngle: 300, orbitHeight: 0, size: 0.5, speed: 1.2 },
];

const SkillOrb = ({ skill, isHovered, onHover }: { 
  skill: SkillOrb; 
  isHovered: boolean; 
  onHover: (hovered: boolean) => void;
}) => {
  const meshRef = useRef<Mesh>(null);
  const [localHovered, setLocalHovered] = useState(false);
  const { theme } = useTheme();
  
  // Theme-aware colors for this component
  const isLight = theme === 'light';
  const textColor = isLight ? '#1e293b' : '#ffffff';
  const borderColor = isLight ? '#dbeafe' : 'rgba(255, 255, 255, 0.2)';

  useFrame((state) => {
    if (meshRef.current) {
      // Calculate orbital position
      const time = state.clock.elapsedTime;
      const angle = skill.orbitAngle + time * skill.orbitSpeed;
      const x = Math.cos(angle) * skill.orbitRadius;
      const z = Math.sin(angle) * skill.orbitRadius;
      const y = skill.orbitHeight + Math.sin(time * skill.speed) * 0.3; // Floating effect
      
      meshRef.current.position.set(x, y, z);
      
      // Rotation animation
      meshRef.current.rotation.x += 0.01 * skill.speed;
      meshRef.current.rotation.y += 0.01 * skill.speed;
      
      // Hover effect
      if (isHovered || localHovered) {
        meshRef.current.scale.setScalar(1.3);
        if (meshRef.current.material instanceof MeshStandardMaterial) {
          meshRef.current.material.emissiveIntensity = 0.8;
        }
      } else {
        meshRef.current.scale.setScalar(1.0);
        if (meshRef.current.material instanceof MeshStandardMaterial) {
          meshRef.current.material.emissiveIntensity = 0.3;
        }
      }
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        onPointerOver={() => {
          setLocalHovered(true);
          onHover(true);
        }}
        onPointerOut={() => {
          setLocalHovered(false);
          onHover(false);
        }}
      >
        <sphereGeometry args={[skill.size, 32, 32]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Skill level indicator ring */}
      <mesh position={[0, 0, skill.size + 0.05]}>
        <ringGeometry args={[skill.size * 0.8, skill.size * 0.9, 32]} />
        <meshBasicMaterial
          color={skill.color}
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Skill name label */}
      {(isHovered || localHovered) && (
        <Html position={[0, skill.size + 0.5, 0]} center>
          <div 
            className="px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap border"
            style={{
              backgroundColor: isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.8)',
              color: textColor,
              borderColor: borderColor
            }}
          >
            <div className="font-bold">{skill.name}</div>
            <div className="text-xs opacity-75">{skill.category}</div>
            <div className="text-xs" style={{ color: isLight ? '#16a34a' : '#4ade80' }}>Level: {skill.level}%</div>
          </div>
        </Html>
      )}
    </group>
  );
};

// Central Brain Sphere Component
const BrainSphere = () => {
  const meshRef = useRef<Mesh>(null);
  const { theme } = useTheme();
  
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.003;
      
      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Main brain sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Brain texture overlay */}
      <mesh>
        <sphereGeometry args={[2.52, 64, 64]} />
        <meshBasicMaterial
          color="#8B5CF6"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[2.3, 32, 32]} />
        <meshBasicMaterial
          color="#A855F7"
          transparent
          opacity={0.2}
        />
      </mesh>
      
      {/* Brain emoji inside sphere */}
      <Html position={[0, 0, 0]} center>
        <div 
          className="text-6xl text-center"
          style={{
            color: '#ffffff',
            textShadow: '0 0 20px rgba(139, 92, 246, 0.9)',
            filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.6))'
          }}
        >
          🧠
        </div>
      </Html>
    </group>
  );
};

// Orbital Path Component
const OrbitalPath = ({ radius, height = 0, color = "#8B5CF6" }: { 
  radius: number; 
  height?: number; 
  color?: string;
}) => {
  return (
    <mesh position={[0, height, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.1, radius + 0.1, 64]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.1}
        wireframe
      />
    </mesh>
  );
};

const SkillsScene = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { theme } = useTheme();

  const categories = ['all', 'Languages', 'Frontend', 'Backend', 'Database', 'Tools', 'AI/ML'];
  
  // Theme-aware colors
  const isLight = theme === 'light';
  const bgColor = isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.6)';
  const textColor = isLight ? '#1e293b' : '#ffffff';
  const accentColor = isLight ? '#2563eb' : '#38bdf8';
  const borderColor = isLight ? '#dbeafe' : 'rgba(255, 255, 255, 0.2)';

  const filteredSkills = selectedCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  // Get unique orbit radii for paths
  const orbitRadii = [...new Set(skillsData.map(skill => skill.orbitRadius))];

  return (
    <div className="relative w-full h-full">
      {/* Category Filter */}
      <div className="absolute top-4 left-4 z-10">
        <div 
          className="backdrop-blur-sm rounded-lg p-4 border"
          style={{ 
            backgroundColor: bgColor,
            borderColor: borderColor,
            color: textColor
          }}
        >
          <h3 className="font-semibold mb-3">Filter Skills</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === category
                    ? 'text-white'
                    : 'hover:bg-opacity-80'
                }`}
                style={{
                  backgroundColor: selectedCategory === category 
                    ? accentColor 
                    : isLight ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255, 255, 255, 0.2)',
                  color: selectedCategory === category 
                    ? '#ffffff' 
                    : textColor
                }}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Stats */}
      {hoveredSkill && (
        <div className="absolute top-4 right-4 z-10">
          <div 
            className="backdrop-blur-sm rounded-lg p-4 border"
            style={{ 
              backgroundColor: bgColor,
              borderColor: borderColor,
              color: textColor
            }}
          >
            <h3 className="font-semibold mb-2">Skill Details</h3>
            {(() => {
              const skill = skillsData.find(s => s.id === hoveredSkill);
              if (!skill) return null;
              return (
                <div>
                  <div className="text-lg font-bold" style={{ color: accentColor }}>{skill.name}</div>
                  <div className="text-sm opacity-75">{skill.category}</div>
                  <div className="mt-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-32 h-2 rounded-full overflow-hidden" style={{ backgroundColor: isLight ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.2)' }}>
                      <div 
                        className="h-full rounded-full transition-all duration-300"
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(to right, ${accentColor}, ${isLight ? '#1d4ed8' : '#0ea5e9'})`
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      <Canvas
        camera={{ position: [0, 5, 25], fov: 60 }}
        dpr={[1, 2]}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#8B5CF6" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06B6D4" />
          <pointLight position={[0, 10, 0]} intensity={0.3} color="#10B981" />
          
          {/* Background stars */}
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          
          {/* Central Brain Sphere */}
          <BrainSphere />
          
          {/* Orbital Paths */}
          {orbitRadii.map((radius) => (
            <OrbitalPath key={radius} radius={radius} />
          ))}
          
          {/* Skill orbs */}
          {filteredSkills.map((skill) => (
            <SkillOrb
              key={skill.id}
              skill={skill}
              isHovered={hoveredSkill === skill.id}
              onHover={(hovered) => setHoveredSkill(hovered ? skill.id : null)}
            />
          ))}
          
          {/* Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.2}
            maxDistance={40}
            minDistance={15}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SkillsScene;
