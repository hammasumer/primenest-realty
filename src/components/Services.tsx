import { Home, Key, Building2, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Property Buying',
    description: 'We guide you through the entire buying process, from property search to closing the deal smoothly.',
    icon: Home,
  },
  {
    title: 'Property Selling',
    description: 'Maximize your property value with our expert marketing and vast network of qualified buyers.',
    icon: Key,
  },
  {
    title: 'Property Renting',
    description: 'Find the perfect rental home or reliable tenants for your investment property with ease.',
    icon: Building2,
  },
  {
    title: 'Property Management',
    description: 'Comprehensive management services to ensure your real estate investments are well-maintained.',
    icon: Briefcase,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-3">Our Services</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Offer</h2>
          <p className="text-slate-600 text-lg">Comprehensive real estate solutions tailored to your unique needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
