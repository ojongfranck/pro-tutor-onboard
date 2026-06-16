import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import one from '@/assets/one.jpg';
import two from '@/assets/two.jpg';
import three from '@/assets/three.jpg';
import four from '@/assets/four.jpg';
import five from '@/assets/five.jpg';
import six from '@/assets/six.jpg';
import seven from '@/assets/seven.jpg';
import eight from '@/assets/eight.jpg';
import nine from '@/assets/nine.jpg';
import ten from '@/assets/ten.jpg';

gsap.registerPlugin(ScrollTrigger);

const results = [
  {
    // title: 'Approved International Account',
    // description: 'Successful approval on a major global platform within 72 hours.',
    image: one,
    // tag: 'Platform Approval',
  },
    {
    // title: 'Approved International Account',
    // description: 'Successful approval on a major global platform within 72 hours.',
    image: two,
    // tag: 'Platform Approval',
  },
    {
    // title: 'Approved International Account',
    // description: 'Successful approval on a major global platform within 72 hours.',
    image: three,
    // tag: 'Platform Approval',
  },
    {
    // title: 'Approved International Account',
    // description: 'Successful approval on a major global platform within 72 hours.',
    image: four,
    // tag: 'Platform Approval',
  },
    {
    // title: 'Approved International Account',
    // description: 'Successful approval on a major global platform within 72 hours.',
    image: five,
    // tag: 'Platform Approval',
  },
    {
    // title: 'Approved International Account',
    // description: 'Successful approval on a major global platform within 72 hours.',
    image: six,
    // tag: 'Platform Approval',
  },
    {
    // title: 'Approved International Account',
    // description: 'Successful approval on a major global platform within 72 hours.',
    image: seven,
    // tag: 'Platform Approval',
  },
    {
    // title: 'Approved International Account',
    // description: 'Successful approval on a major global platform within 72 hours.',
    image: eight,
    // tag: 'Platform Approval',
  },
    {
    // title: 'Approved International Account',
    // description: 'Successful approval on a major global platform within 72 hours.',
    image: nine,
    // tag: 'Platform Approval',
  },
    {
    // title: 'Approved International Account',
    // description: 'Successful approval on a major global platform within 72 hours.',
    image: ten,
    // tag: 'Platform Approval',
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
                  // alt={result.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {result.tag}
                </div> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              {/* <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{result.title}</h3> */}
              {/* <p className="text-white/60 leading-relaxed line-clamp-2">
                {result.description}
              </p> */}
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
