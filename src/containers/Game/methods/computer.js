import checkForWinner from './checkForWinner'

const computer = (react) => {

    // creating a copy of the boxes in the original state, inorder to manipulate them.

    const updatedBoxes = [[...react.state.boxes[0]], [...react.state.boxes[1]], [...react.state.boxes[2]]]
    const originalBox = [[...updatedBoxes[0]], [...updatedBoxes[1]], [...updatedBoxes[2]]]


    // setups to check if there is two X's in a row,colum,or diagonal

    const twoInFirstRow = updatedBoxes[0].filter(symbol => symbol === 'X')
    const twoInSecondRow = updatedBoxes[1].filter(symbol => symbol === 'X')
    const twoInThirdRow = updatedBoxes[2].filter(symbol => symbol === 'X')

    const nullInFirstRow = updatedBoxes[0].filter(symbol => symbol === null)
    const nullInSecondRow = updatedBoxes[1].filter(symbol => symbol === null)
    const nullInThirdRow = updatedBoxes[2].filter(symbol => symbol === null)

    const findIndexOfNull1 = updatedBoxes[0].indexOf(null)
    const findIndexOfNull2 = updatedBoxes[1].indexOf(null)
    const findIndexOfNull3 = updatedBoxes[2].indexOf(null)

    const isTwoInFirstRow = twoInFirstRow.length === 2
    const isTwoInSecondRow = twoInSecondRow.length === 2
    const isTwoInThirdRow = twoInThirdRow.length === 2
    const isNullInFirstRow = nullInFirstRow.length >= 1
    const isNullInSecondRow = nullInSecondRow.length >= 1
    const isNullInThirdRow = nullInThirdRow.length >= 1

    const reducedUpdatedBoxes = updatedBoxes.reduce((total, currentBox) => {
        return total.concat(currentBox)
    })
    const reducedUpdatedBoxesCopy = [...reducedUpdatedBoxes]
    const verticalArrays = [
        [reducedUpdatedBoxes[0], reducedUpdatedBoxes[3], reducedUpdatedBoxes[6]],
        [reducedUpdatedBoxes[1], reducedUpdatedBoxes[4], reducedUpdatedBoxes[7]],
        [reducedUpdatedBoxes[2], reducedUpdatedBoxes[5], reducedUpdatedBoxes[8]],

    ]
    const diagonalArray = [
        [reducedUpdatedBoxes[0], reducedUpdatedBoxes[4], reducedUpdatedBoxes[8]],
        [reducedUpdatedBoxes[2], reducedUpdatedBoxes[4], reducedUpdatedBoxes[6]]
    ]

    const diagonalCopyArray = [
        [reducedUpdatedBoxes[0], reducedUpdatedBoxes[4], reducedUpdatedBoxes[8]],
        [reducedUpdatedBoxes[2], reducedUpdatedBoxes[4], reducedUpdatedBoxes[6]]
    ]


    const twoInFirstDiagonal = diagonalArray[0].filter(symbol => symbol === 'X')
    const twoInSecondDiagonal = diagonalArray[1].filter(symbol => symbol === 'X')

    const isTwoInFirstDiagonal = twoInFirstDiagonal.length === 2
    const isTwoInSecondDiagonal = twoInSecondDiagonal.length === 2

    const isNullFirstDiagonal = diagonalArray[0].includes(null)
    const isNullSecondDiagonal = diagonalArray[1].includes(null)

    const indexOfFirstDiagonalNull = diagonalArray[0].indexOf(null)
    const indexOfSecondDiagonalNull = diagonalArray[1].indexOf(null)



    const findIndexOfNullVertical1 = verticalArrays[0].indexOf(null)
    const findIndexOfNullVertical2 = verticalArrays[1].indexOf(null)
    const findIndexOfNullVertical3 = verticalArrays[2].indexOf(null)
    // const findIndexOfNullVertical4 = verticalArrays[3].indexOf(null)
    // const findIndexOfNullVertical5 = verticalArrays[4].indexOf(null)

    const twoInFirstColum = verticalArrays[0].filter(symbol => symbol === 'X')
    const twoInSecondColum = verticalArrays[1].filter(symbol => symbol === 'X')
    const twoInThirdColum = verticalArrays[2].filter(symbol => symbol === 'X')
    // const twoInFourthColum = verticalArrays[3].filter(symbol => symbol === 'X')
    // const twoInFithColum = verticalArrays[4].filter(symbol => symbol === 'X')

    const nullInFirstColum = verticalArrays[0].filter(symbol => symbol === null)
    const nullInSecondColum = verticalArrays[1].filter(symbol => symbol === null)
    const nullInThirdColum = verticalArrays[2].filter(symbol => symbol === null)
    // const nullInFourthColum = verticalArrays[3].filter(symbol => symbol === null)
    // const nullInFithColum = verticalArrays[4].filter(symbol => symbol === null)

    const isTwoInFirstColum = twoInFirstColum.length === 2
    const isTwoInSecondColum = twoInSecondColum.length === 2
    const isTwoInThirdColum = twoInThirdColum.length === 2
    // const isTwoInFourthColum = twoInFourthColum.length === 2
    // const isTwoInFithColum = twoInFithColum.length === 2
    const isNullInFirstColum = nullInFirstColum.length >= 1
    const isNullInSecondColum = nullInSecondColum.length >= 1
    const isNullInThirdColum = nullInThirdColum.length >= 1
    // const isNullInFourthColum = nullInFourthColum.length === 1
    // const isNullInFithColum = nullInFithColum.length === 1
    let indexNull = reducedUpdatedBoxes.indexOf(null)
    console.log(indexNull)
    if(reducedUpdatedBoxes[4]===null){
        indexNull=4
    }
    else if(reducedUpdatedBoxes[4]==='0'&&reducedUpdatedBoxes[1]===null){
        indexNull=1
    }
    else if(reducedUpdatedBoxes[4]==='0'&&reducedUpdatedBoxes[3]===null){
        indexNull=3
    }

    // checks and manipulations

    if (isTwoInFirstRow && isNullInFirstRow) { updatedBoxes[0].splice(findIndexOfNull1, 1, '0') }
    else if (isTwoInSecondRow && isNullInSecondRow) { updatedBoxes[1].splice(findIndexOfNull2, 1, '0') }
    else if (isTwoInThirdRow && isNullInThirdRow) { updatedBoxes[2].splice(findIndexOfNull3, 1, '0') }

    else if (isTwoInFirstColum && isNullInFirstColum) { verticalArrays[0].splice(findIndexOfNullVertical1, 1, '0') }
    else if (isTwoInSecondColum && isNullInSecondColum) { verticalArrays[1].splice(findIndexOfNullVertical2, 1, '0') }
    else if (isTwoInThirdColum && isNullInThirdColum) { verticalArrays[2].splice(findIndexOfNullVertical3, 1, '0') }

    else if (isTwoInFirstDiagonal && isNullFirstDiagonal) {
        diagonalArray[0].splice(indexOfFirstDiagonalNull, 1, '0')
        console.log('fisrt')
    }
    else if (isTwoInSecondDiagonal && isNullSecondDiagonal) {
        diagonalArray[1].splice(indexOfSecondDiagonalNull, 1, '0')
        console.log('f2nd')
    }

    else {
        console.log(reducedUpdatedBoxes)
        reducedUpdatedBoxes.splice(indexNull, 1, '0')
        console.log(reducedUpdatedBoxes.join())
    }

    // rearanging the manipulated array, to fit it to the state in correct order
    const verticalArrayCopy = [
        [verticalArrays[0][0], verticalArrays[1][0], verticalArrays[2][0]],
        [verticalArrays[0][1], verticalArrays[1][1], verticalArrays[2][1]],
        [verticalArrays[0][2], verticalArrays[1][2], verticalArrays[2][2]],
    ]

    let diagonalArrayFinal = [
        [diagonalArray[0][0], reducedUpdatedBoxesCopy[1], diagonalArray[1][0]],
        [reducedUpdatedBoxesCopy[3], diagonalArray[0][1], reducedUpdatedBoxesCopy[5]],
        [diagonalArray[1][2], reducedUpdatedBoxesCopy[7], diagonalArray[0][2]]
    ]
    if(diagonalArray[0].join()===diagonalCopyArray[0].join()){
        diagonalArrayFinal=[
            [diagonalArray[0][0], reducedUpdatedBoxesCopy[1], diagonalArray[1][0]],
            [reducedUpdatedBoxesCopy[3], diagonalArray[1][1], reducedUpdatedBoxesCopy[5]],
            [diagonalArray[1][2], reducedUpdatedBoxesCopy[7], diagonalArray[0][2]]
        ]
    }

    const reducedArray = [
        [reducedUpdatedBoxes[0], reducedUpdatedBoxes[1], reducedUpdatedBoxes[2]],
        [reducedUpdatedBoxes[3], reducedUpdatedBoxes[4], reducedUpdatedBoxes[5]],
        [reducedUpdatedBoxes[6], reducedUpdatedBoxes[7], reducedUpdatedBoxes[8]]
    ]

    let finalUpdatedBoxes = updatedBoxes
    if (([...updatedBoxes[0], ...updatedBoxes[1], ...updatedBoxes[2]].join() === [...originalBox[0], ...originalBox[1], ...originalBox[2]].join())
        && (reducedUpdatedBoxes.join() === reducedUpdatedBoxesCopy.join())
        && [...diagonalArray[0], diagonalArray[1], diagonalArray[2]].join() === [...diagonalCopyArray[0], diagonalCopyArray[1], diagonalCopyArray[2]].join()) {
        finalUpdatedBoxes = verticalArrayCopy
    }
    else if ([...diagonalArray[0], ...diagonalArray[1]].join() !== [...diagonalCopyArray[0], ...diagonalCopyArray[1]].join()) {
        finalUpdatedBoxes = diagonalArrayFinal
    }
    else if (reducedUpdatedBoxes.join() !== reducedUpdatedBoxesCopy.join()) {
        finalUpdatedBoxes = reducedArray
    }

    let currentPlayer = react.state.players.firstPlayer.value
    if (react.state.currentPlayer === react.state.players.firstPlayer.value) {
        currentPlayer = react.state.players.secondPlayer.value
    }

    let turn = 'X'
    const newCount = react.state.count + 1
    if (newCount > 4) { checkForWinner(react, finalUpdatedBoxes) }
    react.setState({
        boxes: finalUpdatedBoxes,
        turn: turn,
        count: newCount,
        playAgain: false,
        currentPlayer,

    })


}

export default computer
