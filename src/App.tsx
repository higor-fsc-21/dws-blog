import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { HomePage, PostDetailPage } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="post/:id" element={<PostDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
