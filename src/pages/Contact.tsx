import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  MessageSquare, 
  Phone, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Briefcase,
  Heart,
  Star,
  Coffee,
  Zap,
  Target,
  Globe,
  Linkedin,
  Github,
  MapPin
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import BackgroundAnimation from '@/components/ui/BackgroundAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactType: 'general',
    budget: '',
    timeline: '',
    feedback: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate email sending (replace with actual EmailJS or backend service)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would integrate with EmailJS or your preferred email service
      // For now, we'll simulate success
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        contactType: 'general',
        budget: '',
        timeline: '',
        feedback: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactTypes = [
    { value: 'general', label: 'General Inquiry', icon: MessageSquare },
    { value: 'hire', label: 'Hire Me', icon: Briefcase },
    { value: 'collaboration', label: 'Collaboration', icon: Heart },
    { value: 'feedback', label: 'Feedback', icon: Star },
    { value: 'coffee', label: 'Coffee Chat', icon: Coffee }
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'To be discussed'
  ];

  const timelineOptions = [
    'ASAP',
    '1-2 weeks',
    '1-2 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  return (
    <Layout>
      <BackgroundAnimation type="contact" />
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate? Let's discuss your next project, share feedback, or just have a coffee chat!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="card-enhanced rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-white">vamshikuna905@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-white">+91 9494933678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-white">Rayadurgam, Andhra Pradesh</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-purple-500/20">
                  <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                  <div className="flex gap-3">
                    <a 
                      href="https://www.linkedin.com/in/kunavamshi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-blue-400" />
                    </a>
                    <a 
                      href="https://www.github.com/kunavamshi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="card-enhanced rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
                
                                 <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-3">
                      What can I help you with?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {contactTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <label
                            key={type.value}
                            className={`flex flex-col items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                              formData.contactType === type.value
                                ? 'border-purple-500 bg-purple-500/20'
                                : 'border-white/20 hover:border-purple-500/50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="contactType"
                              value={type.value}
                              checked={formData.contactType === type.value}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <Icon className={`w-5 h-5 mb-2 ${
                              formData.contactType === type.value ? 'text-purple-400' : 'text-white'
                            }`} />
                            <span className={`text-xs text-center ${
                              formData.contactType === type.value ? 'text-purple-400' : 'text-white'
                            }`}>
                              {type.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>

                  {/* Project Details (for hire/collaboration) */}
                  {(formData.contactType === 'hire' || formData.contactType === 'collaboration') && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                        >
                          <option value="">Select timeline</option>
                          {timelineOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Feedback (for feedback type) */}
                  {formData.contactType === 'feedback' && (
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Feedback Type
                      </label>
                      <select
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="">Select feedback type</option>
                        <option value="portfolio">Portfolio Feedback</option>
                        <option value="suggestion">Suggestion</option>
                        <option value="bug">Bug Report</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  )}

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="Tell me more about your inquiry, project, or feedback..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all ${
                        isSubmitting
                          ? 'bg-gray-600 cursor-not-allowed'
                          : 'bg-purple-600 hover:bg-purple-700 transform hover:scale-105'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>

                    {submitStatus === 'success' && (
                      <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle className="w-5 h-5" />
                        <span>Message sent successfully!</span>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="flex items-center gap-2 text-red-400">
                        <AlertCircle className="w-5 h-5" />
                        <span>Failed to send message. Please try again.</span>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Additional Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <div className="card-enhanced rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Other Ways to Connect</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Hire Me</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Looking for a skilled developer for your project?
                  </p>
                  <button 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, contactType: 'hire' }));
                      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                  >
                    Get Quote
                  </button>
                </div>

                <div className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Collaborate</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Want to work together on something amazing?
                  </p>
                  <button 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, contactType: 'collaboration' }));
                      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    Let's Talk
                  </button>
                </div>

                <div className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <Coffee className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Coffee Chat</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Just want to chat about tech and life?
                  </p>
                  <button 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, contactType: 'coffee' }));
                      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors"
                  >
                    Schedule Chat
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;