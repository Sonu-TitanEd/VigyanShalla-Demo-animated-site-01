import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import Logo from "./VS-logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const navTextColor = isScrolled || !isHomePage ? 'text-foreground' : 'text-foreground';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-lg shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={Logo}
              alt="VigyanShaala Logo"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${navTextColor} hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : ''
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons / Profile */}
          <div className="hidden lg:flex items-center gap-3">
            {isLoggedIn ? (
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <span className={`font-medium ${navTextColor}`}>John Doe</span>
                <ChevronDown className={`w-4 h-4 ${navTextColor}`} />
              </motion.div>
            ) : (
              <>
                <Link to="/signin">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-nav bg-card text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Login
                  </motion.button>
                </Link>
                <Link to="/signup">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-nav bg-primary text-primary-foreground hover:brightness-110"
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${navTextColor}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute right-0 top-0 h-full w-80 bg-card shadow-xl p-6 pt-24"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-3 px-4 rounded-xl font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="border-t border-border my-4" />
                
                {!isLoggedIn && (
                  <div className="flex flex-col gap-3">
                    <Link to="/signin">
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        className="w-full btn-nav bg-card text-primary border-2 border-primary"
                      >
                        Login
                      </motion.button>
                    </Link>
                    <Link to="/signup">
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                        className="w-full btn-nav bg-primary text-primary-foreground"
                      >
                        Sign Up
                      </motion.button>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
