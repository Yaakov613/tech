 const checkForWinner = (react,updateDatedRows) => {

    const firstPlayerWins = react.state.players.firstPlayer.wins
    const secondPlayerWins = react.state.players.secondPlayer.wins

    const symbol = react.state.turn
    let updatedPlayers = {
      ...react.state.players,
    }
    let firstPlayer = {
      ...react.state.players.firstPlayer
    }
    let secondPlayer = {
      ...react.state.players.secondPlayer
    }
    let updatedPlayersWins = {
      ...updatedPlayers,
      secondPlayer: {
        ...secondPlayer,
        wins: secondPlayerWins + 1
      }


    }
    if (symbol === 'X') {
      updatedPlayersWins = {
        ...updatedPlayers,
        firstPlayer: {
          ...firstPlayer,
          wins: firstPlayerWins + 1
        }
      }
    }
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
      react.setState({
        winner: symbol,
        disable: true,
        players: updatedPlayersWins
      })
    } else if (
      isWinnerArray.includes(true)) {

      react.setState({
        winner: symbol,
        disable: true,
        players: updatedPlayersWins
      })
    } else if ((flattenedRowArray[0] === symbol && flattenedRowArray[4] === symbol && flattenedRowArray[8] === symbol)
      || (flattenedRowArray[2] === symbol && flattenedRowArray[4] === symbol && flattenedRowArray[6] === symbol)) {
      // react.props.history.push('/won')
      react.setState({
        winner: symbol,
        disable: true,
        players: updatedPlayersWins
      })

    } else if (isDraw) {
      react.setState({ draw: true })
    }
  }

  export default checkForWinner