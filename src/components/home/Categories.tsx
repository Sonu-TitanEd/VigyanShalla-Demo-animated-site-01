import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Languages, 
  DollarSign, 
  PenTool, 
  Code, 
  Palette, 
  Briefcase, 
  TrendingUp 
} from 'lucide-react';

const categories = [
  { name: 'Data Science', icon: BarChart3, color: 'from-rose-500/20 to-orange-500/20' },
  { name: 'English', icon: Languages, color: 'from-amber-500/20 to-yellow-500/20' },
  { name: 'Finance', icon: DollarSign, color: 'from-emerald-500/20 to-teal-500/20' },
  { name: 'Content Writing', icon: PenTool, color: 'from-cyan-500/20 to-sky-500/20' },
  { name: 'Development', icon: Code, color: 'from-violet-500/20 to-purple-500/20' },
  { name: 'Art & Design', icon: Palette, color: 'from-pink-500/20 to-rose-500/20' },
  { name: 'Management', icon: Briefcase, color: 'from-indigo-500/20 to-blue-500/20' },
  { name: 'Business', icon: TrendingUp, color: 'from-orange-500/20 to-red-500/20' },
];

const Categories = () => {
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
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-80 h-80 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-60 h-60 border border-primary/10 rounded-full"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Explore Our
              <br />
              <span className="text-primary">Categories</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover a wide range of courses designed to help you achieve your professional and personal goals. From technology to creative arts, we have something for everyone.
            </p>
            <Link to="/courses">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                Explore Categories
              </motion.button>
            </Link>
          </motion.div>

          {/* Right - Categories Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="group cursor-pointer"
                >
                  <Link to="/courses">
                    <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${category.color} border border-border/50 transition-all duration-300 group-hover:shadow-lg group-hover:border-primary/30`}>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="w-14 h-14 rounded-xl bg-card shadow-sm flex items-center justify-center mb-4 group-hover:shadow-md transition-shadow"
                      >
                        <category.icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {Math.floor(Math.random() * 50) + 20}+ Courses
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
