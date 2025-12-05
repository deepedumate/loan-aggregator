// Student Profile Types
export interface StudentProfile {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  educationLevel: "undergraduate" | "postgraduate" | "doctorate";
  targetCountry: string;
  course: string;
  university: string;
  courseFee: number;
  requestedAmount: number;
  coApplicantAvailable: boolean;
  coApplicantIncome?: number;
}

// Eligibility Types
export interface EligibilityScore {
  overallScore: number;
  academicScore: number;
  financialScore: number;
  profileScore: number;
  eligibilityLevel: "excellent" | "good" | "fair" | "needs-improvement";
  recommendations: string[];
}

// Lender Types
export interface Lender {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviews: number;
  minAmount: number;
  maxAmount: number;
  interestRate: number;
  processingFee: number;
  marginMoney: number;
  tenure: number;
  loanTypes: ("secured" | "unsecured")[];
  features: string[];
  eligibilityCriteria: string[];
  disbursementTime: string;
  approvalRate: number;
}

export interface SelectedLender {
  lender: Lender;
  lenderName: string;
  requestedAmount: number;
  selectedLoanType: "secured" | "unsecured";
  estimatedEMI: number;
  totalInterest: number;
  totalRepayment: number;
}

// Document Types
export interface DocumentRequirement {
  id: string;
  name: string;
  description: string;
  category: "student" | "co-applicant";
  required: boolean;
  formats: string[];
  maxSize: number;
}

export interface DocumentUpload {
  id: string;
  requirementId: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  uploadedAt: string;
  status: "uploaded" | "verified" | "rejected";
}

// Application Types
export interface ApplicationStage {
  id: string;
  name: string;
  status: "completed" | "in-progress" | "pending";
  completedAt?: string;
  estimatedTime?: string;
  description: string;
}

export interface Application {
  id: string;
  studentName: string;
  lenderName: string;
  loanAmount: number;
  status: "submitted" | "in-progress" | "approved" | "rejected";
  currentStage: string;
  submittedDate: string;
  expectedDecisionDate: string;
  stages?: ApplicationStage[];
}

// Loan Summary Types
export interface LoanDetails {
  principalAmount: number;
  interestRate: number;
  tenure: number;
  processingFee: number;
  marginMoney: number;
  emi: number;
  totalInterest: number;
  totalRepayment: number;
}

export interface DisbursementSchedule {
  id: string;
  phase: string;
  amount: number;
  scheduledDate: string;
  status: "pending" | "completed";
}

export interface RepaymentSchedule {
  id: string;
  month: number;
  dueDate: string;
  emi: number;
  principal: number;
  interest: number;
  balance: number;
}

// Filter Types
export interface LenderFilters {
  searchQuery: string;
  loanType: "all" | "secured" | "unsecured";
  minAmount: number;
  maxAmount: number;
  sortBy:
    | "relevance"
    | "interest-asc"
    | "interest-desc"
    | "amount-asc"
    | "amount-desc"
    | "rating";
}
