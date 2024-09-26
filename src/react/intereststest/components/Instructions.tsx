import React, { SyntheticEvent } from "react";
import Container from "../../common/components/containers/Container.tsx";
import ButtonRoundGreen from "../../common/components/button/ButtonRoundGreen.tsx";
import { navigateToTest } from "../../../common/scripts/navigate.js";
import HeadingMedium from "../../common/components/heading/HeadingMedium.tsx";
import RedRoundButton from "../../common/components/button/RedRoundButton.tsx";

export default function Instructions(_ : any){

    const navToTest = ( _ : SyntheticEvent)  => {
        navigateToTest()
    }

    return(
        <Container margin={"20px"} textAlign="center">
            <HeadingMedium>Instrukcje wykonania testu</HeadingMedium>
            <p>
                Test składa się ze 100 pytań, w każdym pojawią się 2 zawody. Twoim zadaniem jest zaznaczenie jednego z podanych zawodów, który bardziej Tobie odpowiada. Po zaznaczeniu wszystkich odpowiedzi wcisnij przycisk "Zakończ test", aby zobaczyć swój wynik
                <RedRoundButton
                    events={{
                        onClick: navToTest
                    }}
                
                >Rozpocznij test</RedRoundButton>
            </p>
        </Container>
    )
}