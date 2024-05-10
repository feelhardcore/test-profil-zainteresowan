import { useEffect, useRef, useState } from "react";
import HeadingSmall from "../common/HeadingSmall";
import { lorem } from "../../common/data/test_content";
import './index.css'
import ButtonRoundGreen from "../common/buttons/button_round_green/ButtonRoundGreen";
import Arrow, { direction } from "../common/Arrow";
import ExpandBar from "../common/ExpandBar";
import React from "react";
import { CategoryDescriptionProps } from "../common/types.ts";
import Container from "../common/containers/Container.tsx";
import ExpandableContainer from "../common/containers/ExpandableContainer.tsx";
import Heading from "../ts/Heading.tsx";

export default function CategoryDescription(props : CategoryDescriptionProps){


    return(
        <Container 
            htmlProps={{
                class : ["category-desc"]
            }}
            {...props}     
            >
            <Heading
                size="big"
            
            >{props.category_name}</Heading>
            {props.category_content_before && 
            
            <Container margin="20px 0 ">
                {props.category_content_before}
            </Container>
            
            }
            {props.category_content_expandable && 
            <ExpandableContainer
                expandDirection= "topdown"
                expandBehavior=""
                maxHeight="500px"

            >
                {props.category_content_expandable}
            </ExpandableContainer>
            }

            {props.category_content_after && 
            
            <Container margin="20px 0">
                {props.category_content_after}
            </Container>
            
            }
        </Container>
    ) 
}