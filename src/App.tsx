import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import HoursLocation from './components/HoursLocation'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-vet-text antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <HoursLocation />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
