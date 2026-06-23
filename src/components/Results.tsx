import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Helen',
    text: 'I am preparing to obtain the B2 English certification and | feel that I learn a lot with Fortune. He also focuses on the strategy for the exam and gaining more confidence when speaking. He is truly committed to your learning, and that is very important. The classes are very dynamic, and he personalizes the lessons meticulously. He adapts to what you need the most and guides you along the way. I highly recommend him.',
    // location: 'New Tutor',
  },
  {
    name: 'Andreea',
    text: "I really enjoy the class with Fortune, is very prepared and the lessons are structured based on my challenges. I recommended as a teacher.",
    // location: 'Beginner',
  },
  {
    name: 'Aline',
    text: "I really enjoy Professor Fortunes classes because he prepares them with great dedication and commitment. He is always punctual and the classes are consistently very productive, meeting my specific needs. He has already understood my learning profile and my difficulties, and he has been preparing amazing lessons to help me improve in those areas.",
    // location: 'Mentee',
  },
  {
    name: 'Youssef',
    text: "Fortune is an excellent English teacher who explains concepts clearly and patiently. His lessons are well-structured and engaging, and he always encourages participation. I've improved my grammar, vocabulary, and confidence in speaking. I highly recommend him to anyone looking to strengthen their English skills.",
    // location: 'First-time Tutor',
  },
  {
    name: 'David',
    text: "My respects to Fortune! He is a great professional! He helped me a lot with my grammar and my listening! Very kind, empathetic, and eager to teach you! A great teacher!",
    // location: 'student',
  },
  {
    name: 'Giorgia',
    text: "I recommend everyone to take lessons with Fortune; he is very nice, professional, and puts you in a good mood.He is clear when speaking in English and corrects you when you make mistakes to help you improve. I have fun with him and the hour goes by quickly. Thank you, Fortune, for helping me improve; I feel like I'm learning with you!",
    // location: 'Mentee',
  },
  // {
  //   name: 'Marie L.',
  //   text: 'I was skeptical at first, but the results speak for themselves. I am now tutoring full-time.',
  //   location: 'New Tutor',
  // },
  // {
  //   name: 'David W.',
  //   text: 'Professional, trustworthy, and effective. The masterclass was eye-opening.',
  //   location: 'Mentee',
  // },
];

export function Results() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scrollWidth = scrollRef.current?.scrollWidth || 0;
    const windowWidth = window.innerWidth;
    
    const animation = gsap.to(scrollRef.current, {
      x: `-${scrollWidth / 2}`,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
          What Our <span className="text-brand-magenta">Students Say</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center">
          Join 20+ successful mentorship clients who have transformed their careers with FSL Tutor Academy.
        </p>
      </div>

      <div className="flex relative">
        <div ref={scrollRef} className="flex gap-8 whitespace-nowrap">
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="min-h-[280px] w-[350px] flex-shrink-0 bg-gray-50 p-8 rounded-[2rem] border border-gray-100 relative group hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-6 right-8 text-brand-magenta/10 group-hover:text-brand-magenta/20 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 text-brand-gold mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-700 flex-1 text-lg leading-relaxed mb-8 whitespace-normal italic">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-magenta/10 flex items-center justify-center text-brand-magenta font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-gray-900 ">{t.name}</p>
                  {/* <p className="text-sm text-gray-500">{t.location}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}