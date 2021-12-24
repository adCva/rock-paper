import styled from "styled-components";


export const GameStartContainer = styled.div`
    display: ${({gameIsStarted}) => (gameIsStarted === true ? "none" : "flex")};
    justify-content: center;
    align-items: center;
    margin: 5rem auto 4rem auto;

    @media screen and (min-width: 320px) {
        margin: 4rem auto;
    }
    @media screen and (min-width: 678px) {
        margin: 6rem auto;
    }
    @media screen and (min-width: 1024px) {
        margin: 8.5rem auto 4rem auto;
    }
`


export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 160px;
    height: 180px;
    background: url('./images/bg-pentagon.svg') center/cover no-repeat;


    .first {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: -1.5rem;
    }


    .middle {
        width: 140%;
        margin-top: -1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .last {
        width: 130%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: -1.5rem;
    }



    @media screen and (min-width: 320px) {
        width: 195px;
        height: 212px;

        .middle {
            margin-top: -3rem;
        }
    }

    @media screen and (min-width: 360px) {
        width: 220px;
        height: 245px;
    }

    @media screen and (min-width: 411px) {
        width: 250px;
        height: 280px;

        .first {
            margin-top: -1.8rem;
        }

        .middle {
            margin-top: -3rem;
        }

        .last {
            margin-bottom: -1.8rem;
        }
    }

    @media screen and (min-width: 540px) {
        width: 285px;
        height: 310px;

        .middle {
            margin-top: -4.2rem;
        }
    }

    @media screen and (min-width: 768px) {
        width: 360px;
        height: 400px;

        .first {
            margin-top: -2.3rem;
        }

        .middle {
            margin-top: -4rem;
        }

        .last {
            margin-bottom: -2.3rem;
        }
    }

    @media screen and (min-width: 1400px) {
        width: 365px;
        height: 410px;

        .first {
            margin-top: -2.5rem;
        }

        .middle {
            margin-top: -3.3rem;
        }

        .last {
            margin-bottom: -2.7rem;
        }
    } 
`