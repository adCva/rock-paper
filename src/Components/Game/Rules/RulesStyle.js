import styled from "styled-components";



export const RulesContainer = styled.div`
    text-align: center;
`


export const RulesButton = styled.button`
    background: transparent;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 10px;
    outline: none;
    margin: 2rem 0 1rem 0;
    padding: 0.5rem 2rem;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    -webkit-transition: all 250ms ease-in-out;
    -moz-transition: all 250ms ease-in-out;
    -ms-transition: all 250ms ease-in-out;
    -o-transition: all 250ms ease-in-out;

    @media screen and (min-width: 768px) {
        padding: 0.7rem 2.5rem;
    }

    @media screen and (min-width: 769px) {
        :hover {
            border: 1px solid #eca922;
            background-color: #eca922;
            color: var(--dark-text);
        }
        :focus {
            border: 1px solid #eca922;
            background-color: #eca922;
            color: var(--dark-text);
        }
    }

    @media screen and (min-width: 900px) {
        position: absolute;
        bottom: 50px;
        right: 50px;
    }
`


export const PopUpContainer = styled.div`
    display: ${({opened}) => (opened ? "flex" : "none")};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 2.5rem;
    z-index: 999;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    animation: popUpAnimation 150ms ease-in-out;
    -webkit-animation: popUpAnimation 150ms ease-in-out;
    -moz-animation: popUpAnimation 150ms ease-in-out;
    -ms-animation: popUpAnimation 150ms ease-in-out;
    -o-animation: popUpAnimation 150ms ease-in-out;

    @media screen and (max-width: 768px) {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translate(0, 0);
        padding: 0;
    }
`


export const PopUpWrapper = styled.div`
    @media screen and (min-width: 769px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin-bottom: 2rem;
    }
`


export const PopUpTitle = styled.h2`
    color: var(--dark-text);
    font-size: 1.8rem;
    font-weight: var(--font-weight-bold);
    letter-spacing: 1.5px;
`


export const PopUpImg = styled.img`
    width: 90%;

    @media screen and (orientation: landscape) {
        width: 200px;
    }

    @media screen and (min-width: 769px) {
        width: auto;
    }
`


export const ClosePopUp = styled.button`
    background: transparent;
    color: var(--header-outline);
    border: none;
    outline: none;
    font-size: 1.7rem;
    font-weight: var(--font-weight-bold);

    @media screen and (min-width: 769px) {
        display: none;
    }
`


export const ClosePopUpDesk = styled.button`
    display: none;
    background: transparent;
    color: var(--header-outline);
    border: none;
    border-radius: 50%;
    outline: none;
    font-size: 1.7rem;
    font-weight: var(--font-weight-bold);
    cursor: pointer;
    padding: 0.4rem 0.7rem;
    transition: all 250ms ease-in-out;
    -webkit-transition: all 250ms ease-in-out;
    -moz-transition: all 250ms ease-in-out;
    -ms-transition: all 250ms ease-in-out;
    -o-transition: all 250ms ease-in-out;

    :hover {
        background: #d2d4d6;
    }

    :focus {
        background: #d2d4d6;
    }

    @media screen and (min-width: 769px) {
        display: initial;
    }
`