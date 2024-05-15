import React from "react";
import Container from "./containers/Container.tsx"
import HeadingMedium from "./../ts/HeadingMedium.tsx"
export default function Contact(_ : any){


    return(
        <Container 
        htmlProps={{id : "contact"}}
       float="right"
       width={"30%"}
        >
            <HeadingMedium>Kontakt</HeadingMedium>
            <p >Akademia Łomżyńska</p>
            <p><a href = "https://al.edu.pl/biuro-karier/">Biuro Karier</a></p>
            <p> 18-400 Łomża, ul. Akademicka 1</p>
            <p> Pokój A1.8</p>
            <p> mgr Anna Dobrowolska</p>
            <p> pn-pt 7:30-14:30</p>
            <p>tel: <a href = "tel:862155498">(86) 215 54 98</a></p>
            <p>email: <a href="mailto:biurokarier@al.edu.pl">biurokarier@al.edu.pl</a></p>

        </Container>
    )
}