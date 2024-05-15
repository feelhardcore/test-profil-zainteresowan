import { useNavigate } from "react-router"
import ButtonRoundGreen from "../../components/common/buttons/button_round_green/ButtonRoundGreen.tsx"
import RedRoundButton from "../../components/common/buttons/RedRoundButton"
import { buttonProps } from "../../common/scripts/buttonProps.ts"
import { navigateToInstructions, navigateToTest } from "../../common/scripts/navigate.js"
import CategoryDescription from "../../components/category_desc/CategoryDescription.tsx"
import { lorem } from "../../common/data/test_content.js"
import HeadingBig from "../../components/common/HeadingBig.jsx"
import HeadingMedium from "../../components/common/HeadingMedium.jsx"
import HeadingSmall from "../../components/common/HeadingSmall.jsx"
import Arrow, { direction } from "../../components/common/Arrow.jsx"
import Container from "../../components/common/containers/Container.tsx"
import ExpandableContainer from "../../components/common/containers/ExpandableContainer.tsx"
import QuestionPanel from "../../components/QuestionsPanel/QuestionsPanel.tsx"


function StartingPage(_props) {
    const nav = useNavigate()
    const dummyToggleRed = buttonProps("Dummy toggle red button", () => console.log("dummy func"),true)


    const onClickFn = (e) => {
        console.error("o prosze dziala jednak")
    }

    const sum = (one,two) => {
        return one+two
    }

    return (
        <div className="content">
            <QuestionPanel
                question_set={0}
                question_set_next = {false}
                next_direction="right"
                events={{
                    onClick : _ => {},
                    onSlideOut : void(0)
                }}
                current_answers={[1,1,1,1,1,1,1,1,1,1]}
                callbacks={{
                    sum : sum
                }}
            >

            </QuestionPanel>
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