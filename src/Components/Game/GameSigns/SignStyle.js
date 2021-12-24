import styled from "styled-components";


export const SignContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    padding: 0.6rem 0.5rem;
    width: 60px;
    height: 60px;
    border: 9px solid ${({border}) => (border)};
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    box-shadow: 0 3px rgba(0, 0, 0, 0.15) inset;
    transition: all 250ms ease-in-out;
    -webkit-transition: all 250ms ease-in-out;
    -moz-transition: all 250ms ease-in-out;
    -ms-transition: all 250ms ease-in-out;
    -o-transition: all 250ms ease-in-out;


    @media screen and (min-width: 320px) {
        width: 68px;
        height: 68px;
        box-shadow: 0 4px rgba(0, 0, 0, 0.15) inset;
    }
    @media screen and (min-width: 375px) {
        width: 75px;
        height: 75px;
        border: 10px solid ${({border}) => (border)};
    }
    @media screen and (min-width: 411px) {
        width: 85px;
        height: 85px;
        box-shadow: 0 4.5px rgba(0, 0, 0, 0.15) inset;
        border: 11px solid ${({border}) => (border)};
    }
    @media screen and (min-width: 540px) {
        width: 90px;
        height: 92px;
        border: 12px solid ${({border}) => (border)};
    }
    @media screen and (min-width: 768px) {
        border: 14px solid ${({border}) => (border)};
        width: 118px;
        height: 120px;
        box-shadow: 0 6px rgba(0, 0, 0, 0.15) inset;
    }
    @media screen and (min-width: 769px) {
        :hover {
            box-shadow: 0 7px rgba(0, 0, 0, 0.15) inset, 0 0 80px 20px ${({borderHover}) => (borderHover)};
        }

        :focus {
            box-shadow: 0 7px rgba(0, 0, 0, 0.15) inset, 0 0 80px 20px ${({borderHover}) => (borderHover)};
        }
    }
    @media screen and (min-width: 1400px) {
        border: 16px solid ${({border}) => (border)};
        width: 122px;
        height: 122px;
    }
`


export const SignImg = styled.img`
    width: 85%;

    @media screen and (min-width: 320px) {
        width: 70%;
    }
    @media screen and (min-width: 375px) {
        width: 60%;
    }
    @media screen and (min-width: 540px) {
        width: 55%;
    }
    @media screen and (min-width: 1400px) {
        width: 45px;
    }
`