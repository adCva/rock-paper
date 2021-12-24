import React, { Component } from 'react';
import { GameStartContainer, ContentContainer } from "./GamePagesStyle/GameStartStyle";
import Sign from "./GameSigns/Sign";

// Redux.
import { connect } from "react-redux";



class GameStart extends Component {
    getUserChoice = (choice, borderClr) => {
        let userHasChosen = { userSelected: choice, borderColor: borderClr };
        this.props.startGame(userHasChosen);
    };

    render() {
        return (
            <GameStartContainer gameIsStarted={this.props.isStarted}>
                <ContentContainer>
                    <div className="first">
                        <Sign borderColor="#ec9e0e" borderHover="#eca922" signImg="./images/icon-scissors.svg" imgAlt="Scissors Image" userChoice="scissors"/>
                    </div>
                    <div className="middle">
                        <Sign borderColor="#40b9ce" borderHover="#52bed1" signImg="./images/icon-spock.svg" imgAlt="Spock Image" userChoice="spock"/>


                        <Sign borderColor="#4865f4" borderHover="#5671f5" signImg="./images/icon-paper.svg" imgAlt="Paper Image" userChoice="paper"/>
                    </div>
                    <div className="last">
                        <Sign borderColor="#834fe3" borderHover="#8c5de5" signImg="./images/icon-lizard.svg" imgAlt="Lizard Image" userChoice="lizard"/>


                        <Sign borderColor="#dc2e4e" borderHover="#dd405d" signImg="./images/icon-rock.svg" imgAlt="Rock Image" userChoice="rock"/>
                    </div>
                </ContentContainer>
            </GameStartContainer>
        )
    }
}



const mapStateToProps = state => ({
    isStarted: state.game.gameStarted
})


export default connect(mapStateToProps, {})(GameStart);