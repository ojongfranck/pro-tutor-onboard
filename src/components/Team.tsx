import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import mentor1 from '@/assets/mentor-1.jpg';
import earning1 from '@/assets/earning-1.jpg';

const team = [
  {
    name: 'Samuel Foka',
    role: 'Founder & Senior Consultant',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d5153879-aba9-4ac9-a13d-dd3d60e45b2a/team-member-1-85ef76bf-1781403699507.webp',
    intro: 'Expert in international tutoring platform algorithms and profile optimization.',
    bio: 'Samuel has over 8 years of experience in the online education sector. He has successfully helped hundreds of tutors establish their presence on platforms like Preply, Cambly, and Italki. His deep understanding of platform approval processes makes him an invaluable asset to our team.',
    story: 'After facing numerous rejections himself, Samuel developed a systematic approach to profile creation that guarantees success. He founded FSL Education Hub to share this knowledge with aspiring educators across Africa and beyond.',
    successImage: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d5153879-aba9-4ac9-a13d-dd3d60e45b2a/success-result-1-8c5fcb6a-1781403698966.webp',
  },
  {
    name: 'Lydia M. Nchinda',
    role: 'Head of Tutor Success',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d5153879-aba9-4ac9-a13d-dd3d60e45b2a/team-member-2-2992d56b-1781403699245.webp',
    intro: 'Dedicated to personalized mentorship and 1-on-1 tutor support.',
    bio: 'Lydia specializes in teacher training and curriculum development. She ensures that every tutor who joins our hub is not just platform-ready, but also classroom-ready. Her focus is on pedagogical excellence and student engagement strategies.',
    story: 'Lydia believes that every educator has a unique voice. She works closely with our tutors to help them find their niche and develop a teaching style that attracts and retains students in the competitive global market.',
    successImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop',
  },
  {
      id: 1,
    name: 'Lari Fortune',
    role: 'Online Coach & Tutor',
    intro: 'Expert in online tutoring platforms with over 5 years of experience helping beginners scale their remote careers.',
    story: 'Lari Fortune started from scratch, discovering the potential of online tutoring platforms when the remote work wave began. After successfully navigating the complexities of account creation and profile optimization, Lari decided to create FSL Education Hub to simplify the journey for others. Today, the hub has mentored hundreds of students into successful remote tutors.',
    image: mentor1,
    successImage: earning1,
    // name: 'Emmanuel T.',
    // role: 'Technical Operations Lead',
    // image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d5153879-aba9-4ac9-a13d-dd3d60e45b2a/team-member-3-d20b8a6f-1781403701357.webp',
    // intro: 'Specialist in payment systems, withdrawal setup, and technical troubleshooting.',
    // bio: 'Emmanuel manages the technical hurdles of online tutoring. From VPN configurations to setting up complex international withdrawal methods like Payoneer and PayPal, he ensures that our tutors get paid for their hard work seamlessly.',
    // story: 'With a background in fintech and IT, Emmanuel joined FSL to solve the biggest pain point for African tutors: financial inclusion. He has developed custom workflows that bypass traditional banking limitations.',
    // successImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2340&auto=format&fit=crop',
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-[#F8F8FA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our <span className="text-primary">Experts</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The dedicated professionals behind FSL Education Hub, committed to your teaching success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border group hover:shadow-xl transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                   <div className="text-white">
                      <div className="font-bold text-xl mb-1">{member.name}</div>
                      <div className="text-white/80 text-sm uppercase tracking-widest">{member.role}</div>
                   </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <div className="text-primary font-semibold">{member.role}</div>
                </div>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {member.intro}
                </p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full rounded-full border-primary/20 hover:bg-primary hover:text-white transition-all">
                      View Success Story
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-[2rem] border-none">
                    <div className="grid md:grid-cols-2 h-full max-h-[90vh] overflow-y-auto lg:overflow-hidden">
                      <div className="h-64 md:h-full relative">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 rounded-full font-bold text-sm">
                           Expert Profile
                        </div>
                      </div>
                      <div className="p-8 md:p-12 lg:overflow-y-auto">
                        <div className="flex items-center gap-1 mb-6">
                           {[...Array(5)].map((_, i) => (
                             <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                           ))}
                        </div>
                        <DialogHeader className="mb-8">
                          <DialogTitle className="text-3xl md:text-4xl font-bold mb-2">{member.name}</DialogTitle>
                          <div className="text-primary font-bold text-xl uppercase tracking-wider">{member.role}</div>
                        </DialogHeader>
                        
                        <div className="space-y-8">
                          <div>
                            <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                              <span className="w-8 h-[2px] bg-primary"></span>
                              Biography
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {member.bio}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                              <span className="w-8 h-[2px] bg-primary"></span>
                              The Success Story
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {member.story}
                            </p>
                          </div>
                          
                          <div className="pt-4 border-t border-border">
                            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Earnings & Results Preview</h4>
                            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                              <img 
                                src={member.successImage} 
                                alt="Success Result" 
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
