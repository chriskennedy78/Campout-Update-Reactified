import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CabinReservationsPage from "../src/pages/CabinReservationPage";
import CabinDetailPage from "./pages/CabinDetailPage";
import MembershipPage from "./pages/MembershipPage";
import TicketsPage from "./pages/TicketsPage";
// import CabinDetail from "./features/cabins/CabinDetail";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="Memberships" element={<MembershipPage />} />
                <Route
                    path="CabinReservations"
                    element={<CabinReservationsPage />}
                />
                <Route
                    path="CabinReservations/:cabinId"
                    element={<CabinDetailPage />}
                />
                <Route path="Tickets" element={<TicketsPage />} />
                <Route path="about" element={<AboutPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
