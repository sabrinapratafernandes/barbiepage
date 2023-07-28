// Cria as questões iterando pelas questions e retornando os campos referentes
const Question = ({question, options, onSelectOption}) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="
                flex 
                justify-center 
                items-center
                font-semibold 
                text-xl
                w-full
                p-8
                ">
                {question}
            </h2>
            <ul className="">
                {options.map((option, index) => (
                    <button key={index} onClick={() => onSelectOption(option)}
                        className="
                        w-60 h-10 
                        flex 
                        justify-center 
                        items-center
                        bg-buttons-inative
                        hover:bg-buttons-active
                        active:bg-buttons-active
                        m-4
                        rounded
                        shadow-lg shadow-white
                        cursor-pointer
                        ">
                        {option}
                    </button>
                ))} 
            </ul>
        </div>
    );
};

export default Question;