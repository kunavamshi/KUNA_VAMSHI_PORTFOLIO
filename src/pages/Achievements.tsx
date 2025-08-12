import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import BackgroundAnimation from '@/components/ui/BackgroundAnimation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Trophy, 
  Award, 
  Users, 
  Calendar, 
  MapPin, 
  Star, 
  Target, 
  Lightbulb,
  Zap,
  BookOpen,
  Shield,
  Cloud,
  Code,
  Brain,
  Heart,
  Clock,
  MessageSquare,
  TrendingUp,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: 'hackathon' | 'workshop' | 'leadership' | 'academic' | 'certification';
  icon: React.ReactNode;
  color: string;
  badge?: string;
  link?: string;
  skills?: string[];
}

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

const achievements: Achievement[] = [
  // Industry Training Achievement
  {
    id: 'matrimony-training',
    title: 'Matrimony Industry Ready Skill Up Training Session',
    description: 'Selected for exclusive 5-month Industry Ready Skill Up Training Session by Matrimony.com. This intensive program offers hands-on training with potential internship/full-time job opportunities upon successful completion of capstone project with full efforts.',
    date: '2024',
    location: 'Matrimony.com',
    category: 'certification',
    icon: <Target className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    badge: 'Selected',
    skills: ['Industry Training', 'Capstone Project', 'Career Opportunity', 'Professional Development']
  },
  // Hackathon Achievements
  {
    id: 'vintra-2023',
    title: 'IInd Place - Techie Slayer Event',
    description: 'Secured 2nd place in the annual co-curricular fest VINTRA 2023 organized by Department of Information Technology. Demonstrated exceptional technical skills and problem-solving abilities.',
    date: 'August 2023',
    location: 'Kalasalingam Academy of Research and Education',
    category: 'hackathon',
    icon: <Trophy className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
    badge: '2nd Place',
    skills: ['Problem Solving', 'Technical Skills', 'Competition']
  },
  {
    id: 'flipkart-grid-6',
    title: 'Flipkart Grid 6.0 Hackathon Participant',
    description: 'Successfully participated in Flipkart Grid 6.0 hackathon on Unstop platform, showcasing innovative solutions and technical expertise in e-commerce technology.',
    date: '2024',
    location: 'Unstop Platform',
    category: 'hackathon',
    icon: <Code className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    badge: 'Participant',
    skills: ['E-commerce', 'Innovation', 'Hackathon']
  },
  {
    id: 'hack2skill-finalist',
    title: 'Hack2Skill 24-Hour Hackathon Finalist',
    description: 'Advanced to final round in the intense 24-hour Hack2Skill hackathon organized by Department of Information Technology, demonstrating exceptional endurance and problem-solving under pressure.',
    date: '2024',
    location: 'Kalasalingam Academy of Research and Education',
    category: 'hackathon',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    badge: 'Finalist',
    skills: ['24-Hour Hackathon', 'Endurance', 'Problem Solving', 'Innovation']
  },
  {
    id: 'google-cloud-arcade',
    title: 'Google Cloud Arcade Milestone 3 Course Completion',
    description: 'Successfully completed Google Cloud Arcade Milestone 3 course and received exclusive swags as recognition for achievement and dedication to learning.',
    date: '2024',
    location: 'Google Cloud Arcade',
    category: 'certification',
    icon: <Award className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    badge: 'Course Completed',
    skills: ['Google Cloud', 'Learning', 'Achievement']
  },
  {
    id: 'accenture-hackathon',
    title: 'Accenture Hackathon Participant',
    description: 'Participated in Accenture hackathon on Unstop platform, demonstrating problem-solving skills and innovative thinking in enterprise solutions.',
    date: '2024',
    location: 'Unstop Platform',
    category: 'hackathon',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    badge: 'Participant',
    skills: ['Enterprise Solutions', 'Problem Solving', 'Innovation']
  },
  {
    id: 'kare-oss-finalist',
    title: 'KARE OSS Final Round - Sign Language Translation',
    description: 'Advanced to final rounds in KARE OSS hackathon with sign language translation project, receiving highest voting and recognition for innovative accessibility solution.',
    date: '2024',
    location: 'Kalasalingam Academy of Research and Education',
    category: 'hackathon',
    icon: <Star className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
    badge: 'Finalist',
    skills: ['Sign Language Translation', 'Accessibility', 'Innovation', 'AI/ML']
  },
  {
    id: 'enexus-brandathon',
    title: 'Enexus Brandathon 24 Final Round',
    description: 'Reached final round in Enexus Brandathon 24 hackathon, showcasing expertise in branding and marketing strategies with innovative solutions.',
    date: '2024',
    location: 'Enexus Platform',
    category: 'hackathon',
    icon: <Target className="w-6 h-6" />,
    color: 'from-teal-500 to-cyan-500',
    badge: 'Finalist',
    skills: ['Branding', 'Marketing', 'Strategy', 'Innovation']
  },

  // Workshop Achievements
  {
    id: 'mcp-workshop',
    title: 'Model Context Protocol (MCP) Workshop',
    description: 'Completed intensive MCP workshop conducted by NxtWave, gaining valuable insights into model context protocols and AI development.',
    date: '2024',
    location: 'NxtWave',
    category: 'workshop',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    skills: ['Model Context Protocol', 'AI Development', 'Workshop']
  },
  {
    id: 'cyber-workshop',
    title: 'Cybersecurity Workshop',
    description: 'Participated in comprehensive cybersecurity workshop, learning about network security, ethical hacking, and digital protection strategies.',
    date: '2024',
    location: 'NxtWave',
    category: 'workshop',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    skills: ['Cybersecurity', 'Network Security', 'Ethical Hacking']
  },
  {
    id: 'aws-workshop',
    title: 'AWS Cloud Computing Workshop',
    description: 'Attended AWS workshop to understand cloud computing fundamentals, AWS services, and cloud deployment strategies.',
    date: '2024',
    location: 'NxtWave',
    category: 'workshop',
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-orange-500 to-yellow-500',
    skills: ['AWS', 'Cloud Computing', 'DevOps']
  },

  // Leadership Achievements
  {
    id: 'team-leadership',
    title: 'Project Team Leadership',
    description: 'Successfully led multiple project teams, guiding team members to achieve excellent grades and deliver high-quality results. Demonstrated strong leadership and mentoring capabilities.',
    date: '2023-2024',
    location: 'Academic Projects',
    category: 'leadership',
    icon: <Users className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    badge: 'Team Lead',
    skills: ['Leadership', 'Team Management', 'Mentoring']
  },
  {
    id: 'project-guidance',
    title: 'Project Guidance & Mentoring',
    description: 'Provided guidance and mentorship to team members across various projects, ensuring successful project completion and knowledge transfer.',
    date: '2023-2024',
    location: 'Academic Environment',
    category: 'leadership',
    icon: <Target className="w-6 h-6" />,
    color: 'from-teal-500 to-cyan-500',
    skills: ['Mentoring', 'Knowledge Transfer', 'Project Management']
  },

  // Academic Achievements
  {
    id: 'semester-excellence',
    title: 'Excellent Academic Performance',
    description: 'Consistently achieved good grades across semesters, demonstrating strong academic discipline and commitment to learning.',
    date: '2023-2024',
    location: 'Kalasalingam Academy of Research and Education',
    category: 'academic',
    icon: <Star className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
    badge: 'High GPA',
    skills: ['Academic Excellence', 'Discipline', 'Consistency']
  }
];

