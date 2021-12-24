import React, { Component } from 'react';
import { SignContainer, SignImg } from "./SignStyle";
 
// Redux.
import { connect } from "react-redux";
import { startGame } from "../../../Actions/GameActions";
import PropTypes from 'prop-types';




class Sign extends Component {
    getUserChoice = (choice, borderClr) => {
        let userHasChosen = { userSelected: choice, borderColor: borderClr };
        this.props.startGame(userHasChosen);
    };

    render() {
        return (
            <SignContainer border={this.props.borderColor} borderHover={this.props.borderHover} onClick={() => this.getUserChoice(this.props.userChoice, this.props.borderColor)}>
                <SignImg src={this.props.signImg} alt={this.props.imgAlt}/>
            </SignContainer>
        )
    }
}




Sign.propTypes = {
    startGame: PropTypes.func.isRequired
}

export default connect(null, { startGame })(Sign);