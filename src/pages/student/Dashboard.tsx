import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Plus,
  Search,
} from 'lucide-react';
import HeaderBar from '../../components/student/HeaderBar';
import {
  StatsCard,
  ApplicationMiniCard,
  Timeline,
  LoanCard,
} from '../../components/student';
import {
  applications,
  dashboardStats,
  Application,
} from '../../data/applications';
import { loans } from '../../data/loans';
import { currentStudent } from '../../data/user';

export default function Dashboard() {
  const navigate = useNavigate();
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);

  // Get recent and active applications
  const recentApplications = applications.slice(0, 3);
  const activeApplication = applications.find(
    (app) => app.status === 'under_review' || app.status === 'documents_pending'
  );

  // Featured loans
  const featuredLoans = loans.filter((loan) => loan.featured).slice(0, 3);

  return (
    <>
      <HeaderBar
        title="Dashboard"
        subtitle={`Welcome back, ${currentStudent.firstName}!`}
      />

      <main className="flex-1 p-4 lg:p-8 space-y-8 overflow-y-auto">
        {/* Stats Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Applications"
              value={dashboardStats.totalApplications}
              subtitle={`${dashboardStats.pendingApplications} pending`}
              icon={FileText}
              gradient="primary"
              trend={{ value: 25, isPositive: true }}
              index={0}
            />
            <StatsCard
              title="Approved Loans"
              value={dashboardStats.approvedLoans}
              subtitle="Congratulations!"
              icon={CheckCircle}
              gradient="success"
              index={1}
            />
            <StatsCard
              title="In Progress"
              value={dashboardStats.pendingApplications}
              subtitle="Pending review"
              icon={Clock}
              gradient="warning"
              index={2}
            />
            <StatsCard
              title="Total Sanctioned"
              value={`₹${(dashboardStats.totalSanctioned / 100000).toFixed(1)}L`}
              subtitle="Loan amount"
              icon={TrendingUp}
              gradient="accent"
              index={3}
            />
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.button
              onClick={() => navigate('/student/compare')}
              className="p-6 glass-card rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-all group"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary-light">
                  <Search className="text-white" size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100">
                    Compare Loans
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Find the best rates
                  </p>
                </div>
                <ArrowRight className="ml-auto text-slate-400 group-hover:text-primary transition-colors" />
              </div>
            </motion.button>

            <motion.button
              onClick={() => navigate('/student/applications')}
              className="p-6 glass-card rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-accent dark:hover:border-accent transition-all group"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-accent-light">
                  <Plus className="text-white" size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100">
                    New Application
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Start applying now
                  </p>
                </div>
                <ArrowRight className="ml-auto text-slate-400 group-hover:text-accent transition-colors" />
              </div>
            </motion.button>

            <motion.button
              onClick={() => navigate('/student/documents')}
              className="p-6 glass-card rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-green-500 dark:hover:border-green-500 transition-all group"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
                  <FileText className="text-white" size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-slate-800 dark:text-slate-100">
                    Upload Documents
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {dashboardStats.documentsRequired - dashboardStats.documentsUploaded} pending
                  </p>
                </div>
                <ArrowRight className="ml-auto text-slate-400 group-hover:text-green-500 transition-colors" />
              </div>
            </motion.button>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Applications */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Application Progress */}
            {activeApplication && (
              <section className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="font-display font-bold text-xl text-slate-800 dark:text-slate-100">
                      Application in Progress
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {activeApplication.lenderName} - {activeApplication.course}
                    </p>
                  </div>
                  <button
                    onClick={() => navigate(`/student/applications/${activeApplication.id}`)}
                    className="text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                  >
                    View Details →
                  </button>
                </div>
                <Timeline items={activeApplication.timeline} variant="horizontal" />
              </section>
            )}

            {/* Recent Applications */}
            <section className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-bold text-xl text-slate-800 dark:text-slate-100">
                  Recent Applications
                </h2>
                <button
                  onClick={() => navigate('/student/applications')}
                  className="text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                >
                  View All →
                </button>
              </div>
              <div className="space-y-3">
                {recentApplications.map((app) => (
                  <ApplicationMiniCard
                    key={app.id}
                    application={app}
                    onClick={() => navigate(`/student/applications/${app.id}`)}
                  />
                ))}
              </div>
            </section>

            {/* Featured Loans */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-bold text-xl text-slate-800 dark:text-slate-100">
                  Recommended for You
                </h2>
                <button
                  onClick={() => navigate('/student/compare')}
                  className="text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                >
                  View All →
                </button>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {featuredLoans.map((loan) => (
                  <LoanCard
                    key={loan.id}
                    loan={loan}
                    onViewDetails={(loan) => {
                      console.log('View loan:', loan);
                      // Navigate to loan details or open modal
                    }}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Quick Info */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <section className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-display font-bold text-lg text-slate-800 dark:text-slate-100 mb-4">
                Profile Completion
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {currentStudent.profileCompletion}% Complete
                    </span>
                    <span className="text-xs text-accent font-semibold">
                      {100 - currentStudent.profileCompletion}% remaining
                    </span>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${currentStudent.profileCompletion}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
                <button
                  onClick={() => navigate('/student/profile')}
                  className="w-full py-2 px-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  Complete Profile
                </button>
              </div>
            </section>

            {/* Document Status */}
            <section className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-display font-bold text-lg text-slate-800 dark:text-slate-100 mb-4">
                Documents Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-600 dark:text-green-400" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Uploaded
                    </span>
                  </div>
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    {dashboardStats.documentsUploaded}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-amber-600 dark:text-amber-400" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Pending
                    </span>
                  </div>
                  <span className="font-semibold text-amber-600 dark:text-amber-400">
                    {dashboardStats.documentsRequired - dashboardStats.documentsUploaded}
                  </span>
                </div>
              </div>
            </section>

            {/* Quick Stats */}
            <section className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-display font-bold text-lg text-slate-800 dark:text-slate-100 mb-4">
                Quick Stats
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Avg. Interest Rate
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    9.2%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Avg. Processing Time
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    15 days
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Success Rate
                  </span>
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    85%
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
