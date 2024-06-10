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
                    class : ["testnavbar-element" , props.buttons_enabled.left_button ? "" :  "arrow-disabled"]
                }}
                margin={"auto"} 
                display = {"inline_block"} 
                maxWidth="30%"
                width={"fit-content"}>
                
                <Arrow  color={"blue"} facingDirection={3} lockFacing = {true}
                    events={{
                        onClick : props.buttons_events.left_button
                    }}
                />
            </Container>
            <Container
                htmlProps={{
                    class : ["testnavbar-element"]
                }}
                margin={"auto"} 
                display = {"inline_block"} >
                <ButtonRoundGreen
                    disabled = {!props.buttons_enabled.submit_button} 
                    events={{
                        onClick : props.buttons_events.submit_button
                    }}>

                    Zakończ test
                </ButtonRoundGreen>
            </Container>
            <Container 
                htmlProps={{
                    class : ["testnavbar-element" , props.buttons_enabled.right_button ? "" :  "arrow-disabled"]
                }}
                margin={"auto"} 
                display = {"inline_block"} 
                maxWidth="30%"
                width={"fit-content"}>
                <Arrow  color={"blue"} facingDirection={1} lockFacing = {true} 
                    events={{
                        onClick : props.buttons_events.right_button
                    }}/>
            </Container>
        </Container>
    )
}