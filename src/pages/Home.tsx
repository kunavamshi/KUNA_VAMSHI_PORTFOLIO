import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeroScene from '@/components/3d/HeroScene';
import { InteractiveAvatar } from '@/components/ui/interactive-avatar';
import BackgroundAnimation from '@/components/ui/BackgroundAnimation';

const Home = () => {
  const navigate = useNavigate();

  const handleViewMyWork = () => {
    // Smooth scroll to top before navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Navigate after a brief delay to allow smooth scroll
    setTimeout(() => navigate('/skills'), 300);
  };

  const handleGetInTouch = () => {
    // Smooth scroll to top before navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Navigate after a brief delay to allow smooth scroll
    setTimeout(() => navigate('/contact'), 300);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Background Animation */}
      <BackgroundAnimation type="home" />
      
      {/* 3D Background Scene */}
      <HeroScene />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <InteractiveAvatar 
              src="/profile-image.jpg"
              alt="Kunavamshi - Full Stack Developer"
              fallback="KV"
              size="xl"
            />
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl font-semibold tracking-wide"
            style={{
              background: 'linear-gradient(45deg, #8B5CF6, #06B6D4, #10B981)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientShift 4s ease infinite',
              textShadow: '0 0 15px rgba(139, 92, 246, 0.4)',
              filter: 'drop-shadow(0 0 5px rgba(139, 92, 246, 0.3))'
            }}
          >
            Hello, I'm
          </motion.p>
          
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold"
          >
            <span 
              style={{
                background: 'linear-gradient(45deg, #8B5CF6, #06B6D4, #10B981, #F59E0B)',
                backgroundSize: '250% 250%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'rainbowShift 5s ease infinite',
                textShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(6, 182, 212, 0.3)',
                filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.4))'
              }}
            >
              KUNA VAMSHI
            </span>
          </motion.h1>
          
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide"
            style={{
              background: 'linear-gradient(45deg, #06B6D4, #10B981, #F59E0B)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'cyberShift 3.5s ease infinite',
              textShadow: '0 0 10px rgba(6, 182, 212, 0.4)',
              filter: 'drop-shadow(0 0 5px rgba(6, 182, 212, 0.3))'
            }}
          >
            Full-Stack Developer & AI Enthusiast
          </motion.h2>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
            style={{
              background: 'linear-gradient(45deg, #64748B, #94A3B8, #CBD5E1)',
              backgroundSize: '250% 250%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'neonShift 4s ease infinite',
              textShadow: '0 0 8px rgba(100, 116, 139, 0.3)',
              filter: 'drop-shadow(0 0 3px rgba(100, 116, 139, 0.2))'
            }}
          >
            Crafting innovative digital experiences with MERN stack, AI/ML, and cutting-edge 3D technologies. 
            Passionate about solving complex problems and building the future of web development.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button 
              variant="hero" 
              size="xl" 
              onClick={handleViewMyWork}
            >
              View My Work
            </Button>
            
            <Button 
              variant="neon" 
              size="xl" 
              onClick={handleGetInTouch}
            >
              Get In Touch
              <Mail className="ml-2" size={20} />
            </Button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex justify-center items-center gap-6 pt-8"
          >
            <Button 
              variant="glass" 
              size="icon" 
              className="w-12 h-12"
              onClick={() => window.open('https://github.com/kunavamshi', '_blank')}
            >
              <Github size={20} />
            </Button>
            <Button 
              variant="glass" 
              size="icon" 
              className="w-12 h-12"
              onClick={() => window.open('https://linkedin.com/in/kunavamshi', '_blank')}
            >
              <Linkedin size={20} />
            </Button>
            <Button 
              variant="glass" 
              size="icon" 
              className="w-12 h-12 relative group"
              onClick={() => {
                // Use Google Drive's direct download with force parameter
                const fileId = '1VrsSXfrEmke1uWCSAxhfGXEK2j5bEwKH';
                
                // Method 1: Direct download URL with force parameters
                const downloadUrl = `https://drive.google.com/uc?export=download&confirm=t&id=${fileId}`;
                
                // Method 2: Alternative download URL format
                const altDownloadUrl = `https://docs.google.com/uc?export=download&id=${fileId}`;
                
                // Try both methods to ensure download works
                const link1 = document.createElement('a');
                link1.href = downloadUrl;
                link1.download = 'Kuna_Vamshi_Resume.pdf';
                link1.style.display = 'none';
                document.body.appendChild(link1);
                link1.click();
                document.body.removeChild(link1);
                
                // Backup method
                setTimeout(() => {
                  const link2 = document.createElement('a');
                  link2.href = altDownloadUrl;
                  link2.download = 'Kuna_Vamshi_Resume.pdf';
                  link2.style.display = 'none';
                  document.body.appendChild(link2);
                  link2.click();
                  document.body.removeChild(link2);
                }, 100);
              }}
              title="Download Resume"
            >
              <Download size={20} />
              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20">
                Download Resume
              </div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      

    </div>
  );
};

export default Home;