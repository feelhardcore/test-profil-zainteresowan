import React from "react";
import { test_content } from "../common/data/test_content";
import { test_content_updated } from "../common/data/new_data.js";
import Test from "../react/common/components/test-components/Test.tsx";
import { navigateToResults } from "../common/scripts/navigate.js";
import ButtonRoundGreen from "../react/common/components/button/ButtonRoundGreen.tsx";
export default function InterestsProfileTest(props){


    const submitEventHandler = (answers) => {
        navigateToResults({answers})
    }

    const override = () => {
        let answers = Array(100).fill(0).map((_ => { return Math.round(Math.random())}))
        console.warn(answers)
        navigateToResults({answers})
    }

    const calculateResults = (array) => {
        let columnResult = [0,0,0,0,0,0,0,0,0,0]
        let rowResult = [0,0,0,0,0,0,0,0,0,0]
        let totalResult = [0,0,0,0,0,0,0,0,0,0]
        for (let i = 0; i<10;i++){
            for (let j = 0;j<10;j++){
                if (array[i][j] == 0) columnResult[j]++
                else rowResult[i]++ 
            }

        }
        totalResult = totalResult.map((_e,i) => {return columnResult[i]+rowResult[i]})
        return [[...rowResult],[...columnResult],[...totalResult]];
    }

    return(
        <>
         <Test 

name = "Test na profil zainteresowań"
events={{
    submitEventHandler : submitEventHandler
}}
data = {{
    test_mode : "single_question",
    test_name : "Test",
    question_type_default : "singleChoice",
    data:{
        question : "Wybierz jeden z zawodów, który jest dla Ciebie bardziej interesujący",
        questions: test_content_updated,
    }
}}
paging={{
    static_per_page : 10,
}}
page_transition={{
    type : "both",
    speed : 500,
    delay_each : 50
}}

/>
<ButtonRoundGreen events={{onClick : override}}>Override</ButtonRoundGreen>
        </>
       
    )

}