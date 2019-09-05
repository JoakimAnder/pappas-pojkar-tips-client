import React, {useState} from 'react';

const GroupStage = props => {
    const [questions, setQuestions] = useState(props.data.game.tips[1].questions);
    const teams = props.data.teams;

    function changeQs(i, b) {
        let list = JSON.parse(JSON.stringify(questions));
        list[i].selected = b;
        setQuestions(list);
    }

    function questionToRow(q, i) {
        function selectAlt(e) {
            changeQs(i, e.target.innerHTML);
        }
        return (
            <tr key={i}>
                <th scope={"row"} className={"text-center"}>{teams[q.alternatives[0]].name} - {teams[q.alternatives[1]].name}</th>
                <td className={"p-0"}>
                    <button
                        onClick={selectAlt}
                        className={"btn w-100 h-100".concat((q.selected == "1")?" btn-primary":"")}>
1
                    </button>
                </td>
                <td className={"p-0"}>
                    <button onClick={selectAlt} className={"btn w-100 h-100".concat((q.selected == "X")?" btn-primary":"")}>
                        X
                    </button>
                </td>
                <td className={"p-0"}>
                    <button onClick={selectAlt}
                            className={"btn w-100 h-100".concat((q.selected == "2")?" btn-primary":"")}
                    >
2
                    </button>
                </td>
            </tr>
        );
    }
    return (
        <div>
            <table className={"table table-bordered table-hover text-center"}>
                <thead>
                    <tr>
                        <th scope={"col"}>team vs team</th>
                        <th scope={"col"}>1</th>
                        <th scope={"col"}>X</th>
                        <th scope={"col"}>2</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map(questionToRow)}
                </tbody>
            </table>
            <button className={"btn btn-primary"} onClick={() => {
                let list = questions.map(q => {
                    switch(q.selected) {
                        case "1": return teams[q.alternatives[0]].name;
                        case "X": return "Tie";
                        case "2": return teams[q.alternatives[1]].name;
                        default: return "none selected"
                    }
                });
                console.log(list);
            }}>
                Save
            </button>
        </div>
    );
};

export default GroupStage;