import { Colors } from "chart.js"
import { CSSProperties, DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES, ReactNode, SyntheticEvent, TransitionEvent } from "react"
export type Children = {
    children? : ReactNode | string
}
export type TextAligments = "center" | "left" | "right" | "justify"
export type Positions = "static" | "relative" | "sticky" | "absolute" | "fixed" 
export type Float = "left" | "right"
export type FontSizes = "small" |"standard" | "larger" | "big" | "heading-big" | "heading-small" | "heading-medium" | "heading-big" | number
export type Units = "px" | "pt" | "%" | "rem" | "vh" | "cm" | "mm" | "in" | "pc"
export type FontStyles = "italic" | "oblique"
export type DisplayTypes = "block" | "inline_block" | "table" | "inline" | "flex"
export type FontWeights = "normal" | "bold" | "bolder" | number
export type Fonts = "text"| "text_bold"| "header" | "header_bold"
export type Colors = "red" | "blue" | "light_gray" | "light_blue" | "light_green" | "green" | "light_yellow" | "yellow" | "white" | "inherit"| number
export type BorderStyles = "solid" | "dotted" | "dashed"
export type Paragraph = {
    text : string | string[]
    style? : TextOptions
    span? : Span[][] | Span[]
    htmlProps? : HTMLProperties
}
export type Span = {
    text: string
    style? : FontProps
    htmlProps? : HTMLProperties

}

export interface HTMLProperties{
    id? : string,
    class? : string[],
    inlineCSS? : React.CSSProperties
}

/**
 *  Additional callbacks
 * 
 *  Allows usage of callbacks in child elements
 * 
 *  You can pass any number of callbacks
 * 
 *  Accepts any number of parameters
 * 
 *  Property name will be name of function to use in child element
 * 
 *  @example
 *   ```js
 *  <Element callbacks = {{
 *      callback_name : declared_function_name,
 *      another_callback_name : another_function
 *  }}/>
 * 
 *  // In Element 
 * 
 *  // Calling function
 *  props.callbacks?.callback_name?.()
 * 
 * // Calling function with parameters
 * 
 *  props.calllbacks?.callback_name?.(parameter1,parameterN)
 * ```
 * 
 *  
 */
export type Callbacks = {
    [key : string] : Callback<any>
}
export interface ContainerProps{
    textAlign? : TextAligments,
    border?: BorderProps | string,
    margin? : MarginProps | string,
    padding? : PaddingProps | string,
    position? : Position,
    display? : DisplayTypes
    float? : Float,
    font? : FontProps
    htmlProps? : HTMLProperties
    background? : Colors
    positionCoords? : PositionCoords
    height? : DimenisionProps | string
    width? : DimenisionProps | string
    maxWidth? : DimenisionProps | string
    maxHeight? : DimenisionProps | string
    react? : ReactProps
    events? : Events
    style? : CSSProperties

}
export type ClickHandler = EventCallback
export type TransitionEndHandler = (e : TransitionEvent) => void
export interface Events{
    onClick? : ClickHandler
    onTransitionEnd? : TransitionEndHandler
}
export interface ReactProps{
    ref? : React.RefObject<any>
    key? : any
}
export interface Position{
    type? : Positions,
    coords? : PositionCoords | string
}
export interface BorderProps{
    color? : Colors,
    radius? : number,
    width? : number,
    style? : BorderStyles

}
export interface DimenisionProps{
    value : number | string
    unit : Units 
}
export interface MarginProps{
    margin? : string | number | boolean,
    margin_unit? : Units,
    margin_all? : {
        margin_top? : string | number,
        margin_top_unit? : Units
        margin_right? : string | number,
        margin_right_unit? : Units
        margin_bottom? : string | number,
        margin_bottom_unit? : Units
        margin_left? : string | number,
        margin_left_unit? : Units
    }

}
export interface PaddingProps{
    padding?: string | number | boolean,
    padding_unit?: string,
    padding_all?: {
        padding_top?: string | number,
        padding_top_unit?: string
        padding_right?: string | number,
        padding_right_unit?: string
        padding_bottom?: string | number,
        padding_bottom_unit?: string
        padding_left?: string | number,
        padding_left_unit?: string
    }

}

export interface FontProps{
    size? : FontSizes
    size_unit? : Units
    style? : FontStyles
    weight? : FontWeights
    family? : Fonts
    color? : Colors
}
export interface PositionCoords{
    top : number,
    bottom : number,
    left : number,
    right : number
}

