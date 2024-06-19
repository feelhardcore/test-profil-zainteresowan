import { EventCallback, TransitionType, VoidCallback } from "../../../types/types"

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