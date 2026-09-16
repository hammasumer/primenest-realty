import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { label: 'Properties Listed', value: '2,500+' },
    { label: 'Happy Clients', value: '1,800+' },
    { label: 'Years of Experience', value: '15+' }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-green-900/10 mix-blend-multiply"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-3">About PrimeNest Realty</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              We Help You Find The Perfect Place To Call Home
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              At PrimeNest Realty, we believe that finding a home is more than just a transaction—it's about finding a place where memories are made. With over a decade of experience in the premium real estate market, our dedicated team of professionals is committed to providing an exceptional, transparent, and seamless property journey for every client.
            </p>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
