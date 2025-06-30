'use client'

import { useEffect, useRef, useState } from "react"
import emailjs from '@emailjs/browser';

export default function Formulario() {

    const form = useRef<HTMLFormElement>(null);
    const [enviado, setEnviado] = useState(false);
    const [erro, setErro] = useState(false);
    const [texto, setTexto] = useState('abaixo');
    
    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        setTexto(isMobile ? 'abaixo' : 'ao lado');
    }, []);

    const enviarEmail = (e: React.FormEvent) => {
        e.preventDefault();


        if (!form.current) return;

        emailjs.init({
            publicKey: 'HEj_GsdW86WUxlHo1SZMI',
            blockHeadless: true,
            blockList: {
                watchVariable: 'userEmail',
            },
            limitRate: {
                id: 'app',
                throttle: 10000,
            },
        });

        console.log(form.current)
        emailjs
            .sendForm(
                'service_np8grza',
                'template_kbk49be',
                form.current,
                { publicKey: '0lOg8ozcxecL2tt_2' }
            )
            .then(
                () => {
                    setEnviado(true);
                    setErro(false);
                    form.current?.reset();
                },
                () => {
                    setErro(true);
                    setEnviado(false);
                }
            );
    };

    return (
        <section id="contato" className="bg-[#0d0d0d] text-white py-20 px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Texto de chamada */}
                <div>
                    <h2 className="text-4xl font-bold mb-4">Vamos conversar?</h2>
                    <p className="text-gray-400 mb-6">
                        Tem interesse em automatizar seus atendimentos com inteligência artificial? Precisa de um projeto personalizado com chatbot?
                    </p>
                    <p className="text-gray-400">
                        Preencha o formulário {texto} e nossa equipe entrará em contato com você em até 24 horas úteis.
                    </p>
                </div>

                {/* Formulário */}
                <form
                    ref={form}
                    onSubmit={enviarEmail}
                    className="space-y-6 bg-[#1a1a1a] p-8 rounded-xl shadow-xl" >
                    <div>
                        <label className="block text-sm mb-2">Nome</label>
                        <input
                            type="text"
                            name="user_name"
                            required
                            placeholder="Seu nome"
                            className="w-full bg-[#2a2a2a] border border-[#444] rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-2">E-mail</label>
                        <input
                            type="email"
                            name="user_email"
                            required
                            placeholder="exemplo@email.com"
                            className="w-full bg-[#2a2a2a] border border-[#444] rounded px-4 py-3 text-white focus:outline-none focus:ring-2  focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-2">Mensagem</label>
                        <textarea
                            rows={5}
                            name="message"
                            required
                            placeholder="Descreva sua necessidade ou projeto..."
                            className="w-full bg-[#2a2a2a] border border-[#444] rounded px-4 py-3 text-white focus:outline-none focus:ring-2  focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-black font-semibold py-3 rounded hover:bg-blue-400 transition"
                    >
                        Enviar mensagem
                    </button>

                    {enviado && <p className="text-blue-600 text-sm mt-4">Mensagem enviada com sucesso!</p>}
                    {erro && <p className="text-red-400 text-sm mt-4">Erro ao enviar. Tente novamente.</p>}

                </form>
            </div>
        </section>
    )
}
