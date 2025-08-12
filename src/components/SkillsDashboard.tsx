import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Database, 
  BarChart3, 
  Zap, 
  Trophy, 
  Target, 
  TrendingUp,
  Play,
  Pause,
  RotateCcw,
  Globe,
  FileText,
  Palette,
  Layers,
  GitBranch,
  Monitor,
  Coffee
} from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  color: string;
  icon: React.ReactNode;
  achievements: string[];
}

const skills: Skill[] = [
  // LANGUAGES
  {
    id: 'c',
    name: 'C',
    category: 'Languages',
    level: 85,
    color: '#555555',
    icon: <Code className="w-5 h-5" />,
    achievements: ['System Programmer', 'Memory Master', 'Low-Level Expert']
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'Languages',
    level: 80,
    color: '#00599C',
    icon: <Code className="w-5 h-5" />,
    achievements: ['Object-Oriented Pro', 'STL Master', 'Performance Expert']
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Languages',
    level: 95,
    color: '#3776AB',
    icon: <Code className="w-5 h-5" />,
    achievements: ['Master Coder', '1000+ Lines', 'Efficiency Expert']
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Languages',
    level: 75,
    color: '#ED8B00',
    icon: <Coffee className="w-5 h-5" />,
    achievements: ['Enterprise Developer', 'JVM Master', 'Spring Expert']
  },

  // FRONTEND
  {
    id: 'html',
    name: 'HTML',
    category: 'Frontend',
    level: 90,
    color: '#E34F26',
    icon: <FileText className="w-5 h-5" />,
    achievements: ['Semantic Master', 'Accessibility Pro', 'SEO Expert']
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Frontend',
    level: 88,
    color: '#1572B6',
    icon: <Palette className="w-5 h-5" />,
    achievements: ['Styling Master', 'Flexbox Pro', 'Grid Expert']
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Frontend',
    level: 92,
    color: '#F7DF1E',
    icon: <Code className="w-5 h-5" />,
    achievements: ['ES6+ Master', 'Async Pro', 'DOM Expert']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    level: 85,
    color: '#3178C6',
    icon: <Code className="w-5 h-5" />,
    achievements: ['Type Safety Pro', 'Interface Master', 'Modern JS Expert']
  },
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend',
    level: 90,
    color: '#61DAFB',
    icon: <Zap className="w-5 h-5" />,
    achievements: ['Component Master', 'Hooks Pro', 'State Management Expert']
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    level: 82,
    color: '#000000',
    icon: <Globe className="w-5 h-5" />,
    achievements: ['SSR Pro', 'Performance Master', 'Full-Stack Expert']
  },
  {
    id: 'tailwind',
    name: 'TailwindCSS',
    category: 'Frontend',
    level: 88,
    color: '#06B6D4',
    icon: <Palette className="w-5 h-5" />,
    achievements: ['Utility Master', 'Responsive Pro', 'Design System Expert']
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'Frontend',
    level: 85,
    color: '#7952B3',
    icon: <Layers className="w-5 h-5" />,
    achievements: ['Component Master', 'Grid Pro', 'Rapid Prototyping Expert']
  },
  {
    id: 'material-ui',
    name: 'Material UI',
    category: 'Frontend',
    level: 80,
    color: '#0081CB',
    icon: <Layers className="w-5 h-5" />,
    achievements: ['Design System Pro', 'Component Master', 'Material Expert']
  },
  {
    id: 'redux',
    name: 'Redux Toolkit',
    category: 'Frontend',
    level: 78,
    color: '#764ABC',
    icon: <Database className="w-5 h-5" />,
    achievements: ['State Management Pro', 'Store Master', 'Middleware Expert']
  },
  {
    id: 'redux-query',
    name: 'Redux Query',
    category: 'Frontend',
    level: 75,
    color: '#764ABC',
    icon: <Database className="w-5 h-5" />,
    achievements: ['Data Fetching Pro', 'Cache Master', 'API Expert']
  },

  // BACKEND
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    level: 85,
    color: '#339933',
    icon: <Code className="w-5 h-5" />,
    achievements: ['Server Master', 'Event Loop Pro', 'NPM Expert']
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'Backend',
    level: 82,
    color: '#000000',
    icon: <Code className="w-5 h-5" />,
    achievements: ['API Master', 'Middleware Pro', 'Routing Expert']
  },

  // DATABASE
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Database',
    level: 80,
    color: '#47A248',
    icon: <Database className="w-5 h-5" />,
    achievements: ['NoSQL Master', 'Aggregation Pro', 'Schema Design Expert']
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Database',
    level: 75,
    color: '#4479A1',
    icon: <Database className="w-5 h-5" />,
    achievements: ['SQL Master', 'Query Optimization Pro', 'Database Design Expert']
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Database',
    level: 85,
    color: '#E48E00',
    icon: <Database className="w-5 h-5" />,
    achievements: ['Query Master', 'Performance Pro', 'Database Admin Expert']
  },

  // TOOLS
  {
    id: 'git',
    name: 'Git',
    category: 'Tools',
    level: 88,
    color: '#F05032',
    icon: <GitBranch className="w-5 h-5" />,
    achievements: ['Version Control Master', 'Branching Pro', 'Collaboration Expert']
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Tools',
    level: 85,
    color: '#181717',
    icon: <GitBranch className="w-5 h-5" />,
    achievements: ['Repository Master', 'CI/CD Pro', 'Open Source Expert']
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'Tools',
    level: 90,
    color: '#007ACC',
    icon: <Monitor className="w-5 h-5" />,
    achievements: ['Editor Master', 'Extension Pro', 'Debugging Expert']
  },
  {
    id: 'pycharm',
    name: 'PyCharm',
    category: 'Tools',
    level: 80,
    color: '#000000',
    icon: <Monitor className="w-5 h-5" />,
    achievements: ['Python IDE Master', 'Refactoring Pro', 'Debugging Expert']
  },
  {
    id: 'eclipse',
    name: 'Eclipse',
    category: 'Tools',
    level: 70,
    color: '#2C2255',
    icon: <Monitor className="w-5 h-5" />,
    achievements: ['Java IDE Master', 'Plugin Pro', 'Enterprise Expert']
  },

  // AI/ML Skills (keeping the best ones)
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'AI/ML',
    level: 88,
    color: '#FF6F00',
    icon: <Brain className="w-5 h-5" />,
    achievements: ['Neural Architect', 'Model Master', 'Tensor Wizard']
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'AI/ML',
    level: 85,
    color: '#EE4C2C',
    icon: <Brain className="w-5 h-5" />,
    achievements: ['PyTorch Pro', 'Dynamic Master', 'GPU Optimizer']
  },
  {
    id: 'scikit',
    name: 'Scikit-learn',
    category: 'AI/ML',
    level: 90,
    color: '#F7931E',
    icon: <Zap className="w-5 h-5" />,
    achievements: ['Algorithm Expert', 'Pipeline Master', 'ML Engineer']
  },
  {
    id: 'pandas',
    name: 'Pandas',
    category: 'AI/ML',
    level: 92,
    color: '#130654',
    icon: <Database className="w-5 h-5" />,
    achievements: ['Data Wrangler', 'Pivot Master', 'CSV Ninja']
  },
  {
    id: 'numpy',
    name: 'NumPy',
    category: 'AI/ML',
    level: 94,
    color: '#4DABCF',
    icon: <Database className="w-5 h-5" />,
    achievements: ['Array Master', 'Vectorization Pro', 'Math Wizard']
  },
  {
    id: 'matplotlib',
    name: 'Matplotlib',
    category: 'AI/ML',
    level: 87,
    color: '#11557C',
    icon: <BarChart3 className="w-5 h-5" />,
    achievements: ['Visual Artist', 'Chart Master', 'Plot Designer']
  },
  {
    id: 'neural-nets',
    name: 'Neural Networks',
    category: 'AI/ML',
    level: 88,
    color: '#8B5CF6',
    icon: <Brain className="w-5 h-5" />,
    achievements: ['Neural Master', 'Backprop Pro', 'Gradient Expert']
  }
];

