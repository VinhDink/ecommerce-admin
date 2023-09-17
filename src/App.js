import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryManagerLayout from "./layout/CategoryManagerLayout";
import SellerManagerLayout from "./layout/SellerManagerLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<CategoryManagerLayout />} />
          <Route path="/category-manager" element={<CategoryManagerLayout />} />
          <Route path="/seller-approval" element={<SellerManagerLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
