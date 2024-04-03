import { paths } from "../data/paths"

export function navigateToHome(navhook){
    navigate(navhook,paths.home)
}


export function navigateToTest(navhook){
    navigate(navhook,paths.test_start)

}

function navigate(navhook,destination){
    navhook(destination)
}