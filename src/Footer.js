import './footer.css'
const Footer = () => {
return (
<div>
    <footer>
        <nav className="footer">
            <div className="heading heading2">
                <span className="span span2">Manasa</span> Devi
            </div>
            <div className="iconscontainer">
                <a href="https://github.com/manasa-lovely"><img src="https://img.icons8.com/fluent/48/000000/github.png" className="image" alt="avatar" /> </a>
               <a href="https://www.linkedin.com/in/manasa-devi-penugonda-b734b9236/"> <img src="https://img.icons8.com/material-two-tone/48/000000/linkedin--v1.png" className="image" alt="avatar" /> </a>
                <img src="https://img.icons8.com/material-two-tone/48/000000/twitter.png" className='image' alt="avatar" />
            </div>
        </nav>
    </footer>

</div>
)
}

export default Footer;