import React from "react";
import Container from "./containers/Container.tsx";
import { Callback, MenuListProps, MenuOption } from "./types.ts";
import HeadingSmall from './../ts/HeadingSmall.tsx'

export default function MenuList(props : MenuListProps)
{
    const name = props.name
    const options : MenuOption[] = props.options

    return(
        <Container htmlProps={{class: ["menulist"]}} display="inline_block" padding={"10px"}>
            <HeadingSmall>{name}</HeadingSmall>
            <ul>
                {options.map (option => {
                    if(typeof option.action === 'string'){
                        return(
                            <li>
                                <a href = {option.action}>{option.value}</a>
                            </li>
                            
                        )
                    }
                    else {
                        return(
                
                            <li>
                                <div onClick = {e => option.callback?.(e)}>{option.value}</div>
                            </li>
                        )
                    }
                })
            }
            </ul>
        </Container>
    )
}