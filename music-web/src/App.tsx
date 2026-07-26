
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { AudioProvider } from './context/AudioPlayerContext';
import MusicVisualizer from './components/MusicVisualizer/MusicVisualizer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsAndConditions from './pages/Legal/TermsAndConditions';
import CookiePolicy from './pages/Legal/CookiePolicy';

const Music = lazy(() => import('./pages/Music'));
const Artists = lazy(() => import('./pages/Artists'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const AlbumDetails = lazy(() => import('./pages/Music/AlbumDetails'));

function App() {
  return (
    <BrowserRouter>
      <AudioProvider>
        <Header />
        <MusicVisualizer />

        <Suspense fallback={<div style={{padding:40, color:'#fff'}}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/music/:id" element={<AlbumDetails />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </Suspense>

        <Footer />
      </AudioProvider>
    </BrowserRouter>
  );
}

export default App;
