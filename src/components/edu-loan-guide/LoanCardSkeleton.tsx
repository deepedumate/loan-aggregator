import { Skeleton } from "@/components/ui/skeleton";

export function LoanCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-card border border-border/50 shadow-md">
      {/* Premium gradient overlay */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-pulse" />

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Skeleton className="w-12 h-12 rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-32" />
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="w-1.5 h-1.5 rounded-full" />
                ))}
              </div>
            </div>
          </div>
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>

        {/* Interest Rate Display */}
        <div className="rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-5 mb-6 border border-primary/20">
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-10 w-20" />
        </div>

        {/* Key Details Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="px-3 py-2.5 rounded-lg bg-muted/30 border border-border/30">
              <Skeleton className="h-3 w-16 mb-1" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-6">
          <Skeleton className="h-3 w-24 mb-3" />
          <div className="space-y-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="w-4 h-4 rounded-full flex-shrink-0" />
                <Skeleton className="h-4 flex-1" />
              </div>
            ))}
          </div>
          <Skeleton className="h-4 w-32 mt-3" />
        </div>

        {/* CTAs */}
        <div className="flex gap-3">
          <Skeleton className="flex-1 h-11 rounded-md" />
          <Skeleton className="flex-1 h-11 rounded-md" />
        </div>
      </div>
    </div>
  );
}
