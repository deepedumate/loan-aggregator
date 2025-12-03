import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LoanData } from "./LoanCard";
import { toast } from "sonner";
import { Mail, User, CheckCircle2, AlertCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  signup as signupUser,
  updateUser,
} from "@/store/slices/contactAuthSlice";
import { LoanProduct } from "@/types/loanProduct";

const EMAIL_DOMAIN_CORRECTIONS: Record<string, string> = {
  // Gmail variations
  "gmial.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmil.com": "gmail.com",
  "gmaill.com": "gmail.com",
  "gmail.co": "gmail.com",
  "gmail.con": "gmail.com",
  "gamil.com": "gmail.com",
  "gmeil.com": "gmail.com",

  // Yahoo variations
  "yaho.com": "yahoo.com",
  "yahooo.com": "yahoo.com",
  "yahoo.co": "yahoo.com",
  "yahoo.con": "yahoo.com",
  "yhoo.com": "yahoo.com",
  "ymail.co": "ymail.com",

  // Outlook variations
  "outlok.com": "outlook.com",
  "outloo.com": "outlook.com",
  "outlook.co": "outlook.com",
  "outlook.con": "outlook.com",
  "hotmial.com": "hotmail.com",
  "hotmai.com": "hotmail.com",
  "hotmail.co": "hotmail.com",

  // Other common domains
  "aol.co": "aol.com",
  "icloud.co": "icloud.com",
  "protonmail.co": "protonmail.com",
  "live.co": "live.com",
};

interface InterestedModalProps {
  open: boolean;
  onClose: () => void;
  loan: LoanProduct | null;
}

