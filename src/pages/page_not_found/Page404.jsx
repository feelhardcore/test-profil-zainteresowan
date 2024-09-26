import { useNavigate } from "react-router"
import { navigateToHome } from "../../common/scripts/navigate"
import Container from "../../react/common/components/containers/Container.tsx"
import { navigate } from "../../App"

export default function Page404(props)
{
    setTimeout(() => {
       navigateToHome()
    },2000)
    return (
        <div>
            <Container>
                Nie znaleziono strony. Za chwile zostaniesz przeniesiony na stronę głowną
            </Container>

            
            
        </div>
    )
}