/*  import './TicTacToe.css';

import React, { useState } from 'react';

const Square = ({value,handleClick}) => {  
    return (
        <button className="square" onClick={handleClick}>  
            {value}      
        </button> //from board to square(board passed handleC and square valls onC)event listener
    );
}

function Board ({squares,handleClick})  {   */   //to check for winner maintain value of 9 squares in 1 loc
    /* const [squares, setSquares] = useState(Array(9).fill(null));  //intial board contains array of 9 nulls
    const [ isXNext, setIsXNext ] = useState(true);  //to set 1st move as "x" as default.. so true
    let status = isXNext ? "X" : "O";   //||r to receive a value prop either "x" or "o" as prev only "x"
    
    const boards = squares.slice(); */
    /* function handleClick(i) {
        
        //const boards = [...squares];  //to maintain prev state history(jump back prev moves) or use slice or spread
        
        if (calculateWinner(squares) || squares[i]) {  //if the board is already filled or won return nothing
            return;
          }
        boards[i] = status;
        setSquares(boards);   //state is stored in setSquares comp
        setIsXNext(!isXNext); //to flip to "o" as next move
        console.log(boards);
        
    } */
    
//     function renderSquare(i) {
//         return  <Square value={squares[i]}  handleClick={()=> handleClick(i)}   //call a func whn square is clicked
            
//             />;
        
//     }
    
//     return ( 
//         <div>
//             <div className="board-row">
//                 {renderSquare(0)}
//                 {renderSquare(1)}
//                 {renderSquare(2)}
//             </div>
//             <div className="board-row">
//                 {renderSquare(3)}
//                 {renderSquare(4)}
//                 {renderSquare(5)}
//             </div>
//             <div className="board-row">
//                 {renderSquare(6)}
//                 {renderSquare(7)}
//                 {renderSquare(8)}
//             </div>
            
//         </div>
//     );

// }
// function Game(){
//     const [history, setHistory] = useState([{squares:Array(9).fill(null)}]); 
//     const [stepNumber, setStepNumber] = useState(0);
//     const [ isXNext, setIsXNext ] = useState(true);

//     function handleClick(i) {
//         const newHistory = history.slice(0,stepNumber+1);
//         const current = newHistory[newHistory.length-1];
//         const squares = current.squares.slice();

//         //const boards = [...squares];  //to maintain prev state history(jump back prev moves) or use slice or spread
        
//         if (calculateWinner(squares) || squares[i]) {  //if the board is already filled or won return nothing
//             return;
//           }
//           squares[i]= isXNext ? "X" : "O";
//           setHistory(
//               newHistory.concat([{
//                   squares:squares
//               }])
//           );
//         setStepNumber(newHistory.length);  //state is stored in setSquares comp
//         setIsXNext(!isXNext); //to flip to "o" as next move
//         console.log(squares);
//         /* const newHist = history.concat([squares]);
//         setHistory(newHist);
//          */
        
//     }
//     function jumpTo(step) {
//         setStepNumber(step);
//         setIsXNext(step % 2 ===0);
//     }
//     const current = history[stepNumber];
//     const winner = calculateWinner(current.squares);

//     const moves = history.map((step,move)=> {
//         const desc = move ? "Go to move #" + move: "Go to game start";
//         return (
//             <li key ={move}>
//                 <button className="focuss"
//                 onClick={()=> jumpTo(move)}>{desc}</button>
//             </li>
//         );
//     });
//     let status;
//     function isFull(squares) {
//         for(let i=0;i<squares.length;i++) {
//             if(squares[i]== null) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     if (winner) {
//         status="Winner: " + winner;
//       } 
//      else if (isFull(current.squares)){
//          status= "Its a draw";
//      }
//       else {
//         status = "Next player: " + (isXNext ? "X" : "O");
//       }

