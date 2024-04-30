import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults";
import Cart from "./Pages/Cart"; // Import the Cart component
import Wishlist from "./Pages/Wishlist"; // Import the Wishlist component
import Footer from "./Shared/Footer";
import Navbar from './Shared/Navbar';
import Banner from './Shared/Banner';
import Signup from './auth/forms/Signup';
import Signin from './auth/forms/Signin';
import AuthLayout from './auth/AuthLayout';

export default function App() {
  return (
    <Router>
      <div className="relative">
        {/* <Navbar />
        <div className='bg-[#FECEAD]'>
          <Banner />
        </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/Auth" element={<AuthLayout />} />
          <Route path="/Sign-in" element={<Signin />} />
          <Route path="/Sign-up" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}