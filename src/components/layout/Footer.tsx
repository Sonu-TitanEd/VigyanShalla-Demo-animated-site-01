import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import Logo from "./VS-logo-white.jpg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const exploreLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src={Logo}
                alt="VigyanShaala Logo"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-background/70 mb-6 leading-relaxed">
              Empowering learners worldwide with quality education. Join our community and unlock your potential with expert-led courses.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Get In Touch */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-background/70">123 Learning Street, Education City, EC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@VigyanShaala.com" className="text-background/70 hover:text-primary transition-colors">
                  info@VigyanShaala.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-background/70 hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Explore Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Office Hours */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6">Office Hours</h3>
            <ul className="space-y-3 text-background/70">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-background/5 border border-background/10">
              <p className="text-sm text-background/60">
                Need urgent help? Our support team is available 24/7 for enrolled students.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} VigyanShaala. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center hover:brightness-110 transition-all"
          >
            <ArrowUp className="w-5 h-5 text-primary-foreground" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