//     return (
//         <div className="game">
//             <div className="game-board">
//                 <Board squares={current.squares} handleClick={i=> handleClick(i)}
//                 />
//             </div>
//             <div className="game-info">
//                 <div>{status}</div>
//                 <ol>{moves}</ol>
//             </div>
//         </div>
//     );
// }
// function calculateWinner(squares) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
//     return null;
//   }

// export default Game;

/* import './TicTacToe.css';
import React, { useState } from 'react';

const Square = ({ value, handleClick }) => {
    return (
        <button className="square" onClick={handleClick}>
            {value}
        </button>
    );
};

const Board = ({ squares, handleClick }) => {

    function renderSquare(i) {
        return <Square value={squares[i]} handleClick={() => {
            handleClick(i);
        }} />;
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

const Game = () => {
    let end = 0;
    let [count, setCounter] = useState(0);
    const [boardHistory, setBoardHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xnextTurn, setTurn] = useState(true);
    const [hist,setNewHist]= useState(0);


    const [stepCounter, setStepCounter] = useState(0);

    function handleClick(i) {
        const gotoPoint = boardHistory.slice(0, stepNumber + 1);
        const current = gotoPoint[stepNumber];
        const squares = [...current];

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xnextTurn ? 'X' : 'O';
        setBoardHistory([...gotoPoint, squares]);
        setStepNumber(gotoPoint.length);
        setTurn(!xnextTurn);
        setCounter(tic => tic + 1);
        setStepCounter(val=>val+1);
        //console.log(boardHistory);
        const hist = boardHistory.concat([squares]);
        let n = hist.length;
        console.log(hist);
        console.log(n);
    }

    function calculateWinner(board) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }

    let current = boardHistory[stepNumber]
    const winner = calculateWinner(current);
    let status;
    if (winner)
 {
        status = 'Winner is ' + winner;
        end = 1;
    } else {
        status = 'Next player: ' + (xnextTurn ? 'X' : 'O');
    }

    if (count === 9 && end === 0) {
        status = 'The Game is a DRAW';
    }

    return (

        <div>
            <div className="game">
                <div className="status">{status}</div>
                <div className="game-board">
                    <Board squares={current} handleClick={i => handleClick(i)} />
                </div>
               
            </div>
            <br></br>
            console.log(hist.length);
            <button class="counterButton"
                onClick={() => {
                    if (hist.length > 0) {
                       
                    }
                }}
            >
            -
            </button>

            <h1>{stepCounter}</h1>
            <button class="counterButton"
                onClick={() => {
                    if (stepCounter < count) {
                    }
                }}
            >
            +
            </button>
        </div>
    );
};

export default Game; */

// import './TicTacToe.css';

// import React, { useEffect, useRef,useState } from 'react';
// import myClassNames from 'classnames';

// const Square = ({ value, handleClick, highlightWinner }) => {
//     const className ="square" + (highlightWinner ? "highlight" : ""); //new line
//     return (
//         <button className={className} onClick={handleClick}>
//             {value}
//         </button>
//     );
// };
    
// const Board = ({ board, handleClick,winnerHighlight }) => {

//     function renderSquare(i) {
//         return <Square value={board[i]} handleClick={() => handleClick(i)} 
//         highlightWinner = {winnerHighlight && winnerHighlight.includes(i)}  //new line
//             />;
//     }
//     return (
//         <div>
//             <div className="board-row">
//                 {renderSquare(0)}
//                 {renderSquare(1)}
//                 {renderSquare(2)}
//             </div>
//             <div className="board-row">
//                 {renderSquare(3)}
//                 {renderSquare(4)}
//                 {renderSquare(5)}
//             </div>
//             <div className="board-row">
//                 {renderSquare(6)}
//                 {renderSquare(7)}
//                 {renderSquare(8)}
//             </div>
//         </div>
//     );
//     };

// const Game = () => {
    
//     const handleClick = (i) => {
//         console.log(`square ${i} is clicked`);
//         //We need to record this interaction in the board state
//         //1. The square got fresh tap
//         //2. The square already had a value associated, in other words, board[i] had a non null value
//         /* const board = history[step]; */
        
