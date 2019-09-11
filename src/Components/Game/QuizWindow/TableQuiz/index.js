import React, {useState} from 'react';
import Table from "react-bootstrap/Table";
import {questionTypes as QuestionTypes} from "../../../../Utilities";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/es/ButtonGroup";

export default function TableQuiz(props) {
    const [questions, setQuestions] = useState(props.questions);
    function selectAlternative(questionIndex, guess, questionMapper) {
        const questionsCopy = JSON.parse(JSON.stringify(questions));
        questionsCopy[questionIndex] = questionMapper(questionsCopy[questionIndex], guess);
        setQuestions(questionsCopy);
    }
    return (
        <div>
            <Table bordered hover className={"text-center"}>
                <tbody>
                    {questions.map(parseQuestion)}
                </tbody>
            </Table>
        </div>
    );

    function parseQuestion(question, questionIndex) {
        // Ensure question has a selected property
        if(!question.selected) {
            if(question.type === QuestionTypes.SORT) {
                question.selected = question.alternatives.map((_, i) => i);
            } else {
                question.selected = [];
            }
        }

        const buttonFunc = getButtonComponent( question, questionIndex, selectAlternative)

        return <tr key={questionIndex}>
            <td>{question.slogan}</td>
            {question.alternatives.map((a, ai) => <td key={ai}>{buttonFunc(a,ai)}</td>)}

        </tr>
    }

    function getButtonComponent(question, questionIndex, onClick) {
        function isSelected(predicate) {
            return (!question.selected && question.selected !== 0)
                ? false
                : predicate(question.selected);
        }
        const width = Math.floor(12 / question.alternatives.length);

        return createButtonComponent(question.type);


        function createButtonComponent(type) {
            switch(type){
                case "m": return (alt, altIndex) => <Button
                    key={altIndex}
                    col={width}
                    variant={isSelected(selected => selected.indexOf(altIndex) !== -1)?"primary":"secondary"}
                    onClick={() => onClick(questionIndex, altIndex, ( question, guess ) => {
                        if( !question.selected ) {
                            // Null check
                            question.selected = [guess]
                        } else {
                            const selectedIndex = question.selected.indexOf(guess);
                            if(selectedIndex === -1) {
                                // If not selected, add.
                                question.selected.push(guess);
                            } else {
                                // If selected, remove.
                                question.selected.splice(selectedIndex, 1);
                            }
                            return question;
                        }
                    })}
                >
                    {alt}
                </Button>
                case "s": return (alt, altIndex) => {
                    if ( !question.selected ) {
                        question.selected = question.alternatives.map(( _, i ) => i);
                    }

                    return <ButtonGroup
                        key={altIndex}
                        col={width}

                    >

                        {altIndex > 0 && <Button
                            variant={"secondary"}
                            onClick={() => onClick(questionIndex, altIndex, (question, guess) => {
                                if(guess-1 < 0)
                                    return question;
                                // change places on viewable arr
                                let temp = question.alternatives[guess-1];
                                question.alternatives[guess-1] = question.alternatives[guess];
                                question.alternatives[guess] = temp;

                                // change places on guess arr
                                temp = question.selected[guess-1];
                                question.selected[guess-1] = question.selected[guess];
                                question.selected[guess] = temp;

                                return question;
                            })}
                        >
                            {"<"}
                        </Button>}
                        <Button
                            variant={"primary"}
                        >{alt}</Button>
                        {altIndex+1 < question.alternatives.length && <Button
                            variant={"secondary"}
                            onClick={() => onClick(questionIndex, altIndex, (question, guess) => {
                                if(guess+1 > question.alternatives.length)
                                    return question;
                                // change places on viewable arr
                                let temp = question.alternatives[guess+1];
                                question.alternatives[guess+1] = question.alternatives[guess];
                                question.alternatives[guess] = temp;

                                // change places on guess arr
                                temp = question.selected[guess+1];
                                question.selected[guess+1] = question.selected[guess];
                                question.selected[guess] = temp;
                                return question;
                            })}
                        >
                            {">"}
                        </Button>}

                    </ButtonGroup>}


                case "t": return (alt, altIndex) => <input
                    key={altIndex}
                    className={`col-${width} `}
                    placeholder={alt}
                    value={question.selected && question.selected[0]}
                    onChange={e => onClick( questionIndex, e.target.value, ( question, guess ) => {
                        question.selected = [guess];
                        return question;
                    })}
                >
                </input>
                case 1: return (alt, altIndex) => <Button
                    key={altIndex}
                    col={width}
                    variant={(isSelected(selected => selected.indexOf(altIndex) !== -1)?"primary":"secondary")}
                    onClick={() => onClick( questionIndex, altIndex, ( question, guess ) => {
                        question.selected = [guess];
                        return question;
                    } )}
                >
                    {alt}
                </Button>
                default:
                    if(!Number.parseInt(type) && Number.parseInt(type) !== 0)
                        throw new Error(`Type '${type}' is not supported`);
                    return (alt, altIndex) => <Button
                        key={altIndex}
                        col={width}
                        variant={isSelected(selected => selected.indexOf(altIndex) !== -1)?"primary":"secondary"}
                        onClick={() => onClick( questionIndex, altIndex, ( question, guess ) => {
                            const noOfSelected = Number.parseInt(type);
                            if(noOfSelected === 0) return question; // If no guess should be saved.
                            if( !question.selected ) {
                                // Null check
                                question.selected = [guess]
                            } else {
                                const altIndex = question.selected.indexOf(guess);
                                if ( altIndex === -1 ) {
                                    if(question.selected.length >= noOfSelected) {
                                        question.selected.splice(0,1);
                                    }
                                    question.selected.push(guess)
                                } else {
                                    question.selected.splice(altIndex, 1);
                                }
                            }
                            return question;
                        } )}
                    >
                        {alt}
                    </Button>
            }
        }
    }
};















































