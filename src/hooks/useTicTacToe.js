/**
 * Users: 2 
 * User 1: x, user 2: o
 * Create the 3x3 grid
 * State to maintain each players move and turn
 * Winning positions: horizontal, vertically, diagonal
 * Display message: winner, next player, draw
 * Reset functionality
 * 
 */

import {useEffect, useState } from "react";
const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
    const [cells, setCells] = useState(initialBoard());
    const [isXNext, setIsXNext] = useState(true);


    const WINNING_PATTERNS = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    const calculateWinner = (cells) => {
        for (let i = 0; i < WINNING_PATTERNS.length; i++) {
            const [a, b, c] = WINNING_PATTERNS[i];
            if(cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
                return cells[a]
            }
        }
        return null;
    }

    const handleClick = (index) => {
        /* calculate the winner */
        const winner = calculateWinner(cells);
        
        /* if there is a winner or all the cells are updated, 
           then simply return. 
        */
        if (winner || cells[index]) return;

        /* copy the cells to new cells */
        const newCells = [...cells];
        newCells[index] = isXNext ? 'X' : 'O';
        setCells(newCells)
        setIsXNext(!isXNext) 
    }
    
    const getStatusMessage = () => {
        const winner = calculateWinner(cells);
        if (winner) return `Player ${winner} wins!`;
        if (!cells.includes(null)) return `It's a draw!`;
        return `Player ${isXNext ? 'X' : 'O'}'s turn`
    }
    
    const resetGame = () => {
        setCells(initialBoard());
        setIsXNext(true)
    }


    return {cells, calculateWinner, handleClick, getStatusMessage, resetGame}
}

export default useTicTacToe;