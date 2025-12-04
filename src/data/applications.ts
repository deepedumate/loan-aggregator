export type ApplicationStatus = 
  | "draft"
  | "submitted"
  | "under_review"
  | "documents_pending"
  | "approved"
  | "disbursed"
  | "rejected";

export interface ApplicationTimeline {
  step: string;
  status: "completed" | "current" | "pending";
  date?: string;
  description: string;
}

export interface Application {
  id: string;
  loanId: string;
  lenderName: string;
  lenderLogo: string;
  status: ApplicationStatus;
  amount: number;
  currency: string;
  interestRate: number;
  tenure: number;
  appliedDate: string;
  updatedDate: string;
  university: string;
  course: string;
  country: string;
  timeline: ApplicationTimeline[];
  documentsSubmitted: number;
  documentsRequired: number;
  nextStep?: string;
  remarks?: string;
}

export const applications: Application[] = [
  {
    id: "app-001",
    loanId: "loan-002",
    lenderName: "Prodigy Finance",
    lenderLogo: "https://ui-avatars.com/api/?name=PF&background=1A73E8&color=fff&size=100&bold=true",
    status: "under_review",
    amount: 4500000,
    currency: "INR",
    interestRate: 8.75,
    tenure: 180,
    appliedDate: "2024-01-15",
    updatedDate: "2024-01-22",
    university: "University of Michigan",
    course: "MS Computer Science",
    country: "USA",
    timeline: [
      {
        step: "Application Started",
        status: "completed",
        date: "Jan 15, 2024",
        description: "You started your loan application",
      },
      {
        step: "Documents Uploaded",
        status: "completed",
        date: "Jan 18, 2024",
        description: "All required documents submitted",
      },
      {
        step: "Under Review",
        status: "current",
        date: "Jan 22, 2024",
        description: "Your application is being reviewed",
      },
      {
        step: "Approval",
        status: "pending",
        description: "Awaiting final approval decision",
      },
      {
        step: "Disbursement",
        status: "pending",
        description: "Loan amount will be disbursed to university",
      },
    ],
    documentsSubmitted: 5,
    documentsRequired: 5,
    nextStep: "Awaiting credit assessment results",
  },
  {
    id: "app-002",
    loanId: "loan-001",
    lenderName: "HDFC Credila",
    lenderLogo: "https://ui-avatars.com/api/?name=HDFC&background=004C8F&color=fff&size=100&bold=true",
    status: "documents_pending",
    amount: 3500000,
    currency: "INR",
    interestRate: 10.5,
    tenure: 120,
    appliedDate: "2024-01-10",
    updatedDate: "2024-01-20",
    university: "University of Toronto",
    course: "MBA",
    country: "Canada",
    timeline: [
      {
        step: "Application Started",
        status: "completed",
        date: "Jan 10, 2024",
        description: "You started your loan application",
      },
      {
        step: "Documents Uploaded",
        status: "current",
        date: "Jan 20, 2024",
        description: "Some documents need attention",
      },
      {
        step: "Under Review",
        status: "pending",
        description: "Application will be reviewed after document submission",
      },
      {
        step: "Approval",
        status: "pending",
        description: "Awaiting final approval decision",
      },
      {
        step: "Disbursement",
        status: "pending",
        description: "Loan amount will be disbursed",
      },
    ],
    documentsSubmitted: 3,
    documentsRequired: 6,
    nextStep: "Upload remaining 3 documents",
    remarks: "Bank statements and ITR documents are pending",
  },
  {
    id: "app-003",
    loanId: "loan-003",
    lenderName: "SBI Education Loan",
    lenderLogo: "https://ui-avatars.com/api/?name=SBI&background=22409A&color=fff&size=100&bold=true",
    status: "approved",
    amount: 2800000,
    currency: "INR",
    interestRate: 8.65,
    tenure: 144,
    appliedDate: "2023-12-01",
    updatedDate: "2024-01-05",
    university: "Imperial College London",
    course: "MSc Data Science",
    country: "UK",
    timeline: [
      {
        step: "Application Started",
        status: "completed",
        date: "Dec 1, 2023",
        description: "You started your loan application",
      },
      {
        step: "Documents Uploaded",
        status: "completed",
        date: "Dec 10, 2023",
        description: "All required documents submitted",
      },
      {
        step: "Under Review",
        status: "completed",
        date: "Dec 20, 2023",
        description: "Application reviewed successfully",
      },
      {
        step: "Approval",
        status: "completed",
        date: "Jan 5, 2024",
        description: "Loan approved! Congratulations!",
      },
      {
        step: "Disbursement",
        status: "current",
        description: "Awaiting your confirmation to disburse",
      },
    ],
    documentsSubmitted: 6,
    documentsRequired: 6,
    nextStep: "Confirm disbursement details",
  },
  {
    id: "app-004",
    loanId: "loan-006",
    lenderName: "MPOWER Financing",
    lenderLogo: "https://ui-avatars.com/api/?name=MP&background=00B894&color=fff&size=100&bold=true",
    status: "disbursed",
    amount: 5200000,
    currency: "INR",
    interestRate: 9.25,
    tenure: 120,
    appliedDate: "2023-09-15",
    updatedDate: "2023-11-20",
    university: "Columbia University",
    course: "MS Financial Engineering",
    country: "USA",
    timeline: [
      {
        step: "Application Started",
        status: "completed",
        date: "Sep 15, 2023",
        description: "You started your loan application",
      },
      {
        step: "Documents Uploaded",
        status: "completed",
        date: "Sep 25, 2023",
        description: "All required documents submitted",
      },
      {
        step: "Under Review",
        status: "completed",
        date: "Oct 10, 2023",
        description: "Application reviewed successfully",
      },
      {
        step: "Approval",
        status: "completed",
        date: "Oct 25, 2023",
        description: "Loan approved!",
      },
      {
        step: "Disbursement",
        status: "completed",
        date: "Nov 20, 2023",
        description: "Loan disbursed to university",
      },
    ],
    documentsSubmitted: 5,
    documentsRequired: 5,
  },
  {
    id: "app-005",
    loanId: "loan-004",
    lenderName: "Incred Education",
    lenderLogo: "https://ui-avatars.com/api/?name=IN&background=FF6B35&color=fff&size=100&bold=true",
    status: "draft",
    amount: 2000000,
    currency: "INR",
    interestRate: 11.5,
    tenure: 84,
    appliedDate: "2024-01-25",
    updatedDate: "2024-01-25",
    university: "TU Munich",
    course: "MS Mechanical Engineering",
    country: "Germany",
    timeline: [
      {
        step: "Application Started",
        status: "current",
        date: "Jan 25, 2024",
        description: "Complete your application",
      },
      {
        step: "Documents Upload",
        status: "pending",
        description: "Upload required documents",
      },
      {
        step: "Under Review",
        status: "pending",
        description: "Application will be reviewed",
      },
      {
        step: "Approval",
        status: "pending",
        description: "Awaiting approval",
      },
      {
        step: "Disbursement",
        status: "pending",
        description: "Loan disbursement",
      },
    ],
    documentsSubmitted: 0,
    documentsRequired: 5,
    nextStep: "Complete application form",
  },
];

