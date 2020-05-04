

const refreshState = (react) => {
    console.log(react.props)
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
      loggedIn: true,
      valid: true,
      playAgain: true,
      currentPlayer: react.state.players.firstPlayer.value
    })
  }
  export default refreshState