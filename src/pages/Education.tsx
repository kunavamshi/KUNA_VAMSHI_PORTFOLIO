import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Calendar, 
  MapPin, 
  TrendingUp,
  Star,
  Trophy,
  Target,
  Code
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import BackgroundAnimation from '@/components/ui/BackgroundAnimation';

const Education = () => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate('/projects');
  };

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  const educationData = [
    {
      id: 1,
      institution: "NXTWAVE DISRUPTIVE TECHNOLOGIES",
      location: "Online Platform",
      duration: "OCT 2022 - ONGOING (GROWTH CYCLE 6)",
      degree: "INDUSTRY READY CERTIFICATION IN FULL-STACK DEVELOPMENT",
      description: "Comprehensive full-stack development program focusing on modern web technologies and industry best practices",
      achievements: ["Full-stack development certification", "Industry-ready skills", "Ongoing learning cycle"],
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: 2,
      institution: "KALASALINGAM ACADEMY OF RESEARCH AND EDUCATION",
      location: "Krishnankovil, Tamil Nadu",
      duration: "2022 - 2026 (ONGOING)",
      degree: "B.TECH IN COMPUTER SCIENCE ENGINEERING WITH AIML SPECIALIZATION",
      description: "Comprehensive computer science program with focus on Artificial Intelligence and Machine Learning",
      achievements: ["8.49 CGPA", "AIML Specialization", "Ongoing program"],
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: 3,
      institution: "SRI VENKATESHWARA JUNIOR COLLEGE",
      location: "Rayaduram, Andhra Pradesh",
      duration: "2020 - 2022",
      degree: "INTERMEDIATE MPC (Mathematics, Physics, Chemistry)",
      description: "Higher secondary education with focus on science and mathematics",
      achievements: ["72.3% Score", "MPC Stream", "Science Foundation"],
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 4,
      institution: "ST. PAUL'S E/M HIGH SCHOOL",
      location: "Rayaduram, Andhra Pradesh",
      duration: "2019 - 2020",
      degree: "SECONDARY SCHOOL CERTIFICATE",
      description: "Foundation of academic excellence and character building",
      achievements: ["99.6% Score", "Academic Excellence", "Strong Foundation"],
      icon: <Award className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30"
    }
  ];

  return (
    <Layout>
      <BackgroundAnimation type="education" />
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Educational Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive academic background spanning from foundational education to specialized technical training
            </p>
            
            {/* Quick Stats */}
            <div className="flex justify-center mt-8 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">4</div>
                <div className="text-sm text-muted-foreground">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">8.49</div>
                <div className="text-sm text-muted-foreground">Current CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">99.6%</div>
                <div className="text-sm text-muted-foreground">Best Score</div>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="card-enhanced rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Academic Timeline</h2>
              
              <div className="space-y-8">
                {educationData.map((education, index) => (
                  <motion.div
                    key={education.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`relative ${index !== educationData.length - 1 ? 'pb-8' : ''}`}
                  >
                    {/* Timeline Connector */}
                    {index !== educationData.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                    )}
                    
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-full ${education.bgColor} ${education.borderColor} border-2 flex items-center justify-center text-white flex-shrink-0`}>
                        {education.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="glass rounded-xl p-6 border border-purple-500/20">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-bold text-white mb-2">{education.institution}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {education.duration}
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <MapPin className="w-4 h-4" />
                            {education.location}
                          </div>
                          
                          <h4 className="text-lg font-semibold text-purple-400 mb-3">{education.degree}</h4>
                          
                          <p className="text-muted-foreground mb-4">{education.description}</p>
                          
                          {/* Achievements */}
                          <div className="flex flex-wrap gap-2">
                            {education.achievements.map((achievement, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-white/10 rounded-full text-sm text-white border border-purple-500/30"
                              >
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Academic Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="card-enhanced rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Academic Highlights</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Current Program */}
                <div className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Current Program</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    B.Tech CSE with AIML
                  </p>
                  <div className="text-2xl font-bold text-purple-400">8.49 CGPA</div>
                </div>

                {/* Certification */}
                <div className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Full-Stack</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Industry Ready Certification
                  </p>
                  <div className="text-2xl font-bold text-purple-400">Ongoing</div>
                </div>

                {/* Academic Excellence */}
                <div className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Best Performance</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Secondary School
                  </p>
                  <div className="text-2xl font-bold text-yellow-400">99.6%</div>
                </div>

                {/* Science Foundation */}
                <div className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Science Stream</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    MPC Foundation
                  </p>
                  <div className="text-2xl font-bold text-green-400">72.3%</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <div className="card-enhanced rounded-2xl p-8">
              <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply My Knowledge?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                My educational background provides a strong foundation in computer science, AI/ML, and full-stack development. 
                I'm eager to apply this knowledge to real-world projects and contribute to innovative solutions.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-200" 
                  onClick={handleViewProjects}
                >
                  <Target className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-200" 
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

export default Education;