//         let histLen = history.length;
//         if (board[i] === null && !computeWinner(board) && (step+1=== histLen)) {
//             //Set board state to a new state depending who is the current player
//             //We need to derive the right board for the given step
//             const newBoard = [...board]; //Note, we have to create a new state object, and never mutate the current state and set it back. React wont come to know any state change in this case and there will be no re rendering that is going to happen
//             newBoard[i] = player;
//             //Flip the player
//             setPlayer(player === 'X' ? 'O' : 'X');
//             //Set the board state
//             console.log("board",board);
//             //step is initially starts from 0
//             //history is prev moves of playes stored as array of array
//             //length of hist is 1
//             // [initalboard, step1board]
//             const newHistory = history.concat([newBoard]);
//             setHistory(newHistory);
//             //Update the step
//             setStep((prevStep) => prevStep + 1);
//              console.log("step",step);
//             console.log("hist", history);
//             console.log("hisLen", histLen)
//         }
        
//     };


//     const [history, setHistory] = useState([Array(9).fill(null)]);
//     const [step, setStep] = useState(0);
//     const [player, setPlayer] = useState('X');
//     const [playerName,setPlayerName] = useState();

//     const winningInfo = computeWinner(history);
//     const winner = winningInfo.winner;
//     const winnerHighlight = winningInfo.line;  //new line
    

//     function computeWinner(board) {
//         const lines = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6],
//         ];
        
//         for (let i = 0; i < lines.length; i++) {
//             const [a, b, c] = lines[i];
            
//             if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//                 return( 
//                     board[a]   //new line added
                    
//                 );
//             }
//             else if(!board.includes(null)){
//                 return 'draw';
//             }
//         }
//         return null;
//     }
    
    


//     function status() {
//         //Check if there is a winner, if so, please show the status that there is a winner,
//         //and game should end.
//         //We can actually derive if there is a winner. We dont need to maintain a seperate state
//         //for this.
//         /* if(document.getElementById('status').style.display =="block") {
//             alert('Game won');
//             return;
//         } */
        
//         const winner = computeWinner(history[step]);
//          if (winner === null) {
//             return `Next player: ${player}`;
            
//         } 
//         else if(winner==="draw"){  //new line
//             return `${winner}`;
//         }
//         else{
//             return `Player ${winner} won!`;
//         }
    
//     }
//     const jumpToState = (step) => {
//         setStep(step);
//     };


//     function renderHistory() {
       
//         return history.map((b, index) => (
            
//             <li key={index}>
//             <button class={myClassNames('focuss',{focussClicked:index===step})} 
//             onClick={()=> jumpToState(index)} >
//             {index === 0 ? 'Go to start of the game' : `Goto step${index}`}
//             </button>
            
//             </li>
            
//         )
        
//         );
        
//     }
    
//     const board = history[step];
//     //console.log(board);
    
//     const firstPlayerNameFieldRef = useRef(null);
//     console.log(firstPlayerNameFieldRef.current);
//     useEffect(() => {
//         console.log(firstPlayerNameFieldRef.current);
//         if (firstPlayerNameFieldRef.current) {
//             firstPlayerNameFieldRef.current.focus();
//         }
//     }, []);

//     let numberOfRenders = 0; //useRef(0);

//     useEffect(() => {
//         numberOfRenders += 1;
//         console.log('Number of times rendered = ', numberOfRenders);
//     });


//     function reset() {
//         setHistory([Array(9).fill(null)]);
//         setStep(0);
//         setPlayer('X'); 
//     }
//     return (
//         <div className="game">
//             <div className="game-board">
//                 <Board board={history[step]} handleClick={handleClick}
                
                
//                  />
//             </div>
//             <div className="game-info">
//                 <div>{status()}</div>
//                 <ol>{renderHistory()}</ol>
//             </div>
//             <div>
//             <button onClick={reset}>Reset</button>
//             </div>
//             <div className="name-inputs">
//                 <input ref={firstPlayerNameFieldRef} type={'text'} onChange={(e) =>{setPlayerName({...playerName,two:e.target.value})}} placeholder={'X'} />
//                 <input type={'text'} onChange={(e) => {setPlayerName({...playerName,two:e.target.value})}} placeholder={'Y'} />
//             </div>
//         </div>
//     );
// };



