import { useState, useMemo, useEffect } from "react";
// import { Header } from "@/components/edu-loan-guide/Header";
import { Footer } from "@/components/edu-loan-guide/Footer";
import { LoanCard, LoanData } from "@/components/edu-loan-guide/LoanCard";
import { LoanCardSkeleton } from "@/components/edu-loan-guide/LoanCardSkeleton";
import { LoanFilters, FilterValues, FilterPreset } from "@/components/edu-loan-guide/LoanFilters";
import { LoanComparison } from "@/components/edu-loan-guide/LoanComparison";
import { SortControls, SortOptions } from "@/components/edu-loan-guide/SortControls";
import { InterestedModal } from "@/components/edu-loan-guide/InterestedModal";
import { ProductTour } from "@/components/edu-loan-guide/ProductTour";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { GraduationCap, TrendingUp, ArrowRight, CheckCircle2, Heart, X } from "lucide-react";
import { toast } from "@/components/ui/sonner";

// Mock loan data - in production this would come from an API
const MOCK_LOANS: LoanData[] = [
  {
    id: "1",
    lenderName: "Education Finance Corp",
    interestRate: 6.5,
    maxLoanAmount: 150000,
    repaymentPeriod: "15 years",
    processingFee: 1.5,
    rating: 5,
    features: [
      "No collateral required",
      "Flexible repayment options",
      "Grace period of 6 months",
      "Part-payment without penalties"
    ],
    eligibilityCriteria: [
      "Valid admission letter required",
      "Co-signer may be needed",
      "Minimum credit score: 650"
    ]
  },
  {
    id: "2",
    lenderName: "Global Student Finance",
    interestRate: 7.2,
    maxLoanAmount: 125000,
    repaymentPeriod: "12 years",
    processingFee: 2.0,
    rating: 4,
    features: [
      "Quick approval in 48 hours",
      "No prepayment penalty",
      "Online application process",
      "Dedicated loan advisor"
    ],
    eligibilityCriteria: [
      "Enrollment verification required",
      "Proof of income or co-signer",
      "Valid student visa"
    ]
  },
  {
    id: "3",
    lenderName: "Scholar Funding Solutions",
    interestRate: 5.9,
    maxLoanAmount: 200000,
    repaymentPeriod: "20 years",
    processingFee: 1.0,
    rating: 5,
    features: [
      "Lowest interest rates",
      "Interest-only payments while studying",
      "Unemployment protection",
      "Death and disability coverage"
    ],
    eligibilityCriteria: [
      "Must be admitted to partner schools",
      "Minimum GPA of 3.0",
      "U.S. co-signer required for international students"
    ]
  },
  {
    id: "4",
    lenderName: "Future Academic Bank",
    interestRate: 7.8,
    maxLoanAmount: 100000,
    repaymentPeriod: "10 years",
    processingFee: 2.5,
    rating: 3,
    features: [
      "Same-day approval available",
      "Mobile app for tracking",
      "Automatic payment discount",
      "Refinancing options available"
    ],
    eligibilityCriteria: [
      "Credit check required",
      "Employment history verification",
      "Valid identification documents"
    ]
  },
  {
    id: "5",
    lenderName: "Merit-Based Lending",
    interestRate: 6.8,
    maxLoanAmount: 175000,
    repaymentPeriod: "18 years",
    processingFee: 1.75,
    rating: 4,
    features: [
      "Rate reductions for excellent grades",
      "No origination fees",
      "Cosigner release after 24 months",
      "Financial literacy resources"
    ],
    eligibilityCriteria: [
      "Academic merit considered",
      "Institution must be accredited",
      "Demonstrate financial need"
    ]
  },
  {
    id: "6",
    lenderName: "International Study Fund",
    interestRate: 8.2,
    maxLoanAmount: 90000,
    repaymentPeriod: "8 years",
    processingFee: 3.0,
    rating: 4,
    features: [
      "Supports study in 50+ countries",
      "Multi-currency disbursement",
      "Travel insurance included",
      "Emergency financial assistance"
    ],
    eligibilityCriteria: [
      "International students welcome",
      "Passport verification required",
      "Admission to recognized institution"
    ]
  }
];

