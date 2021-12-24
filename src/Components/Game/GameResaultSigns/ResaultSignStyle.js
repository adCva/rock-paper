import styled from "styled-components";


export const ResaultSignContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    padding: 0.7rem 0.6rem;
    margin: 0 auto;
    width: 75px;
    height: 75px;
    border: 12px solid ${({border}) => (border)};
    border-radius: 50%;
    outline: none;
    user-select: none;
    transition: all 250ms ease-in-out;
    -webkit-transition: all 250ms ease-in-out;
    -moz-transition: all 250ms ease-in-out;
    -ms-transition: all 250ms ease-in-out;
    -o-transition: all 250ms ease-in-out;
    box-shadow: ${({winerBoxShadow}) => (winerBoxShadow ? "0 0 0 15px rgba(255, 255, 255, 0.02), 0 0 0 35px rgba(255, 255, 255, 0.015), 0 0 0 55px rgba(255, 255, 255, 0.01), 0 3px rgba(0, 0, 0, 0.15) inset" : "0 3px rgba(0, 0, 0, 0.15) inset")};


    @media screen and (min-width: 320px) {
        width: 85px;
        height: 85px;
        box-shadow: ${({winerBoxShadow}) => (winerBoxShadow ? "0 0 0 20px rgba(255, 255, 255, 0.02), 0 0 0 40px rgba(255, 255, 255, 0.015), 0 0 0 60px rgba(255, 255, 255, 0.01), 0 4px rgba(0, 0, 0, 0.15) inset" : "0 4px rgba(0, 0, 0, 0.15) inset")};
    }

    @media screen and (min-width: 360px) {
        width: 92px;
        height: 92px;
        border: 14px solid ${({border}) => (border)};
        box-shadow: ${({winerBoxShadow}) => (winerBoxShadow ? "0 0 0 25px rgba(255, 255, 255, 0.02), 0 0 0 45px rgba(255, 255, 255, 0.015), 0 0 0 70px rgba(255, 255, 255, 0.01), 0 4.5px rgba(0, 0, 0, 0.15) inset" : "0 4.5px rgba(0, 0, 0, 0.15) inset")};
    }

    @media screen and (min-width: 411px) {
        width: 97px;
        height: 97px;
        border: 15px solid ${({border}) => (border)};
        box-shadow: ${({winerBoxShadow}) => (winerBoxShadow ? "0 0 0 25px rgba(255, 255, 255, 0.02), 0 0 0 50px rgba(255, 255, 255, 0.015), 0 0 0 75px rgba(255, 255, 255, 0.01), 0 4.5px rgba(0, 0, 0, 0.15) inset" : "0 4.5px rgba(0, 0, 0, 0.15) inset")};
    }

    @media screen and (min-width: 540px) {
        width: 105px;
        height: 105px;
        border: 16px solid ${({border}) => (border)};
        box-shadow: ${({winerBoxShadow}) => (winerBoxShadow ? "0 0 0 30px rgba(255, 255, 255, 0.02), 0 0 0 60px rgba(255, 255, 255, 0.015), 0 0 0 90px rgba(255, 255, 255, 0.01), 0 5px rgba(0, 0, 0, 0.15) inset" : "0 5px rgba(0, 0, 0, 0.15) inset")};
    }

    @media screen and (min-width: 768px) {
        width: 120px;
        height: 120px;
        border: 17px solid ${({border}) => (border)};
        box-shadow: ${({winerBoxShadow}) => (winerBoxShadow ? "0 0 0 40px rgba(255, 255, 255, 0.02), 0 0 0 70px rgba(255, 255, 255, 0.015), 0 0 0 110px rgba(255, 255, 255, 0.01), 0 6px rgba(0, 0, 0, 0.15) inset" : "0 6px rgba(0, 0, 0, 0.15) inset")};
    }

    @media screen and (min-width: 1024px) {
        width: 130px;
        height: 130px;
        border: 19px solid ${({border}) => (border)};
        box-shadow: ${({winerBoxShadow}) => (winerBoxShadow ? "0 0 0 60px rgba(255, 255, 255, 0.02), 0 0 0 100px rgba(255, 255, 255, 0.015), 0 0 0 150px rgba(255, 255, 255, 0.01), 0 7px rgba(0, 0, 0, 0.15) inset" : "0 7px rgba(0, 0, 0, 0.15) inset")};
    }

    @media screen and (min-width: 1400px) {
        box-shadow: ${({winerBoxShadow}) => (winerBoxShadow ? "0 0 0 60px rgba(255, 255, 255, 0.02), 0 0 0 110px rgba(255, 255, 255, 0.015), 0 0 0 170px rgba(255, 255, 255, 0.01), 0 7px rgba(0, 0, 0, 0.15) inset" : "0 7px rgba(0, 0, 0, 0.15) inset")};
    }
`


export const SignImg =styled.img`
    width: 75%;
    
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