import movieHype from "../data/movieHype"

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
            <img src="/assets/barbie-margot-filme.webp" 
                className="p-2"/>
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
        </div>
    )
}
export default MovieSuccess