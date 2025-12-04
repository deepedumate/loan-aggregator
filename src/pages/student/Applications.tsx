import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import HeaderBar from '../../components/student/HeaderBar';
import { ApplicationCard } from '../../components/student';
import {
  applications,
  Application,
  ApplicationStatus,
  getApplicationsByStatus,
} from '../../data/applications';

export default function Applications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);

  // Filter applications
  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.lenderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.course.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Status tabs with counts
  const statusTabs = [
    { label: 'All', value: 'all' as const, count: applications.length },
    {
      label: 'Draft',
      value: 'draft' as const,
      count: getApplicationsByStatus('draft').length,
    },
    {
      label: 'Under Review',
      value: 'under_review' as const,
      count: getApplicationsByStatus('under_review').length,
    },
    {
      label: 'Docs Pending',
      value: 'documents_pending' as const,
      count: getApplicationsByStatus('documents_pending').length,
    },
    {
      label: 'Approved',
      value: 'approved' as const,
      count: getApplicationsByStatus('approved').length,
    },
    {
      label: 'Disbursed',
      value: 'disbursed' as const,
      count: getApplicationsByStatus('disbursed').length,
    },
  ];

  const handleViewDetails = (app: Application) => {
    setSelectedApp(app);
    console.log('View application details:', app);
    // TODO: Open modal or navigate to details page
  };

  return (
    <>
      <HeaderBar
        title="My Applications"
        subtitle={`${filteredApplications.length} application${
          filteredApplications.length !== 1 ? 's' : ''
        } found`}
      />

      <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
        {/* Search and Filters */}
        <section className="glass-card p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by lender, university, or course..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>

            {/* Filter Button (Mobile) */}
            <button className="md:hidden flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium">
              <Filter size={20} />
              Filters
            </button>
          </div>
        </section>

        {/* Status Tabs */}
        <section className="overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {statusTabs.map((tab) => (
              <motion.button
                key={tab.value}
                onClick={() => setStatusFilter(tab.value)}
                className={`
                  px-4 py-2.5 rounded-xl font-medium text-sm transition-all whitespace-nowrap
                  ${
                    statusFilter === tab.value
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary'
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab.label}
                {tab.count > 0 && (
                  <span
                    className={`
                    ml-2 px-2 py-0.5 rounded-full text-xs font-bold
                    ${
                      statusFilter === tab.value
                        ? 'bg-white/20'
                        : 'bg-slate-100 dark:bg-slate-700'
                    }
                  `}
                  >
                    {tab.count}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </section>

        {/* Applications Grid */}
        {filteredApplications.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApplications.map((app, index) => (
              <ApplicationCard
                key={app.id}
                application={app}
                index={index}
                onViewDetails={handleViewDetails}
              />
            ))}
          </section>
        ) : (
          // Empty State
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-12 rounded-2xl border border-slate-200 dark:border-slate-700 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
              <Search size={32} className="text-slate-400 dark:text-slate-500" />
            </div>
            <h3 className="font-display font-semibold text-lg text-slate-700 dark:text-slate-300 mb-2">
              No applications found
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
              {searchQuery
                ? `No applications match "${searchQuery}"`
                : `No applications with status "${statusFilter}"`}
            </p>
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setStatusFilter('all');
                }}
                className="mt-4 px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                Clear Filters
              </button>
            )}
          </motion.div>
        )}

        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Total Amount</p>
            <p className="font-display font-bold text-2xl gradient-text">
              ₹
              {(
                filteredApplications.reduce((sum, app) => sum + app.amount, 0) / 100000
              ).toFixed(1)}
              L
            </p>
          </div>
          <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Avg. Interest</p>
            <p className="font-display font-bold text-2xl text-primary dark:text-primary-light">
              {(
                filteredApplications.reduce((sum, app) => sum + app.interestRate, 0) /
                filteredApplications.length
              ).toFixed(2)}
              %
            </p>
          </div>
          <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Docs Uploaded</p>
            <p className="font-display font-bold text-2xl text-green-600 dark:text-green-400">
              {filteredApplications.reduce((sum, app) => sum + app.documentsSubmitted, 0)}/
              {filteredApplications.reduce((sum, app) => sum + app.documentsRequired, 0)}
            </p>
          </div>
          <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Success Rate</p>
            <p className="font-display font-bold text-2xl text-accent dark:text-accent-light">
              {(
                (getApplicationsByStatus('approved').length /
                  (applications.length - getApplicationsByStatus('draft').length)) *
                100
              ).toFixed(0)}
              %
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
