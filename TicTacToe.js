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
import React, {  useRef, useReducer } from 'react';
//import { readFromStorage, writeToStorage } from './LocalStorage';
//import { useLocalStorageState } from './useLocalStorageState';
/* const HISTORY = "history";
const STEPS = "step"; */
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
    const SET_PLAYER_X_ACTION_TYPE = 'SET_PLAYER_X';
    const SET_PLAYER_Y_ACTION_TYPE = 'SET_PLAYER_Y';
    const SET_CURRENT_PLAYER_ACTION_TYPE = 'SET_CURRENT_PLAYER';
    const RESET_ACTION_TYPE = 'RESET';
    const PLAY_NEXT_STEP_ACTION_TYPE = 'PLAY_NEXT_STEP';
    const GOTO_STEP_ACTION_TYPE = 'GO_TO_STEP';

    const initialState = {
        history: [Array(9).fill(null)],
        playerX: 'X',
        playerY: 'Y',
        currentPlayer: 'X',
        step: 0,
        winningLine: [],
        };
      const setPlayerX = (playerName) => ({
        type: SET_PLAYER_X_ACTION_TYPE,
        playerName,
        });

    const setPlayerY = (playerName) => ({
        type: SET_PLAYER_Y_ACTION_TYPE,
        playerName,
        });

    const setCurrentPlayer = (playerName) => ({
        type: SET_CURRENT_PLAYER_ACTION_TYPE,
        playerName,
        });

    const resetGame = () => ({
        type: RESET_ACTION_TYPE,
        initialState,
        });

    const playNextStep = (index) => ({
        type: PLAY_NEXT_STEP_ACTION_TYPE,
        index,
        });
    const gotoStep = (step) => ({
        type: GOTO_STEP_ACTION_TYPE,
        step,
        });

    const ticTacToeReducer = (state, action) => {
        switch(action.type) {
            case SET_PLAYER_X_ACTION_TYPE:
            return {...state, playerX: action.playerName};
            case SET_PLAYER_Y_ACTION_TYPE:
            return {...state, playerY: action.playerName};
            case SET_CURRENT_PLAYER_ACTION_TYPE:
            return {...state, currentPlayer: action.playerName};
            case RESET_ACTION_TYPE:
            return action.initialState;
            case PLAY_NEXT_STEP_ACTION_TYPE:
            return reduceNextStep(state, action.index);
            case GOTO_STEP_ACTION_TYPE:
            if(action.step >= 0 && action.step < 10) {
            return {...state, step: action.step};
            } else {
                    throw new Error('Steps needs to be within 0 and 10');
            // return state;
            }
        default:
        return state;
        }
        }; 
        function reduceNextStep(state, index) {
            //Get the most recent history from history, and
            //make a copy of it.
            let { history, step, currentPlayer, playerX, playerY } = state;
            const prevHistory = history[step];
            const newHistory = [...prevHistory];
            newHistory[index] = currentPlayer;
        
            //Concatenate the history
            history = history.concat([newHistory]);
        
            //Change the player for the next turn
            currentPlayer = currentPlayer === playerX ? playerY : playerX;
            //Indicate we want to play next step
            step += 1;
        
            return { ...state, history, step, currentPlayer };
        }
        const [state, dispatch] = useReducer(ticTacToeReducer,initialState);
        let {history, step, currentPlayer, playerX, playerY} = state;

        const board = history[step];
        const winningperson = computeWinner(board);
        const winner = winningperson.winner
        const handleClick = (i) => {
        const isStepCurrent = () => step === history.length - 1;
        console.log(`square ${i} is clicked`);
        //We need to record this interaction in the board state
        //1. The square got fresh tap
        //2. The square already had a value associated, in other words, board[i] had a non null value
        if (isStepCurrent() && board[i] === null && winner === null) {
            //Set board state to a new state depending who is the current player
            //we need to derive right board for the given step
            //const newBoard = [...board]; //Note, we have to create a new state object, and never mutate the current state and set it back. React wont come to know any state change in this case and there will be no re rendering that is going to happen
            //newBoard[i] = player;
            //Flip the player
            //setPlayer(player == randomPlayer1.current ? randomPlayer2.current : randomPlayer1.current);
            //Set the board state

            /* const newHistory = history.concat([newBoard]);
            setHistory(newHistory);

            writeToStorage(HISTORY, newHistory);
            //update the step
            setStep(prevStep => prevStep + 1);
            writeToStorage(STEPS, step+1); */
            dispatch(playNextStep(i));
        }
    };


    /* const [history, setHistory] = useState(() => readFromStorage(HISTORY) ||[Array(9).fill(null)]);
    const [step, setStep] = useState(readFromStorage(STEPS) ||0);
    const [player, setPlayer] = useState('X'); */
    

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
   /*  const jumpToState = (step) => {
                setStep(step);
     }; */

    function Draw() {
        //const winner = computeWinner(history[step]);
        if (!winner && step === 9) {
            return `Match is a Draw`;
        } else return `Next player: ${currentPlayer ? currentPlayer : ''}`;
    }
    function renderHistory() {
        return history.map((b, index) => (
            <li key={index}>
            
                <button class={cn('focuss',{focussClicked:index===step})}   onClick={() => dispatch(gotoStep(index))}>
                    {index === 0 ? 'Go to start of the game' : `Goto step${index}`}
                </button>
            </li>
        ));
    }
    let randomPlayer1 = useRef(null);
    //let randomPlayer2 = useRef(null);
    console.log(randomPlayer1.current);

   /*  useEffect(() => {
        console.log(randomPlayer1.current);
        if (randomPlayer1.current) {
            randomPlayer1.current.focus();
        } else {
            randomPlayer2.current.focus();
        }
    }, []); */

    /* let numberOfRenders = 0; //useRef(0);

    useEffect(() => {
        numberOfRenders += 1;
        console.log('Number of times rendered = ', numberOfRenders);
    }); */
    // const resetGame=()=>( {
    //     /* setHistory([Array(9).fill(null)]);
    //     setStep(0);
    //     setPlayer('X'); */
    //     type:RESET_ACTION_TYPE,
    //     initialState,
    // });

    return (
        <div className="game">
            <div className="game-board">
                <Board board={history[step]} handleClick={handleClick} winningline={winningperson.line} />
            </div>
            <div className="game-info">
                <div>{status()}</div>
                <ol>{renderHistory()}</ol>
            </div>
            <div className={'resetButton'}>
            <button type={'reset'} onClick={() => dispatch(resetGame())}>Reset</button>
            </div>
            <div className="name-inputs">
            <label>Player 1</label>
                    <input ref={randomPlayer1} type={'text'} value={playerX} onChange={(e) => {
                    dispatch(setPlayerX(e.target.value));
                    dispatch(setCurrentPlayer(e.target.value))}}
                    placeholder={'X'}
                    maxLength={1} /><br/>
                    </div>
                    <div>
                    <label>Player 2</label>
                    <input type={'text'} value={playerY}
                    onChange={(e) => {
                    if(playerX === e.target.value) {
                    alert('change the name');
                    }
                    dispatch(setPlayerY(e.target.value));
                    }}
                    placeholder={'Y'}
                    maxLength={1}
                    />
            </div>

        </div>
    );
};

export default Game;