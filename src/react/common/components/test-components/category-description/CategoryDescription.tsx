
import React from "react";
import Container from "../../containers/Container.tsx";
import ExpandableContainer from "../../containers/ExpandableContainer.tsx";
import HeadingBig from '../../heading/HeadingBig.tsx';
import { CategoryDescriptionProps } from '../../types/categoryDescriptionTypes.ts';

export default function CategoryDescription(props : CategoryDescriptionProps){


    return(
        <Container 
            htmlProps={{
                class : ["category-desc"]
            }}
            {...props}     
            >
            {props.category_content_before && 
            
            <Container>
                {props.category_content_before}
            </Container>
            
            }
            
            {/**props.category_content_expandable && 
            <ExpandableContainer
                expandDirection= "topdown"
                expandBehavior=""
                maxHeight="500px"

            >
                {props.category_content_expandable}
            </ExpandableContainer>
            */}

            {props.category_content_after && 
            
            <Container>
                {props.category_content_after}
            </Container>
            
            }
        </Container>
    ) 
}