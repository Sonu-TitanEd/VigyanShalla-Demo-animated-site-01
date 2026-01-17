import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Import instructor images as testimonial avatars
import instructor1 from '@/assets/instructor-1.jpg';
import instructor2 from '@/assets/instructor-2.jpg';
import instructor3 from '@/assets/instructor-3.jpg';
import instructor4 from '@/assets/instructor-4.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Alex Thompson',
    role: 'Software Developer',
    content: 'VigyanShaala transformed my career. The web development course was incredibly comprehensive and the instructors were always available to help. I landed my dream job within 3 months!',
    rating: 5,
    image: instructor1,
  },
  {
    id: 2,
    name: 'Maria Garcia',
    role: 'Data Analyst',
    content: 'The data science program exceeded my expectations. The hands-on projects and real-world datasets prepared me for actual industry challenges. Highly recommended!',
    rating: 5,
    image: instructor2,
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'UX Designer',
    content: 'As a self-taught designer, the UI/UX course filled all the gaps in my knowledge. The community support is amazing and the course materials are top-notch.',
    rating: 5,
    image: instructor3,
  },
  {
    id: 4,
    name: 'Sophie Lee',
    role: 'Marketing Manager',
    content: 'The digital marketing course helped me understand modern marketing strategies. I\'ve already implemented several tactics that increased our company\'s ROI by 40%.',
    rating: 5,
    image: instructor4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What <span className="text-primary">Clients</span> Have to Say About Us
          </h2>
          <p className="text-muted-foreground">
            Hear from our students who have transformed their careers through our courses
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <Quote className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6 mt-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="w-5 h-5 text-amber-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </motion.svg>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
