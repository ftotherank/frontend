import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MyFooter from './homes/MyFooter';
import Checkout from './pages/Checkout';
import Shop from './shops/Shop'; 


function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <MyFooter />
    </>
  );
}

export default App;
