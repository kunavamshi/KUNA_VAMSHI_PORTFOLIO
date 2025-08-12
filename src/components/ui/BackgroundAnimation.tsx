import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BackgroundAnimationProps {
  type: 'home' | 'about' | 'projects' | 'contact' | 'education' | 'achievements';
  className?: string;
}

const BackgroundAnimation = ({ type, className = '' }: BackgroundAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Get colors based on page type
    const getColors = () => {
      switch (type) {
        case 'home':
          return ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B'];
        case 'about':
          return ['#2563EB', '#7C3AED', '#059669', '#DC2626'];
        case 'projects':
          return ['#0891B2', '#7C3AED', '#059669', '#EA580C'];
        case 'contact':
          return ['#10B981', '#8B5CF6', '#2563EB', '#F59E0B'];
        case 'education':
          return ['#7C3AED', '#059669', '#2563EB', '#DC2626'];
        case 'achievements':
          return ['#F59E0B', '#8B5CF6', '#10B981', '#EA580C'];
        default:
          return ['#8B5CF6', '#06B6D4', '#10B981'];
      }
    };

    const colors = getColors();

    // Create particles
    const createParticles = () => {
      const particleCount = type === 'home' ? 50 : 30;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `${particle.color}${Math.floor((1 - distance / 100) * 0.3 * 255).toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      // Add special effects based on page type
      if (type === 'home') {
        // Add pulsing circles
        const time = Date.now() * 0.001;
        for (let i = 0; i < 3; i++) {
          const x = canvas.width * 0.5 + Math.cos(time + i * Math.PI * 2 / 3) * 200;
          const y = canvas.height * 0.5 + Math.sin(time + i * Math.PI * 2 / 3) * 200;
          const size = Math.sin(time * 2 + i) * 20 + 40;
          
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.strokeStyle = `${colors[i]}20`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      if (type === 'projects') {
        // Add geometric shapes
        const time = Date.now() * 0.0005;
        for (let i = 0; i < 5; i++) {
          const x = canvas.width * 0.5 + Math.cos(time + i * Math.PI * 2 / 5) * 150;
          const y = canvas.height * 0.5 + Math.sin(time + i * Math.PI * 2 / 5) * 150;
          
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(time + i);
          ctx.strokeStyle = `${colors[i % colors.length]}30`;
          ctx.lineWidth = 1;
          
          if (i % 2 === 0) {
            // Square
            ctx.strokeRect(-15, -15, 30, 30);
          } else {
            // Triangle
            ctx.beginPath();
            ctx.moveTo(0, -15);
            ctx.lineTo(-13, 15);
            ctx.lineTo(13, 15);
            ctx.closePath();
            ctx.stroke();
          }
          ctx.restore();
        }
      }

      if (type === 'contact') {
        // Add wave effect
        const time = Date.now() * 0.001;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        for (let x = 0; x < canvas.width; x += 10) {
          const y = canvas.height * 0.7 + Math.sin(x * 0.01 + time) * 30;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        ctx.fillStyle = `${colors[0]}10`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [type]);

  return (
    <motion.canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default BackgroundAnimation;
