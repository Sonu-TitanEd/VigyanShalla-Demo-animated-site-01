import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, BookOpen, Users } from 'lucide-react';

// Import hero images
import heroStudent1 from '@/assets/hero-student-1.png';
import heroStudent2 from '@/assets/hero-student-2.png';
import heroStudent3 from '@/assets/hero-student-3.png';

const slides = [
  {
    id: 1,
    title: "The Best Platform",
    subtitle: "Enroll in Your Special Course",
    description: "Our mission is to help people find the best courses online and learn with experts anywhere, anytime.",
    stats: [
      { icon: Users, value: "25K+", label: "Students" },
      { icon: BookOpen, value: "500+", label: "Courses" },
    ],
    imagePosition: 'right',
    image: heroStudent1,
  },
  {
    id: 2,
    title: "Learn From Experts",
    subtitle: "Advance Your Career Today",
    description: "Join thousands of learners who have transformed their careers with our expert-led courses and hands-on projects.",
    stats: [
      { icon: Sparkles, value: "98%", label: "Success Rate" },
      { icon: Users, value: "150+", label: "Instructors" },
    ],
    imagePosition: 'left',
    image: heroStudent2,
  },
  // {
  //   id: 3,
  //   title: "Unlock Your Potential",
  //   subtitle: "Start Your Learning Journey",
  //   description: "Discover a world of knowledge with personalized learning paths designed to help you achieve your goals.",
  //   stats: [
  //     { icon: BookOpen, value: "50+", label: "Categories" },
  //     { icon: Sparkles, value: "4.9", label: "Rating" },
  //   ],
  //   imagePosition: 'center',
  //   image: heroStudent3,
  // },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen bg-hero-bg overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-coral-light/30 rounded-full blur-3xl"
        />
        
        {/* Floating Shapes */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[10%] w-16 h-16 bg-primary/30 rounded-2xl rotate-45"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [45, 35, 45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-[15%] w-12 h-12 bg-accent-foreground/20 rounded-xl"
        />
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-[5%] w-8 h-8 bg-coral-light rounded-full"
        />
        
        {/* Arrow Decorations */}
        <svg className="absolute top-1/4 right-[20%] w-32 h-32 text-primary/10" viewBox="0 0 100 100">
          <motion.path
            d="M10,50 Q50,10 90,50 Q50,90 10,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh] ${
              slide.imagePosition === 'left' ? 'lg:grid-flow-dense' : ''
            }`}
          >
            {/* Text Content */}
            <div className={`space-y-8 ${slide.imagePosition === 'left' ? 'lg:col-start-2' : ''} ${slide.imagePosition === 'center' ? 'lg:col-span-2 text-center' : ''}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Welcome to VigyanShaala</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                {slide.title}
                <br />
                <span className="text-primary">{slide.subtitle}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-lg text-muted-foreground max-w-lg ${slide.imagePosition === 'center' ? 'mx-auto' : ''}`}
              >
                {slide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`flex flex-wrap gap-4 ${slide.imagePosition === 'center' ? 'justify-center' : ''}`}
              >
                <Link to="/courses">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Get Started
                  </motion.button>
                </Link>
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-secondary text-lg px-8 py-4"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`flex gap-8 pt-4 ${slide.imagePosition === 'center' ? 'justify-center' : ''}`}
              >
                {slide.stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Image */}
            {slide.imagePosition !== 'center' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: slide.imagePosition === 'left' ? -100 : 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className={`relative ${slide.imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''}`}
              >
                <div className="relative">
                  {/* Main Image Container */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <div className="aspect-square max-w-lg mx-auto relative">
                      <img 
                        src={slide.image} 
                        alt="Student learning" 
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </motion.div>
                  
                  {/* Floating Cards */}
                  <motion.div
                    animate={{ y: [-5, 5, -5], x: [-3, 3, -3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 bg-card shadow-lg rounded-2xl p-4 z-20"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-semibold text-sm">25K+ Students</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [5, -5, 5], x: [3, -3, 3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -left-4 bg-card shadow-lg rounded-2xl p-4 z-20"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-sm">Top Rated</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Center Image for slide 3 */}
            {slide.imagePosition === 'center' && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="lg:col-span-2 flex justify-center mt-8"
              >
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="max-w-2xl"
                >
                  <img 
                    src={slide.image} 
                    alt="Students collaborating" 
                    className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl"
                  />
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary w-8' : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
