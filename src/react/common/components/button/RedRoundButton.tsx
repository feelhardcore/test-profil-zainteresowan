
import React from "react";
import Button from "./base/Button.tsx";
import { ButtonProps } from "../types/buttonTypes.ts";

export default function RedRoundButton(props : ButtonProps){
    
    return(<Button {...props} background={"red"} font={{color : "white"}}/>)
}