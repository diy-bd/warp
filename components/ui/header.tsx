'use client';

import Link from 'next/link';
import Logo from './logo';

export default function Header() {
  return (
    <header className="h-screen min-h-screen w-screen bg-white">
      <div
        className="relative h-screen flex align-center flex-col justify-center text-center bg-cover"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1626761191814-a9dc9efd085c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2664&amp;q=80")',
        }}
      >
        <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800"></span>
        <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-white mb-4 !leading-tight lg:text-7xl z-20">
          Check out our new collection
        </h1>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-12 w-full opacity-80 md:w-10/12 lg:w-7/12 mx-auto px-28 z-10">
          The Basic Starter Pack allows you to fully express your vibrant
          personality with four grayscale options. Feeling adventurous? Put on a
          heather gray shirt. Want to be a trendsetter? Try our exclusive
          colorway: `Orange`. Need to add an extra pop of color to your outfit?
          Our white shirt has you covered.
        </p>
        <div className="w-auto mx-auto">
          <div className="flex items-center">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-dark text-white w-full z-10"
              type="button"
            >
              Show new arrival
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
