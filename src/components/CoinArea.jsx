import React from "react";

function CoinArea() {
  const marketCap = "1.25T";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900/90 px-4 sm:px-[5%] py-6 md:py-10 relative z-0 text-white overflow-hidden">
      {/* Background Blur Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-30 blur-3xl animate-pulse-slow z-0" />

      {/* HERO SECTION */}
      <div className="relative z-10 text-center mb-8 md:mb-12 space-y-4">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent animate-gradient-x leading-tight">
          Crypto <br />
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-cyan-400 to-emerald-300 bg-clip-text text-transparent">
            Market Intelligence
          </span>
        </h1>

        <p className="text-gray-300/80==== max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mt-4 text-center">
          Track real-time crypto market metrics with advanced analytics
          and&nbsp;
          <span className="bg-gradient-to-r from-emerald-400/80 to-cyan-400/80 bg-clip-text text-transparent font-semibold">
            neural network predictions
          </span>
        </p>
      </div>

      {/* Task Header*/}
      <div className="hidden md:grid"></div>
    </div>
  );
}

export default CoinArea;
