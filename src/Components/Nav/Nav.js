import React, { Component } from 'react';
import styled from "styled-components";


// Redux.
import { connect } from "react-redux";
import { getScore } from "../../Actions/GameActions";
import PropTypes from 'prop-types';


class Nav extends Component {
    render() {
        return (
            <NavContainer>
                <img src="./images/logo-bonus.svg" alt="Game"/>
                <div>
                    <p>Score</p>
                    <h1>{this.props.score}</h1>
                </div>
            </NavContainer>
        )
    }
}


Nav.propTypes = {
    getScore: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
    score: state.game.score
});


export default connect(mapStateToProps, { getScore })(Nav);





const NavContainer = styled.div`
    width: 90%;
    margin: 1.5rem auto 0;
    padding: 0.5rem 1rem;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 3.5px solid var(--header-outline);
    border-radius: 15px;

    @media screen and (min-width: 320px) {
        width: min(83%, 700px);
    }
    @media screen and (min-width: 568px) {
        padding: 1rem 1.5rem;
    }


    img {
        width: 55px;

        @media screen and (min-width: 320px) {
            width: 55px;
        }
        @media screen and (min-width: 375px) {
            width: 60px;
        }
        @media screen and (min-width: 640px) {
            width: 65px;
        }
        @media screen and (min-width: 1024px) {
            width: 95px;
        }
        @media screen and (min-width: 1400px) {
            width: 100px;
        }
    }

    div {
        background-color: #ffffff;
        text-align: center;
        font-size: 0.86rem;
        letter-spacing: 1.2px;
        padding: 0.4rem 1rem;
        border-radius: 5px;


        @media screen and (min-width: 320px) {
            padding: 0.5rem 1rem;
        }
        @media screen and (min-width: 1024px) {
            padding: 0.6rem 2rem;
        }
        @media screen and (min-width: 1400px) {
            padding: 0.5rem 2.5rem;
        }

        p {
            color: var(--score-text);
            text-transform: uppercase;

            @media screen and (min-width: 568px) {
                font-size: 0.92rem;
            }
            @media screen and (min-width: 768px) {
                font-size: 1rem;
            }
            @media screen and (min-width: 1024px) {
                font-size: 1.1rem;
            }
        }

        h1 {
            color: var(--dark-text);

            @media screen and (min-width: 1024px) {
                font-size: 3.2rem;
            }
        }
    }
`