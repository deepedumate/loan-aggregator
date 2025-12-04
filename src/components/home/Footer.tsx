import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    product: [
      { label: "How It Works", href: "#" },
      { label: "Compare Loans", href: "#" },
      { label: "Eligibility Calculator", href: "#" },
      { label: "Partner Lenders", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
    resources: [
      { label: "FAQs", href: "#" },
      { label: "Loan Guide", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <NavLink
                to="/"
                className="flex items-center gap-2 font-heading text-xl font-bold text-foreground hover:text-primary transition-colors"
              >
                <img
                  src="/edumate_logo.png"
                  alt="Edumate logo"
                  className="h-6 ml-1"
                />
              </NavLink>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed text-xs sm:text-sm">
              Making education financing accessible for every student. Compare,
              choose, and secure the best education loans from India's top
              lenders.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-heading font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Product
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-heading font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-heading font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Resources
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h3 className="font-heading font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Contact
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:support@edumate.com"
                  className="hover:text-primary transition-colors text-xs sm:text-sm break-all"
                >
                  support@edumate.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+911800000000"
                  className="hover:text-primary transition-colors text-xs sm:text-sm"
                >
                  +91 180 000 0000
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            © {new Date().getFullYear()} Edumate by SEED Global Education. All
            rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-muted-foreground">
            <a
              href="#"
              className="hover:text-primary transition-colors whitespace-nowrap"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors whitespace-nowrap"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors whitespace-nowrap"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
