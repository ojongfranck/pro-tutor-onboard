import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChoose } from './components/WhyChoose';
import { Results } from './components/Results';
import { Team } from './components/Team';
import { Community } from './components/Community';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact, Footer } from './components/Contact';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <WhyChoose />
          <Results />
          <Team />
          <Community />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
