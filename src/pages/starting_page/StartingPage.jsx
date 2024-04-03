import { useNavigate } from "react-router"
import { navigateToTest } from "./StartingPage_scripts"


function StartingPage(props) {
    const nav = useNavigate()

    return (
        <div>
            This is a starting page, welcome lone travellers
            <button onClick={() => navigateToTest(nav)}>Hi</button>
        </div>
    )
}

export default StartingPage