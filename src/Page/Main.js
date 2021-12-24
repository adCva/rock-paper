import React from 'react';
import styled from 'styled-components';
import Nav from "../Components/Nav/Nav";
import GameStart from '../Components/Game/GameStart';
import GameResault from '../Components/Game/GameResault';
import Rules from '../Components/Game/Rules/Rules';



function Main() {
    return (
        <MainPage> 
            <header>
                <Nav />
            </header>
            <main>
                <GameStart />
                <GameResault />
            </main>
            <footer>
                <Rules />
            </footer>
        </MainPage>
    )
}

export default Main;




const MainPage = styled.div`
    width: 100vw;
    height: 100vh;
    background: var(--bg-from);
    background: -webkit-radial-gradient(top, var(--bg-from), var(--bg-to));
    overflow-x: hidden;
    position: relative;
`