export interface TextParagraphProps{
    textAlign? : TextAligments,
    border?: BorderProps,
    margin? : MarginProps,
    padding? : PaddingProps,
    position? : Positions,
    display? : DisplayTypes
    float? : Float,
    font? : FontProps
    htmlProps? : HTMLProperties
    background? : Colors
    positionCoords? : PositionCoords
    height? : DimenisionProps
    width? : DimenisionProps
}

export interface SpannableTextProps{

}

export interface TextBlock{
    paragraphs? : Paragraph[]
}

export interface TextOptions{
    font? : FontProps
}


// Expandble container

export type ExpandDirection = "topdown" | "bottomup" | "leftright" | "rightleft"
export type ExpandBehavior = ""
export interface ExpandbleContainerProps extends ContainerProps{
    expandDirection : ExpandDirection
    expandBehavior : ExpandBehavior
    maxHeight : DimenisionProps | string
} 

// ExpandBar 

export type FacingDirection = 0 | 1 | 2 | 3
export interface ExpandBarProps{
    events? : Events
    arrowProps? : ArrowProps
}

//Arrow 

export interface ArrowProps{
    events? : Events
    color? : Colors
    facingDirection? : FacingDirection
    lockFacing? : boolean
    dimensions? : number
}

// Circle

export interface CircleProps{
    backgroundColor? : Colors
    dimensions? : number
    width? : number
    events? : Events
    outlineColor? : Colors

}

// Button

export interface ButtonProps{
    events : Events,
    toggleable? : boolean,
    initialToggleState? : boolean
    font? : FontProps,
    background? : Colors
    padding? : PaddingProps | string
    margin? : MarginProps | string
    disabled? : boolean
    shouldHandleDisabled? : boolean
    children? : ReactNode | string
}

//Category desciprion

export interface CategoryDescriptionProps extends ContainerProps{
    category_name : string
    category_content_before? : ReactNode | string
    category_content_expandable? : ReactNode | string
    category_content_after? : ReactNode | string

}

//Headings

export type HeadingSizes = "small" | "medium" | "big"

export interface HeadingProps extends Children{
    size : HeadingSizes
    background? : Colors
    alignment? : TextAligments
    font? : FontProps
}
export type SizelessHeadingProps = Omit<HeadingProps,"size">


// Menu list

export interface MenuListProps{
    name : string
    options : MenuOption[]
}

export type EventCallback = (e : SyntheticEvent) => void
export type Callback<T> = (...params :any[]) => T 
export type VoidCallback = Callback<void>
export interface MenuOption{
    value: string
    action: string | null
    callback? : EventCallback
}

// Questiions

export type SlideInDirection = "left" | "right"

export interface QuestionPanelProps{
    question_set : number
    question_set_next : boolean
    next_direction? : SlideInDirection
    events : {
        onClick : VoidCallback
        onSlideOut : VoidCallback
    }
    current_answers : (number | null)[]
    callbacks? : Callbacks
    missing_answers? : boolean[]
    lock_slide : boolean
    
}
export interface QuestionProps{
    question_number : number,
    next_set : boolean,
    current_answer : number | null
    slideInDirection : SlideInDirection,
    events : {
        onClick : VoidCallback
        onSlideOut? : VoidCallback
    }
    missing_answer? : boolean
    lock_slide : boolean

}

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
export interface SlidingQuestionProps{
    question_number : number,
    slide_direction : SlideDirection
    current_answer : number | null
    events : {
        onClick : VoidCallback
        onFinishedSlidingOut? : VoidCallback
    }
    last_question? : boolean
    slide_out?: boolean
}
export type SlideDirection = "left" | "right"

export interface PagingOptions{
    /**
         * If true, test will progress question by question, essentially 
         * paging will be implemented with pages qith size 1
         */
    one_by_one? : boolean
    /**
     * If true, test will display as one page, 
     */
    all_in_one? : boolean
    /**
     * If set, test pages will te equal in size.
     * 
     * 
     * If test cannot be divided equally, last page will have remaining questions
     * 
     *         
     * */
    static_per_page? : number
    /**
     * If set pages will have defined number of question on any page
     * 
     * Sum of array elements should be equal or greater than question count
     * 
     * If it is less, remaining questions will be split into pages of size of last element in array
     * 
     */
    custom_per_page? : number[]
}

