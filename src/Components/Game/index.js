import React from 'react';
import QuizWindow from "./QuizWindow";
import Leaderboard from "../Leaderboard";
import {getData} from "../../ApiRequest";

const Game = () => {
    return (
        <div>
            <Leaderboard />
            <QuizWindow data={{tips: []}} />
        </div>
    );
};

export default Game;