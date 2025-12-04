export interface StudentProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  dateOfBirth: string;
  nationality: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
  education: {
    degree: string;
    institution: string;
    graduationYear: number;
    percentage: number;
    gre?: number;
    ielts?: number;
    toefl?: number;
  };
  targetStudy: {
    course: string;
    university: string;
    country: string;
    intake: string;
    estimatedCost: number;
  };
  coApplicant?: {
    name: string;
    relationship: string;
    occupation: string;
    annualIncome: number;
    panNumber: string;
  };
  profileCompletion: number;
  createdAt: string;
  updatedAt: string;
}

export const currentStudent: StudentProfile = {
  id: "student-001",
  firstName: "Arjun",
  lastName: "Sharma",
  email: "arjun.sharma@email.com",
  phone: "+91 98765 43210",
  avatar: "https://ui-avatars.com/api/?name=Arjun+Sharma&background=0ea5e9&color=fff&size=128&bold=true",
  dateOfBirth: "1999-03-15",
  nationality: "Indian",
  address: {
    street: "123, Green Park Colony",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    pincode: "110016",
  },
  education: {
    degree: "B.Tech Computer Science",
    institution: "Delhi Technological University",
    graduationYear: 2021,
    percentage: 85.5,
    gre: 325,
    ielts: 7.5,
  },
  targetStudy: {
    course: "MS Computer Science",
    university: "University of Michigan",
    country: "USA",
    intake: "Fall 2024",
    estimatedCost: 6500000,
  },
  coApplicant: {
    name: "Rajesh Sharma",
    relationship: "Father",
    occupation: "Government Employee",
    annualIncome: 1800000,
    panNumber: "ABCDE1234F",
  },
  profileCompletion: 85,
  createdAt: "2024-01-01T00:00:00Z",
  updatedAt: "2024-01-20T00:00:00Z",
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "Just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  
  return formatDate(dateString);
};
