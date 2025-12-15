import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'


export default function Login(){

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* <div className="p-8 rounded-md" style={{background: 'linear-gradient(180deg,#6366f1,#06b6d4)', color: 'white'}}>
            <h2 className="text-3xl font-bold">Dialysis Advisor</h2>
            <p className="mt-4">Clinician support for dialysis timing & frequency.</p>
          </div> */}
          <div className="p-4 sm:p-6 md:p-8 card">
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">Sign in</h3>
            <div className="mt-4">
              <label className="text-xs sm:text-sm">Email</label>
              <input className="mt-1 block w-full border rounded-md p-2 text-xs sm:text-sm" />
            </div>
            <div className="mt-4">
              <label className="text-xs sm:text-sm">Password</label>
              <input type="password" className="mt-1 block w-full border rounded-md p-2 text-xs sm:text-sm" />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button className="button-expand px-3 sm:px-4 py-2 border-[2px] border-neutral-300 bg-gradient-to-br from-[#ae0ede] to-[#448bd3] text-white rounded-md font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:shadow-[0_4px_20px_0_#b947db] hover:bg-[#eee5f2] hover:text-[#ffffff] hover:border-neutral-300 hover:border-[2px]">Sign in</button>
              <Link to="/signup" className="button-expand px-3 sm:px-4 py-2 border-[2px] border-neutral-300 rounded-md font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:shadow-[0_4px_20px_0_#b947db] hover:bg-gradient-to-br from-[#ae0ede] to-[#448bd3] hover:text-[#ffffff] text-center" >Sign Up</Link>
            </div>
          </div>
        </div>
      </main>
      <style>
        {`
          .button-expand {
            transition: padding 0.3s cubic-bezier(0.4,0,0.2,1);
          }
          @media (min-width: 640px) {
            .button-expand:hover {
              padding-left: 2.5rem !important;
              padding-right: 2.5rem !important;
            }
          }
        `}
      </style>
    </div>
  )
}
