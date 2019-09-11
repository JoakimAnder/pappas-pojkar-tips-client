import React from 'react';
import QuizWindow from "./QuizWindow";
import Leaderboard from "../Leaderboard";
import {Col, Container, Row} from "react-bootstrap";

const Game = () => {
    return (

            <div>
                <div style={{
                    background: 'blue'

                }}>
                    <h1 style={{width: '100%', height: '10rem'}}>PICTURE</h1>
                </div>
                <Container>
                    <Row>
                        <Col lg={2} md={2}><Leaderboard /> </Col>
                        <Col lg={10} md={10} sm={12}> <QuizWindow /></Col>
                    </Row>
                </Container>

            </div>

    );
};

export default Game;