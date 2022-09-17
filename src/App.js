import { useState } from 'react';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header';
import Dashboard from './components/Main/Dashboard';
import StockContext from './context/StockContext';


function App() {

  const [stockSymbol, setStockSymbol] = useState('AAPL');

  return (
    <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
      <Header />
      <Dashboard />
      <Footer />
    </StockContext.Provider>
  );
}

export default App;
