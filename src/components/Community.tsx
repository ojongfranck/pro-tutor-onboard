import { MessageCircle, Users, Sparkles, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Community = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden text-white">
          {/* Subtle patterns */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold mb-8 backdrop-blur-sm border border-white/20">
                <Users className="w-4 h-4 text-accent" />
                Community Driven
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Join a Community of <span className="text-accent">Aspiring Tutors</span>
              </h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Learn, grow, and succeed alongside tutors who are building successful online teaching careers. We believe in the power of shared knowledge and collective growth.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Weekly Insights</h4>
                    <p className="text-white/60 text-sm">Stay updated with platform changes and new teaching opportunities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Peer Support</h4>
                    <p className="text-white/60 text-sm">Connect with fellow educators for encouragement and peer-to-peer learning.</p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-accent hover:bg-white text-primary font-bold px-10 py-8 rounded-full text-lg h-auto transition-all group">
                <a href="https://wa.me/237680721115" target="_blank" rel="noopener noreferrer">
                  Join The Community
                  <MessageCircle className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl transform lg:rotate-3 border-4 border-white/20">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d5153879-aba9-4ac9-a13d-dd3d60e45b2a/community-section-image-48b31289-1781403699089.webp" 
                  alt="FSL Community"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-border hidden md:block animate-bounce-slow">
                <div className="text-primary font-bold text-3xl mb-1">200+</div>
                <div className="text-muted-foreground text-sm font-semibold uppercase tracking-wider">Active Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
