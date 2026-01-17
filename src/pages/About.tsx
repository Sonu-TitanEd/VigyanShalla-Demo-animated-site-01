import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Target, Eye, Award, Users, BookOpen, Globe, Linkedin, Twitter, Mail } from 'lucide-react';

const stats = [
  { value: '25K+', label: 'Students Enrolled', icon: Users },
  { value: '500+', label: 'Online Courses', icon: BookOpen },
  { value: '50+', label: 'Expert Instructors', icon: Award },
  { value: '150+', label: 'Countries Reached', icon: Globe },
];

const specialties = [
  {
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of real-world experience.',
    icon: Award,
  },
  {
    title: 'Flexible Learning',
    description: 'Study at your own pace with lifetime access to course materials.',
    icon: BookOpen,
  },
  {
    title: 'Global Community',
    description: 'Connect with learners from around the world and expand your network.',
    icon: Globe,
  },
  {
    title: 'Career Support',
    description: 'Get guidance and resources to advance your professional journey.',
    icon: Target,
  },
];

const team = [
  { name: 'John Smith', role: 'Web Development', courses: 15, students: 25000 },
  { name: 'Sarah Johnson', role: 'Data Science', courses: 12, students: 18000 },
  { name: 'Mike Chen', role: 'UI/UX Design', courses: 8, students: 12000 },
  { name: 'Emily Davis', role: 'Digital Marketing', courses: 10, students: 15000 },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
              <span className="text-primary">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">VigyanShaala</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Empowering learners worldwide with quality education and expert-led courses since 2018.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-coral-light/30 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <Target className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-card rounded-2xl shadow-lg p-4"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                We're on a Mission to Transform
                <span className="text-primary"> Online Education</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                VigyanShaala was founded with a simple yet powerful vision: to make quality education accessible to everyone, everywhere. We believe that learning should be flexible, engaging, and tailored to individual needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our platform brings together world-class instructors and passionate learners, creating a vibrant community where knowledge is shared and skills are developed. With courses spanning technology, business, creative arts, and more, we're building the future of education.
              </p>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Our Mission</h4>
                    <p className="text-sm text-muted-foreground">Democratize education</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Our Vision</h4>
                    <p className="text-sm text-muted-foreground">Global learning community</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-foreground">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center"
                >
                  <stat.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-card mb-2">{stat.value}</div>
                <div className="text-card/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Makes Us <span className="text-primary">Special</span>
            </h2>
            <p className="text-muted-foreground">
              We go beyond traditional education to provide a transformative learning experience.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-card rounded-2xl p-6 shadow-card text-center"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center"
                >
                  <specialty.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-lg font-bold text-foreground mb-2">{specialty.title}</h3>
                <p className="text-muted-foreground text-sm">{specialty.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="text-primary">Expert</span> Team
            </h2>
            <p className="text-muted-foreground">
              Learn from the best instructors with years of industry experience.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-card">
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-coral-light/30">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-card flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-foreground/60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="#"
                        className="w-10 h-10 rounded-full bg-card flex items-center justify-center"
                      >
                        <Linkedin className="w-5 h-5 text-primary" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="#"
                        className="w-10 h-10 rounded-full bg-card flex items-center justify-center"
                      >
                        <Twitter className="w-5 h-5 text-primary" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href="#"
                        className="w-10 h-10 rounded-full bg-card flex items-center justify-center"
                      >
                        <Mail className="w-5 h-5 text-primary" />
                      </motion.a>
                    </motion.div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                    <div className="flex justify-center gap-4 text-xs text-muted-foreground">
                      <span><strong className="text-foreground">{member.courses}</strong> Courses</span>
                      <span><strong className="text-foreground">{(member.students / 1000).toFixed(0)}K</strong> Students</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