export const getApplicationById = (id: string): Application | undefined => {
  return applications.find((app) => app.id === id);
};

export const getApplicationsByStatus = (status: ApplicationStatus): Application[] => {
  return applications.filter((app) => app.status === status);
};

export const getStatusColor = (status: ApplicationStatus): string => {
  const colors: Record<ApplicationStatus, string> = {
    draft: "bg-slate-100 text-slate-700",
    submitted: "bg-blue-100 text-blue-700",
    under_review: "bg-amber-100 text-amber-700",
    documents_pending: "bg-orange-100 text-orange-700",
    approved: "bg-green-100 text-green-700",
    disbursed: "bg-emerald-100 text-emerald-700",
    rejected: "bg-red-100 text-red-700",
  };
  return colors[status];
};

export const getStatusLabel = (status: ApplicationStatus): string => {
  const labels: Record<ApplicationStatus, string> = {
    draft: "Draft",
    submitted: "Submitted",
    under_review: "Under Review",
    documents_pending: "Documents Pending",
    approved: "Approved",
    disbursed: "Disbursed",
    rejected: "Rejected",
  };
  return labels[status];
};

// Stats for dashboard
export const dashboardStats = {
  totalApplications: applications.length,
  approvedLoans: applications.filter((a) => a.status === "approved" || a.status === "disbursed").length,
  pendingApplications: applications.filter((a) => 
    a.status === "under_review" || a.status === "documents_pending" || a.status === "submitted"
  ).length,
  totalSanctioned: applications
    .filter((a) => a.status === "approved" || a.status === "disbursed")
    .reduce((sum, app) => sum + app.amount, 0),
  documentsUploaded: applications.reduce((sum, app) => sum + app.documentsSubmitted, 0),
  documentsRequired: applications.reduce((sum, app) => sum + app.documentsRequired, 0),
};

// Notifications mock data
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  timestamp: string;
  applicationId?: string;
}

export const notifications: Notification[] = [
  {
    id: "notif-001",
    title: "Application Update",
    message: "Your Prodigy Finance application is now under review. Expected response in 3-5 business days.",
    type: "info",
    read: false,
    timestamp: "2024-01-22T10:30:00Z",
    applicationId: "app-001",
  },
  {
    id: "notif-002",
    title: "Documents Required",
    message: "HDFC Credila requires additional documents: Bank statements (6 months) and ITR.",
    type: "warning",
    read: false,
    timestamp: "2024-01-20T14:15:00Z",
    applicationId: "app-002",
  },
  {
    id: "notif-003",
    title: "Loan Approved! 🎉",
    message: "Congratulations! Your SBI Education Loan of ₹28 Lakhs has been approved.",
    type: "success",
    read: true,
    timestamp: "2024-01-05T09:00:00Z",
    applicationId: "app-003",
  },
  {
    id: "notif-004",
    title: "Disbursement Complete",
    message: "MPOWER Financing has disbursed ₹52 Lakhs to Columbia University.",
    type: "success",
    read: true,
    timestamp: "2023-11-20T16:45:00Z",
    applicationId: "app-004",
  },
  {
    id: "notif-005",
    title: "New Loan Offers Available",
    message: "Based on your profile, we found 3 new loan offers with lower interest rates.",
    type: "info",
    read: false,
    timestamp: "2024-01-23T08:00:00Z",
  },
];

export const unreadNotificationsCount = notifications.filter((n) => !n.read).length;
