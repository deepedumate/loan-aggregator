import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export type SortField = "interestRate" | "maxLoanAmount" | "processingFee" | "rating";
export type SortDirection = "asc" | "desc";

export interface SortOptions {
  field: SortField;
  direction: SortDirection;
}

interface SortControlsProps {
  sortOptions: SortOptions;
  onSortChange: (options: SortOptions) => void;
}

const SORT_FIELDS = [
  { value: "interestRate", label: "Interest Rate" },
  { value: "maxLoanAmount", label: "Max Loan Amount" },
  { value: "processingFee", label: "Processing Fee" },
  { value: "rating", label: "Rating" },
] as const;

export function SortControls({ sortOptions, onSortChange }: SortControlsProps) {
  const toggleDirection = () => {
    onSortChange({
      ...sortOptions,
      direction: sortOptions.direction === "asc" ? "desc" : "asc",
    });
  };

  const getSortLabel = () => {
    const field = SORT_FIELDS.find(f => f.value === sortOptions.field);
    return field?.label || "Sort by";
  };

  const getDirectionLabel = () => {
    if (sortOptions.field === "interestRate" || sortOptions.field === "processingFee") {
      return sortOptions.direction === "asc" ? "Low to High" : "High to Low";
    }
    return sortOptions.direction === "asc" ? "Lowest First" : "Highest First";
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground">Sort by:</span>
      </div>
      
      <Select
        value={sortOptions.field}
        onValueChange={(value) =>
          onSortChange({ ...sortOptions, field: value as SortField })
        }
      >
        <SelectTrigger className="w-[180px] h-10 rounded-lg bg-card border-border/50 hover:border-primary/40 transition-colors">
          <SelectValue placeholder="Sort by..." />
        </SelectTrigger>
        <SelectContent>
          {SORT_FIELDS.map((field) => (
            <SelectItem key={field.value} value={field.value}>
              {field.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        onClick={toggleDirection}
        variant="outline"
        size="sm"
        className="h-10 px-3 rounded-lg border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
      >
        {sortOptions.direction === "asc" ? (
          <ArrowUp className="w-4 h-4 mr-2" />
        ) : (
          <ArrowDown className="w-4 h-4 mr-2" />
        )}
        {getDirectionLabel()}
      </Button>
    </div>
  );
}
