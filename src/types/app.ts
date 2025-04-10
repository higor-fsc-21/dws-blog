export interface FilterOption {
  id: string;
  label: string;
}

export interface AppliedFilters {
  authorsIds?: string[];
  categoriesIds?: string[];
  order?: "newest" | "oldest";
}