const softSkills: Skill[] = [
  { name: 'Team Management', level: 90, icon: <Users className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
  { name: 'Time Management', level: 85, icon: <Clock className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
  { name: 'Communication', level: 88, icon: <MessageSquare className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
  { name: 'Problem Solving', level: 92, icon: <Lightbulb className="w-5 h-5" />, color: 'from-yellow-500 to-orange-500' },
  { name: 'Leadership', level: 87, icon: <Target className="w-5 h-5" />, color: 'from-indigo-500 to-purple-500' },
  { name: 'Adaptability', level: 86, icon: <TrendingUp className="w-5 h-5" />, color: 'from-teal-500 to-cyan-500' },
  { name: 'Collaboration', level: 89, icon: <Heart className="w-5 h-5" />, color: 'from-red-500 to-pink-500' },
  { name: 'Critical Thinking', level: 91, icon: <Brain className="w-5 h-5" />, color: 'from-violet-500 to-purple-500' }
];

const categoryColors = {
  hackathon: 'from-blue-500 to-cyan-500',
  workshop: 'from-green-500 to-emerald-500',
  leadership: 'from-purple-500 to-pink-500',
  academic: 'from-yellow-500 to-orange-500',
  certification: 'from-indigo-500 to-purple-500'
};

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  return (
    <Layout>
      <BackgroundAnimation type="achievements" />
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-4xl sm:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Achievements & Skills
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Celebrating milestones in hackathons, workshops, leadership, and academic excellence. 
              Showcasing both technical expertise and essential soft skills that drive success.
            </motion.p>
          </motion.div>

          {/* Featured Achievement - Matrimony Training */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="card-enhanced p-8 mb-16 bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="p-6 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg">
                  <Target className="w-12 h-12" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <h2 className="text-3xl font-bold text-white">Matrimony.com</h2>
                  <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-lg px-4 py-2">
                    Selected
                  </Badge>
                </div>
                <h3 className="text-2xl font-semibold text-red-300 mb-3">
                  Industry Ready Skill Up Training Session
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Selected for exclusive 5-month intensive training program with hands-on experience. 
                  Complete the capstone project with full efforts to unlock internship/full-time job opportunities.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge variant="secondary" className="bg-gray-800/50 text-gray-200 border-gray-600">
                    5-Month Program
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-800/50 text-gray-200 border-gray-600">
                    Capstone Project
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-800/50 text-gray-200 border-gray-600">
                    Career Opportunity
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-800/50 text-gray-200 border-gray-600">
                    Industry Training
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Statistics Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="card-enhanced p-6 text-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {achievements.filter(a => a.category === 'hackathon').length}
              </div>
              <div className="text-gray-300 text-sm">Hackathons</div>
              <div className="text-xs text-blue-300 mt-1">
                {achievements.filter(a => a.category === 'hackathon' && a.badge === 'Finalist').length} Finalists
              </div>
            </div>
            <div className="card-enhanced p-6 text-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {achievements.filter(a => a.category === 'workshop').length}
              </div>
              <div className="text-gray-300 text-sm">Workshops</div>
            </div>
            <div className="card-enhanced p-6 text-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {achievements.filter(a => a.category === 'leadership').length}
              </div>
              <div className="text-gray-300 text-sm">Leadership</div>
            </div>
            <div className="card-enhanced p-6 text-center bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {achievements.filter(a => a.category === 'certification').length}
              </div>
              <div className="text-gray-300 text-sm">Certifications</div>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white border-gray-600"
            >
              All Achievements
            </Button>
            {Object.entries(categoryColors).map(([category, colors]) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category 
                    ? `bg-gradient-to-r ${colors} text-white` 
                    : 'bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {filteredAchievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="card-enhanced h-full overflow-hidden border-0 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300">
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        className={`p-3 rounded-full bg-gradient-to-r ${achievement.color} text-white shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {achievement.icon}
                      </motion.div>
                      {achievement.badge && (
                        <Badge className={`bg-gradient-to-r ${achievement.color} text-white`}>
                          {achievement.badge}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl font-bold text-white mb-2">
                      {achievement.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {achievement.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{achievement.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{achievement.location}</span>
                      </div>
                    </div>

                    {achievement.skills && (
                      <div className="flex flex-wrap gap-2">
                        {achievement.skills.map((skill) => (
                          <Badge 
                            key={skill}
                            variant="secondary"
                            className="bg-gray-800/50 text-gray-200 border-gray-600"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {achievement.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                        onClick={() => window.open(achievement.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Soft Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Soft Skills & Leadership
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Essential skills that complement technical expertise and drive professional success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="card-enhanced p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full bg-gradient-to-r ${skill.color} text-white`}>
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    </div>
                    <div className="text-2xl font-bold text-white">{skill.level}%</div>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 1.5 + index * 0.1, duration: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Achievements Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="card-enhanced p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 mb-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Key Achievements Summary
              </h2>
              <p className="text-xl text-muted-foreground">
                Highlights of your most significant accomplishments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">Selected</div>
                <div className="text-gray-300">Matrimony Training</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {achievements.filter(a => a.badge === 'Finalist').length}
                </div>
                <div className="text-gray-300">Hackathon Finalists</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {achievements.filter(a => a.category === 'workshop').length}
                </div>
                <div className="text-gray-300">Workshops Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24hr</div>
                <div className="text-gray-300">Hackathon Finalist</div>
              </div>
            </div>
          </motion.div>

          {/* Leadership Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="card-enhanced p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Leadership Excellence
              </h2>
              <p className="text-xl text-muted-foreground">
                Proven track record of leading teams to success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-gray-300">Project Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">5+</div>
                <div className="text-gray-300">Teams Led</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">A+</div>
                <div className="text-gray-300">Average Team Grade</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Achievements;