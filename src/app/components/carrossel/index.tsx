"use client";

import { useEffect, useRef, useState } from "react";
import logo from "../../../../public/images/Icon.svg";

const items = [
  {
    id: 1,
    label: "Multi-WhatsApp",
    icon: "📱",
    title: "Multi-WhatsApp",
    shortText: "Multi-Acessos",
    fullText:
      "Tenha vários números operando na mesma conta — cada um com seu fluxo, seus leads, seus webhooks, ou se preferir tudo centralizado tenha também.",
  },
  {
    id: 2,
    label: "Disparos",
    icon: "📊",
    title: "Disparos",
    shortText: "Em Massa",
    fullText:
      'Nada de "campanha controlada" ou com firula. Crie campanhas e envie fluxos com texto, imagem, vídeo, áudio e até GIF.',
  },
  {
    id: 3,
    label: "Fluxos",
    icon: "⚙️",
    title: "Fluxos",
    shortText: "Inteligentes",
    fullText:
      "Crie fluxos automatizados com gatilhos, respostas condicionais e entregas programadas.",
  },
  {
    id: 4,
    label: "IA Treinada",
    icon: "🤖",
    title: "IA Treinada",
    shortText: "Para Vender",
    fullText:
      'A "Megan", nossa IA de atendimento, trabalha 24h por dia, 7 dias por semana. Converte curiosos em compradores — no automático.',
  },
  {
    id: 5,
    label: "Rastreamento",
    icon: "🔍",
    title: "Rastreamento",
    shortText: "de Anúncios",
    fullText:
      "Capture automaticamente o ID, thumbnail e texto dos seus anúncios. Saiba o que está funcionando.",
  },
  {
    id: 6,
    label: "Dashboard",
    icon: "📈",
    title: "Dashboard",
    shortText: "e CRM",
    fullText:
      "Acompanhe vendas em tempo real. Cada cliente é rotulado automaticamente e avança no seu funil.",
  },
];

export default function PieSliceMenu() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(1);
  const [rotation, setRotation] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRotation((prev) => prev + 0.2);
    }, 30);
    return () => clearInterval(intervalRef.current!);
  }, []);

  const anglePerItem = 360 / items.length;
  const gap = 2;

  const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      `M ${x} ${y}`,
      `L ${start.x} ${start.y}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
      "Z",
    ].join(" ");
  };

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const activeItem = selected ? items.find((i) => i.id === selected) : null;

  const gradients = ["#d4d4d8", "#a1a1aa", "#52525b", "#1e3a8a", "#2563eb", "#1d4ed8"];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 p-4 sm:p-6">
      <div className="w-full max-w-[400px] sm:max-w-[600px]">
        <svg viewBox="0 0 400 400" className="w-full h-auto">
          <g transform={`rotate(${rotation} 200 200)`}>
            {items.map((item, index) => {
              const startAngle = anglePerItem * index + gap / 2;
              const endAngle = anglePerItem * (index + 1) - gap / 2;
              const isActive = hovered === item.id || selected === item.id;
              const path = describeArc(200, 200, isActive ? 180 : 160, startAngle, endAngle);
              const midAngle = (startAngle + endAngle) / 2;
              const labelPos = polarToCartesian(200, 200, isActive ? 140 : 120, midAngle);
              const gradient = gradients[index % gradients.length];

              return (
                <g
                  key={item.id}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(item.id)}
                >
                  <path
                    d={path}
                    fill={gradient}
                    style={{ transition: "all 0.3s ease", filter: isActive ? "brightness(1.2)" : undefined }}
                  />
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="20"
                    style={{ pointerEvents: "none" }}
                  >
                    {item.icon}
                  </text>
                </g>
              );
            })}
          </g>
          <circle cx="200" cy="200" r="100" fill="#2563eb" />
          <image
            href={logo.src}
            x="170"
            y="170"
            width="60"
            height="60"
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
      </div>

      {activeItem && (
        <div className="w-full max-w-md bg-[#1f2937] rounded-xl p-4 sm:p-6 border border-blue-600 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-xl">{activeItem.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold text-blue-400">
              {activeItem.title} - {activeItem.shortText}
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{activeItem.fullText}</p>
        </div>
      )}
    </div>
  );
}
