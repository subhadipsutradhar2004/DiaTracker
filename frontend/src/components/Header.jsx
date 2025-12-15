import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ activePage }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <header className="bg-[#fafafa] shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link to='/' className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-md bg-gradient-to-br from-[#ae0ede] to-[#448bd3] text-white flex items-center justify-center font-bold text-xs sm:text-sm">DT</div>
          <div className="hidden sm:block">
            <div className="text-sm sm:text-lg font-semibold text-[#ae0ede]">DiaTracker</div>
            <div className="text-xs sm:text-sm text-[#448bd3]">Clinician support</div>
          </div>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <Link
            to='/dashboard'
            className={`text-xs lg:text-sm text-neutral-700 transition-all duration-300 hover:text-base hover:px-4 ${activePage === 'dashboard' ? 'border-b-2 border-[#ae0ede] pb-1 font-semibold' : ''}`}
            style={{ transitionProperty: 'font-size, padding' }}
          >
            Dashboard
          </Link>
          <Link
            to='/login'
            className="px-3 lg:px-4 py-1.5 lg:py-2 border-[2px] border-neutral-300 bg-gradient-to-br from-[#ae0ede] to-[#448bd3] text-white rounded-md font-semibold text-xs lg:text-sm transition-all duration-300 hover:shadow-[0_4px_20px_0_#b947db] hover:bg-[#eee5f2] hover:text-[#f7f7f7] hover:px-8 hover:border-neutral-300 hover:border-[2px] hover:text-base"
            style={{ transitionProperty: 'font-size, padding' }}
          >
            Sign in
          </Link>
        </div>
        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden flex items-center px-2 py-1 border rounded text-[#ae0ede] border-[#ae0ede] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-3 sm:px-4 pb-3 sm:pb-4">
          <Link to='/dashboard' className="block py-2 text-xs sm:text-sm text-neutral-700">Dashboard</Link>
          <Link to='/login'
            className="block w-full mt-2 px-3 sm:px-4 py-1.5 sm:py-2 border-[2px] border-neutral-300 bg-gradient-to-br from-[#ae0ede] to-[#448bd3] text-white rounded-md font-semibold text-xs sm:text-sm transition-all duration-300 hover:shadow-[0_4px_20px_0_#b947db] hover:bg-[#eee5f2] hover:text-[#f7f7f7] hover:px-8 hover:border-neutral-300 hover:border-[2px]">Sign in</Link>
        </div>
      )}
    </header>
  );
}