export function InterestedModal({ open, onClose, loan }: InterestedModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    consent?: string;
  }>({});
  const [emailSuggestion, setEmailSuggestion] = useState<string | null>(null);
  const dispatch = useDispatch();
  const contactUser = useSelector((state: any) => state.contactAuth);
  console.log("Contact User State:", contactUser);

  // Check for email typos
  useEffect(() => {
    if (email && email.includes("@")) {
      const [localPart, domain] = email.split("@");
      if (domain && EMAIL_DOMAIN_CORRECTIONS[domain.toLowerCase()]) {
        const correctedDomain = EMAIL_DOMAIN_CORRECTIONS[domain.toLowerCase()];
        setEmailSuggestion(`${localPart}@${correctedDomain}`);
      } else {
        setEmailSuggestion(null);
      }
    } else {
      setEmailSuggestion(null);
    }
  }, [email]);

  const validateForm = () => {
    const newErrors: {
      firstName?: string;
      lastName?: string;
      email?: string;
      consent?: string;
    } = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (firstName.trim().length > 50) {
      newErrors.firstName = "First name must be less than 50 characters";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (lastName.trim().length > 50) {
      newErrors.lastName = "Last name must be less than 50 characters";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    } else if (email.length > 255) {
      newErrors.email = "Email must be less than 255 characters";
    }

    if (!consent) {
      newErrors.consent = "You must agree to be contacted to proceed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!loan) {
      toast.error("Invalid loan", {
        description: "Please try again or select a different loan.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const signupPayload = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim().toLowerCase(),
        phoneNumber: contactUser?.data?.student?.phone || "",
        formType: "loan_interest_form",
        submissionDate: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || window.location.href,
        loanPreference: loan.lender_name,
        utm_source:
          new URLSearchParams(window.location.search).get("utm_source") ||
          undefined,
        utm_campaign:
          new URLSearchParams(window.location.search).get("utm_campaign") ||
          undefined,
        utm_medium:
          new URLSearchParams(window.location.search).get("utm_medium") ||
          undefined,
      };

      console.log("Step 1: Submitting signup with payload:", signupPayload);

      const signupResult = await dispatch(signupUser(signupPayload) as any);

      if (!signupResult.payload) {
        throw new Error(
          signupResult.error?.message || "Failed to create/update contact"
        );
      }

      console.log("Step 2: Signup successful:", signupResult.payload);

      const studentId =
        signupResult.payload?.student?.id || contactUser?.data?.student?.id;

      if (!studentId) {
        throw new Error("Student ID not found after signup");
      }

      console.log("Step 3: Got student ID:", studentId);

      const existingInterested =
        signupResult.payload?.student?.interested || [];

      const newInterested = existingInterested.includes(loan.id)
        ? existingInterested
        : [...existingInterested, loan.id];

      console.log("Step 4: Updating interested array:", {
        existingInterested,
        newInterested,
        loanId: loan.id,
      });

      const updatePayload = {
        studentId: studentId,
        interested: newInterested,
      };

      const updateResult = await dispatch(
        updateUser({
          userId: studentId.toString(),
          payload: updatePayload,
        }) as any
      );

      if (!updateResult.payload) {
        throw new Error(
          updateResult.error?.message || "Failed to update interest"
        );
      }

      console.log("Step 5: Interest updated successfully!");

      toast.success("Interest Submitted! 🎉", {
        description: `Thank you ${firstName}! ${
          loan?.lender_name || "The lender"
        } will contact you at ${email} soon.`,
        duration: 5000,
      });

      setFirstName("");
      setLastName("");
      setEmail("");
      setConsent(false);
      setErrors({});
      onClose();
    } catch (error: any) {
      console.error("Interest submission error:", error);
      toast.error("Submission Failed", {
        description:
          error.message || "Please try again later or contact support.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setConsent(false);
    setErrors({});
    setEmailSuggestion(null);
    onClose();
  };

  const acceptSuggestion = () => {
    if (emailSuggestion) {
      setEmail(emailSuggestion);
      setEmailSuggestion(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-heading text-gray-900 dark:text-white">
            Express Your Interest
          </DialogTitle>
          <DialogDescription className="text-base text-gray-600 dark:text-gray-400">
            Interested in{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {loan?.lender_name}
            </span>
            ? Fill in your details and we'll connect you with the lender.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="firstName"
                className="text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                First Name <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
                <Input
                  id="firstName"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`pl-10 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-accent dark:focus:border-accent focus:ring-accent/20 ${
                    errors.firstName
                      ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                      : ""
                  }`}
                  maxLength={50}
                />
              </div>
              {errors.firstName && (
                <p className="text-xs text-destructive">{errors.firstName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="lastName"
                className="text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Last Name <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={`pl-10 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-accent dark:focus:border-accent focus:ring-accent/20 ${
                    errors.lastName
                      ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                      : ""
                  }`}
                  maxLength={50}
                />
              </div>
              {errors.lastName && (
                <p className="text-xs text-destructive">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Email Address <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`pl-10 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-accent dark:focus:border-accent focus:ring-accent/20 ${
                  errors.email
                    ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                    : ""
                }`}
                maxLength={255}
              />
            </div>
            {emailSuggestion && (
              <Alert className="border-accent/30 dark:border-accent/50 bg-accent/5 dark:bg-accent/10">
                <AlertCircle className="h-4 w-4 text-accent" />
                <AlertDescription className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Did you mean{" "}
                    <span className="font-semibold text-accent">
                      {emailSuggestion}
                    </span>
                    ?
                  </span>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={acceptSuggestion}
                    className="h-7 text-accent hover:text-accent hover:bg-accent/10 dark:hover:bg-accent/20 ml-2"
                  >
                    Use this
                  </Button>
                </AlertDescription>
              </Alert>
            )}
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 p-4 border border-gray-200 dark:border-gray-800">
            <div className="flex items-start gap-3">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked as boolean)}
                className={`border-gray-300 dark:border-gray-700 data-[state=checked]:bg-accent data-[state=checked]:border-accent ${
                  errors.consent ? "border-destructive" : ""
                }`}
              />
              <div className="flex-1">
                <Label
                  htmlFor="consent"
                  className="text-sm leading-relaxed cursor-pointer text-gray-700 dark:text-gray-300"
                >
                  I allow the Edumate team and{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {loan?.lender_name}
                  </span>{" "}
                  to contact me for additional steps regarding this loan
                  application.
                  <span className="text-destructive ml-1">*</span>
                </Label>
              </div>
            </div>
            {errors.consent && (
              <p className="text-xs text-destructive ml-7">{errors.consent}</p>
            )}
          </div>
        </form>

        <DialogFooter className="gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
            disabled={isSubmitting}
            className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-600"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Submit Interest
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
