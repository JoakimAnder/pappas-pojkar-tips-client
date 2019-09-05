import React, {useState} from 'react';
import GroupStage from "./GroupStage";

const QuizWindow = () => {
    const [quiz, setQuiz] = useState("groupstage");
    function parseState() {
        switch(quiz) {
            case "test": return <div />;
            default: return <GroupStage data={{
                teams: [
                    {
                        id: 0,
                        name: "Sweden",
                        flag: "url",
                        group: "a",
                    },{
                        id: 1,
                        name: "Norway",
                        flag: "url",
                        group: "a",
                    },{
                        id: 2,
                        name: "Denmark",
                        flag: "url",
                        group: "a",
                    },{
                        id: 3,
                        name: "Germany",
                        flag: "url",
                        group: "a",
                    },{
                        id: 4,
                        name: "Spain",
                        flag: "url",
                        group: "b",
                    },{
                        id: 5,
                        name: "Italy",
                        flag: "url",
                        group: "b",
                    },{
                        id: 6,
                        name: "England",
                        flag: "url",
                        group: "b",
                    },{
                        id: 7,
                        name: "Russia",
                        flag: "url",
                        group: "b",
                    },{
                        id: 8,
                        name: "Seberia",
                        flag: "url",
                        group: "c",
                    },{
                        id: 9,
                        name: "Panama",
                        flag: "url",
                        group: "c",
                    },{
                        id: 10,
                        name: "Colombia",
                        flag: "url",
                        group: "c",
                    },{
                        id: 11,
                        name: "Senegal",
                        flag: "url",
                        group: "c",
                    },{
                        id: 12,
                        name: "Peru",
                        flag: "url",
                        group: "d",
                    },{
                        id: 13,
                        name: "Costa Rica",
                        flag: "url",
                        group: "d",
                    },{
                        id: 14,
                        name: "Schweiz",
                        flag: "url",
                        group: "d",
                    },{
                        id: 15,
                        name: "Sydkorea",
                        flag: "url",
                        group: "d",
                    },
                ],
                game: {
                    id: 0,
                    startDateTime: 123123,
                    lockDateTime: 123124,
                    endDateTime: 123125,
                    name: "EM 2024",
                    tips: [
                        {
                            id: 0,
                            name: "ghost quiz",
                            questions: [
                                {
                                    id: 256,
                                    type: 15,
                                    result: null,
                                    alternatives: [
                                        "a1", "b2"
                                    ]
                                },{
                                    id: 257,
                                    type: 15,
                                    result: null,
                                    alternatives: [
                                        "c1", "d1"
                                    ]
                                },{
                                    id: 258,
                                    type: 15,
                                    result: null,
                                    alternatives: [
                                        "b1", "a2"
                                    ]
                                },{
                                    id: 259,
                                    type: 15,
                                    result: null,
                                    alternatives: [
                                        "d1", "c2"
                                    ]
                                },{
                                    id: 260,
                                    type: 15,
                                    result: null,
                                    alternatives: [
                                        "e1", "f2"
                                    ]
                                },{
                                    id: 261,
                                    type: 15,
                                    result: null,
                                    alternatives: [
                                        "g1", "h2"
                                    ]
                                },{
                                    id: 262,
                                    type: 15,
                                    result: null,
                                    alternatives: [
                                        "f1", "e2"
                                    ]
                                },{
                                    id: 263,
                                    type: 15,
                                    result: null,
                                    alternatives: [
                                        "h1", "g2"
                                    ]
                                },{
                                    id: 264,
                                    type: 15,
                                    result: null,
                                    alternatives: [
                                        "w49", "w50"
                                    ]
                                },{
                                    id: 265,
                                    type: 15,
                                    result: null,
                                    alternatives: [
                                        "w53", "w54"
                                    ]
                                },{
                                    id: 266,
                                    type: 15,
                                    result: null,
                                    alternatives: [
                                        "w51", "w52"
                                    ]
                                },{
                                    id: 267,
                                    type: 15,
                                    result: null,
                                    alternatives: [
                                        "w55", "w56"
                                    ]
                                },{
                                    id: 268,
                                    type: 15,
                                    result: null,
                                    alternatives: [
                                        "w57", "w58"
                                    ]
                                },{
                                    id: 269,
                                    type: 15,
                                    result: null,
                                    alternatives: [
                                        "w59", "w60"
                                    ]
                                },{
                                    id: 270,
                                    type: 15,
                                    result: null,
                                    alternatives: [
                                        "w61", "w62"
                                    ]
                                }
                            ]
                        },
                        {
                            id: 1,
                            name: "Group Stage",
                            questions: [
                                {
                                    id: 315,
                                    type: 16,
                                    result: null,
                                    alternatives: [
                                        0,1
                                    ]
                                },{
                                    id: 316,
                                    type: 16,
                                    result: null,
                                    alternatives: [
                                        2,3
                                    ]
                                },{
                                    id: 317,
                                    type: 16,
                                    result: null,
                                    alternatives: [
                                        4,5
                                    ]
                                },{
                                    id: 318,
                                    type: 16,
                                    result: null,
                                    alternatives: [
                                        6,7
                                    ]
                                },{
                                    id: 319,
                                    type: 16,
                                    result: null,
                                    alternatives: [
                                        8,9
                                    ]
                                },{
                                    id: 320,
                                    type: 16,
                                    result: null,
                                    alternatives: [
                                        10,11
                                    ]
                                },{
                                    id: 321,
                                    type: 16,
                                    result: null,
                                    alternatives: [
                                        12,13
                                    ]
                                },{
                                    id: 322,
                                    type: 16,
                                    result: null,
                                    alternatives: [
                                        14,15
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }} />;
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
