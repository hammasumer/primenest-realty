import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 md:mt-0">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            Find a Place You'll Love to Call Home
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl"
          >
            Discover your dream property with our expert team. Whether you're buying, selling, or renting, we guide you every step of the way to find the perfect match for your lifestyle.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <button className="bg-green-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-green-700 transition-colors">
              Explore Properties
            </button>
            <button className="bg-white text-slate-900 px-8 py-3.5 rounded-full font-medium hover:bg-white/90 transition-colors">
              Contact Agent
            </button>
          </motion.div>
        </div>

        {/* Search Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-xl max-w-5xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600" /> Location
              </label>
              <input 
                type="text" 
                placeholder="City, Neighborhood..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <Home className="w-4 h-4 text-green-600" /> Property Type
              </label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all appearance-none">
                <option>All Types</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Commercial</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-600" /> Price Range
              </label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all appearance-none">
                <option>Any Price</option>
                <option>$500k - $1M</option>
                <option>$1M - $2.5M</option>
                <option>$2.5M - $5M</option>
                <option>$5M+</option>
              </select>
            </div>
            <button className="bg-slate-900 text-white w-full py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              <Search className="w-4 h-4" /> Search
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
