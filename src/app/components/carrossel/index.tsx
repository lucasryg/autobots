// "use client"

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
// import { useEffect, useRef } from 'react';

// export default function CarrosselCard() {



//     const items = [
//         {
//             title: '1. Multi-WhatsApp e Multi-Acessos',
//             text: 'Tenha vários números operando na mesma conta — cada um com seu fluxo, seus leads, seus webhooks, ou se preferir tudo centralizado tenha também. Você decide seu time trabalhando junto ou separado. '
//         },
//         {
//             title: '2. Disparos em massa.',
//             text: 'Nada de “campanha controlada” ou com firula.Crie campanhas e envie fluxos com texto, imagem, vídeo, áudio e até GIF. Sua lista inteira em ação com 1 clique.'
//         },
//         {
//             title: '3. Construtor de Fluxos Inteligente',
//             text: 'Crie fluxos automatizados com gatilhos, respostas condicionais e entregas programadas. com uma interface simples e poderosa. Seu funil no WhatsApp do jeito certo.'
//         },
//         {
//             title: '4. IA Treinada Para Vender no Seu Lugar',
//             text: 'A “Megan”, nossa IA de atendimento, trabalha 24h por dia, 7 dias por semana, sem salário, sem 13º, sem desculpa.  Você configura uma vez e ela nunca mais para. Converte curiosos em compradores — no automático.'
//         },
//         {
//             title: '5. Rastreamento de Anúncio',
//             text: 'Capture automaticamente o ID, thumbnail, título e texto de conversão dos seus anúncios. Entenda exatamente de onde vem cada lead.Você sabe o que está funcionando — com dados.'
//         },
//         {
//             title: '6. Dashboard e CRM com Kanban',
//             text: ' Acompanhe suas vendas em tempo real. Cada cliente é rotulado automaticamente e avança no seu funil sem esforço manual, visualize o pipeline, otimize e venda mais.'
//         },
//         {
//             title: '7. 100% em nuvem + App mobile',
//             text: 'Use no PC, no celular, onde quiser. Seu time inteiro, sua operação toda, em qualquer lugar, liberdade e velocidade no atendimento.'
//         },
//     ];
//     return (

//         <div className="py-10 bg-[#0d0d0d] text-white">
//             <h2 className="text-3xl font-bold text-center mb-8">Benefícios do Autobots</h2>

//             <div className="relative max-w-6xl mx-auto">

//                 <Swiper
//                     modules={[Navigation]}
//                     navigation={{
//                         nextEl: '.button-next',
//                         prevEl: '.button-prev',
//                     }}
//                     spaceBetween={20}
//                     slidesPerView={2}
//                     breakpoints={{
//                         768: { 
//                             slidesPerView: 3,
//                             spaceBetween: 24
//                         }
//                     }}
//                     loop={true}
//                     className="px-6"
//                 >
//                     {items.map((item, index) => (
//                         <SwiperSlide key={index}>
//                             <div className="bg-[#1f2937] rounded-xl p-6 h-auto md:h-60 flex flex-col justify-center text-center shadow-md max-w-screen-md w-full px-4 sm:h-20  ">
//                                 <h3 className="text-base md:text-xl font-semibold mb-2 text-blue-600">{item.title}</h3>
//                                 <p className="text-sm text-gray-400">{item.text}</p>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//                 <div className="button-prev absolute left-0 md:-left-10 top-1/2 -translate-y-1/2 text-white z-10 cursor-pointer p-2 rounded-full bg-gray-700 hover:bg-gray-600">
//                     ◀
//                 </div>
//                 <div className="button-next absolute right-0 md:-right-10 top-1/2 -translate-y-1/2 text-white z-10 cursor-pointer p-2 rounded-full bg-gray-700 hover:bg-gray-600">

//                     ▶
//                 </div>
//             </div>
//         </div>
//     );
// }


"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function CarrosselCard() {
    const items = [
        {
            title: '1. Multi-WhatsApp e Multi-Acessos',
            text: 'Tenha vários números operando na mesma conta — cada um com seu fluxo, seus leads, seus webhooks, ou se preferir tudo centralizado tenha também. Você decide seu time trabalhando junto ou separado. '
        },
        {
            title: '2. Disparos em massa.',
            text: 'Nada de “campanha controlada” ou com firula.Crie campanhas e envie fluxos com texto, imagem, vídeo, áudio e até GIF. Sua lista inteira em ação com 1 clique.'
        },
        {
            title: '3. Construtor de Fluxos Inteligente',
            text: 'Crie fluxos automatizados com gatilhos, respostas condicionais e entregas programadas. com uma interface simples e poderosa. Seu funil no WhatsApp do jeito certo.'
        },
        {
            title: '4. IA Treinada Para Vender no Seu Lugar',
            text: 'A “Megan”, nossa IA de atendimento, trabalha 24h por dia, 7 dias por semana, sem salário, sem 13º, sem desculpa.  Você configura uma vez e ela nunca mais para. Converte curiosos em compradores — no automático.'
        },
        {
            title: '5. Rastreamento de Anúncio',
            text: 'Capture automaticamente o ID, thumbnail, título e texto de conversão dos seus anúncios. Entenda exatamente de onde vem cada lead.Você sabe o que está funcionando — com dados.'
        },
        {
            title: '6. Dashboard e CRM com Kanban',
            text: ' Acompanhe suas vendas em tempo real. Cada cliente é rotulado automaticamente e avança no seu funil sem esforço manual, visualize o pipeline, otimize e venda mais.'
        },
        {
            title: '7. 100% em nuvem + App mobile',
            text: 'Use no PC, no celular, onde quiser. Seu time inteiro, sua operação toda, em qualquer lugar, liberdade e velocidade no atendimento.'
        },
    ];

    return (
        <div className="py-10 bg-[#0d0d0d] text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Benefícios do Autobots</h2>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                {/* Botões de navegação (fora do container em desktop) */}
                <div className="button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full bg-gray-700 hover:bg-gray-600 hidden md:block">
                    ◀
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.button-next, .button-next-mobile',
                        prevEl: '.button-prev, .button-prev-mobile',
                    }}
                    spaceBetween={20}
                    slidesPerView={1} // Mobile: 2 cards
                    breakpoints={{
                        768: { // Desktop (md+)
                            slidesPerView: 3,
                            spaceBetween: 24
                        }
                    }}
                    loop={true}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            {/* Card com altura fixa e conteúdo alinhado */}
                            <div className="bg-[#1f2937] rounded-xl p-6 min-h-[300px] h-full flex flex-col justify-center text-center shadow-md overflow-hidden">
                                <h3 className="text-base md:text-xl font-semibold mb-4 text-blue-600">{item.title}</h3>
                                <p className="text-sm text-gray-400 overflow-y-auto">{item.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full bg-gray-700 hover:bg-gray-600 hidden md:block">
                    ▶
                </div>
            </div>

            {/* Botões de navegação para mobile (opcional) */}
            <div className="flex justify-center gap-4 mt-6 md:hidden">
                <div className="button-prev-mobile cursor-pointer p-2 rounded-full bg-gray-700 hover:bg-gray-600">
                    ◀
                </div>
                <div className="button-next-mobile cursor-pointer p-2 rounded-full bg-gray-700 hover:bg-gray-600">
                    ▶
                </div>
            </div>
        </div>
    );
}