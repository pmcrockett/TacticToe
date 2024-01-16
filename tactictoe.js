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
    let player = [ null, null ];
    let playerTurn = null;
    //let turnIdx = -1;
    let turnIdx = 0;
    let possibleMoves = null;
    const space = [
        [ -1, -1, -1 ],
        [ -1, -1, -1 ],
        [ -1, -1, -1 ]
    ]
    //     [ 0, 0, 2 ],
    //     [ 2, 1, 0 ],
    //     [ 1, 0, 1 ]
    // ]
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
    const setPlayers = function(_p1, _p2) {
        _p1.board = this;
        _p2.board = this;
        //console.log(_p2.board);
        _p1.playerIdx = 0;
        _p2.playerIdx = 1;
        player[0] = _p1;
        player[1] = _p2;
    }
    const calcPossibleMoves = function(_cpuLvl) {
        let scoreArr = [
         [ 0, 0, 0 ],
         [ 0, 0, 0 ],
         [ 0, 0, 0 ]
        ]
        for (let x = 0; x < space.length; x++) {
            for (let y = 0; y < space[x].length; y++) {
                scoreArr[x][y] = checkMove(x, y, _cpuLvl)
                //console.log(x, y, scoreArr[x][y]);
            }
        }
        return scoreArr;
    }
    const getPossibleMoves = function() {
        return possibleMoves;
    }
    const checkMove = function(_xIdx, _yIdx, _cpuLvl) {
        const pos = [ _xIdx, _yIdx ];
        let winLine = [];
        if (space[_xIdx][_yIdx] < 0) {
            let score = 0;
            //line.forEach( e => {
            for (let i = 0; i < line.length; i++) {
                if (isSpaceInLine([ _xIdx, _yIdx ], line[i])) {
                    // +1 for each line the space could be in (on cpuLvl 2).
                    score += _cpuLvl < 2 ? 0 : 1;
                    //console.log(playerTurn, 
                    //    getOtherPlayerIdx(playerTurn), i, _cpuLvl);
                    const lineScore = getPlayerLineScore(playerTurn, 
                            getOtherPlayerIdx(playerTurn), i, _cpuLvl);
                    score += lineScore.score;
                    //console.log(lineScore);
                    // If the move would result in a win, .winLine gives the
                    // index of the completed line(s) in the line array.
                    if (lineScore.winLine >= 0 && 
                            !winLine.includes(lineScore.winLine)) {
                        winLine.push(lineScore.winLine);
                    }
                }
            };
            return { pos, valid: true, score, winLine };
        }

        return { pos, valid: false, score: -1, winLine };
    }
    const isSpaceInLine = function(_space, _line) {
        for (let i = 0; i < _line.length; i++) {
            if (_space[0] == _line[i][0] && _space[1] == _line[i][1]) {
                return true;
            }
        }
        return false;
    }
    const getPlayerLineScore = function(_playerIdx, _opponentIdx, _lineIdx, _cpuLvl) {
        const l = line[_lineIdx];
        // Higher CPU levels prioritize winning over blocking you and are better
        // at recognizing when the final space in a line isn't worth filling.
        const plScoreVal = [
            0, // If the CPU doesn't have any marks in the line.
            _cpuLvl < 1 ? 1 : _cpuLvl < 2 ? 2 : 4, // One mark in the line.
            999 // Two marks in the line.
        ];
        const opScoreVal = [
            0, // If the opponent doesn't have any marks in the line.
            2, // Etc.
            _cpuLvl < 1 ? 3 : _cpuLvl < 2 ? 999 : 900
        ];
        let plScoreIdx = 0;
        let opScoreIdx = 0;
        // Tally each player's number of marks on the line.
        //console.log(`line len ${l.length}`);
        for (let i = 0; i < l.length; i++) {
            if (space[l[i][0]][l[i][1]] == _opponentIdx) {
                opScoreIdx++;
                //console.log(`opScoreIdx ${opScoreIdx}`);
            } else if (space[l[i][0]][l[i][1]] == _playerIdx) {
                plScoreIdx++
            }
        }
        if (opScoreIdx == 1 && plScoreIdx == 1) {
            // Lower levels are more eager to fill the last space in a line even
            // with no clear benefit.
            return {
                score: _cpuLvl < 1 ? 3 : _cpuLvl < 2 ? 2 : 1,
                winLine: -1
            };
        } else {
            // At higher levels, CPU's line score is effectively weighted to
            // influence the decision more than the opponent's line score.
            //console.log(_lineIdx, plScoreIdx, opScoreIdx);
            return {
                score: opScoreVal[opScoreIdx] + plScoreVal[plScoreIdx],
                winLine: plScoreIdx >= 2 ? _lineIdx : -1
            };
        }
    }
    const getFirstPlayer = function() {
        // Returns 1 or 2
        playerTurn = Math.floor(Math.random() * 2);
        return playerTurn;
    }
    const getOtherPlayerIdx = function(_playerIdx) {
        return (_playerIdx + 1) % 2;
    }
    const startNextTurn = function(_winLine) {
        //console.log("Starting turn");
        if (endGame(_winLine)) {
            console.log("Game is over");
        } else {
            turnIdx++;
            playerTurn = getOtherPlayerIdx(playerTurn);
            let curPlayer = player[playerTurn];
            possibleMoves = calcPossibleMoves(curPlayer.cpuLvl);
        }
        //console.log("Leaving startNextTurn()");
        logGrid();
    }
    const placeMarker = function(_playerIdx, _x, _y) {
        if (possibleMoves[_x][_y].valid && _playerIdx == playerTurn) {
            space[_x][_y] = _playerIdx;
            startNextTurn(possibleMoves[_x][_y].winLine);
        } else {
            console.log("Invalid move");
            logGrid();
        }
    }
    const endGame = function(_winInfo) {
        //console.log(_winInfo);
        if (_winInfo.length) {
            console.log(`Player ${playerTurn} wins!`)
            return true;
        } else if (turnIdx >= 9) {
            console.log("Stalemate");
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

    //playerTurn = getFirstPlayer();
    playerTurn = 1;

    return {
        getPossibleMoves: calcPossibleMoves,
        checkMove,
        getFirstPlayer,
        startNextTurn,
        placeMarker,
        endGame,
        logGrid,
        setPlayers,
        getPossibleMoves
    }
})();

