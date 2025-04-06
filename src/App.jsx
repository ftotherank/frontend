import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MyFooter from './homes/MyFooter';
import Checkout from './pages/Checkout';
import Shop from './shops/Shop'; // Import Shop component or other components as needed

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Shop />} /> {/* Default route */}
          <Route path="/checkout" element={<Checkout />} />
          {/* Add other routes here as needed */}
        </Routes>
      </div>
      <MyFooter />
    </>
  );
}

export default App;
