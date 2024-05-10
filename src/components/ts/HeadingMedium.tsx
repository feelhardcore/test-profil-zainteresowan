import React from "react";
import { SizelessHeadingProps } from "../common/types.ts";
import Heading from "./Heading.tsx";

export default function HeadingMedium(props : SizelessHeadingProps){


    return (
        <Heading {...props} size= "medium" />
    )

}