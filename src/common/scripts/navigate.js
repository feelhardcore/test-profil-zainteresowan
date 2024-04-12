import { paths } from "../data/paths"
import { navigate as nav } from "../../App"

export function navigateToHome(navhook){
    navigate(paths.home)
}


export function navigateToTest(navhook){
    navigate(paths.test_start)

}

export function navigateToResults(results){
    navigate(paths.results,results)
}

function navigate(destination, props = null){
    
    console.log("using sum hookers")
    if(props){
        nav.hook(destination,props)
    }
    else{
        nav.hook(destination)
    }
    
}

