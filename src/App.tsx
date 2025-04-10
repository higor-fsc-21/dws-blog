import { QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { queryClient } from "./config/reactQuery";
import { AppProvider } from "./contexts/AppContext";
import { HomePage, PostDetailsPage } from "./pages";

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
