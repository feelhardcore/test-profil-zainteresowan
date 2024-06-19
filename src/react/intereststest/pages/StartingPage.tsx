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

export default function StartingPage(_ : any){

    const moveToTest = () => {
        navigateToInstructions()
    }

    const categories_explained = () => {
        return test_content_categories.map(value => {
            const category_content= categories_data[value]
            let category_name = category_content.full_name
            let before = category_content.description.map(value => {
                return<p>{value}</p>
            })
            before.push(<p>Rozwiń aby zobaczyć preferowane zawody</p>)
            let expandable =  <Container>
                <HeadingMedium>Sugerowane zawody: </HeadingMedium>
                <ul>
                    {category_content.suggested_trades.map(value => {
                        return <li>{value}</li>
                    })}
                </ul>
            </Container>
            return <CategoryDescription
            category_name={category_name}
            category_content_before= {before}
            category_content_expandable = {expandable}
            >
                

            </CategoryDescription>
        })
    }

    return <Container>
        <HeadingBig>
            Test na profil zainteresowań
        </HeadingBig>
        <Container>
            Tutaj coś o teście
        </Container>
        <Container>
            Tutaj coś o teście
        </Container>
        <ButtonRoundGreen events={{
            onClick : moveToTest
        }}>Wykonaj test na profil zainteresowań</ButtonRoundGreen>

        <Container>
            <HeadingBig> Grupy zainteresowań</HeadingBig>
            {categories_explained()}
        </Container>
    </Container>

}