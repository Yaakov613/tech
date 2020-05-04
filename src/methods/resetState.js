const  resetState = (react) => {
    react.setState({
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
    })
  }
export default resetState