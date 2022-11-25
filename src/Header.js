import {BiSearchAlt2} from 'react-icons/bi'
import {BsFillTrashFill} from 'react-icons/bs'

import './header.css'
const Header = () => {
return (
<div>
    <nav className="navbar">
        <div className="heading">
            <span className="span">Keep</span> Notes
        </div>
        <div className="search">
            <BiSearchAlt2 className='icon' />
            <input type="search" placeholder="search" className="searchelement txtbgcolor" />
        </div>
        <div className="iconscontainer">
        <BsFillTrashFill className='icons'size="25px"/>
        <img src="https://img.icons8.com/ios/24/000000/user-male-circle.png" className="image" alt="avatar" />

        </div>
    </nav>

</div>
)
}

export default Header
