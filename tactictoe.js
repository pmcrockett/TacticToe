/*
Player object
    track running score
    report to display object when starting turn
    store player color/symbol/name
    AI module -- auto moves based on move desirability

Board object
    track board state
    report valid available moves
    rank valid moves by desirability? (or do this in the AI?)
        desirability based on:
            (if first turn) is it in the center space? (999)
            does it advance a line? (0, 1, 999 points)
            does it block the other player's line? (0, 1, 500)
    track player turns
    report game end (win/tie)
    accept input and reject invalid moves
*/

const board = (function() {
    let cpuLvl = 1;
    let playerTurn = 1;
    //let turnIdx = -1;
    let turnIdx = 1;
    const space = [
    //     [ 0, 0, 0 ],
    //     [ 0, 0, 0 ],
    //     [ 0, 0, 0 ]
    // ]
    [ 0, 0, 2 ],
    [ 2, 1, 0 ],
    [ 1, 0, 1 ]
]
    const line = [
        [ [ 0, 0 ], [ 1, 0 ], [ 2, 0 ]],
        [ [ 0, 1 ], [ 1, 1 ], [ 2, 1 ]],
        [ [ 0, 2 ], [ 1, 2 ], [ 2, 2 ]],
        [ [ 0, 0 ], [ 0, 1 ], [ 0, 2 ]],
        [ [ 1, 0 ], [ 1, 1 ], [ 1, 2 ]],
        [ [ 2, 0 ], [ 2, 1 ], [ 2, 2 ]],
        [ [ 0, 0 ], [ 1, 1 ], [ 2, 2 ]],
        [ [ 0, 2 ], [ 1, 1 ], [ 2, 0 ]]
    ]

    const getPossibleMoves = function() {
        let scoreArr = [
         [ 0, 0, 0 ],
         [ 0, 0, 0 ],
         [ 0, 0, 0 ]
        ]
        for (let x = 0; x < space.length; x++) {
            for (let y = 0; y < space[x].length; y++) {
                scoreArr[x][y] = checkMove(x, y)
                //console.log(x, y, scoreArr[x][y]);
            }
        }
        return scoreArr;
    }
    const checkMove = function(_xIdx, _yIdx) {
        if (!space[_xIdx][_yIdx]) {
            let score = 0;
            let winLine = [];
            //line.forEach( e => {
            for (let i = 0; i < line.length; i++) {
                if (isSpaceInLine([ _xIdx, _yIdx ], line[i])) {
                    // +1 for each line the space could be in (on cpuLvl 2).
                    score += cpuLvl < 2 ? 0 : 1;
                    const lineScore = getPlayerLineScore(playerTurn, 
                            getOtherPlayer(playerTurn), i);
                    score += lineScore.score;
                    console.log(lineScore);
                    // If the move would result in a win, .winLine gives  
                    // the completed line's index in the line array.
                    if (lineScore.winLine >= 0 && 
                            !winLine.includes(lineScore.winLine)) {
                        winLine.push(lineScore.winLine);
                    }
                }
            };
            return { valid: true, score, winLine };
        }

        return { valid: false, score: -1, winLine: []};
    }
    const isSpaceInLine = function(_space, _line) {
        for (let i = 0; i < _line.length; i++) {
            if (_space[0] == _line[i][0] && _space[1] == _line[i][1]) {
                return true;
            }
        }
        return false;
    }
    const getPlayerLineScore = function(_playerIdx, _opponentIdx, _lineIdx) {
        const l = line[_lineIdx];
        // Higher CPU levels prioritize winning over blocking you and are better
        // at recognizing when the final space in a line isn't worth filling.
        const plScoreVal = [
            0, // If the CPU doesn't have any marks in the line.
            cpuLvl < 1 ? 1 : cpuLvl < 2 ? 2 : 4, // One mark in the line.
            999 // Two marks in the line.
        ];
        const opScoreVal = [
            0, // If the opponent doesn't have any marks in the line.
            2, // Etc.
            cpuLvl < 1 ? 3 : cpuLvl < 2 ? 999 : 900
        ];
        let plScoreIdx = 0;
        let opScoreIdx = 0;
        // Tally each player's number of marks on the line.
        for (let i = 0; i < l.length; i++) {
            if (space[l[i][0]][l[i][1]] == _opponentIdx) {
                opScoreIdx++;
            } else if (space[l[i][0]][l[i][1]] == _playerIdx) {
                plScoreIdx++
            }
        }
        if (opScoreIdx == 1 && plScoreIdx == 1) {
            // Lower levels are more eager to fill the last space in a line even
            // with no clear benefit.
            return {
                score: cpuLvl < 1 ? 3 : cpuLvl < 2 ? 2 : 1,
                winLine: -1
            };
        } else {
            // At higher levels, CPU's line score is effectively weighted to
            // influence the decision more than the opponent's line score.
            console.log(_lineIdx, plScoreIdx);
            return {
                score: opScoreVal[opScoreIdx] + plScoreVal[plScoreIdx],
                winLine: plScoreIdx >= 2 ? _lineIdx : -1
            };
        }
    }
    const getFirstPlayer = function() {
        // Returns 1 or 2
        playerTurn = Math.floor(Math.random() * 2) + 1;
        return playerTurn;
    }
    const getOtherPlayer = function(_playerIdx) {
        return _playerIdx % 2 + 1;
    }
    const startNextTurn = function(_winLine) {
        if (endGame(_winLine)) {

        } else {
            turnIdx++;
            playerTurn = getOtherPlayer(playerTurn);
        }
    }
    const placeMarker = function(_playerIdx, _x, _y) {
        const moves = getPossibleMoves();
        if (moves[_x][_y].valid) {
            space[_x][_y] = _playerIdx;
            startNextTurn(moves[_x][_y].winLine);
        } else {
            console.log("Invalid move");
        }
        logGrid();
    }
    const endGame = function(_winInfo) {
        console.log(_winInfo);
        if (_winInfo.length) {
            console.log(`Player ${playerTurn} wins!`)
            return true;
        }
        return false;
    }
    const logGrid = function() {
        console.log(`Player turn: ${playerTurn}   Turn number ${turnIdx}`);
        for (let y = 0; y < 3; y++) {
            console.log(`${space[0][y]} ${space[1][y]} ${space[2][y]}`);
        }
    }

    return {
        getPossibleMoves,
        checkMove,
        getFirstPlayer,
        startNextTurn,
        placeMarker,
        endGame,
        logGrid
    }
})();

const createPlayer = function(_name, _symbol, _color, _isAI) {
    const getScore = function() {

    }
    const addToScore = function(_num) {

    }
    const resetScore = function() {

    }
    const getAIMove = function(_possibleMoves) {

    }
}