import React from "react";
import { SizelessHeadingProps } from "../types/headingTypes.ts";
import Heading from "./base/Heading.tsx";

export default function HeadingMedium(props : SizelessHeadingProps){


    return (
        <Heading {...props} size= "medium" />
    )

}