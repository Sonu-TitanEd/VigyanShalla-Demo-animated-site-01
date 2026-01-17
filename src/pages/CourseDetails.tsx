import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  Star, 
  Clock, 
  Users, 
  BookOpen, 
  Award, 
  Play, 
  ChevronDown, 
  ChevronUp,
  Phone,
  Mail,
  CheckCircle,
  Globe,
  FileText
} from 'lucide-react';

const courseData = {
  id: 1,
  title: 'Complete Web Development Bootcamp 2024',
  description: 'Master web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, and more in this comprehensive bootcamp designed for beginners and intermediate developers.',
  price: 99.99,
  originalPrice: 199.99,
  rating: 4.9,
  reviewsCount: 2834,
  students: 15420,
  duration: '42 hours',
  lectures: 312,
  level: 'All Levels',
  language: 'English',
  lastUpdated: 'January 2024',
  instructor: {
    name: 'John Smith',
    title: 'Senior Software Engineer',
    rating: 4.9,
    reviews: 8500,
    students: 45000,
    courses: 12,
    bio: 'John is a senior software engineer with over 10 years of experience in web development. He has worked at top tech companies and is passionate about teaching.',
  },
  highlights: [
    'Build 25+ real-world projects',
    'Learn modern JavaScript (ES6+)',
    'Master React and Node.js',
    'Deploy applications to the cloud',
    'Lifetime access to course materials',
    'Certificate of completion',
  ],
  curriculum: [
    {
      title: 'Getting Started with Web Development',
      lectures: 12,
      duration: '1h 30m',
      lessons: [
        'Introduction to the Course',
        'Setting Up Your Development Environment',
        'Understanding How the Web Works',
        'Your First HTML Page',
      ],
    },
    {
      title: 'HTML Fundamentals',
      lectures: 24,
      duration: '3h 45m',
      lessons: [
        'HTML Document Structure',
        'Text Elements and Formatting',
        'Links and Navigation',
        'Images and Media',
      ],
    },
    {
      title: 'CSS Styling and Layouts',
      lectures: 36,
      duration: '5h 20m',
      lessons: [
        'CSS Selectors and Properties',
        'The Box Model',
        'Flexbox Layout',
        'CSS Grid System',
      ],
    },
    {
      title: 'JavaScript Programming',
      lectures: 48,
      duration: '8h 15m',
      lessons: [
        'Variables and Data Types',
        'Functions and Scope',
        'DOM Manipulation',
        'Event Handling',
      ],
    },
    {
      title: 'React Framework',
      lectures: 56,
      duration: '10h 30m',
      lessons: [
        'Introduction to React',
        'Components and Props',
        'State and Lifecycle',
        'Hooks in Depth',
      ],
    },
  ],
  reviews: [
    {
      name: 'Alex Thompson',
      rating: 5,
      date: 'December 2023',
      comment: 'This course completely transformed my career. The instructor explains complex concepts in a simple way.',
    },
    {
      name: 'Maria Garcia',
      rating: 5,
      date: 'November 2023',
      comment: 'Best web development course I\'ve ever taken. The projects are practical and industry-relevant.',
    },
    {
      name: 'James Wilson',
      rating: 4,
      date: 'October 2023',
      comment: 'Great content and well-structured curriculum. Would recommend to anyone starting out.',
    },
  ],
};

