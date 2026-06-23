import { Check, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Pricing = () => {
  const plans = [
    {
      title: 'English Accounts',
      price: '$180',
      description: 'The ultimate package for aspiring English tutors on premium global platforms.',
      features: [
        'International Account Creation',
        'Full Profile Setup & Optimization',
        'Professional Bio Writing',
        'Intro Video Script & Guidance',
        'Guaranteed Approval Support',
        'Withdrawal Method Integration',
        'Ready-to-use ESL Lesson Plans',
        '30 Days Priority Support',
      ],
      whatsappMsg: "Hello FSL,%20I'm%20interested%20in%20the%20English%20Account%20Setup%20($180).%20Can%20we%20get%20started?",
      popular: true,
    },
    {
      title: 'Other Subjects',
      price: '$140',
      description: 'Optimized setup for French, Mathematics, Science, and specialized subjects.',
      features: [
        'Targeted Platform Account Creation',
        'Subject-Specific Profile Optimization',
        'Curriculum-Focused Bio Setup',
        'Subject Introduction Guidance',
        'Platform Approval Assistance',
        'Withdrawal Method Setup',
        'Subject-Specific Resource Links',
        '14 Days Technical Support',
      ],
      whatsappMsg: "Hello FSL,%20I'm%20interested%20in%20the%20Other%20Subjects%20Setup%20($140).%20Can%20we%20get%20started?",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#F8F8FA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Investment in Your <span className="text-primary">Future</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the right setup package for your expertise and start your online teaching career with a professional edge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.title} 
              className={`relative bg-white rounded-[2.5rem] p-8 md:p-12 border shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular ? 'border-primary ring-2 ring-primary/10' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">One-Time Payment</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/80 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className={`w-full py-8 text-xl rounded-2xl group ${
                plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-foreground hover:bg-foreground/90'
              }`}>
                <a href={`https://wa.me/237680721115?text=${plan.whatsappMsg}`} target="_blank" rel="noopener noreferrer">
                  Start My Setup
                  <MessageCircle className="w-6 h-6 ml-2 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>
        
        {/* <div className="mt-16 text-center">
           <p className="text-muted-foreground mb-4">Need a custom enterprise setup or have questions?</p>
           <a href="https://wa.me/237680721115" className="text-primary font-bold border-b-2 border-primary hover:text-accent hover:border-accent transition-colors">
              Talk to a consultant directly
           </a>
        </div> */}
      </div>
    </section>
  );
};
