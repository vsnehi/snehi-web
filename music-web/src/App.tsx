
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsAndConditions from './pages/Legal/TermsAndConditions';
import CookiePolicy from './pages/Legal/CookiePolicy';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
