import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="
            bg-gradient-to-r 
            from-gradient-initialGradient from-55%
            to-gradient-finalGradient to-100%
            flex flex-col
            justify-center 
            items-center
            ">
            <div className=' 
                flex
                justify-center
                w-3/4 
                h-auto
                bg-pink
                font-semibold 
                text-xl
                p-2
                m-2
                shadow-lg shadow-blue
                rounded
                md:w-2/5
                md:m-6'>
                <Link to="/quiz-barbie">
                    Faça o Quiz e teste seus conhecimentos sobre Barbie!
                </Link>
            </div>
            <div className='
                flex
                justify-center
                w-3/4
                h-auto
                bg-rosaClaro
                text-pink
                font-semibold 
                text-xl
                p-2
                m-2
                shadow-lg shadow-blue
                rounded
                md:w-2/5
                md:m-6
            '>
                <Link to="/curiosidades-barbie">
                    Fatos Curiosos
                </Link>
            </div>

            <div className='
                flex
                justify-center
                w-3/4
                h-auto
                bg-pink
                font-semibold 
                text-xl
                p-2
                m-2
                shadow-lg shadow-blue
                rounded
                md:w-2/5
                md:m-6
            '>
                <Link to="/barbie-live-action">Barbie o Filme: Entenda o Sucesso</Link>
            </div>

            <div className='
                flex
                justify-center
                w-3/4
                h-auto
                bg-rosaClaro
                text-pink
                font-semibold 
                text-xl
                p-2
                m-2
                shadow-lg shadow-blue
                rounded
                md:w-2/5
                md:m-6
            '>
                <Link to="/lista-filmes-barbie">Veja a Lista Completa dos Fimes da Barbie</Link>
            </div>

            <div className='
                flex
                justify-center
                w-3/4
                h-auto
                bg-pink
                font-semibold 
                text-xl
                p-2
                m-2
                shadow-lg shadow-blue
                rounded
                md:w-2/5
                md:m-6
            '>
                <Link to="/barbies-fora-de-linha">Barbies fora de Linha</Link>
            </div>

            
            
            
        </div>
        
    )
}

export default Main