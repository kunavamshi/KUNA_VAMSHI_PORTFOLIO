import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import BackgroundAnimation from '@/components/ui/BackgroundAnimation';
import ProjectsScene from '@/components/3d/ProjectsScene';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play, Code, Database, Brain, Globe, Star, Users, GitBranch } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  skills: string[];
  category: 'python' | 'fullstack' | 'aiml' | 'comprehensive';
  icon: React.ReactNode;
  color: string;
  stats: {
    stars: number;
    forks: number;
    contributors: number;
  };
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 'python-automation',
    title: 'Smart File Organizer',
    description: 'Intelligent file management system with AI-powered categorization',
    longDescription: 'A Python-based intelligent file organizer that automatically categorizes and organizes files using machine learning. Features include duplicate detection, smart naming, and automated backup systems. The system uses computer vision to identify document types and applies OCR for text extraction.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/yourusername/smart-file-organizer',
    skills: ['Python', 'Machine Learning', 'OpenCV', 'SQLite', 'Tkinter', 'Pandas', 'NumPy'],
    category: 'python',
    icon: <Code className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    stats: { stars: 156, forks: 23, contributors: 8 },
    featured: true
  },
  {
    id: 'fullstack-ecommerce',
    title: 'Modern E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory and payment processing',
    longDescription: 'A comprehensive e-commerce platform built with modern web technologies. Features include real-time inventory management, secure payment processing with Stripe, user authentication, admin dashboard, and responsive design. Includes advanced search, filtering, and recommendation systems.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/yourusername/modern-ecommerce',
    liveUrl: 'https://modern-ecommerce-demo.vercel.app',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redux', 'TypeScript', 'Tailwind CSS'],
    category: 'fullstack',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    stats: { stars: 342, forks: 67, contributors: 15 },
    featured: true
  },
  {
    id: 'ai-chatbot',
    title: 'AI-Powered Customer Support Bot',
    description: 'Intelligent chatbot with natural language processing and sentiment analysis',
    longDescription: 'An advanced AI chatbot that provides customer support using natural language processing. Features include sentiment analysis, intent recognition, multi-language support, and integration with CRM systems. The bot learns from conversations to improve responses over time.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/yourusername/ai-customer-support-bot',
    skills: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'PostgreSQL', 'Redis', 'Docker', 'BERT'],
    category: 'aiml',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    stats: { stars: 89, forks: 12, contributors: 5 },
    featured: false
  },
  {
    id: 'data-analytics-platform',
    title: 'Enterprise Data Analytics Dashboard',
    description: 'Comprehensive data analytics platform with real-time visualization and ML insights',
    longDescription: 'A full-stack data analytics platform that processes large datasets and provides real-time insights. Features include interactive dashboards, predictive analytics, automated reporting, and machine learning model deployment. Integrates with multiple data sources and provides RESTful APIs.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/yourusername/enterprise-analytics',
    skills: ['Python', 'React', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'TensorFlow', 'D3.js', 'Apache Kafka'],
    category: 'comprehensive',
    icon: <Database className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    stats: { stars: 234, forks: 45, contributors: 12 },
    featured: true
  }
];

const categoryColors = {
  python: 'from-blue-500 to-cyan-500',
  fullstack: 'from-purple-500 to-pink-500',
  aiml: 'from-green-500 to-emerald-500',
  comprehensive: 'from-orange-500 to-red-500'
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Layout>
      <BackgroundAnimation type="projects" />
      <ProjectsScene />
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
              Featured Projects
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Explore my portfolio of innovative applications showcasing expertise across Python development, 
              full-stack web solutions, AI/ML implementations, and comprehensive multi-technology platforms
            </motion.p>
          </motion.div>

          {/* Project Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="card-enhanced p-6 text-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {projects.reduce((sum, p) => sum + p.stats.stars, 0)}
              </div>
              <div className="text-gray-300 text-sm">Total Stars</div>
            </div>
            <div className="card-enhanced p-6 text-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {projects.reduce((sum, p) => sum + p.stats.forks, 0)}
              </div>
              <div className="text-gray-300 text-sm">Total Forks</div>
            </div>
            <div className="card-enhanced p-6 text-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {projects.length}
              </div>
              <div className="text-gray-300 text-sm">Projects</div>
            </div>
            <div className="card-enhanced p-6 text-center bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-gray-300 text-sm">Featured</div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="card-enhanced h-full overflow-hidden border-0 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300">
                  <div className="relative overflow-hidden">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Category Icon */}
                      <motion.div
                        className={`absolute top-4 right-4 p-3 rounded-full bg-gradient-to-r ${project.color} text-white shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {project.icon}
                      </motion.div>
                    </div>

                    <CardHeader className="relative z-10">
                      <CardTitle className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Project Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            <span>{project.stats.stars}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitBranch className="w-4 h-4" />
                            <span>{project.stats.forks}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{project.stats.contributors}</span>
                          </div>
                        </div>
                        {project.featured && (
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {project.skills.slice(0, 4).map((skill) => (
                          <Badge 
                            key={skill}
                            variant="secondary"
                            className="bg-gray-800/50 text-gray-200 border-gray-600 hover:bg-gray-700/50"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {project.skills.length > 4 && (
                          <Badge variant="outline" className="text-gray-400">
                            +{project.skills.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>

                    <CardFooter className="flex gap-3 pt-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                      {project.liveUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank');
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                    </CardFooter>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Categories Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {Object.entries(categoryColors).map(([category, colors]) => {
              const categoryProjects = projects.filter(p => p.category === category);
              const categoryInfo = {
                python: { title: 'Python Development', icon: <Code className="w-8 h-8" /> },
                fullstack: { title: 'Full Stack Web', icon: <Globe className="w-8 h-8" /> },
                aiml: { title: 'AI & Machine Learning', icon: <Brain className="w-8 h-8" /> },
                comprehensive: { title: 'Multi-Technology', icon: <Database className="w-8 h-8" /> }
              };

              return (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${colors} text-white text-center`}
                >
                  <div className="mb-4 flex justify-center">
                    {categoryInfo[category as keyof typeof categoryInfo].icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {categoryInfo[category as keyof typeof categoryInfo].title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {categoryProjects.length} Project{categoryProjects.length !== 1 ? 's' : ''}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${selectedProject.color} text-white`}>
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-300 text-lg">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Project Overview</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary"
                          className="bg-gray-800 text-gray-200 border-gray-600"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Source Code
                    </Button>
                    {selectedProject.liveUrl && (
                      <Button
                        variant="outline"
                        className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                        onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
};

export default Projects;