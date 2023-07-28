import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import Curiosities from "./components/Curiosities";

function App() {
  return (
    <div className="
        text-white
        w-screen
        h-screen
        bg-gradient-to-r 
        from-gradient-initialGradient from-55%
        to-gradient-finalGradient to-100%">
      <BrowserRouter>
      <img className=" flex justify-center w-screen p-2 object-contain h-48 w-96" 
             src="/assets/barbie-logo.png"/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/quiz-barbie" element={<Quiz/>} />
          <Route path="/curiosidades-barbie" element={<Curiosities/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

