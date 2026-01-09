import { motion } from 'framer-motion';

const companies = [
  { name: 'Google', logo: '🔍' },
  { name: 'Microsoft', logo: '🪟' },
  { name: 'Amazon', logo: '📦' },
  { name: 'Apple', logo: '🍎' },
  { name: 'Meta', logo: '♾️' },
  { name: 'Netflix', logo: '🎬' },
  { name: 'Spotify', logo: '🎵' },
  { name: 'Adobe', logo: '🎨' },
  { name: 'Salesforce', logo: '☁️' },
  { name: 'Oracle', logo: '🔮' },
  { name: 'IBM', logo: '💻' },
  { name: 'Tesla', logo: '⚡' },
];

const TrustedCompanies = () => {
  return (
    <section className="py-16 bg-card overflow-hidden">
      <div className="container-custom mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Trusted by <span className="text-primary">4,000+</span> Companies
          </h2>
          <p className="text-muted-foreground mt-2">
            Leading organizations trust our platform for employee training
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Animation */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />
        
        <motion.div
          className="flex gap-12"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...companies, ...companies].map((company, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-background rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <span className="text-3xl">{company.logo}</span>
              <span className="text-lg font-semibold text-foreground whitespace-nowrap">
                {company.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
