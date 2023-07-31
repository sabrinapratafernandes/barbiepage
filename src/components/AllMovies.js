import movies from "../data/movies"
import { Link } from 'react-router-dom';

const AllMovies = () => {
    return(
        <div className='
        w-full
        flex flex-col 
        justify-center items-center
        bg-gradient-to-r 
        from-gradient-initialGradient from-55%
        to-gradient-finalGradient to-100%'>
            <h2 className='
                    font-semibold 
                    text-xl
                    p-2
                    w-5/6
                    md:w-3/6
                '>
                Veja a Lista Completa dos Fimes da Barbie:
            </h2>
            {movies.map((movie, index) => (
                <div className="w-5/6 p-2 md:w-3/6">
                    <div className="flex items-center" key={index}>
                    <img className="w-2/5 md:w-1/5" src={movie.imgUrl}/>   
                    <h2 className="pl-2"> {movie.title} </h2>
                    </div>
                </div>
            )
            )}
            
            <h2 className="
            bg-blue 
            w-full 
            flex justify-center 
            text-pink 
            text-xl font-semibold">
                Especiais:
            </h2>
            <p className="
            text-xl font-semibold
            ">
                Barbie Dreamhouse Adventures
            </p>
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

export default AllMovies