import React from "react";
import Test from "./Test.tsx";
import { test_content } from "../common/data/test_content";
import { test_content_updated } from "../common/data/new_data.js";

export default function InterestsProfileTest(props){


    return(
        <Test 
            name = "Test na profil zainteresowań"
            events={{
                submitEventHandler : () => void(0)
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
            
    )

}