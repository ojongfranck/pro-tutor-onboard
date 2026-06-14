import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does the account creation process take?',
    answer: 'Our internal setup usually takes 3-5 business days. Platform approval times vary by site, but with our optimization, most tutors get approved within 7-14 days, which is much faster than the industry average.',
  },
  {
    question: 'Which platforms will you help me get onto?',
    answer: 'We focus on high-paying global platforms such as Preply, Cambly, Italki, and several others depending on your subject expertise. We select the platforms where you are most likely to succeed based on your current credentials.',
  },
  {
    question: 'Do I need a TEFL certification to start?',
    answer: "While some platforms require it, many do not. However, having one significantly increases your chances of approval and allows you to charge higher rates. We offer assistance in obtaining accredited TEFL certifications if you don't have one yet.",
  },
  {
    question: 'How do I receive my earnings in my country?',
    answer: 'This is one of our specialties. We help you set up international payment gateways like Payoneer, Wise, or PayPal and integrate them with your tutoring profiles so you can withdraw funds to your local bank or mobile money account smoothly.',
  },
  {
    question: 'What happens if my profile is rejected?',
    answer: 'Rejections are rare with our process (less than 5%). If it happens, we analyze the feedback from the platform, rework your profile, and assist with a re-application at no extra cost until you are approved.',
  },
  {
    question: 'Is there ongoing support after the account is set up?',
    answer: 'Yes! Depending on your chosen package, we provide 14 to 30 days of technical and strategic support to help you navigate your first student bookings and lesson deliveries.',
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked <span className="text-primary">Questions</span></h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about starting your online teaching journey with FSL.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6 py-2 overflow-hidden data-[state=open]:border-primary/40 data-[state=open]:bg-primary/5 transition-all"
              >
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-16 p-8 bg-accent/10 rounded-3xl border-2 border-dashed border-accent/30 text-center">
             <h4 className="text-xl font-bold mb-2">Still have questions?</h4>
             <p className="text-muted-foreground mb-6">Our team is ready to provide you with all the answers you need.</p>
             <a 
               href="https://wa.me/237680721115" 
               className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all"
             >
               Chat with us on WhatsApp
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};
