import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Box, 
  BarChart3, 
  Brain, 
  Code, 
  Database, 
  Zap,
  Gamepad2,
  Trophy,
  Target,
  Globe,
  GitBranch
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SkillsScene from '@/components/3d/SkillsScene';
import SkillsDashboard from '@/components/SkillsDashboard';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useThemeStyles } from '@/hooks/useThemeStyles';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('3d');
  const navigate = useNavigate();
  const { styles } = useThemeStyles();

  // Use custom hook for scroll positioning
  useScrollToTop(0); // Start at top of page

  const handleViewProjects = () => {
    navigate('/projects');
  };

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  return (
    <Layout>
      <div className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${styles.background.current}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${styles.heading.current}`}>
              Technical Skills Hub
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${styles.subheading.current}`}>
              Explore my comprehensive technical expertise through an immersive 3D experience and detailed skill dashboard
            </p>
            
            {/* Quick Stats */}
            <div className="flex justify-center mt-8 gap-6">
              <div className="text-center">
                <div className={`text-2xl font-bold ${styles.accent.current}`}>40+</div>
                <div className={`text-sm ${styles.textSecondary.current}`}>Skills</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${styles.text.current}`}>6</div>
                <div className={`text-sm ${styles.textSecondary.current}`}>Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">85%+</div>
                <div className={`text-sm ${styles.textSecondary.current}`}>Average Proficiency</div>
              </div>
            </div>
          </motion.div>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="3d" className="flex items-center gap-2">
                <Box className="w-4 h-4" />
                3D Experience
              </TabsTrigger>
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Skills Dashboard
              </TabsTrigger>
            </TabsList>

            {/* 3D Skills Scene */}
            <TabsContent value="3d" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="card-enhanced rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className={`text-2xl font-bold mb-2 ${styles.heading.current}`}>Interactive 3D Skills Visualization</h2>
                    <p className={styles.textSecondary.current}>
                      Navigate through your AI/ML skills in an immersive 3D space. Hover over skill orbs to see details!
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className={`${styles.border.current} ${styles.accent.current}`}>
                      <Gamepad2 className="w-4 h-4 mr-2" />
                      Controls
                    </Button>
                  </div>
                </div>
                
                <div className="h-[600px] relative overflow-hidden rounded-xl">
                  <SkillsScene />
                </div>
                
                {/* 3D Scene Instructions */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className={`flex items-center gap-2 ${styles.textSecondary.current}`}>
                    <div className={`w-2 h-2 rounded-full ${styles.accent.current.replace('text-', 'bg-')}`}></div>
                    <span>Hover over orbs for details</span>
                  </div>
                  <div className={`flex items-center gap-2 ${styles.textSecondary.current}`}>
                    <div className={`w-2 h-2 rounded-full ${styles.accent.current.replace('text-', 'bg-')}`}></div>
                    <span>Use mouse to rotate view</span>
                  </div>
                  <div className={`flex items-center gap-2 ${styles.textSecondary.current}`}>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Scroll to zoom in/out</span>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Skills Dashboard */}
            <TabsContent value="dashboard" className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <SkillsDashboard />
              </motion.div>
            </TabsContent>
          </Tabs>

          {/* Additional Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16"
          >
            <div className="card-enhanced rounded-2xl p-8">
              <h2 className={`text-3xl font-bold mb-6 text-center ${styles.heading.current}`}>Skill Categories</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Languages */}
                <div className={`text-center p-6 rounded-xl transition-colors ${styles.accentBg.current} hover:bg-opacity-80`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${styles.accentBg.current}`}>
                    <Code className={`w-8 h-8 ${styles.accent.current}`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.text.current}`}>Languages</h3>
                  <p className={`text-sm ${styles.textSecondary.current}`}>
                    C, C++, Python, Java
                  </p>
                  <div className={`mt-3 text-2xl font-bold ${styles.accent.current}`}>84%</div>
                </div>

                {/* Frontend */}
                <div className={`text-center p-6 rounded-xl transition-colors ${styles.accentBg.current} hover:bg-opacity-80`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${styles.accentBg.current}`}>
                    <Globe className={`w-8 h-8 ${styles.accent.current}`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.text.current}`}>Frontend</h3>
                  <p className={`text-sm ${styles.textSecondary.current}`}>
                    HTML, CSS, JavaScript, React, Next.js
                  </p>
                  <div className={`mt-3 text-2xl font-bold ${styles.accent.current}`}>87%</div>
                </div>

                {/* Backend */}
                <div className={`text-center p-6 rounded-xl transition-colors ${styles.accentBg.current} hover:bg-opacity-80`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${styles.accentBg.current}`}>
                    <Code className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.text.current}`}>Backend</h3>
                  <p className={`text-sm ${styles.textSecondary.current}`}>
                    Node.js, Express.js
                  </p>
                  <div className="mt-3 text-2xl font-bold text-green-500">84%</div>
                </div>

                {/* Database */}
                <div className={`text-center p-6 rounded-xl transition-colors ${styles.accentBg.current} hover:bg-opacity-80`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${styles.accentBg.current}`}>
                    <Database className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.text.current}`}>Database</h3>
                  <p className={`text-sm ${styles.textSecondary.current}`}>
                    MongoDB, MySQL, SQL
                  </p>
                  <div className="mt-3 text-2xl font-bold text-orange-500">80%</div>
                </div>

                {/* Tools */}
                <div className={`text-center p-6 rounded-xl transition-colors ${styles.accentBg.current} hover:bg-opacity-80`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${styles.accentBg.current}`}>
                    <GitBranch className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.text.current}`}>Tools</h3>
                  <p className={`text-sm ${styles.textSecondary.current}`}>
                    Git, GitHub, VS Code, PyCharm
                  </p>
                  <div className="mt-3 text-2xl font-bold text-red-500">83%</div>
                </div>

                {/* AI/ML */}
                <div className={`text-center p-6 rounded-xl transition-colors ${styles.accentBg.current} hover:bg-opacity-80`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${styles.accentBg.current}`}>
                    <Brain className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.text.current}`}>AI/ML</h3>
                  <p className={`text-sm ${styles.textSecondary.current}`}>
                    TensorFlow, PyTorch, Scikit-learn, Pandas
                  </p>
                  <div className="mt-3 text-2xl font-bold text-yellow-500">89%</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className={`glass rounded-2xl p-8 ${styles.border.current}`}>
              <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
              <h3 className={`text-2xl font-bold mb-4 ${styles.heading.current}`}>Ready to Collaborate?</h3>
              <p className={`mb-6 max-w-2xl mx-auto ${styles.textSecondary.current}`}>
                I'm constantly expanding my technical skillset across multiple domains. Let's work together on innovative projects 
                and create cutting-edge solutions that push the boundaries of what's possible.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200" 
                  onClick={handleViewProjects}
                >
                  <Target className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className={`${styles.border.current} ${styles.accent.current} hover:bg-opacity-10 transform hover:scale-105 transition-all duration-200`}
                  onClick={handleGetInTouch}
                >
                  <Code className="w-4 h-4 mr-2" />
                  Get in Touch
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;