import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, X, Star, ExternalLink } from "lucide-react";
import { Loan, formatCurrency } from "../../data/loans";

interface CompareTableProps {
  loans: Loan[];
  onRemove: (loanId: string) => void;
}

interface ComparisonRow {
  label: string;
  key: string;
  render: (loan: Loan) => React.ReactNode;
}

const comparisonRows: ComparisonRow[] = [
  {
    label: "Interest Rate",
    key: "interestRate",
    render: (loan) => (
      <span className="font-semibold text-slate-800 dark:text-slate-200">
        {loan.interestRate.min}% - {loan.interestRate.max}%
      </span>
    ),
  },
  {
    label: "Max Loan Amount",
    key: "maxAmount",
    render: (loan) => (
      <span className="font-semibold text-slate-800 dark:text-slate-200">
        {formatCurrency(loan.loanAmount.max)}
      </span>
    ),
  },
  {
    label: "Min Loan Amount",
    key: "minAmount",
    render: (loan) => (
      <span className="text-slate-600 dark:text-slate-400">{formatCurrency(loan.loanAmount.min)}</span>
    ),
  },
  {
    label: "Tenure",
    key: "tenure",
    render: (loan) => (
      <span className="text-slate-600 dark:text-slate-400">
        {loan.tenure.min / 12} - {loan.tenure.max / 12} years
      </span>
    ),
  },
  {
    label: "Processing Fee",
    key: "processingFee",
    render: (loan) => <span className="text-slate-600 dark:text-slate-400">{loan.processingFee}</span>,
  },
  {
    label: "Co-Applicant Required",
    key: "coApplicant",
    render: (loan) =>
      loan.eligibility.coApplicantRequired ? (
        <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
          <CheckCircle2 size={16} /> Required
        </span>
      ) : (
        <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
          <XCircle size={16} /> Not Required
        </span>
      ),
  },
  {
    label: "Min Credit Score",
    key: "creditScore",
    render: (loan) => (
      <span className="text-slate-600 dark:text-slate-400">{loan.eligibility.minScore}</span>
    ),
  },
  {
    label: "Age Range",
    key: "ageRange",
    render: (loan) => (
      <span className="text-slate-600 dark:text-slate-400">
        {loan.eligibility.minAge} - {loan.eligibility.maxAge} years
      </span>
    ),
  },
  {
    label: "Rating",
    key: "rating",
    render: (loan) => (
      <div className="flex items-center gap-1">
        <Star size={14} className="text-amber-400 fill-amber-400" />
        <span className="font-semibold text-slate-800 dark:text-slate-200">{loan.rating}</span>
        <span className="text-xs text-slate-400 dark:text-slate-500">({loan.reviewCount})</span>
      </div>
    ),
  },
  {
    label: "Countries Supported",
    key: "countries",
    render: (loan) => (
      <div className="flex flex-wrap gap-1">
        {loan.eligibility.acceptedCountries.slice(0, 3).map((country) => (
          <span
            key={country}
            className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full"
          >
            {country}
          </span>
        ))}
        {loan.eligibility.acceptedCountries.length > 3 && (
          <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full">
            +{loan.eligibility.acceptedCountries.length - 3}
          </span>
        )}
      </div>
    ),
  },
  {
    label: "Courses Accepted",
    key: "courses",
    render: (loan) => (
      <div className="flex flex-wrap gap-1">
        {loan.eligibility.acceptedCourses.slice(0, 3).map((course) => (
          <span
            key={course}
            className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-primary-light text-xs rounded-full"
          >
            {course}
          </span>
        ))}
        {loan.eligibility.acceptedCourses.length > 3 && (
          <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-primary-light text-xs rounded-full">
            +{loan.eligibility.acceptedCourses.length - 3}
          </span>
        )}
      </div>
    ),
  },
  {
    label: "Documents Required",
    key: "documents",
    render: (loan) => (
      <span className="text-slate-600 dark:text-slate-400">{loan.documentsRequired.length} documents</span>
    ),
  },
];

