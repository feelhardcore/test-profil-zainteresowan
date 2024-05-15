import BottomNav from '../common/BottomNav.tsx'
import Contact from '../common/Contact.tsx'
import './Footer_styles.css'
export default function Footer(props){


    return (
        <footer>
            
            <div className="footer">
            <BottomNav/>
            <div style = {{clear:"both"}}></div>
            <div style={{margin: "20px", font_size : "10pt"}}>© {(new Date()).getFullYear()} Biuro Karier Akademii Łomżyńskiej</div>
            </div>
        </footer>
    )
}