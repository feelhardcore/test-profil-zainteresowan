import { ReactNode } from "react"
import { ContainerProps } from "../../../types/types.ts"

export interface CategoryDescriptionProps extends ContainerProps{
    category_name : string
    category_content_before? : ReactNode | string
    category_content_expandable? : ReactNode | string
    category_content_after? : ReactNode | string

}