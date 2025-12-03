import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { label: 'How It Works', href: '#' },
      { label: 'Compare Loans', href: '#' },
      { label: 'Eligibility Calculator', href: '#' },
      { label: 'Partner Lenders', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    resources: [
      { label: 'FAQs', href: '#' },
      { label: 'Loan Guide', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Edumate
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Making education financing accessible for every student. Compare, choose, and secure the best education loans from India's top lenders.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-2">
            <h3 className="font-heading font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-heading font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-heading font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-2">
            <h3 className="font-heading font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:support@edumate.com" className="hover:text-primary transition-colors">
                  support@edumate.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+911800000000" className="hover:text-primary transition-colors">
                  +91 180 000 0000
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Edumate by SEED Global Education. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;