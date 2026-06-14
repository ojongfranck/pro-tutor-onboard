import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'English Tutor',
    content: 'FSL Education Hub completely changed my approach. My account was approved in 2 days after months of trying on my own!',
    rating: 5,
  },
  {
    name: 'David Mendy',
    role: 'Mathematics Specialist',
    content: 'The profile optimization is worth every penny. I went from zero students to a fully booked schedule in 3 weeks.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Language Instructor',
    content: 'Highly professional team. They walked me through the withdrawal setup which was the biggest hurdle for me.',
    rating: 5,
  },
  {
    name: 'Koffi Anan',
    role: 'Science Tutor',
    content: 'The lesson plans provided gave me the confidence to start my first class without feeling overwhelmed.',
    rating: 5,
  },
  {
    name: 'Michelle Chen',
    role: 'ESL Coach',
    content: 'Best investment for my teaching career. The 1-on-1 support is personalized and very effective.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Academic Consultant',
    content: 'Approval experiences can be tricky, but FSL made it look easy. I highly recommend their services.',
    rating: 5,
  },
];

export const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = scrollRef.current!.offsetWidth;
      const amountToScroll = scrollWidth - window.innerWidth;

      gsap.to(scrollRef.current, {
        x: -amountToScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="overflow-hidden bg-white py-0">
      <div className="h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[2px] w-12 bg-primary"></div>
             <span className="text-primary font-bold uppercase tracking-widest text-sm">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our <span className="text-primary">Tutors Say</span></h2>
        </div>

        <div ref={scrollRef} className="flex gap-6 px-4 md:px-12 w-fit pb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="w-[300px] md:w-[450px] flex-shrink-0 bg-[#F8F8FA] p-8 md:p-12 rounded-[2rem] border border-border relative group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Join the Community Card */}
          <div className="w-[300px] md:w-[450px] flex-shrink-0 flex flex-col justify-center items-center bg-accent/10 border-2 border-dashed border-accent/40 rounded-[2rem] p-12 text-center">
             <h3 className="text-2xl font-bold mb-4">Join 50+ Successful Tutors</h3>
             <p className="text-muted-foreground mb-8">Start your own success story with FSL Education Hub today.</p>
             <a 
               href="https://wa.me/237680721115" 
               className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all"
             >
               Apply Now
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};
