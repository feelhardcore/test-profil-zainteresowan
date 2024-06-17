import { Colors, TextAligments, FontProps, Children } from "../../../types/types"

export type HeadingSizes = "small" | "medium" | "big"

export interface HeadingProps extends Children{
    size : HeadingSizes
    background? : Colors
    alignment? : TextAligments
    font? : FontProps
}
export type SizelessHeadingProps = Omit<HeadingProps,"size">