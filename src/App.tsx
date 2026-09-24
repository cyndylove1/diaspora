import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import AboutUs from "./pages/about us";
import "./App.css";
import CTA from "./components/cta";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Donate from "./pages/donate";
import Gallery from "./pages/gallery";
import GetInvolved from "./pages/GetInvolved";
import Impact from "./pages/impact";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  
  return (
    <>
    <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/impact" element={<Impact />} />
      </Routes>
      <CTA/>
      <Footer />
    </>
  );
}

export default App;
