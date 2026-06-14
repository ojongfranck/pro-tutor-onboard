import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in reveal
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
      
      tl.from(headlineRef.current, { y: 50, opacity: 0 })
        .from(subheadlineRef.current, { y: 30, opacity: 0 }, '-=0.7')
        .from(ctaRef.current, { y: 20, opacity: 0 }, '-=0.7')
        .from(statsRef.current, { y: 20, opacity: 0 }, '-=0.7');

      // Floating glow animation
      gsap.to(glowRef.current, {
        x: 'random(-20, 20)',
        y: 'random(-20, 20)',
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      
      // Animated magenta gradient background
      gsap.to('.hero-gradient', {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const whatsappUrl = "https://wa.me/237680721115?text=Hello%20FSL%20Education%20Hub,%20I'm%20ready%20to%20start%20teaching%20and%20earning%20online.%20Please%20guide%20me.";

  const trustPoints = [
    'International Account Creation',
    'National Account Creation',
    'Profile Optimization',
    'Platform Approval Support',
    'Personalized Guidance',
  ];

  const stats = [
    { label: 'Accounts Created', value: '50+' },
    { label: 'Tutors Assisted', value: '20+' },
    { label: 'Resources Shared', value: '100+' },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div 
          ref={glowRef}
          className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" 
        />
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px]" />
        <div className="hero-gradient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(138,15,107,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Empowering Future Educators
            </div>
            
            <h1 
              ref={headlineRef}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              Start Teaching & <br />
              <span className="text-primary">Earning Online</span>
            </h1>
            
            <p 
              ref={subheadlineRef}
              className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl"
            >
              We help aspiring tutors create professional tutoring accounts, get approved faster, optimize their profiles, and start earning online with confidence.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-foreground/80 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  {point}
                </div>
              ))}
            </div>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-7 text-lg h-auto group">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Start on WhatsApp
                  <MessageCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-7 text-lg h-auto border-primary/20 hover:bg-primary/5 text-primary">
                <a href="#services">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            <div ref={statsRef} className="flex flex-wrap gap-12 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d5153879-aba9-4ac9-a13d-dd3d60e45b2a/hero-background-d0b77479-1781403699273.webp" 
                alt="FSL Education Hub"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Gold Accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl -z-10 opacity-50" />
            <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-primary/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
