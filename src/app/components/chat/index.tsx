import logo from "../../../../public/images/Icon.svg";
import Image from "next/image";

export default function Chat() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Moldura do iPhone - agora responsiva */}
      <div
        className="w-full max-w-[320px] h-[65vh] sm:h-[640px] bg-black rounded-[2.5rem] border-8 border-gray-900 shadow-2xl relative overflow-hidden transform -rotate-6 shadow-[0_0_50px_rgba(59,130,246,0.3)]"
        style={{
          boxShadow:
            "0 0 50px rgba(59, 130, 246, 0.3), 0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Câmera frontal */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-full z-10">
          <div className="bg-black rounded-4xl w-5 mx-auto"></div>
        </div>

        {/* Conteúdo do chat */}
        <div className="flex flex-col justify-end h-full p-3 space-y-3 bg-[#111827] text-sm relative">
          {/* Screen glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-blue-400/10 pointer-events-none"></div>
          {/* Mensagem do bot */}
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <Image
                unoptimized={true}
                src={logo}
                alt="logo do autobots"
                width={40}
                height={40}
              />
            </div>
            <div className="bg-[#1f2937] text-white px-3 py-2 rounded-lg max-w-[80%]">
              Olá! Como posso te ajudar hoje?
            </div>
          </div>

          {/* Mensagem do usuário */}
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white px-3 py-2 rounded-lg max-w-[80%]">
              Gostaria de saber mais sobre os serviços.
            </div>
          </div>

          {/* Nova resposta do bot */}
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <Image
                unoptimized={true}
                src={logo}
                alt="logo do autobots"
                width={40}
                height={40}
              />
            </div>
            <div className="bg-[#1f2937] text-white px-3 py-2 rounded-lg max-w-[80%]">
              Claro! Temos planos personalizados para o seu negócio.
            </div>
          </div>

          {/* Lista de opções */}
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <Image
                unoptimized={true}
                src={logo}
                alt="logo do autobots"
                width={40}
                height={40}
              />
            </div>
            <div className="bg-[#1f2937] text-white px-3 py-2 rounded-lg max-w-[80%]">
              Selecione o tipo de serviço desejado...
              <br />
              1. Chat bot
              <br />
              2. Agenda
              <br />
              3. Painel Saas
            </div>
          </div>

          {/* Campo de entrada */}
          <div className="bg-[#1f2937] p-2 rounded-lg mt-2 flex items-center">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              className="bg-transparent text-white text-sm outline-none flex-1 placeholder-gray-400"
              disabled
            />
            <button className="text-gray-400 text-sm ml-2">➤</button>
          </div>
        </div>
      </div>
    </div>
  );
}
