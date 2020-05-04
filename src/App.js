import React, { Component } from "react";
import Sum from "./UI/board/box";
import Winner from "./winnerBanner/winner";
import { Route, Redirect, Link } from "react-router-dom";
import Login from "./loginPage";
// import './App.css';
import computer from "./computer/computer";

class App extends Component {
  state = {
    boxes: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    turn: "X",
    count: 0,
    winner: null,
    disable: null,
    draw: false,
    players: {
      firstPlayer: {
        value: "",
        wins: 0,
      },
      secondPlayer: {
        value: "",
        wins: 0,
      },
    },
    loggedIn: false,
    valid: false,
    playAgain: false,
    currentPlayer: null,
  };

  resetState = () => {
    this.setState({
      boxes: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      turn: "X",
      count: 0,
      winner: null,
      disable: null,
      draw: false,
      players: {
        firstPlayer: {
          value: "",
          wins: 0,
        },
        secondPlayer: {
          value: "",
          wins: 0,
        },
      },
      loggedIn: false,
      valid: false,
      playAgain: false,
      currentPlayer: null,
    });
  };

  refreshState = () => {
    console.log(this.props);
    this.setState({
      boxes: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      turn: "X",
      count: 0,
      winner: null,
      disable: null,
      draw: false,
      loggedIn: true,
      valid: true,
      playAgain: true,
      currentPlayer: this.state.players.firstPlayer.value,
    });
    console.log(this.state);
  };

  checkforWinner = (updateDatedRows) => {
    const firstPlayerWins = this.state.players.firstPlayer.wins;
    const secondPlayerWins = this.state.players.secondPlayer.wins;

    const symbol = this.state.turn;
    let updatedPlayers = {
      ...this.state.players,
    };
    let firstPlayer = {
      ...this.state.players.firstPlayer,
    };
    let secondPlayer = {
      ...this.state.players.secondPlayer,
    };
    let updatedPlayersWins = {
      ...updatedPlayers,
      secondPlayer: {
        ...secondPlayer,
        wins: secondPlayerWins + 1,
      },
    };
    if (symbol === "X") {
      updatedPlayersWins = {
        ...updatedPlayers,
        firstPlayer: {
          ...firstPlayer,
          wins: firstPlayerWins + 1,
        },
      };
    }
    // finding a match diagonally
    const flattenedRowArray = updateDatedRows.reduce((totalArray, currentRow) =>
      totalArray.concat(currentRow)
    );
    console.log(flattenedRowArray);

    // finding a match going down
    const firstVertical = updateDatedRows.filter((row) => row[0] === symbol);
    const secondVertical = updateDatedRows.filter((row) => row[1] === symbol);
    const thirdVertical = updateDatedRows.filter((row) => row[2] === symbol);
    const isWinnerFirst = firstVertical.length > 2;
    const isWinnerSecond = secondVertical.length > 2;
    const isWinnerThird = thirdVertical.length > 2;

    const isWinnerArray = updateDatedRows.map((row) => {
      return row.join() === [symbol, symbol, symbol].join();
    });
    const draw = flattenedRowArray.filter((item) => item === null);
    const isDraw = draw.length === 0;
    if (isWinnerFirst || isWinnerSecond || isWinnerThird) {
      this.setState({
        winner: symbol,
        disable: true,
        players: updatedPlayersWins,
      });
    } else if (isWinnerArray.includes(true)) {
      this.setState({
        winner: symbol,
        disable: true,
        players: updatedPlayersWins,
      });
    } else if (
      (flattenedRowArray[0] === symbol &&
        flattenedRowArray[4] === symbol &&
        flattenedRowArray[8] === symbol) ||
      (flattenedRowArray[2] === symbol &&
        flattenedRowArray[4] === symbol &&
        flattenedRowArray[6] === symbol)
    ) {
      // this.props.history.push('/won')
      this.setState({
        winner: symbol,
        disable: true,
        players: updatedPlayersWins,
      });
    } else if (isDraw) {
      this.setState({ draw: true });
    }
  };
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
  //     this.refreshState()
  //   }, 500);
  // }
  //  else if ((updateDatedRows[0][0] !== null && updateDatedRows[0][0] === updateDatedRows[1][0] && updateDatedRows[2][0]) ||
  //   (updateDatedRows[0][1] !== null && updateDatedRows[0][1] === updateDatedRows[1][1] && updateDatedRows[2][1]) ||
  //   (updateDatedRows[0][2] !== null && updateDatedRows[0][2] === updateDatedRows[1][2] && updateDatedRows[2][2])) {
  //   setTimeout(() => {
  //     alert('we have a winner')
  //     this.refreshState()
  //   }, 500);
  // }
  // else if ((updateDatedRows[0][0] !== null && updateDatedRows[0][0] === updateDatedRows[0][1] && updateDatedRows[0][2]) ||
  //   (updateDatedRows[1][0] !== null && updateDatedRows[1][0] === updateDatedRows[1][1] && updateDatedRows[1][2]) ||
  //   (updateDatedRows[2][0] !== null && updateDatedRows[2][0] === updateDatedRows[2][1] && updateDatedRows[2][2])) {
  //   setTimeout(() => {
  //     alert('we have a winner!!')
  //     this.refreshState()
  //   }, 1000);
  // }
  // else{}

