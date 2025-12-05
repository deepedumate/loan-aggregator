// Currency Formatting (Indian Format)
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatLakhsCrores = (amount: number): string => {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  } else if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(2)} L`;
  } else {
    return formatCurrency(amount);
  }
};

// Number Formatting
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat("en-IN").format(num);
};

export const formatPercentage = (num: number, decimals: number = 2): string => {
  return `${num.toFixed(decimals)}%`;
};

// Date Formatting
export const formatDate = (date: string | Date): string => {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
};

export const formatShortDate = (date: string | Date): string => {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
};

export const formatRelativeTime = (date: string | Date): string => {
  const now = new Date();
  const targetDate = new Date(date);
  const diffInDays = Math.ceil(
    (targetDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Tomorrow";
  if (diffInDays < 7) return `In ${diffInDays} days`;
  if (diffInDays < 30) return `In ${Math.ceil(diffInDays / 7)} weeks`;
  return formatShortDate(date);
};

// File Size Formatting
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
};

// Validation Functions
export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const re = /^[6-9]\d{9}$/;
  return re.test(phone.replace(/[^0-9]/g, ""));
};

export const validatePAN = (pan: string): boolean => {
  const re = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return re.test(pan.toUpperCase());
};

export const validateAadhaar = (aadhaar: string): boolean => {
  const re = /^\d{12}$/;
  return re.test(aadhaar.replace(/[^0-9]/g, ""));
};

export const validateGST = (gst: string): boolean => {
  const re = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  return re.test(gst.toUpperCase());
};

// EMI Calculation
export const calculateEMI = (
  principal: number,
  annualRate: number,
  tenureMonths: number
): number => {
  const monthlyRate = annualRate / 12 / 100;
  if (monthlyRate === 0) return principal / tenureMonths;

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  return Math.round(emi);
};

// Total Interest Calculation
export const calculateTotalInterest = (
  principal: number,
  annualRate: number,
  tenureMonths: number
): number => {
  const emi = calculateEMI(principal, annualRate, tenureMonths);
  return emi * tenureMonths - principal;
};

// Eligibility Scoring
export const calculateEligibilityScore = (
  academicScore: number,
  financialScore: number,
  profileScore: number
): number => {
  return Math.round(
    academicScore * 0.3 + financialScore * 0.4 + profileScore * 0.3
  );
};

export const getEligibilityLevel = (
  score: number
): "excellent" | "good" | "fair" | "needs-improvement" => {
  if (score >= 80) return "excellent";
  if (score >= 65) return "good";
  if (score >= 50) return "fair";
  return "needs-improvement";
};

// Status Colors
export const getStatusColor = (
  status: string
): { bg: string; text: string; dot: string } => {
  const colors: Record<string, { bg: string; text: string; dot: string }> = {
    completed: {
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-700 dark:text-green-400",
      dot: "bg-green-500",
    },
    "in-progress": {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-700 dark:text-blue-400",
      dot: "bg-blue-500",
    },
    pending: {
      bg: "bg-gray-100 dark:bg-gray-800",
      text: "text-gray-700 dark:text-gray-400",
      dot: "bg-gray-400",
    },
    approved: {
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-700 dark:text-green-400",
      dot: "bg-green-500",
    },
    rejected: {
      bg: "bg-red-100 dark:bg-red-900/30",
      text: "text-red-700 dark:text-red-400",
      dot: "bg-red-500",
    },
    submitted: {
      bg: "bg-orange-100 dark:bg-orange-900/30",
      text: "text-orange-700 dark:text-orange-400",
      dot: "bg-orange-500",
    },
    uploaded: {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-700 dark:text-blue-400",
      dot: "bg-blue-500",
    },
    verified: {
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-700 dark:text-green-400",
      dot: "bg-green-500",
    },
  };

  return colors[status] || colors.pending;
};

// Text Truncation
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

// Generate Random ID
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

// Debounce Function
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Copy to Clipboard
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

// Download File
export const downloadFile = (
  content: string,
  filename: string,
  type: string = "text/plain"
): void => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
