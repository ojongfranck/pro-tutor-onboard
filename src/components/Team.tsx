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
import mentor2 from '@/assets/mentor-2.jpg';
import mentor3 from '@/assets/mentor-3.jpg';
import earning1 from '@/assets/earning-1.jpg';
import earning2 from '@/assets/earning-2.jpg';
import earning3 from '@/assets/earning-3.jpg';

const team = [
  {
    id: 1,
    name: 'Lari Fortune',
    role: 'Online Coach & Tutor',
    intro: 'Expert in online tutoring platforms with over 5 years of experience helping beginners scale their remote careers.',
    story: 'Lari Fortune started from scratch, discovering the potential of online tutoring platforms when the remote work wave began. After successfully navigating the complexities of account creation and profile optimization, Lari decided to create FSL Education Hub to simplify the journey for others. Today, the hub has mentored hundreds of students into successful remote tutors.',
    image: mentor1,
    successImage: earning1,
  },
    {
    id: 2,
    name: 'Hon. Shirley Lakeh',
    role: 'Online Coach & Tutor',
    intro: 'Expert in online tutoring platforms with over 5 years of experience helping beginners scale their remote careers.',
    story: 'Lari Fortune started from scratch, discovering the potential of online tutoring platforms when the remote work wave began. After successfully navigating the complexities of account creation and profile optimization, Lari decided to create FSL Education Hub to simplify the journey for others. Today, the hub has mentored hundreds of students into successful remote tutors.',
    image: mentor2,
    successImage: earning2,
  },
    {
    id: 3,
    name: 'Franck Ronald',
    role: 'Online Coach & Tutor',
    intro: 'Expert in online tutoring platforms with over 5 years of experience helping beginners scale their remote careers.',
    story: 'Lari Fortune started from scratch, discovering the potential of online tutoring platforms when the remote work wave began. After successfully navigating the complexities of account creation and profile optimization, Lari decided to create FSL Education Hub to simplify the journey for others. Today, the hub has mentored hundreds of students into successful remote tutors.',
    image: mentor3,
    successImage: earning3,
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
                        {/* <div className="flex items-center gap-1 mb-6">
                           {[...Array(5)].map((_, i) => (
                             <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                           ))}
                        </div> */}
                        <DialogHeader className="mb-8">
                          <DialogTitle className="text-3xl md:text-4xl font-bold mb-2">{member.name}</DialogTitle>
                          <div className="text-primary font-bold text-xl uppercase tracking-wider">{member.role}</div>
                        </DialogHeader>
                        
                        <div className="space-y-8">
                          {/* <div> */}
                            {/* <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                              <span className="w-8 h-[2px] bg-primary"></span>
                              Biography
                            </h4> */}
                            {/* <p className="text-muted-foreground leading-relaxed">
                              {member.bio}
                            </p> */}
                          {/* </div> */}
                          
                          <div>
                            {/* <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                              <span className="w-8 h-[2px] bg-primary"></span>
                              The Success Story
                            </h4> */}
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
