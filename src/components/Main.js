import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="
            flex flex-col
            justify-center 
            items-center">
            <div className=' 
                flex
                justify-center
                w-3/4 
                h-auto
                bg-pink
                font-semibold 
                text-xl
                p-2
                m-4
                shadow-lg shadow-blue
                rounded'>
                <Link to="/quiz-barbie">
                    Faça o Quiz e teste seus conhecimentos sobre Barbie!
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
                shadow-lg shadow-blue
                rounded
            '>
                <Link to="/curiosidades-barbie">
                    Fatos Curiosos
                </Link>
            </div>
            
            
        </div>
        
    )
}

export default Main