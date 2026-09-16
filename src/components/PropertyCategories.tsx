import { motion } from 'motion/react';

const categories = [
  {
    name: 'Houses',
    count: '150+ Properties',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Apartments',
    count: '230+ Properties',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Villas',
    count: '45+ Properties',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Commercial',
    count: '80+ Properties',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  }
];

export default function PropertyCategories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Explore by Category</h2>
            <p className="text-slate-600 text-lg">Browse our extensive portfolio of properties categorized to help you find exactly what you are looking for.</p>
          </div>
          <button className="hidden md:block text-green-600 font-medium hover:text-green-700">
            View All Categories &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.count}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