export interface TestProps{
    name : string,
    data : TestData,
    /**
     * How much questions should be displayed per page
     * 
     * Defaults to 10 per page, page numbers will be generated automatically
     * 
     * Only set one of the options, if multiple options are set, hierarcy is as follows,
     * from least important to most important
     * 
     * one_by_one
     * 
     * all_in_one
     * 
     * static_per_page
     * 
     * custom_per_page
     * 
     *  Defining less important property will be overridden
     */
    paging?: PagingOptions
    /**
     * Defines page transitioning
     */
    page_transition? : TransitionOptions
    /**
     * Test options
     */
    test_options? : {
        /**
         * Allows backing to previous pages, defaults to true
         */
        allow_backing? : boolean
        /**
         * If set, page numbers will appear at bottom of the test defaults to true
         */
        include_nav_bar? : boolean
        /**
         * If set, arrows will appear to scroll to next or previous pages. defaults to true
         */
        include_nav_arrows? : boolean
        /**
         * If set, button will appear to clear all test answers, defaults to false
         */
        include_clear_all? : boolean
        
    }
    /**
     * Events, that has cannot be handled by test itself, has to handled by specific test implemetation
     */
    events: {
        /**
         * Will trigger if test has been completed ad submitted
         */
        submitEventHandler : VoidCallback
    }
}

export interface TestData{
    test_name : string,
    /**
     * Defines test mode, all single choice, all multi choice, or based on test data
     * 
     * If single choice or multi choice is set, all questions will ignore their own properties
     * 
     * If defined by test is chosen, each question will use its data to determine how question should work
     * 
     *
     */
    test_mode : TestModes,
    /**
     * Only checked if test type is set to defined_by_test, else it is ignored
     * 
     * 
     */
    question_type_default? : QuestionTypes
    data : {
        /**
         * question property - if test has only one question to all questions
         */
        question? : string
        questions : Question[]
    }
}
/**
     * Define question options as option1, option2, ..., optionN
     * 
     * If question has no options, it implies user input question
     * */
export interface Question{
    options : {
        [key : string] : string
    }
    /**
     * question_name_property - if test has different questions. 
     * 
     * Ignored if parent question property is set
     */
    question_name? : string;
    /**
     * Has no effect on signle or multi type test mode, only works if defined by test is set
     * 
     * If not set, it will use default type set in parent, if also not set defaults to single choice
     */
    question_type? : QuestionTypes
    /**
     * if test has correct options, option1 is 0, option2 is 1, etc
     */
    correct_options? : number[] | string | string[]
    /**
     * Optional questions, defaults to false
     * 
     * Optional questions do not force filling them out
     */
    optional? : boolean
    /**
     * Include error box in question, defaults to false
     */
    include_error_box? : boolean
    /**
     * If question has default answer, it will be set automatically
     */
    default? : number | string
    /**
     * If question is user intput, what should be its input type
     */
    user_input_type? : UserInputTypes

    
}

/**
 * Use if 
 */
export interface CustomQuestion{

}

export type QuestionTypes = "singleChoice" | "multiChoice" | "userInput" | "mulitpleUserImput"

export type TestModes = "yes/no_questions" | "single_question" | "defined_by_test"
export type UserInputTypes = "text" | "password" | "number" | "date"


export type TransitionOptions = {
    /**
     * Transtion type
     */
    type: TransitionType
    /**
     * Transition speed, in ms, actual speed is doubled, because this speed is applied to both enter and exit
     */
    speed: number
    /**
     * If defined, each question is delayed in transition, resulting in one by one exit and entering
     */
    delay_each? : number
}


export interface TransitionProps extends Children{
    type: TransitionType,
    base_speed : number,
    delay? : number
    direction_in? : SlideDirection
    direction_out? : SlideDirection
    events?: {
        onTransitionedOut? : TransitionEndHandler
    }
    triggerOut? : boolean
    next_page_direction? : NextPageDirection
    update_static? : boolean
    

}
export type TransitionType = "slide-in-out" |  "show-and-hide" | "both"

export type NextPageDirection = "forwards" | "backwards"
export interface TransitionGroupProps{
    type: TransitionType,
    base_speed : number,
    delay? : number
    direction_in? : SlideDirection
    direction_out? : SlideDirection
    events?: {
        onTransitionedOut? : VoidCallback
    }
    items : ReactNode[]
    next_page_direction? : NextPageDirection
    outerContainerProps? : ContainerProps
    update_errors? : boolean
}


export interface SingleChoiceQuestionProps{
    questionNumber : number,
    questionCount : number
    default? : number
    options: {
        [key : string] : string
    }
    current_answer? : number
    error? : Error
    events : {
        onAnswerSelect : {
            handler : VoidCallback
        }
    }

}
export interface Error{
    isError?: boolean
    errors : string[]
}


export interface InterestsTestResultsPageProps{
    results : number[]
}