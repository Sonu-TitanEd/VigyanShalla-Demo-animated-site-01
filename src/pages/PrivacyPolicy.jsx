import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
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
              <span className="text-primary">Privacy Policy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              VigyanShaala values your privacy and is committed to protecting your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl mx-auto space-y-8 text-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect personal information you provide when creating an account, enrolling in courses, or contacting support. This may include your name, email address, phone number, and payment details. We also collect non-personal information such as device type, browser, and usage data to improve your experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information is used to provide and improve our services, process payments, communicate updates, and personalize your learning experience. We may also use data for analytics and research purposes to enhance our platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Data Storage & Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              All personal data is securely stored using encryption and access controls. Only authorized personnel have access to sensitive information. We regularly update our security practices to comply with industry standards and legal requirements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, update, or delete your personal data. You may also opt out of certain communications and request information regarding how your data is processed. Contact our support team for any privacy-related inquiries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Compliance</h2>
            <p className="text-muted-foreground leading-relaxed">
              VigyanShaala complies with all applicable privacy laws and regulations, including GDPR and local data protection laws. We continuously review and update our policies to ensure full compliance and transparency.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
