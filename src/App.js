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
    turn: 'X'
  }
  checkBoxHandler = (index, box) => {
    if (!box) {
      const updatedFirstRow = [...this.state.boxes[0]]
      updatedFirstRow.splice(index, 1, this.state.turn)
      const updatedBoxes = [updatedFirstRow, this.state.boxes[1], this.state.boxes[2]]
      let turn = 'X'
      if (this.state.turn === 'X') { turn = '0' }
      this.setState({
        boxes: updatedBoxes,
        turn: turn
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
      this.setState({ boxes: updatedBoxes, turn, })
    }
  }

  checkBoxHandler2 = (index, box) => {
    if (!box) {
      const updatedThirdRow = [...this.state.boxes[2]]
      updatedThirdRow.splice(index, 1, this.state.turn)
      const updatedBoxes = [this.state.boxes[0], this.state.boxes[1], updatedThirdRow]
      let turn = 'X'
      if (this.state.turn === 'X') { turn = '0' }
      this.setState({
        boxes: updatedBoxes,
        turn,
      })
    }
  }


  render() {
    const firstRow = this.state.boxes[0].map((box, index) => { return <Sum clicked={() => this.checkBoxHandler(index, box)} key={index} type={box} /> })
    const secondRow = this.state.boxes[1].map((box, index) => { return <Sum clicked={() => this.checkBoxHandler1(index,box)} key={index} type={box} /> })
    const thirdRow = this.state.boxes[2].map((box, index) => { return <Sum clicked={() => this.checkBoxHandler2(index,box)} key={index} type={box} /> })
    console.log(this.state.boxes)
    return (
      <div>
        <h1>welocome to my tic tac toe</h1>
        <h3>{this.state.turn} to play</h3>
        <div style={{ textAlign: 'center' }}>{firstRow}</div>
        <hr />
        <div style={{ textAlign: 'center' }}>{secondRow}</div>
        <hr />
        <div style={{ textAlign: 'center' }}>{thirdRow}</div>
      </div>
    )
  }
}

export default App;
