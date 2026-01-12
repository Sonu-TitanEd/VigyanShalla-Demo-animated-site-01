import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';

// Import instructor images
import instructor1 from '@/assets/instructor-1.jpg';
import instructor2 from '@/assets/instructor-2.jpg';
import instructor3 from '@/assets/instructor-3.jpg';
import instructor4 from '@/assets/instructor-4.jpg';
import instructor5 from '@/assets/instructor-5.jpg';
import instructor6 from '@/assets/instructor-6.jpg';

const experts = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Web Development',
    courses: 15,
    students: 25000,
    image: instructor1,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Data Science',
    courses: 12,
    students: 18000,
    image: instructor2,
  },
  {
    id: 3,
    name: 'Mike Chen',
    role: 'UI/UX Design',
    courses: 8,
    students: 12000,
    image: instructor3,
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Digital Marketing',
    courses: 10,
    students: 15000,
    image: instructor4,
  },
  {
    id: 5,
    name: 'Robert Williams',
    role: 'Finance & Trading',
    courses: 7,
    students: 9500,
    image: instructor5,
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    role: 'Mobile Development',
    courses: 6,
    students: 7800,
    image: instructor6,
  },
];

const Experts = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-4"
          >
            Expert Instructors
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Meet Our <span className="text-primary">Expert</span> Instructors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            Learn from industry leaders with years of real-world experience. Our instructors are passionate about sharing their knowledge.
          </motion.p>
        </div>

        {/* Experts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {experts.map((expert) => (
            <motion.div
              key={expert.id}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative bg-card rounded-3xl overflow-hidden shadow-card"
              >
                {/* Image Container - Egg Shape */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-x-8 top-8 bottom-0">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-coral-light/30 rounded-t-[100px] rounded-b-[40px] overflow-hidden relative">
                      {/* Expert Image */}
                      <img 
                        src={expert.image} 
                        alt={expert.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-foreground/60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href="#"
                          className="w-10 h-10 rounded-full bg-card flex items-center justify-center"
                        >
                          <Linkedin className="w-5 h-5 text-primary" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href="#"
                          className="w-10 h-10 rounded-full bg-card flex items-center justify-center"
                        >
                          <Twitter className="w-5 h-5 text-primary" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href="#"
                          className="w-10 h-10 rounded-full bg-card flex items-center justify-center"
                        >
                          <Mail className="w-5 h-5 text-primary" />
                        </motion.a>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-4 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {expert.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{expert.role}</p>
                  
                  <div className="flex justify-center gap-6 text-sm text-muted-foreground">
                    <div>
                      <span className="font-semibold text-foreground">{expert.courses}</span> Courses
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">{(expert.students / 1000).toFixed(0)}K</span> Students
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary"
            >
              View All Instructors
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Experts;
