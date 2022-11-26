//import {BiSearchAlt2} from 'react-icons/bi'
import {FaBookOpen} from 'react-icons/fa'
import './header.css'
const Header = () => {
return (
<div>
    <nav className="navbar">
        <div className="heading">
            <span className="span">Keep</span> Notes
        </div>
        <div className="iconscontainer">
        <img src="https://img.icons8.com/ios/24/000000/user-male-circle.png" className="image icon" alt="avatar" />
          <FaBookOpen className='icon'/>
        </div>
    </nav>

</div>
)
}

export default Header
