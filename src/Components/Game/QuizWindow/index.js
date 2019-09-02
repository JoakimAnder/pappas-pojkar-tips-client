import React, {useState} from 'react';

const QuizWindow = () => {
    const [quiz, setQuiz] = useState("groupstage");
    function parseState() {
        switch(quiz) {
            case "test": return <div />;
            default: return <div />;
        }
    }
    return (
        <div>
            {/*tabs*/}
            {/*quiz*/}
            {parseState()}
        </div>
    );
};

export default QuizWindow;