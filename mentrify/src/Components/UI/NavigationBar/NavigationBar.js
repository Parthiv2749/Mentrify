import { Button } from "../Button/button";
import { Input } from "../Input/input";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-lg">MentorConnect</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/mentors" className="hover:text-blue-600">Mentors</a>
          <a href="/organizations" className="hover:text-blue-600">Organizations</a>
          <a href="/about" className="hover:text-blue-600">About Us</a>
          <a href="/apply" className="hover:text-blue-600">Apply</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
          <Input placeholder="Search..." className="w-40" />
          <Button>Login</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/mentors" className="hover:text-blue-600">Mentors</a>
          <a href="/organizations" className="hover:text-blue-600">Organizations</a>
          <a href="/about" className="hover:text-blue-600">About Us</a>
          <a href="/apply" className="hover:text-blue-600">Apply</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
          <Input placeholder="Search..." />
          <Button>Login</Button>
        </div>
      )}
    </nav>
  );
}
