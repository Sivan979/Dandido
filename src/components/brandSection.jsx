import { brandData } from "./brandData.jsx";
import { Link } from "react-router-dom";
//css
import "../styles/brandSection.css";


function BrandSection(){
    return(
        <div className="page-grid">
            {brandData.map((grid) => (
                <div className="grid" key={grid.section}>
                    <p className="brand-name">{grid.section}</p>
                    <Link to={grid.mainImgUrl}>
                        <img className="main-page-img" src={grid.mainImg} alt="main IMG" />
                    </Link>
                    <div className="caption">
                        <h1>BEST SELLERS</h1>
                    </div>

                    <div className="quick-buy">
                        {grid.product.slice(0, 5).map((product) => (
                            <Link to={`${grid.sectionUrl}/${product.id}`} className="shoe-link" key={product.id}>
                                <img className="quick-buy-shoes-img" src={product.img} alt="" /> <button className="shop-now-btn">Shop Now</button>
                            </Link>
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