import computer from './computer'
import checkForWinner from './checkForWinner'


const checkBoxHandler = (react, index, box, rowIndex) => {
  if (!react.state.multiPlayer) {
    if (!box && !react.state.disable && react.state.turn === 'X') {
      const updatedRow = [...react.state.boxes[rowIndex]]
      console.log(rowIndex)
      console.log('rowIndex')
      updatedRow.splice(index, 1, react.state.turn)
      let updatedBoxes = [updatedRow, react.state.boxes[1], react.state.boxes[2]]
      if (rowIndex === 1) { updatedBoxes = [react.state.boxes[0], updatedRow, react.state.boxes[2]] }
      if (rowIndex === 2) { updatedBoxes = [react.state.boxes[0], react.state.boxes[1], updatedRow] }
      let currentPlayer = react.state.players.firstPlayer.value
      if (react.state.currentPlayer === react.state.players.firstPlayer.value) {
        currentPlayer = react.state.players.secondPlayer.value
      }
      let turn = 'X'
      if (react.state.turn === 'X') { turn = '0' }
      const newCount = react.state.count + 1
      console.log(react.state)
      if (newCount > 4) { checkForWinner(react, updatedBoxes) }
      react.setState({
        boxes: updatedBoxes,
        turn: turn,
        count: newCount,
        playAgain: false,
        currentPlayer,
      })
      setTimeout(() => {
        if (
          !react.state.draw && !react.state.winner) {
          computer(react)
        }
      }, 500);
    }
  }
  else if (!box && !react.state.disable) {
    const updatedRow = [...react.state.boxes[rowIndex]]
    updatedRow.splice(index, 1, react.state.turn)
    let updatedBoxes = [updatedRow, react.state.boxes[1], react.state.boxes[2]]
    if (rowIndex === 1) { updatedBoxes = [react.state.boxes[0], updatedRow, react.state.boxes[2]] }
    if (rowIndex === 2) { updatedBoxes = [react.state.boxes[0], react.state.boxes[1], updatedRow] }
    let currentPlayer = react.state.players.firstPlayer.value
    if (react.state.currentPlayer === react.state.players.firstPlayer.value) {
      currentPlayer = react.state.players.secondPlayer.value
    }
    let turn = 'X'
    if (react.state.turn === 'X') { turn = '0' }
    const newCount = react.state.count + 1
    if (newCount > 4) { checkForWinner(react, updatedBoxes) }
    react.setState({
      boxes: updatedBoxes,
      turn: turn,
      count: newCount,
      playAgain: false,
      currentPlayer,
    })
  }
}

export default checkBoxHandler