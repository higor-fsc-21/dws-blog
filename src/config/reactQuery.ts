import { QueryClient } from "@tanstack/react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { persistQueryClient } from "@tanstack/react-query-persist-client";

const ONE_HOUR_IN_MS = 60 * 60 * 1000;
const TEN_MINUTES_IN_MS = 10 * 60 * 1000;
const ONE_DAY_IN_MS = ONE_HOUR_IN_MS * 24;

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: ONE_HOUR_IN_MS,
      staleTime: TEN_MINUTES_IN_MS,
    },
  },
});

persistQueryClient({
  queryClient,
  maxAge: ONE_DAY_IN_MS,
  buster: "my-app-version-1",
  persister: localStoragePersister,
});
