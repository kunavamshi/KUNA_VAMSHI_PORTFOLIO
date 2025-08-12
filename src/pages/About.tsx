import { motion } from 'framer-motion';
import { 
  User, 
  Heart, 
  Gamepad2, 
  Music, 
  Globe, 
  Code, 
  Brain, 
  Target, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Zap,
  Rocket,
  Lightbulb,
  Coffee,
  BookOpen,
  Palette,
  Music2,
  Headphones,
  Monitor,
  Smartphone
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useThemeStyles } from '@/hooks/useThemeStyles';
import BackgroundAnimation from '@/components/ui/BackgroundAnimation';

const About = () => {
  const { styles } = useThemeStyles();
  
  return (
    <Layout>
      <BackgroundAnimation type="about" />
      <div className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${styles.background.current}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${styles.heading.current}`}>
              About Me
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${styles.subheading.current}`}>
              Get to know the person behind the code - A passionate developer, AI enthusiast, and lifelong learner
            </p>
          </motion.div>



          {/* Personal Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <div className="card-enhanced rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${styles.accentBg.current}`}>
                  <User className={`w-12 h-12 ${styles.accent.current}`} />
                </div>
                <h2 className={`text-3xl font-bold mb-4 ${styles.text.current}`}>KUNA VAMSHI</h2>
                <p className={`text-xl font-semibold mb-2 ${styles.accent.current}`}>Full-Stack Developer & AI Technologist</p>
                <p className={styles.textSecondary.current}>Passionate about creating innovative digital solutions</p>
              </div>
              
              <div className="max-w-4xl mx-auto text-center">
                <p className={`text-lg leading-relaxed mb-6 ${styles.text.current}`}>
                  Dynamic and innovation-driven Full-Stack Developer & AI Technologist with a sharp edge in building scalable web systems, 
                  automating workflows, and crafting intelligent digital experiences. I specialize in transforming concepts into real-time 
                  products using modern stacks, AI/ML frameworks, and automation tools.
                </p>
                <p className={`text-lg leading-relaxed ${styles.text.current}`}>
                  Open to solving real-world problems with design-first and data-backed approaches. Git-native, API-obsessed, and powered by relentless curiosity.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Personal Details & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="card-enhanced rounded-2xl p-8">
              <h2 className={`text-2xl font-bold mb-6 text-center ${styles.text.current}`}>Personal Details & Contact</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${styles.accent.current}`}>
                    <User className="w-5 h-5" />
                    Personal Information
                  </h3>
                  
                  <div className="space-y-3">
                    <div className={`flex items-center gap-3 p-3 rounded-lg ${styles.accentBg.current}`}>
                      <MapPin className={`w-5 h-5 ${styles.accent.current}`} />
                      <div>
                        <p className={`text-sm ${styles.textSecondary.current}`}>Address</p>
                        <p className={styles.text.current}>14-1-37, Gosabavi Street, Ward-14, Rayadurgam, Anantapur District, Andhra Pradesh-515865</p>
                      </div>
                    </div>
                    
                    <div className={`flex items-center gap-3 p-3 rounded-lg ${styles.accentBg.current}`}>
                      <Phone className={`w-5 h-5 ${styles.accent.current}`} />
                      <div>
                        <p className={`text-sm ${styles.textSecondary.current}`}>Phone</p>
                        <p className={styles.text.current}>+91 9494933678</p>
                      </div>
                    </div>
                    
                    <div className={`flex items-center gap-3 p-3 rounded-lg ${styles.accentBg.current}`}>
                      <Mail className={`w-5 h-5 ${styles.accent.current}`} />
                      <div>
                        <p className={`text-sm ${styles.textSecondary.current}`}>Email</p>
                        <p className={styles.text.current}>vamshikuna905@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${styles.accent.current}`}>
                    <Globe className="w-5 h-5" />
                    Social Profiles
                  </h3>
                  
                  <div className="space-y-3">
                    <a 
                      href="https://www.linkedin.com/in/kunavamshi/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer ${styles.accentBg.current} hover:bg-opacity-80`}
                    >
                      <Linkedin className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className={`text-sm ${styles.textSecondary.current}`}>LinkedIn</p>
                        <p className={styles.text.current}>www.linkedin.com/in/kunavamshi/</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://www.github.com/kunavamshi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer ${styles.accentBg.current} hover:bg-opacity-80`}
                    >
                      <Github className="w-5 h-5 text-gray-700 dark:text-white" />
                      <div>
                        <p className={`text-sm ${styles.textSecondary.current}`}>GitHub</p>
                        <p className={styles.text.current}>www.github.com/kunavamshi</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Passions & Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="card-enhanced rounded-2xl p-8">
              <h2 className={`text-2xl font-bold mb-6 text-center ${styles.text.current}`}>Passions & Interests</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Technology & Learning */}
                <div className={`text-center p-6 rounded-xl transition-colors ${styles.accentBg.current} hover:bg-opacity-80`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${styles.accentBg.current}`}>
                    <Code className={`w-8 h-8 ${styles.accent.current}`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.text.current}`}>Learning New Stacks</h3>
                  <p className={`text-sm ${styles.textSecondary.current}`}>
                    Constantly exploring and mastering new technologies, frameworks, and development tools
                  </p>
                </div>

                {/* Gaming */}
                <div className={`text-center p-6 rounded-xl transition-colors ${styles.accentBg.current} hover:bg-opacity-80`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${styles.accentBg.current}`}>
                    <Gamepad2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.text.current}`}>Gaming</h3>
                  <p className={`text-sm ${styles.textSecondary.current}`}>
                    Passionate about video games, strategy games, and exploring virtual worlds
                  </p>
                </div>

                {/* Music */}
                <div className={`text-center p-6 rounded-xl transition-colors ${styles.accentBg.current} hover:bg-opacity-80`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${styles.accentBg.current}`}>
                    <Music className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.text.current}`}>Music</h3>
                  <p className={`text-sm ${styles.textSecondary.current}`}>
                    Love listening to various genres of music while coding and relaxing
                  </p>
                </div>

                {/* Internet & Research */}
                <div className={`text-center p-6 rounded-xl transition-colors ${styles.accentBg.current} hover:bg-opacity-80`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${styles.accentBg.current}`}>
                    <Globe className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.text.current}`}>Internet Browsing</h3>
                  <p className={`text-sm ${styles.textSecondary.current}`}>
                    Researching new technologies, staying updated with industry trends
                  </p>
                </div>

                {/* AI/ML */}
                <div className={`text-center p-6 rounded-xl transition-colors ${styles.accentBg.current} hover:bg-opacity-80`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${styles.accentBg.current}`}>
                    <Brain className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.text.current}`}>AI/ML Enthusiast</h3>
                  <p className={`text-sm ${styles.textSecondary.current}`}>
                    Deeply interested in artificial intelligence and machine learning applications
                  </p>
                </div>

                {/* Innovation */}
                <div className={`text-center p-6 rounded-xl transition-colors ${styles.accentBg.current} hover:bg-opacity-80`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${styles.accentBg.current}`}>
                    <Lightbulb className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.text.current}`}>Innovation</h3>
                  <p className={`text-sm ${styles.textSecondary.current}`}>
                    Always seeking creative solutions and pushing technological boundaries
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="card-enhanced rounded-2xl p-8">
              <h2 className={`text-2xl font-bold mb-6 text-center ${styles.text.current}`}>Professional Philosophy</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${styles.accentBg.current}`}>
                    <Target className={`w-8 h-8 ${styles.accent.current}`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.text.current}`}>Design-First Approach</h3>
                  <p className={styles.textSecondary.current}>
                    Prioritizing user experience and intuitive design in every project
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${styles.accentBg.current}`}>
                    <Rocket className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.text.current}`}>Data-Backed Solutions</h3>
                  <p className={styles.textSecondary.current}>
                    Making informed decisions based on data analysis and user feedback
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${styles.accentBg.current}`}>
                    <Zap className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.text.current}`}>Continuous Learning</h3>
                  <p className={styles.textSecondary.current}>
                    Embracing new challenges and staying ahead of technological trends
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <div className="card-enhanced rounded-2xl p-8">
              <Coffee className={`w-16 h-16 mx-auto mb-4 ${styles.accent.current}`} />
              <h3 className={`text-2xl font-bold mb-4 ${styles.text.current}`}>Let's Connect & Collaborate!</h3>
              <p className={`mb-6 max-w-2xl mx-auto ${styles.textSecondary.current}`}>
                I'm always excited to discuss new opportunities, innovative projects, and technological advancements. 
                Whether you want to collaborate on a project, discuss AI/ML applications, or just chat about the latest in tech, 
                I'd love to hear from you!
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="mailto:vamshikuna905@gmail.com"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
                <a 
                  href="https://www.linkedin.com/in/kunavamshi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 border rounded-lg transition-colors flex items-center gap-2 ${styles.border.current} ${styles.accent.current} hover:bg-opacity-10`}
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;