import { useNavigate } from "react-router"
import ButtonRoundGreen from "../../components/common/buttons/button_round_green/ButtonRoundGreen"
import RedRoundButton from "../../components/common/buttons/RedRoundButton"
import { buttonProps } from "../../common/scripts/buttonProps.ts"
import { popup } from "../../App"
import { navigateToTest } from "../../common/scripts/navigate.js"
import CategoryDescription from "../../components/category_desc/CategoryDescription.jsx"
import { lorem } from "../../common/data/test_content.js"


function StartingPage(_props) {
    const nav = useNavigate()

    const testStartButtonProps = buttonProps("Wykonaj test",() => popup.show(2,"Coś z tekstem",3),true)
    const testStartButtonProps2 = buttonProps("Wykonaj test",() => popup.show(1,"Coś z tekstemdfgfg",3),true)
    const testStartButtonProps3 = buttonProps("Wykonaj test",() => popup.show(0,"Coś z tekstemdfsgggcfgds",3),true)
    const dummyToggleRed = buttonProps("Dummy toggle red button", () => console.log("dummy func"),true)

    return (
        <div className="content">
            <div className="content-title">
                Poznaj swój profil zainteresowań
            </div>
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
        </div>
    )
}

export default StartingPage