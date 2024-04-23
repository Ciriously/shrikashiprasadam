import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults";
import Footer from "./Shared/Footer";
import Navbar from './Shared/Navbar';
import Banner from './Shared/Banner';

export default function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <div className='bg-[#FECEAD]'>
          <Banner />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}