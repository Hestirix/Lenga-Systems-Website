import { Link } from "wouter";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white font-display font-bold text-xl">
                L
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Lenga Systems
              </span>
            </Link>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              A premium technology consultancy helping businesses improve operations, modernize systems, and implement practical solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 font-display">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">IT Consulting</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">AI Consulting</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Web & App Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Process Automation</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 font-display">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Our Solutions</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 font-display">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-0.5" />
                <span>hello@lengasystems.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-0.5" />
                <span>+44 20 0000 0000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>London, UK</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Lenga Systems. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