const CourseDetails = () => {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);

  const toggleModule = (index: number) => {
    setExpandedModules((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const sections = ['Overview', 'Curriculum', 'Instructor', 'Reviews', 'Help'];

  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* Banner */}
      <section className="pt-32 pb-16 bg-hero-bg">
        <div className="container-custom ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link to="/courses" className="hover:text-foreground transition-colors">Courses</Link>
              <span>/</span>
              <span className="text-foreground">{courseData.title}</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
                  Bestseller
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {courseData.title}
                </h1>
                <p className="text-muted-foreground mb-6">{courseData.description}</p>
                
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className="font-semibold text-foreground">{courseData.rating}</span>
                    <span>({courseData.reviewsCount.toLocaleString()} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{courseData.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{courseData.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Section Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-2 sticky top-24 z-10 bg-background py-4"
              >
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section.toLowerCase())}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      activeSection === section.toLowerCase()
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-primary/10'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </motion.div>

              {/* Overview Section */}
              {activeSection === 'overview' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-8"
                >
                  <div className="bg-card rounded-2xl p-6 shadow-card">
                    <h2 className="text-xl font-bold text-foreground mb-4">What You'll Learn</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {courseData.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-card rounded-2xl p-6 shadow-card">
                    <h2 className="text-xl font-bold text-foreground mb-4">Course Info</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center p-4 bg-muted/50 rounded-xl">
                        <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="font-bold text-foreground">{courseData.lectures}</div>
                        <div className="text-sm text-muted-foreground">Lectures</div>
                      </div>
                      <div className="text-center p-4 bg-muted/50 rounded-xl">
                        <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="font-bold text-foreground">{courseData.duration}</div>
                        <div className="text-sm text-muted-foreground">Duration</div>
                      </div>
                      <div className="text-center p-4 bg-muted/50 rounded-xl">
                        <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="font-bold text-foreground">{courseData.level}</div>
                        <div className="text-sm text-muted-foreground">Level</div>
                      </div>
                      <div className="text-center p-4 bg-muted/50 rounded-xl">
                        <Globe className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="font-bold text-foreground">{courseData.language}</div>
                        <div className="text-sm text-muted-foreground">Language</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Curriculum Section */}
              {activeSection === 'curriculum' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-card rounded-2xl shadow-card overflow-hidden"
                >
                  <div className="p-6 border-b border-border">
                    <h2 className="text-xl font-bold text-foreground">Course Curriculum</h2>
                    <p className="text-muted-foreground">{courseData.curriculum.length} modules • {courseData.lectures} lectures • {courseData.duration} total</p>
                  </div>
                  <div className="divide-y divide-border">
                    {courseData.curriculum.map((module, index) => (
                      <div key={index}>
                        <button
                          onClick={() => toggleModule(index)}
                          className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                              <span className="font-bold text-primary">{index + 1}</span>
                            </div>
                            <div className="text-left">
                              <h3 className="font-semibold text-foreground">{module.title}</h3>
                              <p className="text-sm text-muted-foreground">{module.lectures} lectures • {module.duration}</p>
                            </div>
                          </div>
                          {expandedModules.includes(index) ? (
                            <ChevronUp className="w-5 h-5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          )}
                        </button>
                        {expandedModules.includes(index) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-muted/30 px-4 pb-4"
                          >
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div
                                key={lessonIndex}
                                className="flex items-center gap-3 p-3 hover:bg-muted rounded-lg transition-colors"
                              >
                                <Play className="w-4 h-4 text-primary" />
                                <span className="text-sm text-muted-foreground">{lesson}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Instructor Section */}
              {activeSection === 'instructor' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-card rounded-2xl p-6 shadow-card"
                >
                  <h2 className="text-xl font-bold text-foreground mb-6">About the Instructor</h2>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/30 to-coral-light/50 flex items-center justify-center flex-shrink-0">
                      <span className="text-4xl font-bold text-primary">
                        {courseData.instructor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground">{courseData.instructor.name}</h3>
                      <p className="text-primary font-medium mb-4">{courseData.instructor.title}</p>
                      <div className="flex flex-wrap gap-6 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                          <span>{courseData.instructor.rating} Rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{(courseData.instructor.students / 1000).toFixed(0)}K Students</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          <span>{courseData.instructor.courses} Courses</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{courseData.instructor.bio}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Reviews Section */}
              {activeSection === 'reviews' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="bg-card rounded-2xl p-6 shadow-card">
                    <h2 className="text-xl font-bold text-foreground mb-6">Student Reviews</h2>
                    <div className="flex items-center gap-8 mb-8">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-primary">{courseData.rating}</div>
                        <div className="flex gap-1 justify-center my-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                        <div className="text-sm text-muted-foreground">{courseData.reviewsCount.toLocaleString()} reviews</div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {courseData.reviews.map((review, index) => (
                        <div key={index} className="border-b border-border pb-6 last:border-0">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="font-bold text-primary">{review.name.charAt(0)}</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{review.name}</h4>
                              <div className="flex items-center gap-2">
                                <div className="flex gap-0.5">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Help Section */}
              {activeSection === 'help' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-card rounded-2xl p-6 shadow-card"
                >
                  <h2 className="text-xl font-bold text-foreground mb-6">Need Help?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/50 rounded-xl">
                      <Phone className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">Hotline Support</h3>
                      <p className="text-muted-foreground mb-2">Available 24/7 for enrolled students</p>
                      <a href="tel:+1234567890" className="text-primary font-medium hover:underline">
                        +1 (234) 567-890
                      </a>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-xl">
                      <Mail className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                      <p className="text-muted-foreground mb-2">Get help via email within 24 hours</p>
                      <a href="mailto:support@VigyanShaala.com" className="text-primary font-medium hover:underline">
                        support@VigyanShaala.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Sidebar - Sticky Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="sticky top-24 bg-card rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Course Preview */}
                <div className="relative h-48 bg-gradient-to-br from-primary/30 to-coral-light/40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg"
                    >
                      <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                    </motion.button>
                  </div>
                </div>

                <div className="p-6">
                  {/* Price */}
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-3xl font-bold text-primary">${courseData.price}</span>
                    <span className="text-lg text-muted-foreground line-through">${courseData.originalPrice}</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                      {Math.round((1 - courseData.price / courseData.originalPrice) * 100)}% off
                    </span>
                  </div>

                  {/* Buy Buttons */}
                  <div className="space-y-3 mb-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-primary py-4 text-lg"
                    >
                      Enroll Now
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-secondary py-4"
                    >
                      Add to Cart
                    </motion.button>
                  </div>

                  <p className="text-center text-sm text-muted-foreground mb-6">
                    30-day money-back guarantee
                  </p>

                  {/* Course Includes */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">This course includes:</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <Play className="w-4 h-4 text-primary" />
                        <span>{courseData.duration} on-demand video</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-primary" />
                        <span>{courseData.lectures} downloadable resources</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-4 h-4 text-primary" />
                        <span>Full lifetime access</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-4 h-4 text-primary" />
                        <span>Certificate of completion</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetails;
