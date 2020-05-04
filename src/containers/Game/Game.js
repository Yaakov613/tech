import React, { Component } from "react";
import Row from '../../components/UI/row/row'
import Board from '../../components/UI/board/board'
import Box from '../../components/UI/box/box'
import checkBoxHandler from './methods/checkBoxHandler'



class Game extends Component {
    state = {
        boxes: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ],
        turn: 'X',
        count: 0,
        winner: null,
        disable: null,
        draw: false,
        players: {
            firstPlayer: {
                value: '',
                wins: 0
            },
            secondPlayer: {
                value: '',
                wins: 0
            }
        },
        loggedIn: false,
        valid: false,
        playAgain: false,
        currentPlayer: null
    }



    render() {

        return (<Board
            firstPlayer={this.state.players.firstPlayer.value}
            secondPlayer={this.state.players.secondPlayer.value}
            currentPlayer={this.state.currentPlayer}
            firstPlayerWins={this.state.players.firstPlayer.wins}
            secondPlayerWins={this.state.players.secondPlayer.wins}>
            {this.state.boxes.map(
                (rowOfBoxes, rowIndex) => <Row>
                    {rowOfBoxes.map(
                        (box, index) => <Box symbol={box}
                            clicked={() => checkBoxHandler(this, index, box, rowIndex)}
                            key={index}
                            type={box} />)}
                </Row>)}
        </Board>
        )
    }

}

export default Game