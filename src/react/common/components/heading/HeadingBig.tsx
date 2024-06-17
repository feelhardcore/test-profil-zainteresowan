import React from "react";
import { SizelessHeadingProps } from "../types/headingTypes.ts";
import Heading from "./base/Heading.tsx";

export default function HeadingBig(props : SizelessHeadingProps){


    return (
        <Heading {...props} size= "big" />
    )

}