const SkillsDashboard = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  const overallLevel = Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-6">
      {/* Overall Stats Card */}
      <motion.div
        variants={itemVariants}
                    className="card-enhanced rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Technical Skills Overview</h2>
            <p className="text-muted-foreground">Your comprehensive technical expertise across multiple domains</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-purple-400">{overallLevel}%</div>
            <div className="text-sm text-muted-foreground">Average Proficiency</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="text-center">
                            <div className="text-2xl font-bold text-white">{skills.length}</div>
            <div className="text-sm text-muted-foreground">Total Skills</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              {skills.filter(s => s.level >= 90).length}
            </div>
            <div className="text-sm text-muted-foreground">Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">
              {skills.filter(s => s.level >= 80 && s.level < 90).length}
            </div>
            <div className="text-sm text-muted-foreground">Advanced</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">
              {skills.filter(s => s.level >= 70 && s.level < 80).length}
            </div>
            <div className="text-sm text-muted-foreground">Intermediate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">
              {skills.filter(s => s.level < 70).length}
            </div>
            <div className="text-sm text-muted-foreground">Learning</div>
          </div>
        </div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            variants={itemVariants}
            className={`card-enhanced rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedSkill?.id === skill.id 
                ? 'border-purple-500 shadow-lg shadow-purple-500/25' 
                : 'border-transparent hover:border-purple-500/50'
            }`}
            onClick={() => setSelectedSkill(selectedSkill?.id === skill.id ? null : skill)}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <div style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{skill.name}</h3>
                  <p className="text-xs text-muted-foreground">{skill.category}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-purple-400">{skill.level}%</div>
                <div className="text-xs text-muted-foreground">Level</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ 
                    backgroundColor: skill.color,
                    width: isAnimating ? `${skill.level}%` : '0%'
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                />
              </div>
            </div>

            {/* Achievements Preview */}
            <div className="flex flex-wrap gap-1">
              {skill.achievements.slice(0, 2).map((achievement, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full"
                >
                  {achievement}
                </span>
              ))}
              {skill.achievements.length > 2 && (
                <span className="px-2 py-1 text-xs bg-white/10 text-muted-foreground rounded-full">
                  +{skill.achievements.length - 2}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Selected Skill Details */}
      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
                      className="card-enhanced rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div 
                className="p-3 rounded-xl"
                style={{ backgroundColor: `${selectedSkill.color}20` }}
              >
                <div style={{ color: selectedSkill.color }}>
                  {selectedSkill.icon}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedSkill.name}</h3>
                <p className="text-muted-foreground">{selectedSkill.category}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-purple-400">{selectedSkill.level}%</div>
              <div className="text-sm text-muted-foreground">Proficiency</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Proficiency Details */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Proficiency Details</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Current Level</span>
                    <span>{selectedSkill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ 
                        backgroundColor: selectedSkill.color,
                        width: `${selectedSkill.level}%`
                      }}
                    />
                  </div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">
                    {selectedSkill.level >= 90 ? 'Expert' : 
                     selectedSkill.level >= 80 ? 'Advanced' : 
                     selectedSkill.level >= 70 ? 'Intermediate' : 'Beginner'}
                  </div>
                  <div className="text-sm text-muted-foreground">Skill Level</div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Achievements</h4>
              <div className="space-y-2">
                {selectedSkill.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-white">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Animation Controls */}
      <motion.div
        variants={itemVariants}
        className="flex justify-center gap-4"
      >
        <button
          onClick={() => setIsAnimating(!isAnimating)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
        >
          {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isAnimating ? 'Pause' : 'Play'} Animation
        </button>
        <button
          onClick={() => setIsAnimating(true)}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </motion.div>
    </div>
  );
};

export default SkillsDashboard;
