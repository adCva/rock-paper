import { React, useState, useEffect, useRef } from 'react';
import { RulesContainer, RulesButton, PopUpContainer, PopUpWrapper, PopUpTitle, PopUpImg, ClosePopUp, ClosePopUpDesk } from "./RulesStyle";



function Rules() {
    const [popUp, setPopUp] = useState(false);
    const popUpContainer = useRef("popUpCont");


    // Close popUp on outside click or Esc keydown
    useEffect(() => {
        let closeOutside = (e) => {
            if (popUp === true) {
                if (!popUpContainer.current.contains(e.target)) {
                    setPopUp(false)
               }
            }
        }
        let closeKeyboard = (e) => {
            if (popUp === true && e.code === "Escape") {
                setPopUp(false)
            }
        }


        window.addEventListener("click", closeOutside);
        window.addEventListener("keydown", closeKeyboard);
        
        return () => {
            window.removeEventListener("click", closeOutside)
            window.removeEventListener("keydown", closeKeyboard);
        }
    })




    return (
        <RulesContainer>
            <RulesButton onClick={() => setPopUp(true)}>RULES</RulesButton>
            <PopUpContainer opened={popUp} ref={popUpContainer}>
                <PopUpWrapper>
                    <PopUpTitle>RULES</PopUpTitle>
                    <ClosePopUpDesk onClick={() => setPopUp(false)}>X</ClosePopUpDesk>
                </PopUpWrapper>
                <PopUpImg src="./images/image-rules-bonus.svg" alt="Rules Image"/>
                <ClosePopUp onClick={() => setPopUp(false)}>X</ClosePopUp>
            </PopUpContainer>
        </RulesContainer>
    )
}

export default Rules;