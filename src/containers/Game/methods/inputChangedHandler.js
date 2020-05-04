const inputChangedHandler = (react,event, player) => {
    const updatedPlayers = {
      ...react.state.players,
      [player]: {
        value: event.target.value,
        wins: react.state.players[player].wins
      }
    }
    let valid = null
    if (updatedPlayers.firstPlayer.value.length && updatedPlayers.secondPlayer.value.length) {
      valid = true
    }
    react.setState({
      players: updatedPlayers,
      valid: valid,
      currentPlayer: updatedPlayers.firstPlayer.value
    })
  }
  export default inputChangedHandler