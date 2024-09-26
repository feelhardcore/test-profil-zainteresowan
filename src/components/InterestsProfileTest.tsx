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

    return(
        <>
         <Test 

name = "Test profil zainteresowań"
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
        </>
       
    )

}