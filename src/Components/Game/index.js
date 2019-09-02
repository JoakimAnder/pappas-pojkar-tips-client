import React from 'react';
import QuizWindow from "./QuizWindow";
import Leaderboard from "../Leaderboard";

const Game = () => {
    return (
        <div>
            <Leaderboard />
            <QuizWindow />
        </div>
    );
};

export default Game;