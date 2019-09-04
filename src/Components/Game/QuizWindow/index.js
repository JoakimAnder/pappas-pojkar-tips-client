import React, {useState} from 'react';
import { Button,Container, Row,Col,Card,CardDeck,CardGroup } from 'react-bootstrap';
import GhostQuiz from "./GhostQuiz";

const QuizWindow = () => {
    const [quiz, setQuiz] = useState("groupstage");
    function parseState() {
        switch(quiz) {
            case "test": return <div />;
            case "GhostQuiz": return <GhostQuiz setQuiz={setQuiz}/>
            default: return <div />;
        }
    }
    return (
        <div>
            {/*tabs*/}
            <button>Group Stage</button>
            <button onClick={()=>setQuiz("GhostQuiz")}>Ghost Quiz</button>
            <button>Group Endings</button>
            <button>Battle of the north</button>
            {/*quiz*/}


            {parseState(setQuiz)}
        </div>
    );
};

export default QuizWindow;