// export default Game;

//2nd one implemented w/o local storage and react highlight

// import './TicTacToe.css';
// import Button from './Button';
// import React, { useEffect, useRef,useState } from 'react';
// import myClassNames from 'classnames';

// const Square = ({ highlight,value, handleClick}) => {
//     const classes = myClassNames('square',{'highlightSqaure': highlight});
//     return (
//         <button className={classes} onClick={handleClick} >
//             {value}
//         </button>
//     );
// };
    
// const Board = ({ board, handleClick,winnerLine}) => {

//     function renderSquare(i) {
//         return <Square value={board[i]} handleClick={() => handleClick(i)}
//          highlight={winnerLine && winnerLine.includes(i)}
//             />;
//     }
//     return (
//         <div>
//             <div className="board-row">
//                 {renderSquare(0)}
//                 {renderSquare(1)}
//                 {renderSquare(2)}
//             </div>
//             <div className="board-row">
//                 {renderSquare(3)}
//                 {renderSquare(4)}
//                 {renderSquare(5)}
//             </div>
//             <div className="board-row">
//                 {renderSquare(6)}
//                 {renderSquare(7)}
//                 {renderSquare(8)}
//             </div>
//         </div>
//     );
//     };

// const Game = () => {
    
//     const handleClick = (i) => {
//         console.log(`square ${i} is clicked`);
//         //We need to record this interaction in the board state
//         //1. The square got fresh tap
//         //2. The square already had a value associated, in other words, board[i] had a non null value
//         /* const board = history[step]; */
        
//         let histLen = history.length;
//         if (board[i] === null && winner===null && (step=== histLen-1)) {
//             //Set board state to a new state depending who is the current player
//             //We need to derive the right board for the given step
//             const newBoard = [...board]; //Note, we have to create a new state object, and never mutate the current state and set it back. React wont come to know any state change in this case and there will be no re rendering that is going to happen
//             newBoard[i] = player;

//             //Flip the player
//             setPlayer(player === randomPlayer1.current? randomPlayer2.current: randomPlayer1.current);
//              //setPlayer(player===randomPlayer1 ? (randomPlayer1 ? randomPlayer1 : "X") : (randomPlayer2 ? randomPlayer2 : 'O'));
           
//             //Set the board state
//             console.log("board",board);
//             //step is initially starts from 0
//             //history is prev moves of playes stored as array of array
//             //length of hist is 1
//             // [initalboard, step1board]
//             const newHistory = history.concat([newBoard]);
//             setHistory(newHistory);
//             //Update the step
//             setStep((prevStep) => prevStep + 1);
//             /* highlightWinner= winnerHighlight && winnerHighlight.includes(i) */
//             console.log("step",step);
//             console.log("hist", history);
//             console.log("hisLen", histLen)
//         }
        
//     };

    
//     const [history, setHistory] = useState([Array(9).fill(null)]);
//     const [step, setStep] = useState(0);
//     const board = history[step];
//     const [player, setPlayer] = useState('X');
//     const winningperson = computeWinner(board);
//     const winner = winningperson.winner;

//       //new line
    

//     function computeWinner(board) {
//         const lines = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2, 4, 6],
//         ];
        
//         for (let i = 0; i < lines.length; i++) {
//             const [a, b, c] = lines[i];
//             // let line;
//             if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//                 return{ 
//                     winner:board[a],
//                     line : lines[i],
//                       //new line added
                    
