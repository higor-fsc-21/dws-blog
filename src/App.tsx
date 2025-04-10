import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout/Layout";
import { HomePage, PostDetailsPage } from "./pages";
import { AppProvider } from "./contexts/AppContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="post/:id" element={<PostDetailsPage />} />
            </Route>
          </Routes>
        </Router>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
