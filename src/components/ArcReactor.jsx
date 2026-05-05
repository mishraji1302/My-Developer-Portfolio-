import React from 'react';

const ArcReactor = () => {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center pointer-events-none opacity-80 mix-blend-screen scale-150">
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-full border-4 border-green-500/40 shadow-[0_0_50px_rgba(34,197,94,0.6),inset_0_0_50px_rgba(34,197,94,0.6)] animate-[pulse_4s_ease-in-out_infinite]" />
      
      {/* Outer Ring */}
      <div className="absolute inset-4 rounded-full border-[8px] border-green-500/60 shadow-[0_0_20px_rgba(34,197,94,0.8)] border-dashed animate-[spin_20s_linear_infinite]" />
      
      {/* Inner Ring dashed with blocks */}
      <div className="absolute inset-8 rounded-full border-[12px] border-green-400/80 shadow-[inset_0_0_15px_rgba(34,197,94,1)] border-dotted animate-[spin_15s_linear_reverse_infinite]" />
      
      {/* Core Ring */}
      <div className="absolute inset-14 rounded-full border-2 border-green-300/80 shadow-[0_0_30px_rgba(34,197,94,1),inset_0_0_30px_rgba(34,197,94,1)] animate-pulse" />
      
      {/* Core Center */}
      <div className="absolute inset-20 rounded-full bg-green-200 shadow-[0_0_60px_rgba(134,239,172,1),0_0_100px_rgba(34,197,94,0.8)] animate-[pulse_2s_ease-in-out_infinite]" />
    </div>
  );
};

export default ArcReactor;
