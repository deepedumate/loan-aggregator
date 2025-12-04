export interface Loan {
  id: string;
  lenderName: string;
  lenderLogo: string;
  interestRate: {
    min: number;
    max: number;
  };
  loanAmount: {
    min: number;
    max: number;
    currency: string;
  };
  tenure: {
    min: number;
    max: number;
  };
  processingFee: string;
  eligibility: {
    minAge: number;
    maxAge: number;
    minScore: number;
    coApplicantRequired: boolean;
    acceptedCourses: string[];
    acceptedCountries: string[];
  };
  highlights: string[];
  documentsRequired: string[];
  charges: {
    name: string;
    value: string;
  }[];
  repaymentOptions: string[];
  rating: number;
  reviewCount: number;
  recommended: boolean;
  featured: boolean;
}

export const loans: Loan[] = [
  {
    id: "loan-001",
    lenderName: "HDFC Credila",
    lenderLogo: "https://ui-avatars.com/api/?name=HDFC&background=004C8F&color=fff&size=100&bold=true",
    interestRate: { min: 9.5, max: 11.5 },
    loanAmount: { min: 500000, max: 10000000, currency: "INR" },
    tenure: { min: 12, max: 180 },
    processingFee: "1% of loan amount",
    eligibility: {
      minAge: 18,
      maxAge: 35,
      minScore: 650,
      coApplicantRequired: true,
      acceptedCourses: ["MBA", "MS", "Engineering", "Medicine", "Law"],
      acceptedCountries: ["USA", "UK", "Canada", "Australia", "Germany", "Ireland"],
    },
    highlights: [
      "No collateral up to ₹40 lakhs",
      "100% financing including living expenses",
      "Flexible repayment options",
      "Quick disbursement in 3-5 days",
    ],
    documentsRequired: [
      "Admission letter from university",
      "KYC documents (Aadhaar, PAN)",
      "Academic transcripts",
      "Income proof of co-applicant",
      "Bank statements (6 months)",
      "Passport copy",
    ],
    charges: [
      { name: "Processing Fee", value: "1% of loan amount" },
      { name: "Prepayment Charges", value: "Nil after 12 months" },
      { name: "Late Payment Fee", value: "2% per month" },
      { name: "Documentation Fee", value: "₹2,500" },
    ],
    repaymentOptions: [
      "Full EMI from day 1",
      "Interest only during study + 6 months",
      "Partial payment during study",
    ],
    rating: 4.5,
    reviewCount: 2340,
    recommended: true,
    featured: true,
  },
  {
    id: "loan-002",
    lenderName: "Prodigy Finance",
    lenderLogo: "https://ui-avatars.com/api/?name=PF&background=1A73E8&color=fff&size=100&bold=true",
    interestRate: { min: 7.5, max: 9.99 },
    loanAmount: { min: 1500000, max: 15000000, currency: "INR" },
    tenure: { min: 84, max: 240 },
    processingFee: "0% (included in interest)",
    eligibility: {
      minAge: 18,
      maxAge: 40,
      minScore: 700,
      coApplicantRequired: false,
      acceptedCourses: ["MBA", "MS", "Engineering", "Data Science"],
      acceptedCountries: ["USA", "UK", "Canada", "France", "Spain", "Netherlands"],
    },
    highlights: [
      "No co-signer or collateral required",
      "Covers tuition + living expenses",
      "Interest-only payments during study",
      "6-month grace period after graduation",
    ],
    documentsRequired: [
      "Admission letter",
      "Passport",
      "Academic transcripts",
      "English proficiency scores",
      "Resume/CV",
    ],
    charges: [
      { name: "Processing Fee", value: "Nil" },
      { name: "Prepayment Charges", value: "Nil" },
      { name: "Late Payment Fee", value: "5% of missed payment" },
      { name: "Currency Conversion", value: "Market rate" },
    ],
    repaymentOptions: [
      "Interest-only during study",
      "6-month grace period post-study",
      "Up to 20 years repayment",
    ],
    rating: 4.7,
    reviewCount: 5621,
    recommended: true,
    featured: true,
  },
  {
    id: "loan-003",
    lenderName: "SBI Education Loan",
    lenderLogo: "https://ui-avatars.com/api/?name=SBI&background=22409A&color=fff&size=100&bold=true",
    interestRate: { min: 8.15, max: 10.15 },
    loanAmount: { min: 200000, max: 15000000, currency: "INR" },
    tenure: { min: 60, max: 180 },
    processingFee: "₹10,000",
    eligibility: {
      minAge: 18,
      maxAge: 35,
      minScore: 600,
      coApplicantRequired: true,
      acceptedCourses: ["All professional courses", "MBA", "MS", "Engineering", "Medicine"],
      acceptedCountries: ["USA", "UK", "Canada", "Australia", "Germany", "Singapore", "New Zealand"],
    },
    highlights: [
      "Lowest interest rates for girls (0.5% concession)",
      "Government subsidy available",
      "Tax benefits under Sec 80E",
      "Simple interest during moratorium",
    ],
    documentsRequired: [
      "Admission proof",
      "KYC documents",
      "Income proof",
      "Collateral documents (if applicable)",
      "Academic records",
      "2 passport photos",
    ],
    charges: [
      { name: "Processing Fee", value: "₹10,000" },
      { name: "Prepayment Charges", value: "Nil" },
      { name: "Late Payment Fee", value: "2% per annum" },
      { name: "Inspection Charges", value: "₹5,000" },
    ],
    repaymentOptions: [
      "Moratorium: Course + 12 months",
      "Up to 15 years repayment",
      "Step-up EMI available",
    ],
    rating: 4.3,
    reviewCount: 8934,
    recommended: false,
    featured: false,
  },
  {
    id: "loan-004",
    lenderName: "Incred Education",
    lenderLogo: "https://ui-avatars.com/api/?name=IN&background=FF6B35&color=fff&size=100&bold=true",
    interestRate: { min: 10.5, max: 13.5 },
    loanAmount: { min: 300000, max: 8000000, currency: "INR" },
    tenure: { min: 36, max: 120 },
    processingFee: "2% of loan amount",
    eligibility: {
      minAge: 18,
      maxAge: 30,
      minScore: 650,
      coApplicantRequired: true,
      acceptedCourses: ["MBA", "MS", "Engineering", "Design", "Animation"],
      acceptedCountries: ["USA", "UK", "Canada", "Australia", "Ireland"],
    },
    highlights: [
      "Instant approval within 48 hours",
      "Minimal documentation",
      "Doorstep document collection",
      "Dedicated relationship manager",
    ],
    documentsRequired: [
      "Offer letter",
      "KYC documents",
      "Co-applicant income proof",
      "Bank statements",
      "Academic documents",
    ],
    charges: [
      { name: "Processing Fee", value: "2% of loan amount" },
      { name: "Prepayment Charges", value: "4% in year 1, 2% thereafter" },
      { name: "Late Payment Fee", value: "3% per month" },
      { name: "Bounce Charges", value: "₹500" },
    ],
    repaymentOptions: [
      "EMI from disbursement",
      "Interest servicing during study",
      "Moratorium up to 6 months",
    ],
    rating: 4.1,
    reviewCount: 1567,
    recommended: false,
    featured: false,
  },
  {
    id: "loan-005",
    lenderName: "Auxilo Finserve",
    lenderLogo: "https://ui-avatars.com/api/?name=AX&background=6B4CE6&color=fff&size=100&bold=true",
    interestRate: { min: 9.75, max: 12.0 },
    loanAmount: { min: 400000, max: 7500000, currency: "INR" },
    tenure: { min: 48, max: 144 },
    processingFee: "1.5% of loan amount",
    eligibility: {
      minAge: 17,
      maxAge: 32,
      minScore: 625,
      coApplicantRequired: true,
      acceptedCourses: ["MBA", "MS", "Engineering", "Hospitality", "Design"],
      acceptedCountries: ["USA", "UK", "Canada", "Australia", "Germany", "France"],
    },
    highlights: [
      "Loan for part-time courses",
      "No margin money required",
      "Coverage for visa fees",
      "Insurance coverage included",
    ],
    documentsRequired: [
      "Admission letter",
      "Identity proof",
      "Address proof",
      "Academic documents",
      "Co-applicant ITR (3 years)",
      "Property documents (if collateral)",
    ],
    charges: [
      { name: "Processing Fee", value: "1.5% of loan amount" },
      { name: "Prepayment Charges", value: "3% in year 1" },
      { name: "Late Payment Fee", value: "2% per month" },
      { name: "Legal Charges", value: "₹3,000" },
    ],
    repaymentOptions: [
      "Full moratorium during study",
      "Partial interest payment option",
      "Step-up EMI plans",
    ],
    rating: 4.2,
    reviewCount: 892,
    recommended: true,
    featured: false,
  },
  {
    id: "loan-006",
    lenderName: "MPOWER Financing",
    lenderLogo: "https://ui-avatars.com/api/?name=MP&background=00B894&color=fff&size=100&bold=true",
    interestRate: { min: 8.99, max: 14.49 },
    loanAmount: { min: 2000000, max: 12500000, currency: "INR" },
    tenure: { min: 120, max: 180 },
    processingFee: "0%",
    eligibility: {
      minAge: 18,
      maxAge: 45,
      minScore: 680,
      coApplicantRequired: false,
      acceptedCourses: ["MBA", "MS", "Engineering", "Law", "Public Policy"],
      acceptedCountries: ["USA", "Canada"],
    },
    highlights: [
      "No cosigner needed",
      "No collateral required",
      "Fixed interest rates",
      "Supports 350+ schools in US & Canada",
    ],
    documentsRequired: [
      "Offer letter",
      "Passport",
      "Visa (if available)",
      "Academic records",
      "Proof of enrollment",
    ],
    charges: [
      { name: "Processing Fee", value: "Nil" },
      { name: "Origination Fee", value: "4.99%" },
      { name: "Prepayment Charges", value: "Nil" },
      { name: "Late Payment Fee", value: "$25" },
    ],
    repaymentOptions: [
      "Interest-only during school",
      "Grace period after graduation",
      "10-15 year repayment terms",
    ],
    rating: 4.4,
    reviewCount: 3215,
    recommended: true,
    featured: true,
  },
];

export const getLoanById = (id: string): Loan | undefined => {
  return loans.find((loan) => loan.id === id);
};

export const getFilteredLoans = (filters: {
  minRate?: number;
  maxRate?: number;
  minAmount?: number;
  maxAmount?: number;
  tenure?: number;
  country?: string;
}) => {
  return loans.filter((loan) => {
    if (filters.minRate && loan.interestRate.min < filters.minRate) return false;
    if (filters.maxRate && loan.interestRate.max > filters.maxRate) return false;
    if (filters.minAmount && loan.loanAmount.max < filters.minAmount) return false;
    if (filters.maxAmount && loan.loanAmount.min > filters.maxAmount) return false;
    if (filters.tenure && loan.tenure.max < filters.tenure) return false;
    if (filters.country && !loan.eligibility.acceptedCountries.includes(filters.country)) return false;
    return true;
  });
};

export const formatCurrency = (amount: number, currency: string = "INR"): string => {
  if (currency === "INR") {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} L`;
    } else {
      return `₹${amount.toLocaleString("en-IN")}`;
    }
  }
  return `${currency} ${amount.toLocaleString()}`;
};
