import { BrowserRouter, Routes, Route } from "react-router-dom";

// --- 1. Imports ko naye folders ke hisab se update kiya ---
import Welcome from "./pages/Public/Welcome"; 

import ServiceSelect from "./pages/Private/ServiceSelect";
import ServiceDetails from "./pages/Private/ServiceDetails";
import ProfessionalSelect from "./pages/Private/ProfessionalSelect";

import LoginPage from "./pages/Auth/Login";
import VerificationPage from "./pages/Auth/Verification";
import SignUpPage from "./pages/Auth/Signup";
import Home from "./pages/Private/Home";
import SalonDetails from "./pages/Private/SalonDetails";
import Booking from "./pages/Private/Booking";
import BookingConfirmation from "./pages/Private/BookingConfirmation";
import SlotSelection from "./pages/Private/SlotSelection";
import YourBookings from "./pages/Private/YourBookings";
import Checkout from "./pages/Private/Checkout";
import AddCard from "./pages/Private/AddCard";
import Login from "./pages/Auth/Log";
import Signup from "./pages/Auth/Sign";
import Verification from "./pages/Auth/Verify";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white w-full font-sans">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Welcome />} />
          
          {/* Private Routes (App Features) */}
          <Route path="/service" element={<ServiceSelect />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/professional" element={<ProfessionalSelect />} />

          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/verify" element={<Verification />} />

          {/* Fallback */}
          <Route path="/home" element={<Home />} />
          <Route path="/salon-details" element={<SalonDetails/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="booking-confirmation" element={<BookingConfirmation/>} />
          <Route path="slot-selection" element={<SlotSelection/>} />
          <Route path="bookings" element={<YourBookings/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/add-card" element={<AddCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;