import React, {useState} from 'react';
import GhostQuiz from "./GhostQuiz";

const QuizWindow = () => {
    const [quiz, setQuiz] = useState("groupstage");
    function parseState() {
        switch(quiz) {
            case "test": return <div />;
            case "ghostQuiz": return <GhostQuiz/>
            default: return <div />;
        }
    }
    return (
        <div>
            {/*tabs*/}
            <button>Group Stage</button>
            <button onClick={()=>setQuiz("ghostQuiz")}>Ghost Quiz</button>
            <button>Group Endings</button>
            <button>Battle of the north</button>
            {/*quiz*/}


            {parseState()}
        </div>
    );
};

export default QuizWindow;