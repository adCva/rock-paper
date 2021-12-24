import { GET_SCORE, UPDATE_SCORE, START_GAME, GET_USER_CHOICE, RESTART_GAME } from "./Types";


export const getScore = () => dispatch => {
    dispatch({
        type: GET_SCORE
    })
};


export const updateScore = (newScore) => dispatch => {
    dispatch({ 
        type: UPDATE_SCORE,
        payload: newScore
    })
};



export const startGame = gameData => dispatch => {
    dispatch({ 
        type: START_GAME,
        payload: gameData
    })
};


export const getUserChoice = () => dispatch => {
    dispatch({ 
        type: GET_USER_CHOICE
    })
};


export const restartGame = () => dispatch => {
    dispatch({ 
        type: RESTART_GAME
    })
};