import { combineReducers } from "redux";
import gameReducer from "./GameReducer";



export default combineReducers({
    game: gameReducer
});