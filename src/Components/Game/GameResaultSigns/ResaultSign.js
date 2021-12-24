import React, { Component } from 'react';
import { ResaultSignContainer, SignImg } from "./ResaultSignStyle";



class ResaultSign extends Component {
    render() {
        return (
            <ResaultSignContainer border={this.props.borderColor} winerBoxShadow={this.props.winerBoxShadow}>
                <SignImg src={this.props.signImg} alt={this.props.imgAlt}/>                
            </ResaultSignContainer>
        )
    }
}


export default ResaultSign;