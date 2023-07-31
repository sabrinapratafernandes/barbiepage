import barbiesOutOfLine from "../data/barbiesOutOfLine";
import { Link } from 'react-router-dom';

const DiscontinuedBarbies = () => {
    return (
        <div className='
        w-full
        flex flex-col 
        justify-center items-center
        bg-gradient-to-r 
        from-gradient-initialGradient from-55%
        to-gradient-finalGradient to-100%'>
            <h2 className='
                    font-semibold 
                    text-3xl
                    p-2
                '>
                    Algumas Barbies que saíram de linha:
            </h2>
            <img src={`${baseUrl}/assets/barbieDiscontinued.png`}
                 className='p-4'/>

            <ul className='md:w-3/4'>
            {barbiesOutOfLine.map((barbie, index) => (
            <li key={index}>
                <h2 className="
                    font-semibold 
                    text-xl
                    text-pink
                    w-full
                    p-2
                    bg-rosaClaro
                ">
                    {barbie.title}:
                </h2>
                <p className='p-2'>
                    {barbie.text}
                </p>
            </li>
            ))}
            </ul>
            <Link to="/"
                  className='
                    flex
                    justify-center
                    w-3/4 
                    h-auto
                    bg-pink
                    font-semibold 
                    text-xl
                    p-2
                    m-4
                    mb-10
                    shadow-lg shadow-blue
                    rounded
                    md:w-2/5
                  '>
                    Página inicial
            </Link>
        </div>
    )
}

export default DiscontinuedBarbies;