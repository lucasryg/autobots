'use client';

import { useEffect, useRef, useState } from 'react';

interface SquareBorderProgressProps {
  target: number;
  title?: string;
  description?: string;
}

export default function SquareBorderProgress({
  target,
  title = 'Aumento na conversão de vendas',
  description = 'Atendimentos mais rápidos, personalizados e no tempo certo — feitos por uma IA que entende de resultado.',
}: SquareBorderProgressProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const squareRef = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState(0);
  const [squareSize, setSquareSize] = useState(0); // Tamanho do quadrado (width = height)

  // Observa mudanças no tamanho do quadrado
  useEffect(() => {
    const updateSquareSize = () => {
      if (squareRef.current) {
        const size = squareRef.current.offsetWidth;
        setSquareSize(size);
      }
    };

    updateSquareSize();
    window.addEventListener('resize', updateSquareSize);

    return () => {
      window.removeEventListener('resize', updateSquareSize);
    };
  }, []);

  // Lógica do progresso
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;
          const interval = setInterval(() => {
            current += 1;
            setPercentage(current);
            if (current >= target) clearInterval(interval);
          }, 20);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [target]);

  const totalLength = 4 * squareSize; // Perímetro do quadrado (4 lados)
  const filledLength = (percentage / 100) * totalLength;

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d] text-white w-full max-w-xs sm:max-w-sm"
    >
      <h3 className="text-lg sm:text-xl mb-4 text-center">{title}</h3>

      <div 
        ref={squareRef}
        className="relative w-48 h-48 sm:w-64 sm:h-64"
      >
        <div className="w-full h-full border border-[#2a2a2a] rounded-md" />

        {/* Top */}
        <div
          className="absolute top-0 left-0 h-1 bg-blue-600 transition-all duration-300"
          style={{ width: Math.min(filledLength, squareSize) + 'px' }}
        />
        {/* Right */}
        {filledLength > squareSize && (
          <div
            className="absolute top-0 right-0 w-1 bg-blue-600 transition-all duration-300"
            style={{
              height: Math.min(filledLength - squareSize, squareSize) + 'px',
            }}
          />
        )}
        {/* Bottom */}
        {filledLength > 2 * squareSize && (
          <div
            className="absolute bottom-0 right-0 h-1 bg-blue-600 transition-all duration-300"
            style={{
              width: Math.min(filledLength - 2 * squareSize, squareSize) + 'px',
              transform: 'translateX(0)', // Remove se não precisar
            }}
          />
        )}
        {/* Left */}
        {filledLength > 3 * squareSize && (
          <div
            className="absolute bottom-0 left-0 w-1 bg-blue-600 transition-all duration-300"
            style={{
              height: Math.min(filledLength - 3 * squareSize, squareSize) + 'px',
            }}
          />
        )}

        <span className="absolute top-1/2 left-1/2 text-xl font-semibold -translate-x-1/2 -translate-y-1/2 sm:text-2xl">
          {percentage}%
        </span>
      </div>

      <p className="mt-4 max-w-sm text-center text-gray-300 text-sm sm:text-base">
        {description}
      </p>
    </section>
  );
}