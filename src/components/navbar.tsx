import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import Button from "./button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Donate", path: "/donate" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-10 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto bg-emerald-700 backdrop-blur-xl rounded-full px-6 py-3.5 flex items-center justify-between border border-[#D4AF37]/20 shadow-2xl">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all ${
                  isActive
                    ? "text-white after:w-full"
                    : "hover:text-white after:w-0"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/get-Involved">
            <Button
              label="Get Involved"
              textColor="text-[#1A1A1A]"
              bgColor="bg-white"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gray-300 hover:text-white p-2 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 bg-emerald-700 backdrop-blur-2xl rounded-2xl p-6 flex flex-col gap-4 border border-[#D4AF37]/30 shadow-2xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 transition-colors relative text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all border-b border-white/5 font-medium text-sm transition-colors ${
                  isActive
                    ? "text-white after:w-[50px]"
                    : "hover:text-white after:w-0"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/get-involved">
              <Button label="Get Involved" className="w-full" bgColor="bg-white" textColor="text-[#1a1a1a]"/>
            </Link>
          
        </div>
      )}
    </header>
  );
}