  checkBoxHandler = (index, box) => {
    if (this.state.players.secondPlayer.value === "computer") {
      if (!box && !this.state.disable && this.state.turn === "X") {
        const updatedFirstRow = [...this.state.boxes[0]];
        updatedFirstRow.splice(index, 1, this.state.turn);
        const updatedBoxes = [
          updatedFirstRow,
          this.state.boxes[1],
          this.state.boxes[2],
        ];
        let currentPlayer = this.state.players.firstPlayer.value;
        if (this.state.currentPlayer === this.state.players.firstPlayer.value) {
          currentPlayer = this.state.players.secondPlayer.value;
        }
        let turn = "X";
        if (this.state.turn === "X") {
          turn = "0";
        }
        const newCount = this.state.count + 1;
        if (newCount > 4) {
          this.checkforWinner(updatedBoxes);
        }
        this.setState({
          boxes: updatedBoxes,
          turn: turn,
          count: newCount,
          playAgain: false,
          currentPlayer,
        });
        setTimeout(() => {
          if (this.state.players.secondPlayer.value === "computer") {
            computer(this);
          }

          console.log("computer");
        }, 500);
      }
    } else if (!box && !this.state.disable) {
      const updatedFirstRow = [...this.state.boxes[0]];
      updatedFirstRow.splice(index, 1, this.state.turn);
      const updatedBoxes = [
        updatedFirstRow,
        this.state.boxes[1],
        this.state.boxes[2],
      ];
      let currentPlayer = this.state.players.firstPlayer.value;
      if (this.state.currentPlayer === this.state.players.firstPlayer.value) {
        currentPlayer = this.state.players.secondPlayer.value;
      }
      let turn = "X";
      if (this.state.turn === "X") {
        turn = "0";
      }
      const newCount = this.state.count + 1;
      if (newCount > 4) {
        this.checkforWinner(updatedBoxes);
      }
      this.setState({
        boxes: updatedBoxes,
        turn: turn,
        count: newCount,
        playAgain: false,
        currentPlayer,
      });
    }
  };
  checkBoxHandler1 = (index, box) => {
    if (this.state.players.secondPlayer.value === "computer") {
      if (!box && !this.state.disable && this.state.turn === "X") {
        const updatedSecondRow = [...this.state.boxes[1]];
        updatedSecondRow.splice(index, 1, this.state.turn);
        const updatedBoxes = [
          this.state.boxes[0],
          updatedSecondRow,
          this.state.boxes[2],
        ];
        let currentPlayer = this.state.players.firstPlayer.value;
        if (this.state.currentPlayer === this.state.players.firstPlayer.value) {
          currentPlayer = this.state.players.secondPlayer.value;
        }
        let turn = "X";
        if (this.state.turn === "X") {
          turn = "0";
        }
        const newCount = this.state.count + 1;
        if (newCount > 4) {
          this.checkforWinner(updatedBoxes);
        }
        this.setState({
          boxes: updatedBoxes,
          turn,
          count: newCount,
          playAgain: false,
          currentPlayer,
        });
        setTimeout(() => {
          if (this.state.players.secondPlayer.value === "computer") {
            computer(this);
          }
        }, 500);
      }
    } else if (!box && !this.state.disable) {
      const updatedSecondRow = [...this.state.boxes[1]];
      updatedSecondRow.splice(index, 1, this.state.turn);
      const updatedBoxes = [
        this.state.boxes[0],
        updatedSecondRow,
        this.state.boxes[2],
      ];
      let currentPlayer = this.state.players.firstPlayer.value;
      if (this.state.currentPlayer === this.state.players.firstPlayer.value) {
        currentPlayer = this.state.players.secondPlayer.value;
      }
      let turn = "X";
      if (this.state.turn === "X") {
        turn = "0";
      }
      const newCount = this.state.count + 1;
      if (newCount > 4) {
        this.checkforWinner(updatedBoxes);
      }
      this.setState({
        boxes: updatedBoxes,
        turn,
        count: newCount,
        playAgain: false,
        currentPlayer,
      });
    }
  };

