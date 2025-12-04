import { useEffect, useState } from "react";
import {
  ArrowRight,
  Shield,
  TrendingDown,
  Clock,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Compare 50+ Education Loans in Seconds</span>
          </div>

          {/* Main Headline */}
          <h1
            className={`font-heading text-6xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Fund Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Future Today
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Get personalized education loan offers from India's top lenders.
            Compare rates, apply instantly, and secure your dream education.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-xl hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Compare Loans Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold text-lg hover:bg-secondary/80 transition-all hover:shadow-lg flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Calculate Eligibility
            </button>
          </div>

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span>100% Free Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Bank-Level Security</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-accent" />
              <span>10,000+ Students Funded</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Why Students Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've simplified the entire education loan process into three
              simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit Card 1 */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingDown className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">
                Lowest Interest Rates
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Compare offers from 50+ lenders to find the most competitive
                interest rates starting from just 8.5% per annum.
              </p>
              <div className="mt-6 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                <span>Learn more</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Benefit Card 2 */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">
                Instant Approvals
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Get loan pre-approval in under 2 minutes. Upload documents and
                receive sanction letters within 24 hours.
              </p>
              <div className="mt-6 flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                <span>Learn more</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Benefit Card 3 */}
            <div className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-success" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">
                100% Secure Process
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Your data is encrypted with bank-grade security. We never share
                your information without your explicit consent.
              </p>
              <div className="mt-6 flex items-center text-success font-medium group-hover:gap-2 transition-all">
                <span>Learn more</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Get Your Loan in 3 Steps
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From application to disbursement, we've made it seamless
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-success" />

            {/* Step 1 */}
            <div className="relative text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10">
                1
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">
                Share Your Details
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Tell us about your course, university, and financial
                requirements. Takes less than 2 minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10">
                2
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">
                Compare Offers
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Review personalized loan offers from multiple lenders. Compare
                interest rates, tenure, and terms.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center">
              <div className="w-16 h-16 bg-success text-success-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10">
                3
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">
                Get Funded
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Submit documents, complete verification, and receive funds
                directly in your account.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="group px-10 py-5 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105">
              Start Your Application
              <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                ₹500Cr+
              </div>
              <div className="text-muted-foreground">Loans Disbursed</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-muted-foreground">Students Funded</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-muted-foreground">Partner Lenders</div>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-muted-foreground">Approval Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Ready to Fund Your Dreams?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of students who trusted us with their education
            financing. Get started in less than 2 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-10 py-5 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-xl hover:scale-105">
              <span className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="px-10 py-5 bg-card border-2 border-border text-foreground rounded-xl font-semibold text-lg hover:bg-secondary transition-all">
              Talk to Expert
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span>No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span>Free Credit Check</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span>Quick Process</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
