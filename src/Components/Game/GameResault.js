import React, { Component } from 'react';
import { GameResaultContainer } from "./GamePagesStyle/GameResaultStyle";
import ResaultSign from './GameResaultSigns/ResaultSign';

// Redux.
import { connect } from "react-redux";
import { restartGame, getUserChoice } from "../../Actions/GameActions";
import PropTypes from 'prop-types';



class GameResault extends Component {
    render() {
        return (
            <GameResaultContainer gameIsStarted={this.props.isStarted}>
                <div className="first">
                    {this.props.userChoice.map((data, index) => (
                        <ResaultSign key={index} borderColor={data.borderColor} signImg={`./images/icon-${data.userSelected}.svg`} imgAlt={`${data.userSelected} image`} winerBoxShadow={this.props.winnerMessage === "You Win!" ? true : false}/>
                    ))}
                    <p>YOU PICKED</p>
                </div>
                <div className="second">
                    <h1>{this.props.winnerMessage}</h1>
                    <button onClick={this.props.restartGame}>PLAY AGAIN</button>
                </div>
                <div className="third">
                    {this.props.houseChoice.map((data, index) => (
                        <ResaultSign key={index} borderColor={data.houseBorderColor} signImg={`./images/icon-${data.houseSelected}.svg`} imgAlt={`${data.houseBorderColor} image`} winerBoxShadow={this.props.winnerMessage === "You Lose!" ? true : false}/>
                    ))}
                    <p>THE HOUSE PICKED</p>
                </div>
            </GameResaultContainer>
        )
    }
}



GameResault.propTypes = {
    restartGame: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
    userChoice: state.game.gameDetails,
    houseChoice: state.game.houeChoice,
    winnerMessage: state.game.decideWinner,
    isStarted: state.game.gameStarted
})


export default connect(mapStateToProps, { getUserChoice, restartGame })(GameResault);