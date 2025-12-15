import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default function Landing(){
  // Add a keyframes animation for floating
  // You can add this CSS in your global stylesheet or use a <style> tag in your component if needed
  // Example for Tailwind + custom CSS:
  // .float-card { animation: float 2.5s ease-in-out infinite alternate; }
  // @keyframes float { 0% { transform: translateY(0); } 100% { transform: translateY(-16px); } }
  
  return (
    <div className="bg-[#eee5f2] min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          <div className="md:col-span-7 py-6 sm:py-8 lg:py-12 max-w-full md:max-w-[550px]">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">Personalized dialysis timing, explained.</h1>
            <p className="mt-3 sm:mt-4 lg:mt-6 text-neutral-700 font-semibold text-xs sm:text-sm lg:text-base">AI-assisted clinician recommendations with explainability & an immutable audit trail.</p>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to='/login'
                className="button-expand px-4 sm:px-6 py-2 sm:py-3 border-[2px] border-neutral-300 bg-gradient-to-br from-[#ae0ede] to-[#448bd3] text-white rounded-md font-semibold text-xs sm:text-sm lg:text-base transition-all duration-300 hover:shadow-[0_4px_20px_0_#b947db] hover:bg-[#eee5f2] hover:text-[#ffffff] hover:border-neutral-300 hover:border-[2px]"
              >
                Sign in (Clinician)
              </Link>
              <Link
                to='/dashboard'
                className="button-expand px-4 sm:px-6 py-2 sm:py-3 border-[2px] border-neutral-300 rounded-md font-semibold text-xs sm:text-sm lg:text-base transition-all duration-300 hover:shadow-[0_4px_20px_0_#b947db] hover:bg-gradient-to-br from-[#ae0ede] to-[#448bd3] hover:text-[#ffffff]"
              >
                Try demo
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 w-full">
            <div className="p-4 sm:p-6 card transition-all duration-500 hover:shadow-[0_4px_20px_0_#b947db] hover:bg-gradient-to-br from-[#ae0ede] to-[#448bd3] hover:text-[#ffffff] float-card">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold py-2 sm:py-3 lg:py-5 transition-all duration-300">Why this matters</h2>
              <p className="mt-3 sm:mt-5 lg:mt-7 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-lg font-medium transition-all duration-300">Move beyond one-size-fits-all dialysis sessions. Tailor duration & frequency to each patient.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 card float-card transition-all duration-500 hover:shadow-[0_4px_20px_0_#b947db] hover:bg-gradient-to-br from-[#ae0ede] to-[#448bd3] hover:text-[#ffffff] group">
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-semibold transition-all duration-300">Personalized timing</h1>
            <p className="mt-3 sm:mt-5 lg:mt-7 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-lg font-medium transition-all duration-300">Adjust session length based on trended labs and symptoms.</p>
          </div>
          <div className="p-4 sm:p-6 card float-card transition-all duration-500 hover:shadow-[0_4px_20px_0_#b947db] hover:bg-gradient-to-br from-[#ae0ede] to-[#448bd3] hover:text-[#ffffff] group">
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-semibold transition-all duration-300">Explainability</h1>
            <p className="mt-3 sm:mt-5 lg:mt-7 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-lg font-medium transition-all duration-300">Plain-language Gemini rationale plus SHAP influence view.</p>
          </div>
          <div className="p-4 sm:p-6 card float-card transition-all duration-500 hover:shadow-[0_4px_20px_0_#b947db] hover:bg-gradient-to-br from-[#ae0ede] to-[#448bd3] hover:text-[#ffffff] group">
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-semibold transition-all duration-300">Audit trail</h1>
            <p className="mt-3 sm:mt-5 lg:mt-7 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-lg font-medium transition-all duration-300">Immutable logs of recommendations & clinician overrides.</p>
          </div>
        </section>
      </main>
      {/* Add this style block for floating animation and button expand on hover */}
      <style>
        {`
          .float-card {
            animation: float 1.5s ease-in-out infinite alternate;
            transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
          }
          @keyframes float {
            0% { transform: translateY(0); }
            100% { transform: translateY(-16px); }
          }
          .float-card:hover {
            animation: none !important;
            transform: scale(1.07) !important;
            transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          }
          .button-expand {
            transition: padding 0.3s cubic-bezier(0.4,0,0.2,1);
          }
          .button-expand:hover {
            padding-left: 2.5rem !important; /* 40px */
            padding-right: 2.5rem !important;
          }
        `}
      </style>
    </div>
  )
}
