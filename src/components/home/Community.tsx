import { motion } from 'framer-motion';
import { Heart, Users, Globe, Award } from 'lucide-react';

// Import instructor images for avatars
import instructor1 from '@/assets/instructor-1.jpg';
import instructor2 from '@/assets/instructor-2.jpg';
import instructor3 from '@/assets/instructor-3.jpg';
import instructor4 from '@/assets/instructor-4.jpg';
import instructor5 from '@/assets/instructor-5.jpg';

const avatars = [instructor1, instructor2, instructor3, instructor4, instructor5];

const Community = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with learners from over 150 countries',
    },
    {
      icon: Users,
      title: 'Study Groups',
      description: 'Join topic-based groups and learn together',
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Earn recognized certificates upon completion',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-coral-light/10 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 border-2 border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-60 h-60 border-2 border-primary/10 rounded-full"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm"
              >
                Join Our Community
              </motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Join the Biggest
                <br />
                <span className="text-primary">Community</span> of Learning
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Be part of a thriving community where knowledge meets collaboration. Share insights, ask questions, and grow together with fellow learners and industry experts.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-card transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-card rounded-3xl shadow-xl p-8 md:p-12"
            >
              {/* Happy Students */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center"
                >
                  <Heart className="w-8 h-8 text-primary" fill="currentColor" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Happy Students</h3>
                  <p className="text-muted-foreground">Worldwide learners</p>
                </div>
              </div>

              {/* Overlapping Avatars */}
              <div className="flex items-center mb-6">
                <div className="flex -space-x-4">
                  {avatars.map((avatar, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -5, zIndex: 10 }}
                      className="w-14 h-14 rounded-full border-4 border-card overflow-hidden relative"
                      style={{ zIndex: 5 - i }}
                    >
                      <img 
                        src={avatar} 
                        alt={`Student ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="ml-4"
                >
                  <div className="text-3xl font-bold text-primary">25K+</div>
                  <div className="text-sm text-muted-foreground">Active Students</div>
                </motion.div>
              </div>

              {/* Additional Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div className="text-center p-4 rounded-xl bg-muted/50">
                  <div className="text-2xl font-bold text-foreground">150+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-muted/50">
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Courses</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 w-20 h-20 bg-primary/20 rounded-2xl -rotate-12"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-coral-light rounded-xl rotate-12"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;
