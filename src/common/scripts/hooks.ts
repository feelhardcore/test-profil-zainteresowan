import { useState } from "react";

function useObjState<T>(initialValue : T){
    const [state,setState] = useState<T>(initialValue)

    return{
        this : state,
        set: (e :T) => setState(e)
    }
}