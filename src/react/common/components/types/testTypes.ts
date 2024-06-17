import { EventCallback } from "../../../types/types"

export interface TestNavBarProps{
    buttons_events: {
        left_button : EventCallback,
        right_button : EventCallback,
        submit_button : EventCallback
    }
    buttons_enabled: {
        left_button : boolean
        right_button : boolean
        submit_button : boolean
    }
    
}