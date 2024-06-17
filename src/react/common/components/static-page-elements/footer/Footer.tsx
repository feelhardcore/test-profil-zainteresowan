import React from "react";
import BottomNav from "./components/BottomNav.tsx";

export default function Footer(_ : any){


    return (
        <footer>
            
            <div className="footer">
            <BottomNav/>
            <div style = {{clear:"both"}}></div>
            <div style={{margin: "20px", fontSize : "10pt"}}>© {(new Date()).getFullYear()} Biuro Karier Akademii Łomżyńskiej</div>
            </div>
        </footer>
    )
}