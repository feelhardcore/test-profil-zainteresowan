import { useNavigate } from "react-router"
import ButtonRoundGreen from "../../components/common/buttons/button_round_green/ButtonRoundGreen.tsx"
import RedRoundButton from "../../components/common/buttons/RedRoundButton"
import { buttonProps } from "../../common/scripts/buttonProps.ts"
import { navigateToTest } from "../../common/scripts/navigate.js"
import CategoryDescription from "../../components/category_desc/CategoryDescription.tsx"
import { lorem } from "../../common/data/test_content.js"
import HeadingBig from "../../components/common/HeadingBig.jsx"
import HeadingMedium from "../../components/common/HeadingMedium.jsx"
import HeadingSmall from "../../components/common/HeadingSmall.jsx"
import Arrow, { direction } from "../../components/common/Arrow.jsx"
import Container from "../../components/common/containers/Container.tsx"
import ExpandableContainer from "../../components/common/containers/ExpandableContainer.tsx"


function StartingPage(_props) {
    const nav = useNavigate()
    const dummyToggleRed = buttonProps("Dummy toggle red button", () => console.log("dummy func"),true)


    const onClickFn = (e) => {
        console.error("o prosze dziala jednak")
    }

    return (
        <div className="content">
            <Container 

                events={{
                    onClick : onClickFn
                }}

                height={{
                    value : "300px"
                }}
                width={{
                    value : "fit-content"
                }}
                position= {{
                    type : "absolute",
                    coords : {
                        bottom: 0,
                        top : 0,
                        right: 0,
                        left : 0
                    }
                }}
                textAlign="left"

                margin={{
                    margin : "10px"
                }}
                padding={{
                    padding : true,
                    padding_all : {
                        padding_bottom : "10",
                        padding_top : "10",
                        padding_left : "20",
                        padding_right : "50"
                    }
                }}
                background= {0xfdffff}
                color = {0x000000}
                display= "inline_block"
                float= "right"
                font = {{
                    size : "big",
                    color : "green",
                    weight : 800
                }}
                htmlProps={{
                    id : "kekw",
                    class : ["nowa-klasa", "lol"]
                }}
                border={{
                    width : 5,
                    style : "dashed",
                    radius : 5,
                    color : 0x343434
                }}     
                >
                    ale heca nie ma mnie
            </Container>
            <Arrow facing = {direction.left} lockFacing = {true}/>
            <Arrow facing = {direction.right} lockFacing = {true}/>
            <Arrow facing = {direction.left}/>
            <Arrow facing = {direction.right}/>
            <HeadingBig>Nagłowek duży</HeadingBig>
            <HeadingMedium>Nagłowek średni</HeadingMedium>
            <HeadingSmall>Nagłowek mały</HeadingSmall>
            <ButtonRoundGreen 
                events={{
                    onClick: onClickFn
                }}
                toggleable = {false}
                initialToggleState = {false}

            >
                Tekst dla przycisku
            </ButtonRoundGreen>
            
            <RedRoundButton {...dummyToggleRed}/>
            <button onClick={() => navigateToTest(nav)}>Hi</button>
            <Container
                textAlign = "right"
                padding= "10px"
                maxWidth = {{
                    value :100 
                }}
                width={{
                    value : 100
                }}
            >
                tekst w kontenerze</Container>
            <Container>tekst w kontenerze 2</Container>
            <ExpandableContainer
                width ={{
                    value : "fit-content"
                }}
                before = "to jest tekst wczesniej"
                after = "to jest tekst potem"
                margin= "20px auto"
                padding = "20px"
                maxHeight="500px"
                expandDirection= "topdown"
                expandableContainerProps={{
                    margin: "20px 0",
                    maxHeight : "500px"
                }}
            >
                {lorem}
            </ExpandableContainer>
            <CategoryDescription
            category_name="twoj stary"
            category_content_before = "cos przedtem"
            category_content_after = "cos potem"
            category_content_expandable = {lorem}
            >

            </CategoryDescription>
        </div>
    )
}

export default StartingPage