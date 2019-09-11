import React, {useState} from 'react';
import GroupStage from "./GroupStage";

const QuizWindow = props => {
    function parseState() {
        switch(quiz) {
            case "test": return <div>hej</div>;
            default: return <GroupStage data={props.data.tips[1]} />; //TODO get api data
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