const PRESETS_STORAGE_KEY = "loan-filter-presets";
const FAVORITES_STORAGE_KEY = "loan-favorites";
const DUMMY_API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function LoanAggregator() {
  const [filters, setFilters] = useState<FilterValues>({});
  const [selectedLoanIds, setSelectedLoanIds] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [sortOptions, setSortOptions] = useState<SortOptions>({
    field: "interestRate",
    direction: "asc",
  });
  const [presets, setPresets] = useState<FilterPreset[]>([]);
  const [favoriteLoanIds, setFavoriteLoanIds] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showInterestedModal, setShowInterestedModal] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState<LoanData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loans, setLoans] = useState<LoanData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  // Simulate data fetching on mount
  useEffect(() => {
    const fetchLoans = async () => {
      setIsLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1200));
      setLoans(MOCK_LOANS);
      setIsLoading(false);
    };
    
    fetchLoans();
  }, []);

  // Load presets from localStorage on mount
  useEffect(() => {
    const savedPresets = localStorage.getItem(PRESETS_STORAGE_KEY);
    if (savedPresets) {
      try {
        setPresets(JSON.parse(savedPresets));
      } catch (error) {
        console.error("Error loading presets:", error);
      }
    }
  }, []);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (savedFavorites) {
      try {
        setFavoriteLoanIds(JSON.parse(savedFavorites));
      } catch (error) {
        console.error("Error loading favorites:", error);
      }
    }
  }, []);

  // Save presets to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(PRESETS_STORAGE_KEY, JSON.stringify(presets));
  }, [presets]);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteLoanIds));
  }, [favoriteLoanIds]);

  // Filter and sort loans based on current filters and sort options
  const filteredAndSortedLoans = useMemo(() => {
    // First, filter loans
    let filtered = loans.filter(loan => {
      // Favorites filter
      if (showFavoritesOnly && !favoriteLoanIds.includes(loan.id)) {
        return false;
      }

      // Search query filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const searchableText = `${loan.lenderName} ${loan.features.join(' ')}`.toLowerCase();
        if (!searchableText.includes(query)) return false;
      }

      // Loan amount filters
      if (filters.minLoanAmount && loan.maxLoanAmount < filters.minLoanAmount) {
        return false;
      }
      if (filters.maxLoanAmount && loan.maxLoanAmount > filters.maxLoanAmount) {
        return false;
      }

      // Note: In a real application, you would filter based on other criteria like
      // studyLevel, status, school, program, etc. by matching against loan eligibility

      return true;
    });

    // Then, sort the filtered results
    const sorted = [...filtered].sort((a, b) => {
      const { field, direction } = sortOptions;
      let comparison = 0;

      switch (field) {
        case "interestRate":
          comparison = a.interestRate - b.interestRate;
          break;
        case "maxLoanAmount":
          comparison = a.maxLoanAmount - b.maxLoanAmount;
          break;
        case "processingFee":
          comparison = a.processingFee - b.processingFee;
          break;
        case "rating":
          comparison = a.rating - b.rating;
          break;
      }

      return direction === "asc" ? comparison : -comparison;
    });

    return sorted;
  }, [filters, sortOptions, showFavoritesOnly, favoriteLoanIds, loans]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredAndSortedLoans.length / ITEMS_PER_PAGE);
  const paginatedLoans = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredAndSortedLoans.slice(startIndex, endIndex);
  }, [filteredAndSortedLoans, currentPage, ITEMS_PER_PAGE]);

  // Reset to page 1 when filters or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sortOptions, showFavoritesOnly]);

  const selectedLoans = useMemo(() => {
    return loans.filter(loan => selectedLoanIds.includes(loan.id));
  }, [selectedLoanIds, loans]);

  const appliedFiltersCount = Object.keys(filters).filter(
    key => filters[key as keyof FilterValues] && key !== 'searchQuery'
  ).length;

  // Preset management functions
  const handleSavePreset = (name: string, filterValues: FilterValues) => {
    const newPreset: FilterPreset = {
      id: Date.now().toString(),
      name,
      filters: filterValues,
      createdAt: new Date().toISOString(),
    };
    setPresets([...presets, newPreset]);
  };

  const handleLoadPreset = (preset: FilterPreset) => {
    setFilters(preset.filters);
  };

  const handleDeletePreset = (presetId: string) => {
    setPresets(presets.filter(p => p.id !== presetId));
  };

  const handleInterested = (loanId: string) => {
    const loan = loans.find(l => l.id === loanId);
    if (loan) {
      setSelectedLoan(loan);
      setShowInterestedModal(true);
    }
  };

  const handleCompare = (loanId: string) => {
    if (selectedLoanIds.includes(loanId)) {
      setSelectedLoanIds(selectedLoanIds.filter(id => id !== loanId));
      toast.info("Loan removed from comparison");
    } else if (selectedLoanIds.length >= 4) {
      toast.error("You can compare up to 4 loans at a time");
    } else {
      setSelectedLoanIds([...selectedLoanIds, loanId]);
      toast.success("Loan added to comparison");
    }
  };

  const handleRemoveFromComparison = (loanId: string) => {
    setSelectedLoanIds(selectedLoanIds.filter(id => id !== loanId));
  };

  const handleOpenComparison = () => {
    if (selectedLoanIds.length < 2) {
      toast.error("Select at least 2 loans to compare");
      return;
    }
    setShowComparison(true);
  };

  const handleClearSelection = () => {
    setSelectedLoanIds([]);
    toast.info("Selection cleared", {
      description: "All loans removed from comparison.",
    });
  };

  const handleToggleFavorite = async (loanId: string) => {
    const loan = loans.find(l => l.id === loanId);
    const isFavorite = favoriteLoanIds.includes(loanId);

    if (isFavorite) {
      setFavoriteLoanIds(favoriteLoanIds.filter(id => id !== loanId));
      toast.success("Removed from favorites", {
        description: `${loan?.lenderName} has been removed from your bookmarks.`,
      });
    } else {
      setFavoriteLoanIds([...favoriteLoanIds, loanId]);
      toast.success("Added to favorites! ❤️", {
        description: `${loan?.lenderName} has been bookmarked for easy access.`,
      });

      // Send to dummy API (demonstration only)
      try {
        await fetch(DUMMY_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: 'Loan Favorited',
            loanId: loanId,
            lenderName: loan?.lenderName,
            userId: 'demo-user',
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (error) {
        console.error("Error sending to API:", error);
      }
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top of results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* <Header /> */}
      
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b border-border/50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary-light text-primary-foreground shadow-lg">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight mb-3">
                Find Your Perfect Education Loan
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Compare loans from top lenders, get personalized recommendations, and secure funding for your academic journey. Enterprise-grade tools for students.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <p className="text-2xl font-bold text-primary">{isLoading ? "..." : loans.length}</p>
              <p className="text-sm text-muted-foreground">Lenders</p>
            </div>
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <p className="text-2xl font-bold text-accent">$200K</p>
              <p className="text-sm text-muted-foreground">Max Loan</p>
            </div>
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <p className="text-2xl font-bold text-success">5.9%</p>
              <p className="text-sm text-muted-foreground">Best Rate</p>
            </div>
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <p className="text-2xl font-bold text-primary">24hrs</p>
              <p className="text-sm text-muted-foreground">Avg Approval</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-6 filter-section">
          <LoanFilters
            filters={filters}
            onFilterChange={setFilters}
            appliedFiltersCount={appliedFiltersCount}
            presets={presets}
            onSavePreset={handleSavePreset}
            onLoadPreset={handleLoadPreset}
            onDeletePreset={handleDeletePreset}
          />
        </div>

        {/* Sort Controls and Favorites Toggle */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-4 sort-controls">
          <SortControls
            sortOptions={sortOptions}
            onSortChange={setSortOptions}
          />
          <Button
            variant={showFavoritesOnly ? "default" : "outline"}
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`transition-all duration-300 hover:scale-105 group ${showFavoritesOnly ? "bg-gradient-to-r from-accent to-accent-light" : ""}`}
          >
            <Heart className={`w-4 h-4 mr-2 transition-all duration-300 group-hover:scale-125 ${showFavoritesOnly ? "fill-current animate-pulse" : ""}`} />
            {showFavoritesOnly ? `Favorites (${favoriteLoanIds.length})` : "Show Favorites"}
          </Button>
        </div>

        {/* Compare Button - Fixed */}
        {selectedLoanIds.length > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-scale-in w-full max-w-md px-4 comparison-button">
            <div className="flex items-center gap-3">
              <Button
                onClick={handleClearSelection}
                size="lg"
                variant="outline"
                className="h-16 w-16 rounded-2xl border-2 hover:bg-destructive/10 hover:border-destructive/50 transition-all duration-300 hover:scale-110 hover:rotate-90 shadow-lg group"
              >
                <X className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
              </Button>
              <div className="relative flex-1">
                <Button
                  onClick={handleOpenComparison}
                  size="lg"
                  className="w-full h-16 px-8 rounded-2xl bg-gradient-to-r from-accent via-accent-light to-accent hover:from-accent-light hover:via-accent hover:to-accent-light !text-white hover:!text-white font-bold transition-all duration-300 hover:scale-105 active:scale-95 text-lg border-2 border-accent/30 group"
                  style={{
                    boxShadow: `0 0 ${20 + (selectedLoanIds.length * 15)}px hsl(var(--accent) / ${0.4 + (selectedLoanIds.length * 0.15)}), 0 10px 40px -10px hsl(var(--accent) / ${0.3 + (selectedLoanIds.length * 0.1)})`
                  }}
                >
                  <TrendingUp className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                  <span className="transition-transform duration-300 group-hover:scale-105">
                    Compare {selectedLoanIds.length} Loan{selectedLoanIds.length > 1 ? 's' : ''}
                  </span>
                  <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Badge 
                  className="absolute -top-2 -right-2 h-8 px-3 text-sm font-bold bg-primary text-primary-foreground shadow-lg border-2 border-background animate-bounce-subtle"
                >
                  {selectedLoanIds.length}/4
                </Badge>
              </div>
            </div>
          </div>
        )}

        {/* Results Header */}
        {!isLoading && (
          <div className="flex items-center justify-between mb-6 animate-fade-in">
            <div>
              <h2 className="text-xl font-bold font-heading">
                {filteredAndSortedLoans.length} Loan Options Available
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {totalPages > 1 && (
                  <>
                    Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredAndSortedLoans.length)} of {filteredAndSortedLoans.length} • 
                  </>
                )}
                {" "}Sorted by {sortOptions.field.replace(/([A-Z])/g, ' $1').toLowerCase()}
              </p>
            </div>
          </div>
        )}

        {/* Loan Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(ITEMS_PER_PAGE)].map((_, index) => (
              <LoanCardSkeleton key={index} />
            ))}
          </div>
        ) : paginatedLoans.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {paginatedLoans.map((loan, index) => (
                <div
                  key={loan.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <LoanCard
                    loan={loan}
                    onInterested={handleInterested}
                    onCompare={handleCompare}
                    onToggleFavorite={handleToggleFavorite}
                    isSelected={selectedLoanIds.includes(loan.id)}
                    isFavorite={favoriteLoanIds.includes(loan.id)}
                  />
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 mb-8 flex justify-center animate-fade-in">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-primary/10 transition-colors"}
                      />
                    </PaginationItem>

                    {/* First page */}
                    {currentPage > 3 && (
                      <>
                        <PaginationItem>
                          <PaginationLink
                            onClick={() => handlePageChange(1)}
                            className="cursor-pointer hover:bg-primary/10 transition-colors"
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        {currentPage > 4 && (
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )}
                      </>
                    )}

                    {/* Page numbers around current page */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(page => {
                        return page === currentPage || 
                               page === currentPage - 1 || 
                               page === currentPage + 1 ||
                               (currentPage <= 2 && page <= 3) ||
                               (currentPage >= totalPages - 1 && page >= totalPages - 2);
                      })
                      .map(page => (
                        <PaginationItem key={page}>
                          <PaginationLink
                            onClick={() => handlePageChange(page)}
                            isActive={currentPage === page}
                            className={`cursor-pointer transition-all duration-300 ${
                              currentPage === page
                                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                : "hover:bg-primary/10"
                            }`}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      ))}

                    {/* Last page */}
                    {currentPage < totalPages - 2 && (
                      <>
                        {currentPage < totalPages - 3 && (
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )}
                        <PaginationItem>
                          <PaginationLink
                            onClick={() => handlePageChange(totalPages)}
                            className="cursor-pointer hover:bg-primary/10 transition-colors"
                          >
                            {totalPages}
                          </PaginationLink>
                        </PaginationItem>
                      </>
                    )}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-primary/10 transition-colors"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">No loans match your criteria</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters to see more options
            </p>
            <Button
              onClick={() => setFilters({})}
              variant="outline"
              className="border-primary/40 hover:bg-primary/5"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>

      {/* Comparison Modal */}
      <LoanComparison
        loans={selectedLoans}
        open={showComparison}
        onClose={() => setShowComparison(false)}
        onRemoveLoan={handleRemoveFromComparison}
        onInterested={handleInterested}
      />

      {/* Interested Modal */}
      <InterestedModal
        open={showInterestedModal}
        onClose={() => setShowInterestedModal(false)}
        loan={selectedLoan}
      />

      {/* Product Tour */}
      <ProductTour />

      <Footer />
    </div>
  );
}
