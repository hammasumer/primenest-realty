import { Home, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Home className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold text-white">
                PrimeNest
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Premium real estate agency dedicated to helping you find your perfect home with transparency, expertise, and personalized service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-green-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-green-500 transition-colors">Services</a></li>
              <li><a href="#properties" className="hover:text-green-500 transition-colors">Properties</a></li>
              <li><a href="#contact" className="hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Property Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Property Types</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-green-500 transition-colors">Luxury Houses</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Modern Apartments</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Private Villas</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Commercial Spaces</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Beachfront Properties</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li>123 Real Estate Blvd, Suite 100</li>
              <li>New York, NY 10001</li>
              <li className="pt-2">
                <a href="tel:+15551234567" className="text-white hover:text-green-500 transition-colors font-medium">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:hello@primenestrealty.com" className="text-white hover:text-green-500 transition-colors font-medium">
                  hello@primenestrealty.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} PrimeNest Realty. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
