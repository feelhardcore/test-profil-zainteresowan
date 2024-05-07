import { useNavigate } from "react-router"
import ButtonRoundGreen from "../../components/common/buttons/button_round_green/ButtonRoundGreen"
import RedRoundButton from "../../components/common/buttons/RedRoundButton"
import { buttonProps } from "../../common/scripts/buttonProps.ts"
import { popup } from "../../App"
import { navigateToTest } from "../../common/scripts/navigate.js"
import CategoryDescription from "../../components/category_desc/CategoryDescription.jsx"
import { lorem } from "../../common/data/test_content.js"
import HeadingBig from "../../components/common/HeadingBig.jsx"
import HeadingMedium from "../../components/common/HeadingMedium.jsx"
import HeadingSmall from "../../components/common/HeadingSmall.jsx"
import Footer from "../../components/footer/Footer.js"
import Arrow, { direction } from "../../components/common/Arrow.jsx"
import Container from "../../components/common/containers/Container.tsx"


function StartingPage(_props) {
    const nav = useNavigate()

    const testStartButtonProps = buttonProps("Wykonaj test",() => popup.show(2,"Coś z tekstem",3),true)
    const testStartButtonProps2 = buttonProps("Wykonaj test",() => popup.show(1,"Coś z tekstemdfgfg",3),true)
    const testStartButtonProps3 = buttonProps("Wykonaj test",() => popup.show(0,"Coś z tekstemdfsgggcfgds",3),true)
    const dummyToggleRed = buttonProps("Dummy toggle red button", () => console.log("dummy func"),true)

    return (
        <div className="content">
            <Container 
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
            <ButtonRoundGreen {...testStartButtonProps}/>
            <ButtonRoundGreen {...testStartButtonProps2}/>
            <ButtonRoundGreen {...testStartButtonProps3}/>

            <ButtonRoundGreen {...testStartButtonProps2}/>
            <ButtonRoundGreen {...testStartButtonProps}/>
            
            <RedRoundButton {...dummyToggleRed}/>
            <button onClick={() => navigateToTest(nav)}>Hi</button>
            <CategoryDescription data = {{heading : null, content : [lorem,lorem]}}/>
            <CategoryDescription data = {{heading : null, content : [lorem,lorem]}}/>
            <CategoryDescription data = {{heading : null, content : [lorem,lorem]}}/>
            <Container
                textAlign = "right"
                padding= {{
                    padding : 10 
                }}
                maxWidth = {{
                    value :100 
                }}
                width={{
                    value : 100
                }}
            >
                tekst w kontenerze</Container>
            <Container>tekst w kontenerze 2</Container>
        </div>
    )
}

export default StartingPage