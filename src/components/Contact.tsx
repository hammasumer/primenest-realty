import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-3">Get in Touch</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contact Our Team</h2>
          <p className="text-slate-600 text-lg">Have a question or ready to view a property? We are here to help you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Phone Number</h4>
                  <p className="text-slate-600 mb-1">+1 (555) 123-4567</p>
                  <p className="text-sm text-slate-500">Mon-Fri 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Email Address</h4>
                  <p className="text-slate-600 mb-1">info@primenestrealty.com</p>
                  <p className="text-sm text-slate-500">We aim to reply within 24 hrs</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Office Location</h4>
                  <p className="text-slate-600 mb-1">123 Real Estate Blvd, Suite 100</p>
                  <p className="text-slate-600">New York, NY 10001</p>
                </div>
              </div>
            </div>

            <button className="mt-10 bg-green-100 text-green-700 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-green-200 transition-colors">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </button>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all" placeholder="(555) 000-0000" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all" placeholder="info@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
