import { BiSupport } from 'react-icons/bi';
import { FaGears } from 'react-icons/fa6';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import Chat from './components/chat';
import CarrosselCard from './components/carrossel';
import SquareBorderProgress from './components/CarregarQuadrado';
import Formulario from './components/Formulario';
import { Metadata } from 'next';
import Image from 'next/image';
import Menu from './components/Menu';
import eu from '../../public/images/Eu.jpeg';
import '../../src/app/globals.css';
import WhatsAppButton from './components/Whatsapp';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autobots - Lucas',
  description: 'Apresentação',
  openGraph: {
    title: 'Autobots - automação com ChatBot',
    description: 'Entenda como funciona!',
  },
};

export default function Home() {

  return (
    <div className="bg-[#0d0d0d] text-white">
      <Menu />

      <section id="home" className="min-h-screen pt-32 md:pt-0 px-4 flex flex-col md:flex-row items-center justify-around gap-10">
        <div className="flex flex-col items-start text-start max-w-md">
          <p className="mb-3 text-base">Automação com IA no WhatsApp</p>
          <h1 className="text-4xl md:text-6xl mb-5 font-bold">ChatBot poderoso para seu negócio!</h1>
          <p className="mb-5 text-sm md:text-base">
            Melhore o atendimento ao cliente e otimize seu suporte com nosso chatbot inteligente.
          </p>
          <WhatsAppButton />
        </div>
        <div className="w-full md:max-w-md">
          <Chat />
        </div>
      </section>

      <section id="introducao" className="min-h-screen px-4 flex flex-col justify-center pt-22">
        <h1 className="text-3xl text-center font-bold pt-10 mb-8">Por que contratar um chatbot para seu negócio?</h1>
        <div className="flex flex-col md:flex-row justify-around items-center gap-6 mb-10">
          <div className="flex flex-col items-center text-center max-w-xs">
            <BiSupport className="w-12 h-12 mb-2" />
            <h3 className="font-bold text-lg">Atendimento 24/7</h3>
            <p className="text-sm">Forneça suporte instantâneo, a qualquer hora do dia, todos os dias.</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <FaGears className="w-12 h-12 mb-2" />
            <h3 className="font-bold text-lg">Respostas Automatizadas</h3>
            <p className="text-sm">Respostas rápidas, consistentes e escaláveis para dúvidas frequentes.</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <RiMoneyDollarCircleFill className="w-12 h-12 mb-2" />
            <h3 className="font-bold text-lg">Redução de custos</h3>
            <p className="text-sm">Diminua custos operacionais automatizando o atendimento.</p>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center pt-10">
          Benefícios do Autobots
        </h2>
        <CarrosselCard />
      </section>

      <section id='implantacao' className="min-h-screen px-4 flex flex-col justify-center p-20">
        <div className=" bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-xl shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold mb-2 text-center">
              Implantação é Conosco
            </h1>
            <h2 className="text-2xl font-semibold mb-12 text-center text-blue-100">
              Como funciona?
            </h2>

            <div className="g-gradient-to-r from-blue-600 to-blue-800 bg-opacity-10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-8 text-center">Nosso processo</h3>

              <div className="space-y-8">
                {/* Passo 1 */}
                <div className="flex items-start">
                  <div className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Registro</h4>
                    <p className="text-blue-100">
                      Orientaremos você no cadastro do seu número de WhatsApp, garantindo
                      que tudo esteja configurado corretamente para começar.
                    </p>
                  </div>
                </div>

                {/* Passo 3 (original 2) */}
                <div className="flex items-start">
                  <div className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Templates</h4>
                    <p className="text-blue-100">
                      Desenvolvemos juntos modelos de mensagem personalizados que
                      se alinham perfeitamente com suas necessidades de negócios e tom de voz.
                    </p>
                  </div>
                </div>

                {/* Passo 4 (original 3) */}
                <div className="flex items-start">
                  <div className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Começo</h4>
                    <p className="text-blue-100">
                      Com tudo configurado, você estará pronto para operar com máxima eficiência,
                      aproveitando todo o potencial da nossa plataforma.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="produto" className="flex flex-col min-h-screen px-4 items-center justify-center ">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-10 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center lg:text-left">
            <p className="text-blue-600">Futuro</p> do autoatendimento!
          </h1>
          <div className="max-w-xl flex flex-col  text-sm md:text-base">
            <p>Dê adeus às extensões instáveis e plataformas limitadas.</p><br />
            <p>Ferramenta mais fácil para criar automação com IA e atendimento inteligente via WhatsApp.</p><br />
            <p>Fluxos inteligentes, mensagens personalizadas, áudios e mídias — a escolha ideal para escalar o atendimento e multiplicar suas vendas.</p><br />
            <p>Eu vou configurar tudo para você. Em menos de 48h, seu WhatsApp vira uma máquina de conversão — pronta para vender 24h por dia.</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-10">
          <SquareBorderProgress
            target={47}
            title="Aumento na conversão de vendas"
            description="Atendimentos mais rápidos, personalizados e no tempo certo — feitos por uma IA que entende de resultado."
          />
          <SquareBorderProgress
            target={62}
            title="Diminui os custos operacionais"
            description="Reduza seu time de atendimento sem perder performance. Automatize o que ninguém consegue escalar no braço."
          />
          <SquareBorderProgress
            target={94}
            title="Atendimentos resolvidos automaticamente"
            description="Enquanto você dorme, nossa IA está vendendo, tirando dúvidas e aquecendo leads. E o melhor: sem salário, sem férias, sem desculpas."
          />
        </div>
      </section>

      <section id="formulario" className="min-h-screen flex items-center  justify-center px-4">
        <Formulario />
      </section>

      <section id="linkedin" className="min-h-screen pt-40 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conecte-se comigo no LinkedIn</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm md:text-base">
            Quer entender melhor como a automação pode transformar seu atendimento?
            Estou à disposição para conversar sobre soluções personalizadas e novas oportunidades.
          </p>
          <div className="flex justify-center p-6">
            <Image unoptimized={true} className="rounded-2xl" src={eu} alt="Minha foto" width={300} height={300} />
          </div>
          <a
            href="https://www.linkedin.com/in/lucas-r-y-gonçalves-16b608198/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 text-black font-medium px-6 py-3 rounded-lg hover:bg-blue-400 transition text-sm md:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 28 28">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5V24H0V8zm7.5 0H13v2.3h.1c.8-1.4 2.7-2.9 5.6-2.9 6 0 7.1 4 7.1 9.2V24h-5v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 3.9V24h-5V8z" />
            </svg>
            Acesse meu LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
