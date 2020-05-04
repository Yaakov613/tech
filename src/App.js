import React, { Component } from 'react';
import Winner from './winnerBanner/winner'
import { Route, Redirect, Link } from 'react-router-dom'
import Login from './loginPage'
import Board from './components/UI/board/board';
import Row from './components/UI/row/row'
import Box from './components/UI/box/box'
import checkBoxHandler from './containers/Game/methods/checkBoxHandler'
import Button from './components/UI/button/button'
import resetState from './methods/resetState'
import refreshState from './methods/refreshState'

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

  inputChangedHandler = (event, player) => {
    const updatedPlayers = {
      ...this.state.players,
      [player]: {
        value: event.target.value,
        wins: this.state.players[player].wins
      }
    }
    let valid = null
    if (updatedPlayers.firstPlayer.value.length && updatedPlayers.secondPlayer.value.length) {
      valid = true
    }
    this.setState({
      players: updatedPlayers,
      valid: valid,
      currentPlayer: updatedPlayers.firstPlayer.value
    })
  }
  onSubmitHandler = () => {
    this.setState({ loggedIn: true })
  }


  render() {
    let currentPlayer = this.state.players.firstPlayer.value
    if (this.state.currentPlayer === this.state.players.firstPlayer.value) {
      currentPlayer = this.state.players.secondPlayer.value
    }

    let winner = null
    if (this.state.winner || this.state.draw) {
      winner = <Winner
        clicked={()=>refreshState(this)}
        draw={this.state.draw}
        winner={this.state.winner}
        name={currentPlayer} />
    }
   
    const game = (<Board
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

    let loggedIn = null
    if (this.state.loggedIn) { loggedIn = <Redirect to='/game' /> }
    let loginIn = null
    if (!this.state.loggedIn) { loginIn = <Redirect to='/' /> }
    let isWinner = null
    if (this.state.winner || this.state.draw) { isWinner = <Redirect to='/won' /> }
    return (<div>
      <Route path='/game' exact render={() => <div style={{textAlign:'center'}}>
        <Link to='/'><Button 
         clicked={()=>resetState(this)}
           name={'Logout'}
         />
         </Link>
        {game}
      </div>

      } />
      {/* {this.state.winner || this.state.draw ? <Redirect to='/won' /> : null} */}

      <Route path='/won' render={() => {
        return winner
      }} />
      <Route path='/' exact render={() => {
        return <Login
          disable={!this.state.valid}
          submited={this.onSubmitHandler}
          value1={this.state.players.firstPlayer.value}
          value2={this.state.players.secondPlayer.value}
          inputChanged={(event, player) => this.inputChangedHandler(event, player)}
        />
      }} />
      {isWinner}
      {loginIn}
      {loggedIn}
    </div>
    )
  }
}

export default App;
