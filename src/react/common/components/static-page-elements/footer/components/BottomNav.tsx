import React from "react";
import Container from "../../../containers/Container.tsx";
import MenuList from "./MenuList.tsx";
import Contact from "./Contact.tsx";
import HeadingMedium from "../../../heading/HeadingMedium.tsx";

export default function BottomNav(_ : any){

    return(
        <Container
        font={{
            family : "text",
            color : "white"
        }} 

        padding="0 15px"
        background={"red"}
        border={{
            style: "solid",
            width : 1,
            radius : 20
        }}
        height="100%"
        >
            <Container htmlProps={{id : "bottom-nav"}} height="100%"
             float="left" width="70%">
                <HeadingMedium>Przydatne linki</HeadingMedium>
                <Container textAlign="left">
                    <MenuList
                        name = "Biuro karier"
                        options={[
                            {
                                value: "Oferty pracy",
                                action : "https://al.edu.pl/biuro-karier/strefa-pracy/oferty-pracy"
                            },
                            {
                                value: "Oferty staży",
                                action : "https://al.edu.pl/biuro-karier/strefa-pracy/oferty-stazy"
                            },
                            {
                                value: "Oferty praktyk",
                                action : "https://al.edu.pl/biuro-karier/strefa-pracy/oferty-praktyk"
                            },
                            {
                                value: "Portale z ofertami pracy",
                                action : "https://al.edu.pl/biuro-karier/strefa-pracy/przydatne-linki"
                            },
                            {
                                value : "Grupa na Facebooku",
                                action : "https://www.facebook.com/groups/1891296494313190/"
                            }

                        ]}    
                    />
                        <MenuList
                        name = "Inne serwisy"
                        options={[
                            {
                                value: "Kreator CV",
                                action : "https://tso.ansl.edu.pl/kreatorcv"
                            },
                            {
                                value: "Test samooceny",
                                action : "https://tso.al.edu.pl/testy"
                            },
                            

                        ]}    
                    />
                </Container>
            </Container>
            <Contact/>
            <div style={{clear: "both"}}></div>
        </Container>
    )
}