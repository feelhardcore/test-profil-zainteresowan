import { paths } from "../data/paths"
import { navigate as nav } from "../../App"

export function navigateToHome(navhook){
    navigate(paths.home)
}


export function navigateToTest(){
    navigate(paths.test_start)

}

export function navigateToInstructions(){
    navigate(paths.instructions)
}
export function navigateToResults(results){
    navigate(paths.results,results)
}

function navigate(destination, props){
    console.log(props)
    console.log("using sum hookers")
    if(props){
        console.log("PROS!!!!!")
        nav.hook(destination,{state : {data : props}})
    }
    else{
        nav.hook(destination)
    }
    
}

