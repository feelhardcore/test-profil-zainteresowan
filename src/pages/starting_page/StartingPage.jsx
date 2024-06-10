import { useNavigate } from "react-router"
import ButtonRoundGreen from "../../components/common/buttons/button_round_green/ButtonRoundGreen.tsx"
import RedRoundButton from "../../components/common/buttons/RedRoundButton"
import { buttonProps } from "../../common/scripts/buttonProps.ts"
import { navigateToInstructions, navigateToTest } from "../../common/scripts/navigate.js"
import CategoryDescription from "../../components/category_desc/CategoryDescription.tsx"
import { lorem, test_content_categories } from "../../common/data/test_content.js"
import HeadingBig from "../../components/common/HeadingBig.jsx"
import HeadingMedium from "../../components/common/HeadingMedium.jsx"
import HeadingSmall from "../../components/common/HeadingSmall.jsx"
import Arrow, { direction } from "../../components/common/Arrow.jsx"
import Container from "../../components/common/containers/Container.tsx"
import ExpandableContainer from "../../components/common/containers/ExpandableContainer.tsx"
import QuestionPanel from "../../components/QuestionsPanel/QuestionsPanel.tsx"
import SlidingQuestion from "../../components/SlidingQuestion.tsx"
import InterestsProfileTest from "../../components/InterestsProfileTest.tsx"
import Transition from "../../components/Transition.tsx"
import { useRef, useState } from "react"
import TransitionGroup from "../../components/TransitionGroup.tsx"
import Question from "../../components/QuestionsPanel/Question.tsx"
import { categories_data } from "../../common/data/categories_data.js"


function StartingPage(_props) {
    const nav = useNavigate()
    const dummyToggleRed = buttonProps("Dummy toggle red button", () => console.log("dummy func"),true)


    const [someArr, setSomeArr] = useState(["one", "two"])


    const onClickFn = (e) => {
        console.error("o prosze dziala jednak")
    }

    const sum = (one,two) => {
        return one+two
    }
    const changearr = () => {
        setArr(["3", "4", "5"])
    }

    


    const pageQuestions = (bool) => {
        if(bool){
            return(["1","2","3"])
        }
        let questions = []
        for(let i = 0; i<10; i++) {
            questions.push("Tekst o treści "+ i)
        }
        return questions
    }

    const [arr,setArr] = useState(["1", "2"])

    const categories_explained = () => {
        return test_content_categories.map(value => {
            const category_content= categories_data[value]
            let category_name = category_content.full_name
            let before = category_content.description.map(value => {
                return<p>{value}</p>
            })
            before.push(<p>Rozwiń aby zobaczyć preferowane zawody</p>)
            let expandable =  <Container>
                <HeadingMedium>Sugerowane zawody: </HeadingMedium>
                <ul>
                    {category_content.suggested_trades.map(value => {
                        return <li>{value}</li>
                    })}
                </ul>
            </Container>
            return <CategoryDescription
            category_name={category_name}
            category_content_before= {before}
            category_content_expandable = {expandable}
            >
                

            </CategoryDescription>
        })
    }

    return (
        <div className="content">
            
            <ButtonRoundGreen events={{
                onClick : changearr
            }}>
                cos
            </ButtonRoundGreen>
            {categories_explained()}
            <InterestsProfileTest>
                
            </InterestsProfileTest>
            <SlidingQuestion
            question_number={0}
            slide_direction="left"
            current_answer={null}
            events={{
                onClick: void(0)
            }}
            last_question = {true}

            />
            <HeadingBig>Nagłowek duży</HeadingBig>
            <HeadingMedium>Nagłowek średni</HeadingMedium>
            <HeadingSmall>Nagłowek mały</HeadingSmall>
            <ButtonRoundGreen events={{
                onClick: navigateToInstructions
            }}>Przejdź do testu</ButtonRoundGreen>
            <button onClick={() => navigateToTest()}>Hi</button>
            <CategoryDescription
            category_name=""
            category_content_before = "cos przedtem"
            category_content_after = "cos potem"
            category_content_expandable = {lorem}
            >

            </CategoryDescription>


        </div>
    )
}

export default StartingPage