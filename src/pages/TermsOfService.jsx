import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const TermsOfService = () => {
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
              <span className="text-primary">Terms of Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These terms outline the rules and responsibilities when using VigyanShaala’s LMS platform and its services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl mx-auto space-y-8 text-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using VigyanShaala, you agree to comply with these Terms of Service. If you do not agree, you must not use our platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              Users are responsible for maintaining the confidentiality of their account credentials, providing accurate information, and using the platform in accordance with applicable laws. Any unauthorized use may result in termination of access.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Platform Usage</h2>
            <p className="text-muted-foreground leading-relaxed">
              VigyanShaala provides courses, resources, and community features for educational purposes. Content may not be copied, redistributed, or used for commercial purposes without explicit permission.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Payment & Refunds</h2>
            <p className="text-muted-foreground leading-relaxed">
              Paid courses and services are subject to VigyanShaala’s pricing and refund policies. All payments must be completed through our authorized payment methods. Refunds, if applicable, will follow the stated policy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Modifications & Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              VigyanShaala reserves the right to modify the platform, update courses, or terminate accounts for violations of these terms. Users will be notified of significant changes when possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              VigyanShaala is not liable for any direct, indirect, or consequential damages arising from the use of the platform. Users access the platform at their own risk and are responsible for their learning outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
