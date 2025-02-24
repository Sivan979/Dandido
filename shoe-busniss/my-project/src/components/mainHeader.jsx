import AccountIcon from '../assets/icons/account.png'
import ShoppingCartIcon from '../assets/icons/shopping-cart.png'
import HartIcon from '../assets/icons/heart-icon.png'
import SearchIcon from '../assets/icons/search-icon.png'
import { Link } from "react-router-dom";


//css
import '../styles/mainHeader.css'



function mainHeader() {

    return (
        <div className="main-header">
            <div className="left-section">
                <Link className='link' to={"/home"} onClick={() => {window.scrollTo(0, 0);}}>
                    <p className='mainheader-name'>DanDido</p>
                </Link>
            </div>
            <div className="middle-section">
                <input type="text" placeholder="Search" />
                <button ><img src={SearchIcon} alt="Search" /></button>
            </div>
            <div className="right-section">
                <Link className='link-icons' to={'/registration'}><img src= {AccountIcon} alt="account" /></Link>
                <Link className='link-icons'><img src={ShoppingCartIcon} alt="Shopping-cart"/></Link>
                <Link className='link-icons'><img src={HartIcon} alt="Favorates" /></Link>
            </div>
        </div>
    );
}

export default mainHeader;