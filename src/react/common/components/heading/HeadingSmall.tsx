import React from "react";
import Heading from "./base/Heading.tsx";
import { SizelessHeadingProps } from "../types/headingTypes.ts";

export default function HeadingSmall(props : SizelessHeadingProps){


    return (
        <Heading {...props} size= "small" />
    )

}