//                 };
//             }
//         }
//             /* else if(!board.includes(null)){
//                 return 'draw';  */                   //if board is null then next player and if board does not include null then draw
//                 return {
//                     winner:null,
//                     line:null,
//                 };
            
        
        
//         //return null;
//     }
    
    


//     function status() {
//         //Check if there is a winner, if so, please show the status that there is a winner,
//         //and game should end.
//         //We can actually derive if there is a winner. We dont need to maintain a seperate state
//         //for this.
        
//         //const winner = computeWinner(history[step]);
//          /* if (winner === null) {
//             return `Next player: ${player}`;
            
//         } 
//         else if(winner==="draw"){  //draw condition
//             return `${winner}`;
//         }
//         else{
//             return `Player ${winner} won!`;
//         } */
//         if (winner){
//             return `winner is player ${winner}`;
//         }
//         else {
//             return Draw();
//         }
    
//     };
//     function Draw() {
//         if(!winner && step===9){
//             return `Match is a draw`;
//         }else {
//             return `Next player is ${player}`;
//         }
//     }
//     const jumpToState = (step) => {
//         setStep(step);
        
//     };


//     function renderHistory() {
       
//         return history.map((b, index) => (
            
//             <li key={index}>
//             {/* <button class={myClassNames('focuss',{focussClicked:index===step})} 
//             onClick={()=> jumpToState(index)} >
//             {index === 0 ? 'Go to start of the game' : `Goto step${index}`}
//             </button> */}
//             <Button selected={index === step} onClick={() => setStep(index)}>
//                     {index === 0 ? 'Go to start of the game' : `Goto step${index}`}
//                 </Button>
            
//             </li>
            
//         )
        
//         );
        
//     }
    
   
//     //console.log(board);
    
//     let randomPlayer1 = useRef(null);
//     let randomPlayer2 = useRef(null);
//     console.log(randomPlayer1.current);
//     useEffect(() => {
//         console.log(randomPlayer1.current);
//         if (randomPlayer1.current) {
//             randomPlayer1.current.focus();
//         } else {
//             randomPlayer2.current.focus();
//         }
//     }, []);

   
//     let numberOfRenders = 0; //useRef(0);

//     useEffect(() => {
//         numberOfRenders += 1;
//         console.log('Number of times rendered = ', numberOfRenders);
//     });


//     function reset() {
//         setHistory([Array(9).fill(null)]);
//         setStep(0);
//         setPlayer('X'); 
//     }
//     return (
//         <div className="game">
//             <div className="game-board">
//                 <Board board={history[step]} handleClick={handleClick}
//                 winnerLine = {winningperson.line}
                
//                  />
//             </div>
//             <div className="game-info">
//                 <div>{status()}</div>
//                 <ol>{renderHistory()}</ol>
//             </div>
//             <div>
//             <button onClick={reset}>Reset</button>
//             </div>
//             <div className="name-inputs">
//             <input ref={randomPlayer1} type={'text'} maxlength={1} 
//             onChange={(event) => { randomPlayer1.current = event.target.value; setPlayer(event.target.value) }} 
//             placeholder={'X'} /><br></br>
//             <input ref={randomPlayer2} type={'text'} maxlength={1} 
//             onChange={(event) => { randomPlayer2.current = event.target.value;
//             if (randomPlayer1.current === randomPlayer2.current) 
//             alert('give another input') }} placeholder={'Y'} />
//             </div>
//         </div>
//     );
// };



// export default Game;

