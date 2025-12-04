import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import HeaderBar from '../../components/student/HeaderBar';
import { LoanCard, CompareTable } from '../../components/student';
import { loans, Loan, getFilteredLoans } from '../../data/loans';

export default function Compare() {
  const [selectedLoans, setSelectedLoans] = useState<Loan[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    maxRate: 15,
    minAmount: 0,
    maxAmount: 15000000,
    country: '',
  });

  // Filter loans based on search and filters
  const filteredLoans = loans.filter((loan) => {
    const matchesSearch =
      loan.lenderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loan.eligibility.acceptedCountries.some((country) =>
        country.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesFilters =
      loan.interestRate.max <= filters.maxRate &&
      loan.loanAmount.max >= filters.minAmount &&
      loan.loanAmount.min <= filters.maxAmount &&
      (filters.country === '' ||
        loan.eligibility.acceptedCountries.includes(filters.country));

    return matchesSearch && matchesFilters;
  });

  // Handle loan selection
  const handleSelect = (loan: Loan) => {
    if (selectedLoans.find((l) => l.id === loan.id)) {
      setSelectedLoans(selectedLoans.filter((l) => l.id !== loan.id));
    } else if (selectedLoans.length < 3) {
      setSelectedLoans([...selectedLoans, loan]);
    } else {
      // Show toast or alert: Maximum 3 loans can be selected
      alert('Maximum 3 loans can be compared at once');
    }
  };

  // Handle loan removal from comparison
  const handleRemove = (loanId: string) => {
    setSelectedLoans(selectedLoans.filter((l) => l.id !== loanId));
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      maxRate: 15,
      minAmount: 0,
      maxAmount: 15000000,
      country: '',
    });
  };

  // Unique countries from all loans
  const allCountries = Array.from(
    new Set(loans.flatMap((loan) => loan.eligibility.acceptedCountries))
  ).sort();

  return (
    <>
      <HeaderBar
        title="Compare Loans"
        subtitle={`${selectedLoans.length}/3 loans selected for comparison`}
      />

      <main className="flex-1 p-4 lg:p-8 space-y-6 overflow-y-auto">
        {/* Search and Filters Bar */}
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
                placeholder="Search by lender or country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                showFilters
                  ? 'bg-gradient-to-r from-primary to-accent text-white'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600'
              }`}
            >
              <SlidersHorizontal size={20} />
              Filters
            </button>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Max Interest Rate */}
                    <div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                        Max Interest Rate: {filters.maxRate}%
                      </label>
                      <input
                        type="range"
                        min="5"
                        max="20"
                        step="0.5"
                        value={filters.maxRate}
                        onChange={(e) =>
                          setFilters({ ...filters, maxRate: parseFloat(e.target.value) })
                        }
                        className="w-full"
                      />
                    </div>

                    {/* Min Amount */}
                    <div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                        Min Amount (Lakhs)
                      </label>
                      <input
                        type="number"
                        value={filters.minAmount / 100000}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            minAmount: parseFloat(e.target.value) * 100000,
                          })
                        }
                        className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200"
                      />
                    </div>

                    {/* Max Amount */}
                    <div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                        Max Amount (Lakhs)
                      </label>
                      <input
                        type="number"
                        value={filters.maxAmount / 100000}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            maxAmount: parseFloat(e.target.value) * 100000,
                          })
                        }
                        className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200"
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                        Country
                      </label>
                      <select
                        value={filters.country}
                        onChange={(e) => setFilters({ ...filters, country: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-slate-200"
                      >
                        <option value="">All Countries</option>
                        {allCountries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={resetFilters}
                      className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Comparison Table */}
        {selectedLoans.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-bold text-xl text-slate-800 dark:text-slate-100">
                Comparison ({selectedLoans.length})
              </h2>
              {selectedLoans.length > 0 && (
                <button
                  onClick={() => setSelectedLoans([])}
                  className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>
            <CompareTable loans={selectedLoans} onRemove={handleRemove} />
          </motion.section>
        )}

        {/* Available Loans */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display font-bold text-xl text-slate-800 dark:text-slate-100">
                Available Loans
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {filteredLoans.length} loan{filteredLoans.length !== 1 ? 's' : ''} found •{' '}
                {selectedLoans.length}/3 selected
              </p>
            </div>
          </div>

          {filteredLoans.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLoans.map((loan) => (
                <LoanCard
                  key={loan.id}
                  loan={loan}
                  isSelected={!!selectedLoans.find((l) => l.id === loan.id)}
                  onSelect={handleSelect}
                  onViewDetails={(loan) => {
                    console.log('View loan details:', loan);
                    // TODO: Open modal or navigate to details page
                  }}
                />
              ))}
            </div>
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
                No loans found
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  resetFilters();
                }}
                className="mt-4 px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </section>
      </main>
    </>
  );
}
