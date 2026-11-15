import React, { useEffect, useRef } from 'react';

export const WaveBanner: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let step = 0;
    let mouse = { x: 0.5, y: 0.5 };

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = (e.clientY - rect.top) / rect.height;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      step += 0.015;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle multiple harmonic wave ribbons
      const isDark = document.documentElement.classList.contains('dark');
      const lines = 7;
      for (let l = 0; l < lines; l++) {
        ctx.beginPath();
        const baseAlpha = 0.04 + (l / lines) * 0.06;
        ctx.strokeStyle = isDark 
          ? `rgba(255, 255, 255, ${baseAlpha * 1.6})` 
          : `rgba(0, 0, 0, ${baseAlpha})`;
        ctx.lineWidth = 1.2;

        const amplitude = 35 + l * 8 + (mouse.y - 0.5) * 40;
        const frequency = 0.0025 + l * 0.0003;
        const phase = step + l * 0.4 + mouse.x * 2;

        for (let x = 0; x <= width; x += 6) {
          const y =
            height / 2 +
            Math.sin(x * frequency + phase) * amplitude +
            Math.cos(x * 0.0015 + phase * 0.5) * 15;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      className="relative w-full hidden md:flex overflow-hidden pointer-events-none" 
      style={{ height: '35vh', minHeight: '180px' }}
      aria-hidden="true"
    >
      <canvas 
        ref={canvasRef} 
        className="absolute w-full h-full top-0 left-0" 
      />
    </section>
  );
};
