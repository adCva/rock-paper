import styled from "styled-components";


export const GameResaultContainer = styled.div`
    display: ${({gameIsStarted}) => (gameIsStarted ? "grid" : "none")};
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "first third"
                        "second second";
    justify-content: center;
    align-items: center;
    margin: 6rem auto 0rem auto;
    text-align: center;



    .first {
        grid-area: first;

        p {
            margin-top: 2rem;
        }


        @media screen and (min-width: 320px) {
            p {
                font-size: 1.1rem;
            }
        }
        @media screen and (min-width: 768px) {
            p {
                margin-top: 3rem;
                font-size: 1.3rem;
            }
        }

        @media screen and (min-width: 769px) {
            display: flex;
            flex-direction: column-reverse;

            p {
                margin: 0 0 3rem 0;
            }
        }

        @media screen and (min-width: 1400px) {
            p {
                margin: 0 0 4.5rem 0;
            }
        }
    }


    .second {
        order: 1;
        margin-top: 4rem;
        grid-area: second;
        animation: resaultDisplay 250ms ease-in-out;
        animation-fill-mode: backwards;
        -webkit-animation: resaultDisplay 250ms ease-in-out;
        -webkit-animation-fill-mod: resaultDisplay 250ms ease-in-out;
        -moz-animation: resaultDisplay 250ms ease-in-out;
        -moz-animation-fill-mod: resaultDisplay 250ms ease-in-out;
        -ms-animation: resaultDisplay 250ms ease-in-out;
        -ms-animation-fill-mod: resaultDisplay 250ms ease-in-out;
        -o-animation: resaultDisplay 250ms ease-in-out;
        -o-animation-fill-mod: resaultDisplay 250ms ease-in-out;
        font-size: 1rem;
        text-transform: uppercase;
        z-index: 99;


        button {
            font-weight: var(--font-weight-bold);
            letter-spacing: 1.3px;
            margin-top: 0.6rem;
            background-color: #ffffff;
            color: var(--dark-text);
            border: none;
            border-radius: 5px;
            outline: none;
            padding: 0.65rem 3rem;
            cursor: pointer;
            transition: all 250ms ease-in-out;
            -webkit-transition: all 250ms ease-in-out;
            -moz-transition: all 250ms ease-in-out;
            -ms-transition: all 250ms ease-in-out;
            -o-transition: all 250ms ease-in-out;

            :hover {
                background-color: #eca922;
            }
            :focus {
                background-color: #eca922;
            }
        }



        @media screen and (min-width: 411px) {
            margin-top: 6rem;
        }
        @media screen and (min-width: 768px) {
            margin-top: 8rem;
            font-size: 1.1rem;

            button {
                padding: 0.7rem 3.5rem;
            }
        }
    }


    .third {
        grid-area: third;

        p {
            margin-top: 2rem;
        }


        @media screen and (min-width: 320px) {
            p {
                font-size: 1.1rem;
            }
        }

        @media screen and (min-width: 768px) {
            p {
                margin-top: 3rem;
                font-size: 1.3rem;
            }
        }

        @media screen and (min-width: 769px) {
            display: flex;
            flex-direction: column-reverse;

            p {
                margin: 0 0 3rem 0;
            }
        }

        @media screen and (min-width: 1400px) {
            p {
                margin: 0 0 4.5rem 0;
            }
        }
    }




    @media screen and (min-width: 1024px) {
        display: ${({gameIsStarted}) => (gameIsStarted ? "flex" : "none")};
        margin: 7rem auto 0rem auto;

        .second {
            margin: 0 10rem;
            order: 0;
        }
    }
    @media screen and (min-width: 1400px) {
        margin: 9rem auto 0rem auto;
        
        .second {
            margin: 0 15rem;
        }
    }
`