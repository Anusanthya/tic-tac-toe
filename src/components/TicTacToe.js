import {useEffect, useState } from "react";
import Cell from "./Cell";
import useTicTacToe from "../hooks/useTicTacToe";


const TicTacToe = () => {
    const {cells, handleClick, calculateWinner, getStatusMessage, resetGame} = useTicTacToe();
  
  return (
    <div className="app">
      <div className="status">
        <button className="resetButton" onClick={resetGame}>Reset Game</button>
      </div>
      <div className="gameboard">
        {cells.map((cell, index) => <Cell cell={cell} key={index} id={index} onClick={handleClick}/>)}
      </div>
      <p>{getStatusMessage()}</p>
    </div>
  );
}

export default TicTacToe;
