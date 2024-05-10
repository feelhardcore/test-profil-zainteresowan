import React from "react";
import { SizelessHeadingProps } from "../common/types.ts";
import Heading from "./Heading.tsx";

export default function HeadingSmall(props : SizelessHeadingProps){


    return (
        <Heading {...props} size= "small" />
    )

}
