import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const results = [
  {
    title: 'Approved International Account',
    description: 'Successful approval on a major global platform within 72 hours.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d5153879-aba9-4ac9-a13d-dd3d60e45b2a/success-result-1-8c5fcb6a-1781403698966.webp',
    tag: 'Platform Approval',
  },
  {
    title: 'Profile Optimization Growth',
    description: '300% increase in student profile views after strategic keyword optimization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    tag: 'Visibility',
  },
  {
    title: 'Withdrawal Setup Success',
    description: 'Seamless integration of international payment methods for a tutor in Africa.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2340&auto=format&fit=crop',
    tag: 'Payment Setup',
  },
  {
    title: 'Lesson Plan Deployment',
    description: 'Tutor started teaching immediately with our pre-made curriculum.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2340&auto=format&fit=crop',
    tag: 'Curriculum',
  },
  {
    title: 'Monthly Earning Milestone',
    description: 'First $1000 month achieved within 3 months of account creation.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2342&auto=format&fit=crop',
    tag: 'Earnings',
  },
  {
    title: '1-on-1 Mentorship Result',
    description: 'Transitioned from part-time to full-time online educator.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d5153879-aba9-4ac9-a13d-dd3d60e45b2a/hero-background-d0b77479-1781403699273.webp',
    tag: 'Success Story',
  },
];

export const Results = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = scrollRef.current!.offsetWidth;
      const amountToScroll = scrollWidth - window.innerWidth;

      gsap.to(scrollRef.current, {
        x: -amountToScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          // markers: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="results" className="overflow-hidden bg-[#1A1A1A] text-white">
      <div ref={triggerRef} className="h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Exceptional <span className="text-primary">Results</span></h2>
              <p className="text-xl text-white/60">
                A glimpse into the success stories and platform approvals we've facilitated for our tutors.
              </p>
            </div>
            <div className="text-primary font-bold text-lg hidden md:block">
              Scroll to Explore →
            </div>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-8 px-4 md:px-12 w-fit">
          {results.map((result, index) => (
            <div 
              key={index} 
              className="w-[350px] md:w-[500px] flex-shrink-0 group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-white/10">
                <img 
                  src={result.image} 
                  alt={result.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {result.tag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{result.title}</h3>
              <p className="text-white/60 leading-relaxed line-clamp-2">
                {result.description}
              </p>
            </div>
          ))}
          
          {/* Final CTA Card */}
          <div className="w-[350px] md:w-[500px] flex-shrink-0 flex flex-col justify-center items-center bg-primary/20 rounded-3xl border border-primary/30 p-12 text-center group">
             <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-8 text-4xl group-hover:scale-110 transition-transform">
               ✨
             </div>
             <h3 className="text-3xl font-bold mb-6 text-white">Your Success Story Starts Here</h3>
             <a 
               href="https://wa.me/237680721115" 
               className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-accent-foreground transition-all"
             >
               Get Started Now
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};