  checkBoxHandler2 = (index, box) => {
    if (this.state.players.secondPlayer.value === "computer") {
      if (!box && !this.state.disable && this.state.turn === "X") {
        const updatedThirdRow = [...this.state.boxes[2]];
        updatedThirdRow.splice(index, 1, this.state.turn);
        const updatedBoxes = [
          this.state.boxes[0],
          this.state.boxes[1],
          updatedThirdRow,
        ];
        let turn = "X";
        let currentPlayer = this.state.players.firstPlayer.value;
        if (this.state.currentPlayer === this.state.players.firstPlayer.value) {
          currentPlayer = this.state.players.secondPlayer.value;
        }
        if (this.state.turn === "X") {
          turn = "0";
        }
        const newCount = this.state.count + 1;
        if (newCount > 4) {
          this.checkforWinner(updatedBoxes);
        }
        this.setState({
          boxes: updatedBoxes,
          turn,
          count: newCount,
          playAgain: false,
          currentPlayer,
        });
        setTimeout(() => {
          computer(this);
        }, 500);
      }
    } else if (!box && !this.state.disable) {
      const updatedThirdRow = [...this.state.boxes[2]];
      updatedThirdRow.splice(index, 1, this.state.turn);
      const updatedBoxes = [
        this.state.boxes[0],
        this.state.boxes[1],
        updatedThirdRow,
      ];
      let turn = "X";
      let currentPlayer = this.state.players.firstPlayer.value;
      if (this.state.currentPlayer === this.state.players.firstPlayer.value) {
        currentPlayer = this.state.players.secondPlayer.value;
      }
      if (this.state.turn === "X") {
        turn = "0";
      }
      const newCount = this.state.count + 1;
      if (newCount > 4) {
        this.checkforWinner(updatedBoxes);
      }
      this.setState({
        boxes: updatedBoxes,
        turn,
        count: newCount,
        playAgain: false,
        currentPlayer,
      });
    }
  };
  inputChangedHandler = (event, player) => {
    const updatedPlayers = {
      ...this.state.players,
      [player]: {
        value: event.target.value,
        wins: this.state.players[player].wins,
      },
    };
    let valid = null;
    if (
      updatedPlayers.firstPlayer.value.length &&
      updatedPlayers.secondPlayer.value.length
    ) {
      valid = true;
    }
    this.setState({
      players: updatedPlayers,
      valid: valid,
      currentPlayer: updatedPlayers.firstPlayer.value,
    });
  };
  onSubmitHandler = () => {
    this.setState({ loggedIn: true });
  };

  render() {
    let currentPlayer = this.state.players.firstPlayer.value;
    if (this.state.currentPlayer === this.state.players.firstPlayer.value) {
      currentPlayer = this.state.players.secondPlayer.value;
    }

    let winner = null;
    if (this.state.winner || this.state.draw) {
      winner = (
        <Winner
          clicked={this.refreshState}
          draw={this.state.draw}
          winner={this.state.winner}
          name={currentPlayer}
        />
      );
    }
    const firstRow = this.state.boxes[0].map((box, index) => {
      return (
        <Sum
          symbol={box}
          clicked={() => this.checkBoxHandler(index, box)}
          key={index}
          type={box}
        />
      );
    });
    const secondRow = this.state.boxes[1].map((box, index) => {
      return (
        <Sum
          symbol={box}
          clicked={() => this.checkBoxHandler1(index, box)}
          key={index}
          type={box}
        />
      );
    });
    const thirdRow = this.state.boxes[2].map((box, index) => {
      return (
        <Sum
          symbol={box}
          clicked={() => this.checkBoxHandler2(index, box)}
          key={index}
          type={box}
        />
      );
    });

    //SEAN - Changed this to ternary operator
    const loggedIn = <Redirect to={this.state.loggedIn ? "/game" : "/"} />;
    // let loggedIn = null;
    // if (this.state.loggedIn) {
    //   loggedIn = <Redirect to="/game" />;
    // }

    // let loggedIn = null;
    // if (!this.state.loggedIn) {
    //   loggedIn = <Redirect to="/" />;
    // }
    let isWinner = null;
    if (this.state.winner || this.state.draw) {
      isWinner = <Redirect to="/won" />;
    }
    return (
      <div>
        <Route
          path="/game"
          exact
          render={() => (
            <div>
              <Link to="/">
                <button
                  style={{
                    textAlign: "center",
                    width: "160px",
                    height: "50px",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                  onClick={this.resetState}
                >
                  Logout
                </button>
              </Link>
              <h1 style={{ textAlign: "center", marginTop: "100px" }}>
                welcome to my naughts and crosses game!
              </h1>
              <h2 style={{ textAlign: "center" }}>score:</h2>
              <h2 style={{ textAlign: "center" }}>
                {this.state.players.firstPlayer.value} won{" "}
                {this.state.players.firstPlayer.wins} games.
              </h2>
              <h2 style={{ textAlign: "center" }}>
                {this.state.players.secondPlayer.value} won{" "}
                {this.state.players.secondPlayer.wins} games.
              </h2>
              <h3 style={{ textAlign: "center" }}>
                {this.state.currentPlayer} to play
              </h3>
              <div style={{ textAlign: "center" }}>{firstRow}</div>
              <div style={{ textAlign: "center" }}>{secondRow}</div>
              <div style={{ textAlign: "center" }}>{thirdRow}</div>
            </div>
          )}
        />
        {/* {this.state.winner || this.state.draw ? <Redirect to='/won' /> : null} */}

        <Route
          path="/won"
          render={() => {
            return winner;
          }}
        />
        <Route
          path="/"
          exact
          render={() => {
            return (
              <Login
                disable={!this.state.valid}
                submited={this.onSubmitHandler}
                value1={this.state.players.firstPlayer.value}
                value2={this.state.players.secondPlayer.value}
                inputChanged={(event, player) =>
                  this.inputChangedHandler(event, player)
                }
              />
            );
          }}
        />
        {isWinner}
        {loggedIn}
      </div>
    );
  }
}

export default App;
