import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, Zap, Shield, Target, TrendingUp, Headphones } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: 'Start With Confidence',
    description: 'Skip the trial and error. We provide a proven roadmap used by successful tutors.',
    icon: Rocket,
  },
  {
    title: 'Teach With Ease',
    description: 'We handle the technical setup so you can focus on what you do best: teaching.',
    icon: Zap,
  },
  {
    title: 'Get Approved Faster',
    description: 'Our optimization techniques significantly reduce wait times and rejection rates.',
    icon: Shield,
  },
  {
    title: 'Attract More Students',
    description: 'Learn how to position your profile to stand out in a competitive global market.',
    icon: Target,
  },
  {
    title: 'Earn What You Deserve',
    description: 'Strategize your pricing and withdrawal systems to maximize your take-home pay.',
    icon: TrendingUp,
  },
  {
    title: 'Access Expert Support',
    description: 'Real humans, real experience. We are here to answer every question you have.',
    icon: Headphones,
  },
];

export const WhyChoose = () => {
  // const sectionRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from('.benefit-card', {
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: 'top 70%',
  //       },
  //       scale: 0.9,
  //       opacity: 0,
  //       duration: 0.8,
  //       stagger: 0.1,
  //       ease: 'back.out(1.7)',
  //     });
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <section 
    // ref={sectionRef} 
    id="benefits" 
    className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold mb-6">
              Why Choose FSL Education Hub
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Transform Your Teaching Career with <span className="text-primary">Precision Setup</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Don't leave your online teaching future to chance. FSL Education Hub bridges the gap between your passion and a professional online presence.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="font-medium text-foreground/80">Platform Approval Rate</p>
              </div>
              <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10">
                <div className="text-4xl font-bold text-accent mb-2">2x</div>
                <p className="font-medium text-foreground/80">Faster Profile Approval</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="benefit-card bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
