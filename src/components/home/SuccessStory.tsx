import { motion } from 'framer-motion';
import { Play, Award, BookOpen, Users } from 'lucide-react';

const SuccessStory = () => {
  const stats = [
    { icon: Users, value: '25,000+', label: 'Active Students' },
    { icon: BookOpen, value: '500+', label: 'Online Courses' },
    { icon: Award, value: '50+', label: 'Expert Instructors' },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm"
              >
                Our Success Story
              </motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Transforming Lives Through
                <span className="text-primary"> Quality Education</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since our founding, we've helped thousands of students achieve their dreams. Our platform combines cutting-edge technology with expert instruction to deliver an unparalleled learning experience.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-coral-light/30 shadow-xl">
              {/* Video Thumbnail Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative cursor-pointer"
                  >
                    {/* Pulsing Rings */}
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 -m-4 rounded-full bg-primary/30"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="absolute inset-0 -m-8 rounded-full bg-primary/20"
                    />
                    
                    {/* Play Button */}
                    <div className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </motion.div>
                  <p className="mt-4 text-foreground font-medium">Watch Our Story</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-card rounded-2xl shadow-lg p-4 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 w-28 h-28 bg-card rounded-2xl shadow-lg p-4 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.9</div>
                  <div className="text-xs text-muted-foreground">Average Rating</div>
                  <div className="flex gap-0.5 justify-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
