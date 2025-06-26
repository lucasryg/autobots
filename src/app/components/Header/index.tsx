import Image from 'next/image'

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full flex px-10 z-50 bg-gray-950 text-1xl text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7x1">
                <div className='flex items-center'>
                    <a href='#home'>
                        <Image
                            className='rounded-full'
                            width="50"
                            height="50"
                            src={"./icon.svg"}
                            alt="Imagem do site"
                        />
                    </a>
                    <div className="p-5">
                        <h1>
                            <a href='#home'>
                                Autobots
                            </a>
                        </h1>
                    </div>
                </div>
                <nav>
                    <ul className=" flex items-center justify-center gap-5">
                        <a href='#introducao'>Introdução</a>
                        <a href='#produto'>Produto</a>
                        <a href='#formulario'>Formulario</a>
                        <a href="#linkedin" className='bg-blue-950 w-full p-2 rounded-2xl'>Contato</a>
                    </ul>
                </nav>
            </div>
        </header>
    )
}