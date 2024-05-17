import React from "react";
import Container from "./containers/Container.tsx";
import { TestNavBarProps } from "./types.ts";
import Arrow from "./Arrow.tsx";
import ButtonRoundGreen from "./buttons/button_round_green/ButtonRoundGreen.tsx";

export default function TestNavBar(props : TestNavBarProps){

    return (
        <Container height={"100px"}
            htmlProps={{
                class: ["testnavbar"]
            }}>
            <Container 
                htmlProps={{
                    class : ["testnavbar-element"]
                }}
                margin={"auto"} 
                display = {"inline_block"} 
                maxWidth="30%"
                width={"fit-content"}>
                
                <Arrow  color={"blue"} facingDirection={2}/>
            </Container>
            <Container
                htmlProps={{
                    class : ["testnavbar-element"]
                }}
                margin={"auto"} 
                display = {"inline_block"} >
                <ButtonRoundGreen 
                    events={{
                        onClick : () => {}
                    }}>
                    Zakończ test
                </ButtonRoundGreen>
            </Container>
            <Container 
                htmlProps={{
                    class : ["testnavbar-element"]
                }}
                margin={"auto"} 
                display = {"inline_block"} 
                maxWidth="30%"
                width={"fit-content"}>
                <Arrow  color={"blue"} facingDirection={3}/>
            </Container>
        </Container>
    )
}