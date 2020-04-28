import React, { Component } from 'react';
import Sum from './sum';

// import './App.css';

class App extends Component {
  state = {
    boxes: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    turn: 'X',
    count: 0
  }
  resfreshState = () => {
    this.setState({
      boxes: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      turn: 'X',
      count: 0
    })
  }

  checkforWinner = (updateDatedRows) => {
    if ((updateDatedRows[0][0] !== null && updateDatedRows[0][0] === updateDatedRows[1][1] && updateDatedRows[2][2]) ||
      (updateDatedRows[0][2] !== null && updateDatedRows[0][2] === updateDatedRows[1][1] && updateDatedRows[2][0])) {
      setTimeout(() => {
        alert('we have a winner')
        this.resfreshState()
      }, 500);
    }
    if ((updateDatedRows[0][0] !== null && updateDatedRows[0][0] === updateDatedRows[1][0] && updateDatedRows[2][0]) ||
      (updateDatedRows[0][1] !== null && updateDatedRows[0][1] === updateDatedRows[1][1] && updateDatedRows[2][1]) ||
      (updateDatedRows[0][2] !== null && updateDatedRows[0][2] === updateDatedRows[1][2] && updateDatedRows[2][2])) {
      setTimeout(() => {
        alert('we have a winner')
        this.resfreshState()
      }, 500);
    }
    if ((updateDatedRows[0][0] !== null && updateDatedRows[0][0] === updateDatedRows[0][1] && updateDatedRows[0][2]) ||
      (updateDatedRows[1][0] !== null && updateDatedRows[1][0] === updateDatedRows[1][1] && updateDatedRows[1][2]) ||
      (updateDatedRows[2][0] !== null && updateDatedRows[2][0] === updateDatedRows[2][1] && updateDatedRows[2][2])) {
      setTimeout(() => {
        alert('we have a winner!!')
        this.resfreshState()
      }, 1000);
    }
  }

  checkBoxHandler = (index, box) => {
    if (!box) {
      const updatedFirstRow = [...this.state.boxes[0]]
      updatedFirstRow.splice(index, 1, this.state.turn)
      const updatedBoxes = [updatedFirstRow, this.state.boxes[1], this.state.boxes[2]]
      let turn = 'X'
      if (this.state.turn === 'X') { turn = '0' }
      const winnerble = updatedBoxes.map((row, index) => {
        const filteredRow = row.filter(item => item === null)
        return filteredRow.length > 1
      })
      console.log(this.state.count)
      console.log(winnerble)
      const newCount = this.state.count + 1
      if (newCount > 4) { this.checkforWinner(updatedBoxes) }
      this.setState({
        boxes: updatedBoxes,
        turn: turn,
        count: newCount
      })
    }

  }
  checkBoxHandler1 = (index, box) => {
    if (!box) {
      const updatedSecondRow = [...this.state.boxes[1]]
      updatedSecondRow.splice(index, 1, this.state.turn)
      const updatedBoxes = [this.state.boxes[0], updatedSecondRow, this.state.boxes[2]]
      let turn = 'X'
      if (this.state.turn === 'X') { turn = '0' }
      const newCount = this.state.count + 1
      if (newCount > 4) { this.checkforWinner(updatedBoxes) }
      this.setState({
        boxes: updatedBoxes,
        turn,
        count: newCount
      })
    }
  }

  checkBoxHandler2 = (index, box) => {
    if (!box) {
      const updatedThirdRow = [...this.state.boxes[2]]
      updatedThirdRow.splice(index, 1, this.state.turn)
      const updatedBoxes = [this.state.boxes[0], this.state.boxes[1], updatedThirdRow]
      let turn = 'X'
      if (this.state.turn === 'X') { turn = '0' }
      const newCount = this.state.count + 1
      if (newCount > 4) { this.checkforWinner(updatedBoxes) }
      this.setState({
        boxes: updatedBoxes,
        turn,
        count: newCount
      })
    }
  }


  render() {
    const firstRow = this.state.boxes[0].map((box, index) => { return <Sum clicked={() => this.checkBoxHandler(index, box)} key={index} type={box} /> })
    const secondRow = this.state.boxes[1].map((box, index) => { return <Sum clicked={() => this.checkBoxHandler1(index, box)} key={index} type={box} /> })
    const thirdRow = this.state.boxes[2].map((box, index) => { return <Sum clicked={() => this.checkBoxHandler2(index, box)} key={index} type={box} /> })
    return (
      <div>
        <h1>welocome to my tic tac toe</h1>
        <h3>{this.state.turn} to play</h3>
        <div style={{ textAlign: 'center' }}>{firstRow}</div>
        <div style={{ textAlign: 'center' }}>{secondRow}</div>
        <div style={{ textAlign: 'center' }}>{thirdRow}</div>
      </div>
    )
  }
}

export default App;
