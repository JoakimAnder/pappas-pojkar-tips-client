import React, {useState} from 'react';
import TableQuiz from "../TableQuiz";

const GroupStage = props => {
    if(!props.data)return <></>;

    return <TableQuiz questions={props.data.questions} />
};

export default GroupStage;

