import { GET_SCORE, UPDATE_SCORE, START_GAME, GET_USER_CHOICE, RESTART_GAME } from "../Actions/Types";



const initialState = {
    score: 0,
    gameStarted: false,
    gameDetails: [],
    houeChoice: [],
    decideWinner: ""
}



export default function ( state = initialState, action ) {
    switch ( action.type ) {

        case GET_SCORE:
            return {
                ...state
            }

        case UPDATE_SCORE:
            let newScore = action.payload;

            return {
                ...state,
                score: newScore
            }

        case START_GAME: 
            let choiceArray = [
                {
                    houseSelected: "scissors",
                    houseBorderColor: "#ec9e0e"
                },
                {
                    houseSelected: "spock",
                    houseBorderColor: "#40b9ce"
                },
                {
                    houseSelected: "paper",
                    houseBorderColor: "#4865f4"
                },
                {
                    houseSelected: "rock",
                    houseBorderColor: "#dc2e4e"
                },
                {
                    houseSelected: "lizard",
                    houseBorderColor: "#834fe3"
                }
            ];
    
            let startGame = true;
            let gameData = action.payload;
            let houseChoiceObj = choiceArray[Math.floor(Math.random() * choiceArray.length)];
            let theUser = gameData.userSelected;
            let theHouse = houseChoiceObj.houseSelected;
            let message = "";
            let updatedScore = state.score;


                if(theUser === "scissors") {
                    if (theHouse === "paper") {
                        message = "You Win!";
                        updatedScore = updatedScore + 1;
                    } else if (theHouse === "lizard") {
                        message = "You Win!";
                        updatedScore = updatedScore + 1;
                    } else if (theHouse === "rock") {
                        message = "You Lose!";
                        updatedScore = updatedScore === 0 ? 0 : updatedScore - 1;
                    } else if (theHouse === "spock") {
                        message = "You Lose!";
                        updatedScore = updatedScore === 0 ? 0 : updatedScore - 1;
                    } else if (theHouse === "scissors") {
                        message = "Draw";
                        updatedScore = state.score;
                    }
                } else if (theUser === "paper") {
                    if (theHouse === "rock") {
                        message = "You Win!";
                        updatedScore = updatedScore + 1;
                    } else if (theHouse === "spock") {
                        message = "You Win!";
                        updatedScore = updatedScore + 1;
                    } else if (theHouse === "lizard") {
                        message = "You Lose!";
                        updatedScore = updatedScore === 0 ? 0 : updatedScore - 1;
                    } else if (theHouse === "scissors") {
                        message = "You Lose!";
                        updatedScore = updatedScore === 0 ? 0 : updatedScore - 1;
                    } else if (theHouse === "paper") {
                        message = "Draw";
                        updatedScore = state.score;
                    }
                } else if (theUser === "rock") {
                    if (theHouse === "lizard") {
                        message = "You Win!";
                        updatedScore = updatedScore + 1;
                    } else if (theHouse === "scissors") {
                        message = "You Win!";
                        updatedScore = updatedScore + 1;
                    } else if (theHouse === "paper") {
                        message = "You Lose!";
                        updatedScore = updatedScore === 0 ? 0 : updatedScore - 1;
                    } else if (theHouse === "spock") {
                        message = "You Lose!";
                        updatedScore = updatedScore === 0 ? 0 : updatedScore - 1;
                    } else if (theHouse === "rock") {
                        message = "Draw";
                        updatedScore = state.score;
                    }  
                } else if (theUser === "lizard") {
                    if (theHouse === "spock") {
                        message = "You Win!";
                        updatedScore = updatedScore + 1;
                    } else if (theHouse === "paper") {
                        message = "You Win!";
                        updatedScore = updatedScore + 1;
                    } else if (theHouse === "rock") {
                        message = "You Lose!";
                        updatedScore = updatedScore === 0 ? 0 : updatedScore - 1;
                    } else if (theHouse === "scissors") {
                        message = "You Lose!";
                        updatedScore = updatedScore === 0 ? 0 : updatedScore - 1;
                    } else if (theHouse === "lizard") {
                        message = "Draw";
                        updatedScore = state.score;
                    }  
                } else if (theUser === "spock") {
                    if (theHouse === "scissors") {
                        message = "You Win!";
                        updatedScore = updatedScore + 1;
                    } else if (theHouse === "rock") {
                        message = "You Win!";
                        updatedScore = updatedScore + 1;
                    } else if (theHouse === "lizard") {
                        message = "You Lose!";
                        updatedScore = updatedScore === 0 ? 0 : updatedScore - 1;
                    } else if (theHouse === "paper") {
                        message = "You Lose!";
                        updatedScore = updatedScore === 0 ? 0 : updatedScore - 1;
                    } else if (theHouse === "spock") {
                        message = "Draw";
                        updatedScore = state.score;
                    } 
                }
                

                /* localStorage.setItem("score", updatedScore); */


            return {
                ...state,
                score: updatedScore,
                gameStarted: startGame,
                gameDetails: [ ...state.gameDetails, gameData ],
                houeChoice: [ ...state.houeChoice, houseChoiceObj],
                decideWinner: message
            }

        case GET_USER_CHOICE:
            return {
                ...state
            }

        case RESTART_GAME:
            let isStarted = false;
            let resetGameData = [];
            let resetHousePick = [];
            let resetMessage = "";

            return {
                ...state,
                gameStarted: isStarted,
                gameDetails: resetGameData,
                houeChoice: resetHousePick,
                decideWinner: resetMessage
            }

        default: 
            return {
                ...state
            }
    }
}