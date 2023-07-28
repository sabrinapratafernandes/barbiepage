import Question from "./Question";

const Result = ({score, total}) => {
    return (
        <div>
            <h3>Resultado</h3>
            <p>Você acertou {score} de {total} perguntas.</p>
        </div>
    );
};

export default Result;