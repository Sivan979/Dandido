import AccountIcon from '../assets/icons/account.png'
import ShoppingCartIcon from '../assets/icons/shopping-cart.png'
import HartIcon from '../assets/icons/heart-icon.png'
import SearchIcon from '../assets/icons/search-icon.png'


//css
import './mainHeader.css'



function mainHeader() {

    

    return (
        <div className="main-header">
            <div className="left-section">
                <a href="main.html">DanDido</a>
            </div>
            <div className="middle-section">
                <input type="text" placeholder="Search" />
                <button ><img src={SearchIcon} alt="Search" /></button>
            </div>
            <div className="right-section">
                <a href = ""><img src= {AccountIcon} alt="account" /></a>
                <a href="#"><img src={ShoppingCartIcon} alt="Shopping-cart"/></a>
                <a href="#"><img src={HartIcon} alt="Favorates" /></a>
            </div>
        </div>
    );
}

export default mainHeader;