const createPlayer = function(_name, _symbol, _color, _cpuLvl) {
    const name = _name;
    const symbol = _symbol;
    const color = _color;
    let cpuLvl = _cpuLvl;
    let board = null;
    let playerIdx = null;
    const getScore = function() {

    }
    const addToScore = function(_num) {

    }
    const resetScore = function() {

    }
    const promptCpuMove = function() {
        if (this.board === null) {
            console.log("CPU board not found");
            console.log(this.board);
            return;
        }
        console.log("CPU is making its move");
        //console.log(this.board.getPossibleMoves());
        const cpuMove = getBestCpuMove(this.board.getPossibleMoves());
        this.board.placeMarker(this.playerIdx, cpuMove.pos[0], cpuMove.pos[1])
        //logGrid();
    }
    // Randomly choose among the highest scoring moves.
    const getBestCpuMove = function(_possibleMoves) {
        //console.log(_possibleMoves);
        let bestMoves = [];
        let move = null;
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                if (_possibleMoves[x][y].valid) {
                    if (!bestMoves.length || 
                            _possibleMoves[x][y].score > bestMoves[0].score) {
                        bestMoves = [ _possibleMoves[x][y] ];
                    } else if (_possibleMoves[x][y].score == bestMoves[0].score) {
                        bestMoves.push(_possibleMoves[x][y]);
                    }
                }
            }
        }
        if (bestMoves.length) {
            const idx = Math.floor(Math.random() * bestMoves.length);
            move = bestMoves[idx];
        }

        // Could be null -- need to check for stalemate somewhere.
        //console.log(move);
        return move;
    }
    return {
        name,
        symbol,
        color,
        cpuLvl,
        board,
        playerIdx,
        promptCpuMove
    }
}

const human = createPlayer("Jane", "X", "#ff000011", -1);
const cpu = createPlayer("Deep Blue", "O", "#0000ff11", 1);
board.setPlayers(human, cpu);
board.startNextTurn([]);
//console.log(`Player 2 idx: ${cpu.playerIdx}`);
//console.log(`Player 2 board: ${cpu.board}`);
//cpu.promptCpuMove();