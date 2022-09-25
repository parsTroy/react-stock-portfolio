import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header';
import Dashboard from './components/Main/Dashboard';
import StockContext from './context/StockContext';
// import Portfolio from './components/Portfolio/Portfolio.jsx';
import PortfolioDashboard from './components/PortfolioDashboard/PortfolioDashboard.jsx';
import FutureValue from './components/FutureValue/FutureValue.jsx';
import ProfilePage from './components/Profile/ProfilePage.jsx';
import About from './components/About/About.jsx';
import Terms from './components/Terms/Terms.jsx';
import Privacy from './components/Privacy/Privacy.jsx';

function App() {

  const [stockSymbol, setStockSymbol] = useState('AAPL');

  return (
    <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="/portfolio" element={<PortfolioDashboard />} />
        <Route path="/future-value" element={<FutureValue />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
      <Footer />
    </StockContext.Provider>
  );
}

export default App;
