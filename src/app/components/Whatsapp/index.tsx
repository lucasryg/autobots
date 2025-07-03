import Link from 'next/link';

export default function WhatsAppButton() {
  // Substitua pelo seu número de WhatsApp (apenas números) e a mensagem desejada
  const phoneNumber = '5511979604720'; // Exemplo: 55 (Brasil) + DDD + número
  const message = 'Olá, gostaria de testar a ferramenta!';
  
  // Cria o link do WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
        Testar ferramenta
      </button>
    </Link>
  );
}