import { useNavigate } from "react-router"
import { navigateToHome } from "../../common/scripts/navigate"

export default function Page404(props)
{
    const nav = useNavigate()
    return (
        <div>
            <button onClick={() => {navigateToHome(nav)}}>Back to start</button>
        </div>
    )
}