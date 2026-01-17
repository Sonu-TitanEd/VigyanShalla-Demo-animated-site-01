import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

// Import course images
import courseWebDev from '@/assets/course-web-dev.jpg';
import courseDataScience from '@/assets/course-data-science.jpg';
import courseUiDesign from '@/assets/course-ui-design.jpg';
import courseMarketing from '@/assets/course-marketing.jpg';
import courseBusiness from '@/assets/course-business.jpg';
import courseMobile from '@/assets/course-mobile.jpg';

// Import instructor images
import instructor1 from '@/assets/instructor-1.jpg';
import instructor2 from '@/assets/instructor-2.jpg';
import instructor3 from '@/assets/instructor-3.jpg';
import instructor4 from '@/assets/instructor-4.jpg';
import instructor5 from '@/assets/instructor-5.jpg';
import instructor6 from '@/assets/instructor-6.jpg';

const courses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive course.',
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviews: 2834,
    students: 15420,
    duration: '42 hours',
    instructor: 'John Smith',
    instructorImage: instructor1,
    category: 'Development',
    image: courseWebDev,
  },
  {
    id: 2,
    title: 'Data Science & Machine Learning',
    description: 'Master Python, TensorFlow, and machine learning algorithms for real-world applications.',
    price: 129.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviews: 1956,
    students: 12300,
    duration: '38 hours',
    instructor: 'Sarah Johnson',
    instructorImage: instructor2,
    category: 'Data Science',
    image: courseDataScience,
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    description: 'Create stunning user interfaces and experiences using Figma and design principles.',
    price: 79.99,
    originalPrice: 159.99,
    rating: 4.9,
    reviews: 1423,
    students: 8900,
    duration: '28 hours',
    instructor: 'Mike Chen',
    instructorImage: instructor3,
    category: 'Design',
    image: courseUiDesign,
  },
  {
    id: 4,
    title: 'Digital Marketing Complete Guide',
    description: 'SEO, social media, content marketing, and paid advertising strategies.',
    price: 89.99,
    originalPrice: 179.99,
    rating: 4.7,
    reviews: 2156,
    students: 11200,
    duration: '32 hours',
    instructor: 'Emily Davis',
    instructorImage: instructor4,
    category: 'Marketing',
    image: courseMarketing,
  },
  {
    id: 5,
    title: 'Business Strategy & Management',
    description: 'Learn leadership, strategic planning, and management skills for business growth.',
    price: 109.99,
    originalPrice: 219.99,
    rating: 4.8,
    reviews: 1678,
    students: 9500,
    duration: '25 hours',
    instructor: 'Robert Williams',
    instructorImage: instructor5,
    category: 'Business',
    image: courseBusiness,
  },
  {
    id: 6,
    title: 'Mobile App Development',
    description: 'Build cross-platform mobile apps with React Native and Flutter.',
    price: 69.99,
    originalPrice: 139.99,
    rating: 4.9,
    reviews: 1234,
    students: 7800,
    duration: '22 hours',
    instructor: 'Lisa Anderson',
    instructorImage: instructor6,
    category: 'Development',
    image: courseMobile,
  },
];

const CoursesSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-coral-light/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Popular <span className="text-primary">Courses</span>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Explore our top-rated courses and start your learning journey today with expert instructors.
            </p>
          </motion.div>
        </div>

        {/* Courses Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="flex-shrink-0 w-[340px] bg-card rounded-2xl shadow-card overflow-hidden group"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-foreground/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Link to={`/courses/${course.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-primary text-primary-foreground rounded-xl font-medium"
                    >
                      View Course
                    </motion.button>
                  </Link>
                </motion.div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  {course.category}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <Link to={`/courses/${course.id}`}>
                  <h3 className="font-bold text-lg text-foreground hover:text-primary transition-colors line-clamp-2 mb-2">
                    {course.title}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="font-medium text-foreground">{course.rating}</span>
                    <span>({course.reviews.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img 
                      src={course.instructorImage} 
                      alt={course.instructor}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {course.instructor}
                  </span>
                  <div className="flex items-center gap-1 ml-auto text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{(course.students / 1000).toFixed(1)}K</span>
                  </div>
                </div>

                {/* Price & Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">
                      ${course.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${course.originalPrice}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      {/* next prev button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-16"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-xl bg-card shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-xl bg-card shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Explore All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/courses">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary"
            >
              Explore All Courses
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSlider;
