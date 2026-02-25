import { useState, useEffect } from 'react';
import { Truck } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 top-6 z-40 flex w-[92%] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full px-6 py-4 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 text-[#0B132B] shadow-lg backdrop-blur-xl border border-gray-200/50'
          : 'bg-white/5 text-white backdrop-blur-sm border border-white/10'
      }`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-2.5 font-black tracking-widest text-lg">
        <img src="/images/logo.png" alt="蒙通货运" className="h-8 w-8 rounded-full object-cover" />
        <span>蒙通货运</span>
      </a>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
        <a href="/#features" className="hover:-translate-y-0.5 transition-transform">核心优势</a>
        <a href="/#philosophy" className="hover:-translate-y-0.5 transition-transform">经营理念</a>
        <a href="/#services" className="hover:-translate-y-0.5 transition-transform">业务生态</a>
        <a href="/#network" className="hover:-translate-y-0.5 transition-transform">物流网络</a>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-4">
        <a
          href="tel:13910225509"
          className={`hidden md:flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all hover:scale-105 ${
            scrolled ? 'bg-[#0B132B] text-white' : 'bg-white text-[#0B132B]'
          }`}
        >
          <Truck className="w-4 h-4" />
          立即发货
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          <span className={`block w-5 h-0.5 transition-all duration-300 ${scrolled ? 'bg-[#0B132B]' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-0.5 transition-all duration-300 ${scrolled ? 'bg-[#0B132B]' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 transition-all duration-300 ${scrolled ? 'bg-[#0B132B]' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200 shadow-xl p-6 flex flex-col gap-4 md:hidden text-[#0B132B]">
          <a href="/#features" className="font-medium py-2" onClick={() => setMenuOpen(false)}>核心优势</a>
          <a href="/#philosophy" className="font-medium py-2" onClick={() => setMenuOpen(false)}>经营理念</a>
          <a href="/#services" className="font-medium py-2" onClick={() => setMenuOpen(false)}>业务生态</a>
          <a href="/#network" className="font-medium py-2" onClick={() => setMenuOpen(false)}>物流网络</a>
          <a
            href="tel:13910225509"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#0B132B] text-white px-6 py-3 text-sm font-bold"
          >
            <Truck className="w-4 h-4" />
            立即发货
          </a>
        </div>
      )}
    </nav>
  );
}
