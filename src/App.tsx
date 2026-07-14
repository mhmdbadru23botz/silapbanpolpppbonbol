import { useState, useEffect } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900 font-sans">
      {/* Loader */}
      <div 
        className={`absolute inset-0 z-50 flex flex-col justify-center items-center bg-gradient-to-br from-slate-800 via-slate-900 to-blue-700 animate-gradient-bg transition-all duration-700 ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl flex flex-col items-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center max-w-[90%]">
          <div className="w-[60px] h-[60px] border-4 border-white/10 border-t-blue-400 rounded-full animate-spin mb-6"></div>
          <div className="text-white text-xl font-semibold">silapbanpolpppbonbol</div>
          <div className="text-slate-300 text-sm mt-2">Sistem sedang memuat data...</div>
        </div>
      </div>

      {/* Iframe */}
      <iframe 
        src="https://script.google.com/macros/s/AKfycbxJc-BBXcpEeRJ30hm0FRi3fPHWBCSm2Axyqal8coxEDWqNC8TqIHowjPCMRgMZ_76S/exec"
        className="absolute top-0 left-0 w-full h-full border-none z-10 bg-white"
        allowFullScreen
        onLoad={() => setTimeout(() => setIsLoading(false), 1000)}
      />
    </div>
  );
}
