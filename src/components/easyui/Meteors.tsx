import React, { useMemo } from 'react';

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors: React.FC<MeteorsProps> = ({ number = 20, className = '' }) => {
  const meteors = useMemo(() => {
    return new Array(number).fill(true).map((_, idx) => ({
      id: idx,
      top: -20 + Math.floor(Math.random() * 80) + 'px',
      left: Math.floor(Math.random() * 100) + '%',
      delay: (Math.random() * 5).toFixed(2) + 's',
      duration: (3 + Math.random() * 6).toFixed(2) + 's',
    }));
  }, [number]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
          className="animate-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-amber-400 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[60px] before:h-[1px] before:bg-gradient-to-r before:from-amber-400/80 before:via-yellow-300/40 before:to-transparent"
        />
      ))}
    </div>
  );
};
