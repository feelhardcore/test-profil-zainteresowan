import React, { SyntheticEvent } from "react";
import Container from "../components/common/containers/Container.tsx";
import HeadingMedium from "../components/ts/HeadingMedium.tsx";
import ButtonRoundGreen from "../components/common/buttons/button_round_green/ButtonRoundGreen.tsx";
import { navigateToTest } from "../common/scripts/navigate";

export default function Instructions(_ : any){

    const navToTest = ( _ : SyntheticEvent)  => {
        navigateToTest()
    }

    return(
        <Container margin={"20px"} textAlign="center">
            <HeadingMedium>Instrukcje wykonania testu</HeadingMedium>
            <p>
                Test składa się ze 100 pytań, w każdym pojawią się 2 zawody. Twoim zadaniem jest zaznaczenie jednego z podanych zawodów, który bardziej Tobie odpowiada. Po zaznaczeniu wszystkich odpowiedzi wcisnij przycisk "Sprawdź", aby zobaczyć swój wynik
                <ButtonRoundGreen
                    events={{
                        onClick: navToTest
                    }}
                
                >Rozpocznij test</ButtonRoundGreen>
            </p>
        </Container>
    )
}