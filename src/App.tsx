import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { HomePage, PostDetailsPage } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="post/:postId" element={<PostDetailsPage />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
