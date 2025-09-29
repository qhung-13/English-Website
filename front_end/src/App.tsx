import React  from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Layout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Auth from "./pages/Auth"
import Vocabulary from "./pages/Vocabulary";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
