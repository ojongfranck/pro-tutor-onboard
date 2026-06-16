import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Globe, 
  MapPin, 
  Settings, 
  FileText, 
  BookOpen, 
  Wallet, 
  UserCheck, 
  Video, 
  Award, 
  ShieldCheck, 
  BarChart3,
  HelpCircle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'International Account Creation',
    description: 'Setup your tutoring profiles on global platforms and reach students worldwide.',
    icon: Globe,
  },
  {
    title: 'National Account Creation',
    description: 'Establish your presence on local and national tutoring platforms effectively.',
    icon: MapPin,
  },
  {
    title: 'Full Account Setup',
    description: 'Comprehensive setup including bio, experience, and system configuration.',
    icon: Settings,
  },
  {
    title: 'Profile Optimisation & Approval',
    description: 'Strategic profile polishing to ensure high approval rates and visibility.',
    icon: FileText,
  },
  {
    title: 'Ready-To-Use Lesson Plans',
    description: 'Professional, pre-structured lesson plans to get you teaching immediately.',
    icon: BookOpen,
  },
  {
    title: 'Withdrawal Setup Assistance',
    description: 'Smooth setup of payment methods to receive your earnings without hassle.',
    icon: Wallet,
  },
  {
    title: 'Personalised 1-on-1 Support',
    description: 'Direct guidance tailored to your specific tutoring niche and goals.',
    icon: UserCheck,
  },
  {
    title: 'Platform Setup Walkthrough',
    description: 'Step-by-step guidance through the complexities of each platform.',
    icon: ShieldCheck,
  },
  {
    title: 'Profile & Video Guidance',
    description: 'Expert tips on creating high-converting intro videos and photos.',
    icon: Video,
  },
  {
    title: 'TEFL Certification Assistance',
    description: 'Support in obtaining recognized certifications to boost your credibility.',
    icon: Award,
  },
  {
    title: 'Tax Clearance Assistance',
    description: 'Professional guidance on managing your tutoring income and tax compliance.',
    icon: BarChart3,
  },
];

export const Services = () => {
  // const containerRef = useRef<HTMLDivElement>(null);
  // const cardsRef = useRef<HTMLDivElement[]>([]);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from('.section-title', {
  //       scrollTrigger: {
  //         trigger: '.section-title',
  //         start: 'top 80%',
  //       },
  //       y: 30,
  //       opacity: 0,
  //       duration: 0.8,
  //     });

  //     gsap.from(cardsRef.current, {
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: 'top 75%',
  //       },
  //       y: 50,
  //       opacity: 0,
  //       duration: 0.6,
  //       stagger: 0.1,
  //       ease: 'power2.out',
  //     });
  //   }, containerRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <section id="services" className="py-24 bg-[#F8F8FA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto section-title">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Premium <span className="text-primary">Services</span></h2>
          <p className="text-lg text-muted-foreground">
            We provide everything you need to transition from an aspiring educator to a successful online tutor.
          </p>
        </div>

        <div 
          // ref={containerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              // ref={(el) => { if (el) cardsRef.current[index] = el; }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
          
          {/* Custom Card for "And More" */}
          <div
            // ref={(el) => { if (el) cardsRef.current[services.length] = el; }}
            className="bg-primary p-8 rounded-2xl shadow-lg border border-primary flex flex-col justify-center items-center text-center text-white group"
          >
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <HelpCircle className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Need More?</h3>
            <p className="text-white/80 mb-6">
              We offer personalized solutions for your unique teaching journey.
            </p>
            <a 
              href="https://wa.me/237680721115" 
              className="font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
