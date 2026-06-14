import { MessageCircle, Phone, Mail, MapPin, Globe, ExternalLink, Share2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  const whatsappUrl = "https://wa.me/237680721115?text=Hello%20FSL%20Education%20Hub,%20I'd%20like%20to%20start%20my%20teaching%20journey.%20Can%20you%20help%20me?";

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-[#1A1A1A] rounded-[3rem] overflow-hidden relative">
          {/* Accent Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
          
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-16 lg:p-24 text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Ready To Start Your <span className="text-primary">Teaching Journey?</span>
              </h2>
              <p className="text-xl text-white/60 mb-12 leading-relaxed">
                Don't wait for the "perfect moment." The perfect moment is when you decide to take action. Join hundreds of tutors earning online today.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">Call Us</div>
                    <div className="text-xl font-bold">+237 680 72 11 15</div>
                    <div className="text-xl font-bold">+237 682 46 38 60</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">Email Us</div>
                    <div className="text-xl font-bold">contact@fsleducationhub.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">WhatsApp</div>
                    <a href={whatsappUrl} className="text-xl font-bold border-b border-primary hover:text-primary transition-colors">Start a Chat</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-8 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center">
               <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-8 animate-pulse shadow-[0_0_30px_rgba(138,15,107,0.5)]">
                  <MessageCircle className="w-12 h-12 text-white" />
               </div>
               <h3 className="text-3xl font-bold text-white mb-6">Immediate Assistance Available</h3>
               <p className="text-white/60 mb-10 max-w-sm">
                 Our consultants are online and ready to guide you through your account creation process.
               </p>
               <Button asChild size="lg" className="bg-primary hover:bg-white hover:text-primary text-white font-bold px-12 py-9 rounded-full text-2xl h-auto shadow-2xl transition-all group">
                 <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                   Chat On WhatsApp
                 </a>
               </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-20 bg-[#F8F8FA] border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                FSL
              </div>
              <span className="font-bold text-xl tracking-tight">
                Education <span className="text-primary">Hub</span>
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The premier tutoring setup agency helping African educators break into the global online teaching market.
            </p>
            <div className="flex items-center gap-4">
               {[MessageSquare, Share2, Globe, ExternalLink].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all">
                   <Icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-primary">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">International Accounts</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Profile Optimization</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Lesson Planning</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Withdrawal Setup</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">TEFL Assistance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-primary">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-primary">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>+237 680 72 11 15</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>contact@fsleducationhub.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>Yaoundé, Cameroon</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FSL Education Hub. All rights reserved.</p>
          <p>Designed with ❤️ for Educators.</p>
        </div>
      </div>
    </footer>
  );
};
