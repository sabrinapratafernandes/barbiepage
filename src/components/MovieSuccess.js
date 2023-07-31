import movieHype from "../data/movieHype"
import { Link } from 'react-router-dom';

const MovieSuccess = () => {

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
                    text-2xl
                    p-2
                '>
                Barbie, 5 motivos para explicar o sucesso do filme nos cinemas.
            </h2>
            <img src="/assets/bb-filme.webp" 
                className="p-2 md:w-2/5"/>
            {movieHype.map((fact, index) => (
                <ul className="md:w-3/4 md:m-2">
                    <li key={index}>
                    <h2 className="
                    font-semibold 
                    text-xl
                    text-pink
                    w-full
                    p-2
                    bg-rosaClaro
                ">
                        {fact.title}
                    </h2>
                    <p className='p-2'>{fact.text}</p>
                    </li>
                </ul>                
            ))}
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
export default MovieSuccess