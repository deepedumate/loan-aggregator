import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  Instagram,
  GraduationCap
} from "lucide-react";
import edumateLogo from "@/assets/edumate-logo.png";

const footerLinks = {
  product: [
    { label: "Education Loans", href: "/" },
    { label: "Loan Eligibility", href: "/eligibility" },
    { label: "EMI Calculator", href: "/calculator" },
    { label: "Partner Lenders", href: "/partners" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Press", href: "/press" },
  ],
  support: [
    { label: "FAQs", href: "/faqs" },
    { label: "Contact Us", href: "/contact" },
    { label: "Help Center", href: "/help" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/edumateglobal", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/edumateglobal", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/edumateglobal", label: "Instagram" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/40">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src={edumateLogo} 
                alt="Edumate" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Smart Education Financing. Access exclusive education loan rates, get instant approvals, and make data-driven decisions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 pt-2">
              <a 
                href="mailto:support@edumateglobal.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                support@edumateglobal.com
              </a>
              <a 
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Product</h4>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Support</h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/40">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Edumate Global. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span>Smart Students Make Smarter Funding Decisions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
