import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Search, Filter, Star, Clock, Users, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

const allCourses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and more.',
    price: 99.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviews: 2834,
    students: 15420,
    duration: '42 hours',
    instructor: 'John Smith',
    category: 'Development',
  },
  {
    id: 2,
    title: 'Data Science & Machine Learning',
    description: 'Master Python, TensorFlow, and ML algorithms.',
    price: 129.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviews: 1956,
    students: 12300,
    duration: '38 hours',
    instructor: 'Sarah Johnson',
    category: 'Data Science',
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    description: 'Create stunning user interfaces using Figma.',
    price: 79.99,
    originalPrice: 159.99,
    rating: 4.9,
    reviews: 1423,
    students: 8900,
    duration: '28 hours',
    instructor: 'Mike Chen',
    category: 'Design',
  },
  {
    id: 4,
    title: 'Digital Marketing Complete Guide',
    description: 'SEO, social media, and paid advertising strategies.',
    price: 89.99,
    originalPrice: 179.99,
    rating: 4.7,
    reviews: 2156,
    students: 11200,
    duration: '32 hours',
    instructor: 'Emily Davis',
    category: 'Marketing',
  },
  {
    id: 5,
    title: 'Financial Analysis & Investing',
    description: 'Learn stock market analysis and investment strategies.',
    price: 109.99,
    originalPrice: 219.99,
    rating: 4.8,
    reviews: 1678,
    students: 9500,
    duration: '25 hours',
    instructor: 'Robert Williams',
    category: 'Finance',
  },
  {
    id: 6,
    title: 'Photography & Video Production',
    description: 'Master camera techniques and content creation.',
    price: 69.99,
    originalPrice: 139.99,
    rating: 4.9,
    reviews: 1234,
    students: 7800,
    duration: '22 hours',
    instructor: 'Lisa Anderson',
    category: 'Creative',
  },
  {
    id: 7,
    title: 'Python Programming Fundamentals',
    description: 'Start your programming journey with Python.',
    price: 59.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviews: 3421,
    students: 18000,
    duration: '20 hours',
    instructor: 'David Brown',
    category: 'Development',
  },
  {
    id: 8,
    title: 'Business Strategy & Leadership',
    description: 'Develop essential leadership and strategy skills.',
    price: 119.99,
    originalPrice: 239.99,
    rating: 4.7,
    reviews: 892,
    students: 5600,
    duration: '18 hours',
    instructor: 'Jennifer White',
    category: 'Business',
  },
  {
    id: 9,
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile apps.',
    price: 109.99,
    originalPrice: 219.99,
    rating: 4.8,
    reviews: 1567,
    students: 9200,
    duration: '35 hours',
    instructor: 'Alex Turner',
    category: 'Development',
  },
];

const categories = ['All', 'Development', 'Data Science', 'Design', 'Marketing', 'Finance', 'Business', 'Creative'];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const displayedCourses = filteredCourses.slice(startIndex, startIndex + coursesPerPage);

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      
      {/* Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-hero-bg to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-primary">Courses</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Our <span className="text-primary">Courses</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover a world of knowledge with our expert-led courses designed to help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Filter */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-xl">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-4 py-2 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 5).map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-primary/10'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {displayedCourses.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-card rounded-2xl shadow-card overflow-hidden group"
                  >
                    {/* Course Image */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-coral-light/30 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-2xl bg-card/80 backdrop-blur flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">
                            {course.category.charAt(0)}
                          </span>
                        </div>
                      </div>
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
                      <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                        {course.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <Link to={`/courses/${course.id}`}>
                        <h3 className="font-bold text-lg text-foreground hover:text-primary transition-colors line-clamp-2 mb-2">
                          {course.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {course.description}
                      </p>

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

                      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-medium text-primary">
                            {course.instructor.charAt(0)}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {course.instructor}
                        </span>
                        <div className="flex items-center gap-1 ml-auto text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>{(course.students / 1000).toFixed(1)}K</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-primary">${course.price}</span>
                          <span className="text-sm text-muted-foreground line-through">${course.originalPrice}</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <ShoppingCart className="w-5 h-5 text-primary" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-12">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Prev
                  </motion.button>

                  <div className="flex gap-2">
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-10 h-10 rounded-xl font-medium transition-colors ${
                          currentPage === i + 1
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted hover:bg-primary/10'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
