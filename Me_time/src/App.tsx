import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import ServiceSelect from "./pages/ServiceSelect";
import ServiceDetails from "./pages/ServiceDetails";
import ProfessionalSelect from "./pages/ProfessionalSelect";
// Naye Imports
import LoginPage from "./pages/LoginPage";
import VerificationPage from "./pages/VerificationPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white w-full font-sans">
        <Routes>
          <Route path="/" element={<Welcome />} />
          
          <Route path="/service" element={<ServiceSelect />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/professional" element={<ProfessionalSelect />} />

          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify" element={<VerificationPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/home" element={<div className="p-10">Home Page</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;