import './TicTacToe.css';
import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { readFromStorage, writeToStorage } from './LocalStorage';
//import { useLocalStorageState } from './useLocalStorageState';
const HISTORY = "history";
const STEPS = "step";
const Square = ({ value, handleClick, highlight }) => {
    const classes = cn('square', { 'highlightSquare': highlight });
    return (
        <button className={classes} onClick={handleClick}>
            {value}
        </button>
    );
};
const Board = ({ board, handleClick, winningline }) => {
    function renderSquare(i) {
        return <Square value={board[i]} handleClick={() => handleClick(i)} highlight={winningline && winningline.includes(i)} />;
    }
    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

const Game = () => {
    const handleClick = (i) => {
        const isStepCurrent = () => step === history.length - 1;
        console.log(`square ${i} is clicked`);
        //We need to record this interaction in the board state
        //1. The square got fresh tap
        //2. The square already had a value associated, in other words, board[i] had a non null value
        if (isStepCurrent() && board[i] === null && winner === null) {
            //Set board state to a new state depending who is the current player
            //we need to derive right board for the given step
            const newBoard = [...board]; //Note, we have to create a new state object, and never mutate the current state and set it back. React wont come to know any state change in this case and there will be no re rendering that is going to happen
            newBoard[i] = player;
            //Flip the player
            setPlayer(player == randomPlayer1.current ? randomPlayer2.current : randomPlayer1.current);
            //Set the board state

            const newHistory = history.concat([newBoard]);
            setHistory(newHistory);

            writeToStorage(HISTORY, newHistory);
            //update the step
            setStep(prevStep => prevStep + 1);
            writeToStorage(STEPS, step+1);
        }
    };


    const [history, setHistory] = useState(() => readFromStorage(HISTORY) ||[Array(9).fill(null)]);
    const [step, setStep] = useState(readFromStorage(STEPS) ||0);
    const [player, setPlayer] = useState('X');
    const board = history[step];
    const winningperson = computeWinner(board);
    const winner = winningperson.winner

    function computeWinner(board) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return {
                    winner: board[a],
                    line: lines[i],
                };

            }
        }
        return {
            winner: null,
            line: null,
        };
    }


    function status() {
        //Check if there is a winner, if so, please show the status that there is a winner,
        //and game should end.
        //We can actually derive if there is a winner. We dont need to maintain a seperate state
        //for this.
        //const winner = computeWinner(history[step]);
        if (winner)
        {

            return `Winner is player ${winner} `;
        } else {
            return Draw();
        }
    };
    const jumpToState = (step) => {
                setStep(step);
     };

    function Draw() {
        //const winner = computeWinner(history[step]);
        if (!winner && step === 9) {
            return `Match is a Draw`;
        } else return ` Next Player is ${player} `;
    }
    function renderHistory() {
        return history.map((b, index) => (
            <li key={index}>
            
                <button class={cn('focuss',{focussClicked:index===step})}   onClick={() => jumpToState(index)}>
                    {index === 0 ? 'Go to start of the game' : `Goto step${index}`}
                </button>
            </li>
        ));
    }
    let randomPlayer1 = useRef(null);
    let randomPlayer2 = useRef(null);
    console.log(randomPlayer1.current);

    useEffect(() => {
        console.log(randomPlayer1.current);
        if (randomPlayer1.current) {
            randomPlayer1.current.focus();
        } else {
            randomPlayer2.current.focus();
        }
    }, []);

    let numberOfRenders = 0; //useRef(0);

    useEffect(() => {
        numberOfRenders += 1;
        console.log('Number of times rendered = ', numberOfRenders);
    });
    function reset() {
        setHistory([Array(9).fill(null)]);
        setStep(0);
        setPlayer('X');
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board board={history[step]} handleClick={handleClick} winningline={winningperson.line} />
            </div>
            <div className="game-info">
                <div>{status()}</div>
                <ol>{renderHistory()}</ol>
            </div>
            <div>
                <button onClick={reset}>Reset</button>
            </div>
            <div className="name-inputs">
                <input ref={randomPlayer1} type={'text'} maxlength={1} onChange={(event) => { randomPlayer1.current = event.target.value; setPlayer(event.target.value) }} placeholder={'X'} /><br></br>
                <input ref={randomPlayer2} type={'text'} maxlength={1} onChange={(event) => { randomPlayer2.current = event.target.value; if (randomPlayer1.current === randomPlayer2.current) alert('give another name') }} placeholder={'Y'} />

            </div>

        </div>
    );
};

export default Game;