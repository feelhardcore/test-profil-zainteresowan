import './Footer_styles.css'
export default function Footer(props){


    return (
        <footer>
            <div className="footer">
            © Akademia Łomżyńska {(new Date()).getFullYear()}
            </div>
        </footer>
    )
}