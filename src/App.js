import React, { Component } from 'react';
import Sum from './box';
import Winner from './winner'

// import './App.css';

class App extends Component {
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
    draw: false
  }
  resfreshState = () => {
    this.setState({
      boxes: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      turn: 'X',
      count: 0,
      winner: null,
      disable: null,
      draw: false
    })
    console.log(this.state)
  }

  checkforWinner = (updateDatedRows) => {

    const symbol = this.state.turn
    // finding a match diagonally
    const flattenedRowArray = updateDatedRows.reduce((totalArray, currentRow) => totalArray.concat(currentRow))
    console.log(flattenedRowArray)

    // finding a match going down
    const firstVertical = updateDatedRows.filter(row => row[0] === symbol)
    const secondVertical = updateDatedRows.filter(row => row[1] === symbol)
    const thirdVertical = updateDatedRows.filter(row => row[2] === symbol)
    const isWinnerFirst = firstVertical.length > 2
    const isWinnerSecond = secondVertical.length > 2
    const isWinnerThird = thirdVertical.length > 2

    const isWinnerArray = updateDatedRows.map(row => {
      return row.join() === [symbol, symbol, symbol].join()

    })
    const draw = flattenedRowArray.filter(item => item === null)
    const isDraw = draw.length === 0
    if (isWinnerFirst || isWinnerSecond || isWinnerThird) {
      this.setState({
        winner: symbol,
        disable: true
      })
      console.log('fault1')
      setTimeout(() => {
        this.resfreshState()
      }, 5000);
    } else if (
      isWinnerArray.includes(true)) {
      this.setState({
        winner: symbol,
        disable: true
      })
      console.log('fault2')
      setTimeout(() => {
        this.resfreshState()

      }, 5000);
    } else if ((flattenedRowArray[0] === symbol && flattenedRowArray[4] === symbol && flattenedRowArray[8] === symbol)
      || (flattenedRowArray[2] === symbol && flattenedRowArray[4] === symbol && flattenedRowArray[6] === symbol)) {
      this.setState({
        winner: symbol,
        disable: true
      })
      console.log('fault3')
      setTimeout(() => {
        this.resfreshState()
      }, 5000);
    } else if (isDraw) {
      this.setState({ draw: true })
      setTimeout(() => {
        this.resfreshState()
      }, 5000);
    }
  }
  // switch([symbol, symbol, symbol].join()){
  //   case updateDatedRows[0].join():
  //     alert('winner')
  //     break
  //   case updateDatedRows[1].join():
  //     alert('winner')
  //     break
  //   case updateDatedRows[2].join():
  //     alert('winner')
  //     break
  //     default:
  // }

  // if ((updateDatedRows[0][0] !== null && updateDatedRows[0][0] === updateDatedRows[1][1] && updateDatedRows[2][2]) ||
  //   (updateDatedRows[0][2] !== null && updateDatedRows[0][2] === updateDatedRows[1][1] && updateDatedRows[2][0])) {
  //   setTimeout(() => {
  //     alert('we have a winner')
  //     this.resfreshState()
  //   }, 500);
  // }
  //  else if ((updateDatedRows[0][0] !== null && updateDatedRows[0][0] === updateDatedRows[1][0] && updateDatedRows[2][0]) ||
  //   (updateDatedRows[0][1] !== null && updateDatedRows[0][1] === updateDatedRows[1][1] && updateDatedRows[2][1]) ||
  //   (updateDatedRows[0][2] !== null && updateDatedRows[0][2] === updateDatedRows[1][2] && updateDatedRows[2][2])) {
  //   setTimeout(() => {
  //     alert('we have a winner')
  //     this.resfreshState()
  //   }, 500);
  // }
  // else if ((updateDatedRows[0][0] !== null && updateDatedRows[0][0] === updateDatedRows[0][1] && updateDatedRows[0][2]) ||
  //   (updateDatedRows[1][0] !== null && updateDatedRows[1][0] === updateDatedRows[1][1] && updateDatedRows[1][2]) ||
  //   (updateDatedRows[2][0] !== null && updateDatedRows[2][0] === updateDatedRows[2][1] && updateDatedRows[2][2])) {
  //   setTimeout(() => {
  //     alert('we have a winner!!')
  //     this.resfreshState()
  //   }, 1000);
  // }
  // else{}


  checkBoxHandler = (index, box) => {
    if (!box && !this.state.disable) {
      const updatedFirstRow = [...this.state.boxes[0]]
      updatedFirstRow.splice(index, 1, this.state.turn)
      const updatedBoxes = [updatedFirstRow, this.state.boxes[1], this.state.boxes[2]]
      let turn = 'X'
      if (this.state.turn === 'X') { turn = '0' }
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
    if (!box && !this.state.disable) {
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
    if (!box && !this.state.disable) {
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
    let winner = null
    if (this.state.winner||this.state.draw) {
      winner = <Winner draw={this.state.draw} winner={this.state.winner} name={this.state.winner} />
    }
    const firstRow = this.state.boxes[0].map((box, index) => { return <Sum symbol={box} clicked={() => this.checkBoxHandler(index, box)} key={index} type={box} /> })
    const secondRow = this.state.boxes[1].map((box, index) => { return <Sum symbol={box} clicked={() => this.checkBoxHandler1(index, box)} key={index} type={box} /> })
    const thirdRow = this.state.boxes[2].map((box, index) => { return <Sum symbol={box} clicked={() => this.checkBoxHandler2(index, box)} key={index} type={box} /> })
    return (
      <div>
        <h1 style={{textAlign:'center',marginTop:'100px'}}>welcome to my naughts and crosses game!</h1>
        <h3 style={{ textAlign: 'center' }}>{this.state.turn} to play</h3>
        <div style={{ textAlign: 'center' }}>{firstRow}</div>
        <div style={{ textAlign: 'center' }}>{secondRow}</div>
        <div style={{ textAlign: 'center' }}>{thirdRow}</div>
        {winner}
      </div>
    )
  }
}

export default App;
