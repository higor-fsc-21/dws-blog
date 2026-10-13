import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { AppliedFilters } from "../types/app";

interface AppContextType {
  search: string;
  setSearch: (search: string) => void;
  appliedFilters: AppliedFilters;
  setAppliedFilters: React.Dispatch<React.SetStateAction<AppliedFilters>>;
  handleApplyFilters: (filters: Partial<AppliedFilters>) => void;
  resetFilters: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [search, setSearch] = useState("");
  const [appliedFilters, setAppliedFilters] = useState<AppliedFilters>({
    order: "newest",
  });

  const handleApplyFilters = useCallback((filters: Partial<AppliedFilters>) => {
    setAppliedFilters((prev) => ({ ...prev, ...filters }));
  }, []);

  const resetFilters = useCallback(() => {
    setAppliedFilters({ order: "newest" });
    setSearch("");
  }, []);

  const value = {
    search,
    setSearch,
    appliedFilters,
    setAppliedFilters,
    handleApplyFilters,
    resetFilters,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
