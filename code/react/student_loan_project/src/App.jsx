import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoanTypes from "./components/LoanTypes";
import Home from "./components/Home";
import ApplyLoan from "./components/ApplyLoan";
import LoanPolicy from "./components/LoanPolicy";



function App () {
  return (
    <BrowserRouter >
    <Routes className="app">
      <Route path="/" element={<Home />} />
      <Route path="/loan-types" element={<LoanTypes />} />
      <Route path="/apply-loan" element={<ApplyLoan />} />
      <Route path="/loan-policy" element={<LoanPolicy />} />
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;