export interface FilterOption {
  id: string;
  label: string;
}

export interface AppliedFilters {
  search?: string;
  authorsIds?: string[];
  categoriesIds?: string[];
  order?: "newest" | "oldest";
}
