import { brandData } from "./brandData.jsx";
import { Link } from "react-router-dom";
//css
import "../styles/brandSection.css";


function BrandSection(){
    return(
        <div className="page-grid">
            {brandData.map((grid) => (
                <div className="grid">
                    <p className="brand-name">{grid.section}</p>
                    <img className="main-page-img" src={grid.mainImg} alt="" />
                    <div className="caption">
                        <h1>BEST SELLERS</h1>
                    </div>

                    <div className="quick-buy">
                        {grid.product.slice(0, 5).map((product) => (
                            <a className="shoe-link" href=""><img className="quick-buy-shoes-img" src={product.img} alt="" /> <button className="shop-now-btn">Shop Now</button></a>
                        ))}
                        <div className="see-more-container">
                            <Link to={grid.sectionUrl} className="see-more" >MORE</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );  
}
export default BrandSection;