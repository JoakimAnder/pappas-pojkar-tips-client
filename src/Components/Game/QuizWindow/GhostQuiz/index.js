import React,{useState} from 'react';
import {Card, CardGroup} from "react-bootstrap";


 const GhostQuiz = () => {
     const [questions, setQuestions] = useState();

     function  ghostMatches  (match, matchIndex){
    let button1Selected = false;
    let button2Selected = false;
          if(match.selected === 0){
       button1Selected = true;
     }
     if(match.selected === 1){
         button2Selected = true;
     }
     function select(index) {
         let newList = JSON.parse(JSON.stringify(questions));

         newList[matchIndex].selected = index;

         setQuestions(newList)
     }

     return(

         <Card bg="primary" text="white" className="match-card">
             <Card.Header>{match.matchNr}</Card.Header>
             <Card.Body>
                 <button onClick={() => select(0)} className={ button1Selected ? "btn-dark" : "btn-outline-dark"}>{match.alternatives[0]}</button>
                 <p><strong>VS</strong> </p>
                 <button onClick={() => select(1)} className={ button2Selected ? "btn-dark" : "btn-outline-dark"}> {match.alternatives[1]}</button>
             </Card.Body>
         </Card>
     )
     }

    return (

        <div>
            <CardGroup>
            {questions.slice(0,8).map((m, index) => (
                ghostMatches(m, index)
            ))}
            </CardGroup>

            <CardGroup>
            {questions.slice(8,12).map((m, index) => (
                ghostMatches(m, index +8)
            ))}
            </CardGroup>

            <CardGroup>
            {questions.slice(12,14).map((m, index) => (
                ghostMatches(m, index +12)
            ))}
            </CardGroup>

            <CardGroup>
            {questions.slice(14).map((m, index) => (
                ghostMatches(m, index +14)
            ))}
            </CardGroup>
        </div>
    );
};

export default GhostQuiz;