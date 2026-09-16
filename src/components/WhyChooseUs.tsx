import { CheckCircle2, Users, ShieldCheck, HeadphonesIcon } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    title: 'Verified Properties',
    description: 'Every property in our portfolio undergoes a strict verification process to ensure quality and legality.',
    icon: CheckCircle2,
  },
  {
    title: 'Expert Agents',
    description: 'Our team consists of highly experienced professionals with deep local market knowledge.',
    icon: Users,
  },
  {
    title: 'Transparent Process',
    description: 'We believe in clear communication and complete transparency throughout your real estate journey.',
    icon: ShieldCheck,
  },
  {
    title: 'Dedicated Support',
    description: 'Our support team is always available to answer your questions and resolve any concerns.',
    icon: HeadphonesIcon,
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-green-500 font-semibold tracking-wider uppercase text-sm mb-3">Why Choose Us</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              The Preferred Choice For Premium Real Estate
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              We don't just sell properties; we build lasting relationships based on trust, integrity, and exceptional service. Discover the PrimeNest difference.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Icon className="w-8 h-8 text-green-500 mb-4" />
                    <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="relative h-[600px] rounded-2xl overflow-hidden lg:block hidden">
            <img 
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1000" 
              alt="Real Estate Agent" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
