import React from "react";
import Container from "../../common/components/containers/Container.tsx";
import HeadingBig from "../../common/components/heading/HeadingBig.tsx";
import ButtonRoundGreen from "../../common/components/button/ButtonRoundGreen.tsx";
import { navigate } from "../../../App";
import { navigateToInstructions } from "../../../common/scripts/navigate";
import { categories_data } from "../../../common/data/categories_data";
import { test_content_categories } from "../../../common/data/test_content";
import HeadingMedium from "../../common/components/heading/HeadingMedium.tsx";
import CategoryDescription from "../../common/components/test-components/category-description/CategoryDescription.tsx";
import RedRoundButton from "../../common/components/button/RedRoundButton.tsx";

export default function StartingPage(_ : any){

    const moveToTest = () => {
        navigateToInstructions()
    }

    const categories_explained = () => {
        return test_content_categories.map(value => {
            const category_content= categories_data[value]
            let category_name = category_content.full_name
            let before = category_content.description.map(val => {
                return<p><span style= {{fontWeight : "bold"}}>{value}</span> - {val}</p>
            })
           
            let expandable =  <Container>
                <HeadingMedium>Sugerowane zawody: </HeadingMedium>
                <ul>
                    {category_content.suggested_trades.map(value => {
                        return <li>{value}</li>
                    })}
                </ul>
            </Container>
            return <CategoryDescription
            category_name={""}
            category_content_before= {before}
            category_content_expandable = {expandable}
            >
                

            </CategoryDescription>
        })
    }

    return <Container>
        <HeadingBig>
            Test profil zainteresowań
        </HeadingBig>
        <RedRoundButton events={{
            onClick : moveToTest}}
            >
                Wykonaj test profil zainteresowań
            </RedRoundButton>

        <Container font={{size : 14, size_unit : "pt"}}>
            <HeadingBig> Interpretacja testu</HeadingBig>
            <Container>Litery znajdujące się w teście oznaczają grupy zawodów:</Container>
            {categories_explained()}
        </Container>
        <i>Źródło: Zeszyty informacyjno-metodyczne doradcy zawodowego nr 11: Metody grupowego poradnictwa zawodowego. Kurs inspiracji KUP, Warszawa 1998</i>
    </Container>

}