import React, {useState} from 'react';
import GroupStage from "./GroupStage";
import GhostQuiz from "./GhostQuiz";

const QuizWindow = props => {
    const [quiz, setQuiz] = useState("");
    function parseState() {
        switch(quiz) {
            case "groupStage": return <GroupStage data={props.data.tips[1]} />;
            case "ghostQuiz": return <GhostQuiz/>;
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
