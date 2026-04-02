import Header from './components/Header';
import Banner from './components/Banner';
import Stats from './components/Stats';
import PopularRoutes from './components/PopularRoutes';
import Pricing from './components/Pricing';
import Fleet from './components/Fleet';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import ServiceAreas from './components/ServiceAreas';
import FAQs from './components/FAQs';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Banner />
      <Stats />
      <PopularRoutes />
      <Pricing />
      <Fleet />
      <WhyChooseUs />
      <HowItWorks />
      <ServiceAreas />
      <FAQs />
      <Testimonials />
      <Certifications />
      <Footer />
    </main>
  );
}
