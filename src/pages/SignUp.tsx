import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, Lock, Eye, EyeOff, ArrowRight, GraduationCap, Users } from 'lucide-react';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: '',
    agreeTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up:', formData);
  };

  return (
    <div className="min-h-screen font-poppins flex">
      {/* Left Side - Decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary/20 to-coral-light/30 items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center max-w-md"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 h-64 mx-auto mb-8 bg-gradient-to-br from-primary/40 to-coral-light/60 rounded-[3rem] flex items-center justify-center"
          >
            <div className="w-48 h-48 bg-card/80 backdrop-blur rounded-[2rem] flex items-center justify-center">
              <GraduationCap className="w-24 h-24 text-primary" />
            </div>
          </motion.div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Join Our Learning Community
          </h2>
          <p className="text-muted-foreground">
            Create your account and start exploring thousands of courses from expert instructors worldwide.
          </p>
        </motion.div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md py-8"
        >
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">L</span>
            </div>
            <span className="text-xl font-bold text-foreground">LearnHub</span>
          </Link>

          <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground mb-8">Join thousands of learners today</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Mobile Number <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Enter your mobile number"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">OTP verification required</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-10 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Confirm
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-10 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Confirm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                I am a <span className="text-primary">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <motion.label
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.role === 'student'
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={formData.role === 'student'}
                    onChange={handleChange}
                    required
                    className="sr-only"
                  />
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    formData.role === 'student' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-foreground">Student</span>
                </motion.label>
                <motion.label
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.role === 'mentor'
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="mentor"
                    checked={formData.role === 'mentor'}
                    onChange={handleChange}
                    required
                    className="sr-only"
                  />
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    formData.role === 'mentor' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-foreground">Mentor</span>
                </motion.label>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
              />
              <span className="text-sm text-muted-foreground">
                I agree to the{' '}
                <Link to="#" className="text-primary hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link to="#" className="text-primary hover:underline">Privacy Policy</Link>
              </span>
            </label>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full btn-primary py-4 flex items-center justify-center gap-2"
            >
              Create Account
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-background text-muted-foreground">Or sign up with</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-card border border-border rounded-xl hover:bg-muted transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </motion.button>

          <p className="text-center mt-6 text-muted-foreground">
            Already have an account?{' '}
            <Link to="/signin" className="text-primary font-medium hover:underline">
              Sign In
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
