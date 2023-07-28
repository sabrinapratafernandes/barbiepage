import curiousFacts from '../data/curiousFacts'

const Curiosities = () => {
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
                    10 Fatos sobre a Barbie
            </h2>
            <img src='/assets/curiosidades.webp'
                 className='
                  p-4
                 '/>
            
            <ul>
            {curiousFacts.map((fact, index) => (
            <li key={index}>
                <h2 className="
                    font-semibold 
                    text-xl
                    text-pink
                    w-full
                    p-2
                    bg-rosaClaro
                ">
                    {fact.title}:
                </h2>
                <p className='
                    p-2
                '>
                    {fact.text}
                </p>
            </li>
            ))}
            </ul>
        </div>
    )
}

export default Curiosities;