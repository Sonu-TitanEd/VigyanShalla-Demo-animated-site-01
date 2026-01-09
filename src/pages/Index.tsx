import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroCarousel from '@/components/home/HeroCarousel';
import TrustedCompanies from '@/components/home/TrustedCompanies';
import Categories from '@/components/home/Categories';
import CoursesSlider from '@/components/home/CoursesSlider';
import SuccessStory from '@/components/home/SuccessStory';
import Experts from '@/components/home/Experts';
import Community from '@/components/home/Community';
import Testimonials from '@/components/home/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      <main>
        <HeroCarousel />
        <TrustedCompanies />
        <Categories />
        <CoursesSlider />
        <SuccessStory />
        <Experts />
        <Community />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
