import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { properties } from '../data';
import { motion } from 'motion/react';

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Properties</h2>
          <p className="text-slate-600 text-lg">Explore our handpicked selection of premium properties, offering unparalleled luxury, comfort, and style.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div 
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.imageUrl} 
                  alt={property.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-900">
                  {property.type}
                </div>
                <div className="absolute bottom-4 left-4 bg-green-600 text-white px-4 py-1.5 rounded-full font-bold">
                  {property.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-slate-500 text-sm mb-6">
                  <MapPin className="w-4 h-4 mr-1 text-green-600" />
                  {property.location}
                </div>
                
                <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6 mb-6">
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Bed className="w-4 h-4 text-slate-400" />
                    <span>{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Bath className="w-4 h-4 text-slate-400" />
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Square className="w-4 h-4 text-slate-400" />
                    <span>{property.area} sqft</span>
                  </div>
                </div>

                <button className="w-full py-3 text-center border border-slate-200 rounded-xl font-medium text-slate-700 hover:bg-slate-50 hover:text-green-600 hover:border-green-600 transition-all">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