export default function CompareTable({ loans, onRemove }: CompareTableProps) {
  if (loans.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16"
      >
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-slate-400 dark:text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
            />
          </svg>
        </div>
        <h3 className="font-display font-semibold text-lg text-slate-700 dark:text-slate-300 mb-2">
          No loans selected
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Select 2-3 loans from the list to compare them side by side
        </p>
      </motion.div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <motion.table
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full min-w-[600px]"
      >
        <thead>
          <tr>
            <th className="text-left p-4 bg-slate-50 dark:bg-slate-700/50 rounded-tl-xl font-semibold text-slate-600 dark:text-slate-300">
              Features
            </th>
            <AnimatePresence mode="popLayout">
              {loans.map((loan, index) => (
                <motion.th
                  key={loan.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 bg-slate-50 dark:bg-slate-700/50 ${
                    index === loans.length - 1 ? "rounded-tr-xl" : ""
                  }`}
                >
                  <div className="relative">
                    {/* Remove button */}
                    <motion.button
                      onClick={() => onRemove(loan.id)}
                      className="absolute -top-2 -right-2 p-1 bg-red-100 dark:bg-red-900/30 rounded-full text-red-500 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X size={14} />
                    </motion.button>

                    {/* Lender info */}
                    <div className="flex flex-col items-center gap-2">
                      <img
                        src={loan.lenderLogo}
                        alt={loan.lenderName}
                        className="w-12 h-12 rounded-xl object-cover shadow-md ring-2 ring-white dark:ring-slate-600"
                      />
                      <div className="text-center">
                        <p className="font-semibold text-slate-800 dark:text-slate-200">{loan.lenderName}</p>
                        {loan.recommended && (
                          <span className="inline-block mt-1 px-2 py-0.5 bg-gradient-to-r from-primary to-accent text-white text-[10px] font-bold rounded-full">
                            Recommended
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.th>
              ))}
            </AnimatePresence>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, rowIndex) => (
            <motion.tr
              key={row.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: rowIndex * 0.03 }}
              className="border-b border-slate-100 dark:border-slate-700 last:border-0"
            >
              <td className="p-4 font-medium text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-700/30">
                {row.label}
              </td>
              <AnimatePresence mode="popLayout">
                {loans.map((loan) => (
                  <motion.td
                    key={`${loan.id}-${row.key}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-4 text-center"
                  >
                    <div className="flex justify-center">{row.render(loan)}</div>
                  </motion.td>
                ))}
              </AnimatePresence>
            </motion.tr>
          ))}

          {/* Highlights row */}
          <motion.tr
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: comparisonRows.length * 0.03 }}
            className="border-b border-slate-100 dark:border-slate-700"
          >
            <td className="p-4 font-medium text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-700/30 align-top">
              Key Highlights
            </td>
            <AnimatePresence mode="popLayout">
              {loans.map((loan) => (
                <motion.td
                  key={`${loan.id}-highlights`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-4"
                >
                  <ul className="space-y-2 text-left">
                    {loan.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-green-500 flex-shrink-0 mt-0.5"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.td>
              ))}
            </AnimatePresence>
          </motion.tr>

          {/* Action row */}
          <tr>
            <td className="p-4 bg-slate-50/50 dark:bg-slate-700/30 rounded-bl-xl"></td>
            <AnimatePresence mode="popLayout">
              {loans.map((loan, index) => (
                <motion.td
                  key={`${loan.id}-action`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`p-4 ${index === loans.length - 1 ? "rounded-br-xl" : ""}`}
                >
                  <motion.button
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply Now
                    <ExternalLink size={14} />
                  </motion.button>
                </motion.td>
              ))}
            </AnimatePresence>
          </tr>
        </tbody>
      </motion.table>
    </div>
  );
}
