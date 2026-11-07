import React, { useEffect, useRef, useState } from 'react';
import { Flower2, EyeOff, Eye } from 'lucide-react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  type: 'jasmine' | 'marigold' | 'rose' | 'goldSparkle';
  opacity: number;
  swayAmplitude: number;
  swaySpeed: number;
  swayOffset: number;
}

export const FloatingPetalsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isEnabled, setIsEnabled] = useState(true);
  const mouseRef = useRef<{ x: number; y: number; radius: number }>({ x: -1000, y: -1000, radius: 120 });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isEnabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Create Petals pool
    const petalCount = Math.min(width < 768 ? 28 : 55, 65);
    const petals: Petal[] = [];
    const types: Petal['type'][] = ['jasmine', 'marigold', 'rose', 'goldSparkle'];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 0.9 + 0.4,
        speedX: (Math.random() - 0.5) * 0.6,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        type: types[Math.floor(Math.random() * types.length)],
        opacity: Math.random() * 0.5 + 0.35,
        swayAmplitude: Math.random() * 1.5 + 0.8,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayOffset: Math.random() * Math.PI * 2,
      });
    }

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        // Natural swaying breeze motion
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(tick * p.swaySpeed + p.swayOffset) * p.swayAmplitude;
        p.rotation += p.rotationSpeed;

        // Subtle interactive mouse repulsion/wind vortex
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - dist) / mouseRef.current.radius;
          p.x -= (dx / dist) * force * 3;
          p.y -= (dy / dist) * force * 3;
          p.rotation += 0.05;
        }

        // Wrap around borders
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        // Draw Petal
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'marigold') {
          // Vibrant Yellow-Orange Marigold Petal
          const grad = ctx.createLinearGradient(0, -p.size, 0, p.size);
          grad.addColorStop(0, '#FFE066');
          grad.addColorStop(0.6, '#FFAA00');
          grad.addColorStop(1, '#E65100');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.55, p.size * 1.1, 0, 0, Math.PI * 2);
          ctx.fill();

          // Delicate vein
          ctx.strokeStyle = '#FF8F00';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.9);
          ctx.lineTo(0, p.size * 0.9);
          ctx.stroke();
        } else if (p.type === 'rose') {
          // Temple Crimson Rose Petal
          const grad = ctx.createLinearGradient(0, -p.size, 0, p.size);
          grad.addColorStop(0, '#FF4D6D');
          grad.addColorStop(0.6, '#C9184A');
          grad.addColorStop(1, '#800F2F');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(p.size * 0.9, -p.size * 0.6, p.size * 0.8, p.size * 0.8, 0, p.size);
          ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.8, -p.size * 0.9, -p.size * 0.6, 0, -p.size);
          ctx.fill();
        } else if (p.type === 'jasmine') {
          // Sacred White & Cream Jasmine Petal (Mullapoo)
          const grad = ctx.createRadialGradient(0, 0, 1, 0, 0, p.size);
          grad.addColorStop(0, '#FFFFFF');
          grad.addColorStop(0.7, '#FFFDE7');
          grad.addColorStop(1, '#FFF9C4');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.45, p.size * 0.95, 0, 0, Math.PI * 2);
          ctx.fill();

          // Soft green calyx tip
          ctx.fillStyle = '#66BB6A';
          ctx.beginPath();
          ctx.arc(0, p.size * 0.8, p.size * 0.2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Shimmering Golden Dust Ember / Akshanta grain
          ctx.shadowColor = '#FFD700';
          ctx.shadowBlur = 8;
          ctx.fillStyle = '#FFE57F';
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.35, 0, Math.PI * 2);
          ctx.fill();

          // Cross sparkle
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(-p.size * 0.6, 0);
          ctx.lineTo(p.size * 0.6, 0);
          ctx.moveTo(0, -p.size * 0.6);
          ctx.lineTo(0, p.size * 0.6);
          ctx.stroke();
        }

        ctx.restore();
      });

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isEnabled]);

  return (
    <>
      {/* Background Canvas Petals */}
      {isEnabled && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-30 opacity-80"
          aria-hidden="true"
        />
      )}

      {/* Floating Toggle Pill for user comfort */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-maroon-950/80 border border-gold-500/30 backdrop-blur-md text-gold-300 text-[11px] shadow-lg">
        <Flower2 className="w-3.5 h-3.5 text-gold-400 animate-spin-slow" />
        <span className="font-heading tracking-wider uppercase text-[10px]">Petal Ambience:</span>
        <button
          onClick={() => setIsEnabled(!isEnabled)}
          className="underline hover:text-gold-100 cursor-pointer ml-0.5"
          title="Toggle floating flower petals"
        >
          {isEnabled ? 'Active' : 'Paused'}
        </button>
      </div>
    </>
  );
};
