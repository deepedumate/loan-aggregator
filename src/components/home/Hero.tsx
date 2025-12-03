import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const Card: React.FC<{ title: string; subtitle: string; icon?: React.ReactNode; className?: string; children?: React.ReactNode }> = ({ title, subtitle, icon, className = '', children }) => {
  return (
    <div className={`w-64 h-44 rounded-2xl bg-card/90 border border-border p-5 shadow-2xl ${className}`}>
      <div className="flex items-start justify-between mb-2">
        <div>
          <div className="text-sm text-muted-foreground">{subtitle}</div>
          <div className="font-heading font-bold text-2xl">{title}</div>
        </div>
        <div className="ml-4">{icon}</div>
      </div>

      <div className="text-sm text-muted-foreground mt-2">{children}</div>
    </div>
  );
};

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // quick eligibility demo
  const [courseFee, setCourseFee] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [estimate, setEstimate] = useState<string | null>(null);

  const rotateY = useTransform(mouseX, [-200, 200], [18, -18]);
  const rotateX = useTransform(mouseY, [-200, 200], [-12, 12]);

  const springRy = useSpring(rotateY, { stiffness: 60, damping: 18 });
  const springRx = useSpring(rotateX, { stiffness: 60, damping: 18 });

  function handleMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* soft background layers */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute -top-20 -right-40 w-[520px] h-[520px] bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-28 -left-40 w-[420px] h-[420px] bg-gradient-to-tr from-accent/20 to-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Compare 50+ Education Loans
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Fund your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">education</span> with confidence
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-6">
              Personalized loan offers from top lenders — compare rates, tenure and eligibility. Fast approvals and bank-grade security.
            </p>

            <div className="flex gap-4 mb-6">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-xl transition">Compare Loans</button>
              <button className="px-6 py-3 bg-card border border-border rounded-xl font-semibold">Calculate Eligibility</button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="p-3 rounded-lg bg-card/80 border border-border text-center">
                <div className="text-sm text-muted-foreground">Loans Disbursed</div>
                <div className="font-bold text-lg">₹500Cr+</div>
              </div>
              <div className="p-3 rounded-lg bg-card/80 border border-border text-center">
                <div className="text-sm text-muted-foreground">Students Funded</div>
                <div className="font-bold text-lg">10K+</div>
              </div>
              <div className="p-3 rounded-lg bg-card/80 border border-border text-center">
                <div className="text-sm text-muted-foreground">Approval Rate</div>
                <div className="font-bold text-lg">98%</div>
              </div>
            </div>

            {/* quick eligibility mini-form (client-side demo) */}
            <div className="bg-card/70 border border-border rounded-xl p-4 max-w-sm">
              <div className="text-sm text-muted-foreground mb-2">Quick eligibility (demo)</div>
              <div className="flex gap-2 mb-2">
                <input
                  value={courseFee}
                  onChange={(e) => setCourseFee(e.target.value)}
                  placeholder="Course cost (₹)"
                  className="w-1/2 px-3 py-2 rounded-lg bg-transparent border border-border"
                />
                <input
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(e.target.value)}
                  placeholder="Monthly income (₹)"
                  className="w-1/2 px-3 py-2 rounded-lg bg-transparent border border-border"
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const fee = Number(courseFee.replace(/[^0-9.]/g, '')) || 0;
                    const income = Number(monthlyIncome.replace(/[^0-9.]/g, '')) || 0;
                    // naive demo calc: 60% of annual income capped to course fee
                    const calc = Math.min(fee, Math.round(income * 12 * 0.6));
                    setEstimate(calc > 0 ? `₹${calc.toLocaleString()}` : 'Enter values');
                  }}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold"
                >
                  Check
                </button>
                <div className="text-sm text-muted-foreground">{estimate ?? ''}</div>
              </div>
            </div>
          </div>

          {/* 3D scene */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className="w-[520px] h-[320px] relative rounded-3xl"
              style={{ rotateX: springRx, rotateY: springRy, perspective: 1200, transformStyle: 'preserve-3d' } as any}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 60, damping: 16 }}
            >
              {/* depth shadow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-card/80 to-card/60 shadow-2xl" />

              {/* decorative floating orbs */}
              <motion.div
                className="absolute -top-8 -left-10 w-28 h-28 rounded-full bg-primary/20 blur-2xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transform: 'translateZ(140px)' }}
              />

              <motion.div
                className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-accent/20 blur-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transform: 'translateZ(120px)' }}
              />

              {/* layered cards with different Z depths */}
              <motion.div
                className="absolute left-6 top-6"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.12, type: 'spring', stiffness: 50 }}
                style={{ transform: 'translateZ(120px)' }}
              >
                <Card
                  title="8.5% p.a."
                  subtitle="Starting rate"
                  icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="rgba(99,102,241,0.12)"/><path d="M8 12h8" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                >
                  <ul className="list-disc ml-4">
                    <li>Fixed & floating options</li>
                    <li>No prepayment penalty</li>
                  </ul>
                </Card>
              </motion.div>

              <motion.div
                className="absolute left-48 top-14"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.22, type: 'spring', stiffness: 48 }}
                style={{ transform: 'translateZ(60px)' }}
              >
                <Card
                  title="50+ Lenders"
                  subtitle="Compare offers"
                  icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="4" fill="rgba(16,185,129,0.12)"/><path d="M8 12h8" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                >
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-muted-foreground">Top banks & NBFCs</div>
                    <div className="ml-auto text-xs text-success font-semibold">Verified</div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                className="absolute left-28 top-44"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.32, type: 'spring', stiffness: 46 }}
                style={{ transform: 'translateZ(20px)' }}
              >
                <Card
                  title="24h"
                  subtitle="Fast approval"
                  icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v6l4 2" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" stroke="#F59E0B" strokeWidth="1.2"/></svg>}
                >
                  <div className="text-sm">Upload docs via app — instant pre-approval for eligible profiles.</div>
                </Card>
              </motion.div>

              {/* subtle base plane */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[360px] h-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
