import logo from '../../../../public/images/Icon.svg';
import Image from 'next/image';

export default function Chat() {

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      {/* Molde do iPhone */}
      <div className="w-[320px] h-[640px] bg-black rounded-[2.5rem] border-8 border-gray-900 shadow-2xl relative overflow-hidden">
        {/* Câmera frontal */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-full z-10">
          <div className="bg-black rounded-4xl w-5"></div>
        </div>

        {/* Conteúdo do chat */}
        <div className="flex flex-col justify-end h-full p-4 space-y-4 bg-[#111827]">
          {/* Mensagem do bot */}
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              <Image unoptimized={true} src={logo} alt="logo do autobots" width={40} height={40} />
            </div>
            <div className="bg-[#1f2937] text-sm text-white px-3 py-2 rounded-lg max-w-[75%]">
              Olá! Como posso te ajudar hoje?
            </div>
          </div>

          {/* Mensagem do usuário */}
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white text-sm px-3 py-2 rounded-lg max-w-[75%]">
              Gostaria de saber mais sobre os serviços.
            </div>
          </div>

          {/* Nova resposta do bot */}
          <div className="flex items-start space-x-1">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              <Image unoptimized={true} src={logo} alt="logo do autobots" width={40} height={40} />
            </div>
            <div className="h-6" />
            <div className="bg-[#1f2937] text-sm text-white px-3 py-2 rounded-lg max-w-[75%]">
              Claro! Temos planos personalizados para o seu negócio.
            </div>
          </div>

          {/* Nova resposta do bot */}
          <div className="flex items-start space-x-1">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
               <Image unoptimized={true} src={logo} alt="logo do autobots" width={40} height={40} />
            </div>
            <div className="h-6" />
            <div className="bg-[#1f2937] text-sm text-white px-3 py-2 rounded-lg max-w-[75%]">
              Selecione o tipo de serviço desejado...
              <br />

              1. Chat bot
              <br />
              2. Agenda
              <br />
              3. Painel Saas
              <br />
            </div>
          </div>

          {/* Campo de entrada (não funcional) */}
          <div className="bg-[#1f2937] p-2 rounded-lg mt-4 flex items-center justify-between">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              className="bg-transparent text-white text-sm outline-none flex-1 placeholder-gray-400"
              disabled
            />
            <button className="text-gray-400 text-sm ">➤</button>
          </div>
        </div>
      </div>
    </div>
  );
}
