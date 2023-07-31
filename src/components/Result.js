import { Link } from 'react-router-dom';

const Result = ({score, total}) => {
    return (
        <div className="
        bg-gradient-to-r 
        from-gradient-initialGradient from-55%
        to-gradient-finalGradient to-100%
                w-screen 
                flex flex-col 
                justify-center items-center
             ">
            <div className="
                    w-full
                    flex flex-col 
                    justify-center 
                    items-center 
                    bg-rosaClaro">
            <img src={`${baseUrl}/assets/quiz.jpg`}
                className="bg-rosaClaro w-full rounded p-5 md:w-1/3 md:p-0"/>
            </div>
            <h3 className="
                font-semibold 
                text-4xl
                m-2">
                Resultado:
            </h3>
            <p className="text-xl">Você acertou {score} de {total} perguntas.</p>
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
    );
};

export default Result;