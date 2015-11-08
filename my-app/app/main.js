//console.log('Tic Tac Toe!')

/* var board = ['','','','','','','','','']


import { filter } from 'ramda'

const isAWin = function (board, player, win) {
	return filter((i) => board[i] === player, win).length === 3
}

const playerWins = function (board, player) {
	const wins = [ 
		[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], 
		[1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
	] 

	return filter ((win) => isAWin(board, player, win), wins).length > 0
}

const winner = ['x', 'o', 'x', 'o', 'x', '', 'x', '', 'o']

console.log("Is o a winner? " + playerWins(winner, 'o'))
console.log("Is x a winner? " + playerWins(winner, 'x')) */


/*
//import { indexOf } from 'ramda'

const moves = [4, 3, 0, 8, 2, 1, 6]

const getPlayerFromMove = function (i) {
	const idx = indexOf(i, moves)

	if (idx === -1 ) {
		return ''
	} else {
	  return (idx % 2 === 0) ? 'x' : 'o'
	}
}

console.log("What's in cell 4 (center)? " + getPlayerFromMove(4))
console.log("What's in cell 3 (middle left)? " + getPlayerFromMove(3))
console.log("What's in cell 1 (center top)? " + getPlayerFromMove(1))
console.log("What's in cell 2 (top right)? " + getPlayerFromMove(2))
*/

 import { addIndex, indexOf, map } from 'ramda'

const makeBoard = function (moves) {
	const mapIndexed = addIndex(map)

	const getCellFromMove = function (i) {
		const idx = indexOf(i, moves)

		if (idx === -1) {
			return '<div class="e">&nbsp;</div>'
		} else if (idx % 2 === 0 ) {
			return '<div class="x">X</div>'
		} else {
			return '<div class="o">O</div>'
		}
	}

	return mapIndexed((val,idx) => getCellFromMove(idx), new Array(9))
}


const renderBoard = function (cells) {
	var board = document.createElement('div')

	board.setAttribute('class', 'board')
	board.innerHTML = cells

	document.getElementById('board').appendChild(board)
}

renderBoard(makeBoard([]).join('')) 

// Create a function called makeMove that takes two parameters:
//
// A "cell", which is the index of the cell in the board where we want to move.
// An "moves" array holding the indexes of the cells that have already been played.
//
//
// 	Check if the moves array already contains the cell
//		If it does, return the moves array unchanged
//		If it doesn't, return a new array of moves with the new cell appended

/* import { append, contains } from 'ramda'

const makeMove = function (cell, moves) {
	if (contains(cell, moves)) {
		return moves
	} else {
		return append(cell, moves)
	}
}

console.log(makeMove(0, makeMove(3, makeMove(4, []))))  */
import $ from 'jquery'

const played = function (el) {
	return $(el).html() !== ''
}

const whoMovesNow = function (cells) {
	const n = cells.filter((idx, el) => played(el)).length
	return (n % 2 === 0) ? 'x' : 'o' 
}

const makeMove = function (e) {
	const el = $(e.target)

	if (!played(e.target)) {
		const cells = $('.board > div')
		const player = whoMovesNow(cells)

		el.removeClass('empty')
		el.addClass('player-' + player)
		el.html(player)
	}
}



$('#board').on('click', '.board > div' , makeMove)





//console.log('Cell played? ' + played(e.target))