import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "./NavLink";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
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
            <p className="text-sm text-muted-foreground">
              Your trusted partner in finding the perfect education loan for
              your academic journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/loan-offers"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Loan Aggregator
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">About Us</li>
              <li className="text-sm text-muted-foreground">FAQs</li>
              <li className="text-sm text-muted-foreground">Privacy Policy</li>
              <li className="text-sm text-muted-foreground">
                Terms of Service
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@edumate.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Edumate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
