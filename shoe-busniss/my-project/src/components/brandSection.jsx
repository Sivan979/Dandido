//nike shoe images
import nikeMainIMG from "../assets/nikeShoes/nike-shoe.jpg";
import nimage1 from "../assets/nikeShoes/NIKE-DUNK-LOW.png";
import nimage2 from "../assets/nikeShoes/custom-nike-dunk-high-by-you-shoes.png";
import nimage3 from "../assets/nikeShoes/AIR-MAX-DN.png";
import nimage4 from "../assets/nikeShoes/NIKE+AIR+MAX+1.png";
import nimage5 from "../assets/nikeShoes/NIKE+AIR+MAX+PLUS.png";

//adidas shoe images
import aimage1 from "../assets/adidasShoes/Adidas.webp";
import aimage2 from "../assets/adidasShoes/adidas1.avif";
import aimage3 from "../assets/adidasShoes/adidas1.jpg";
import aimage4 from "../assets/adidasShoes/adidas2.webp";
import aimage5 from "../assets/adidasShoes/adidas3.avif";
import aimage6 from "../assets/adidasShoes/adidas5.avif";
import aimage7 from "../assets/adidasShoes/adidas6.jpg";

//puma shoe images
import pimage1 from"../assets/pumaShoes/puma0.webp";
import pimage2 from"../assets/pumaShoes/puma1.webp";
import pimage3 from"../assets/pumaShoes/puma2.avif";
import pimage4 from"../assets/pumaShoes/puma3.avif";
import pimage5 from"../assets/pumaShoes/puma4.avif";
import pimage6 from"../assets/pumaShoes/puma5.avif";
import pimage7 from"../assets/pumaShoes/puma6.avif";

//vains shoe images
import vimage1 from "../assets/vainsShoes/Vans1.jpg";
import vimage2 from "../assets/vainsShoes/vans2.webp";
import vimage3 from "../assets/vainsShoes/vans3.webp";
import vimage4 from "../assets/vainsShoes/vans4.webp";
import vimage5 from "../assets/vainsShoes/vans5.webp";
import vimage6 from "../assets/vainsShoes/vans6.webp";
import vimage7 from "../assets/vainsShoes/vans7.webp";
import vimage8 from "../assets/vainsShoes/vans8webp.webp";

//css
import "./brandSection.css";


const content = [
    {
        section: "NIKE",
        images: [nimage1,nimage2,nimage3,nimage4,nimage5],
        mainIMG: nikeMainIMG
    },
    {
        section: "ADIDAS",
        images: [aimage1,aimage2,aimage3,aimage4,aimage5],
        mainIMG: aimage3
    },
    {
        section: "PUMA",
        images: [pimage1,pimage2,pimage3,pimage4,pimage5],
        mainIMG: pimage1
    },
    {
        section: "VANS",
        images: [vimage1,vimage2,vimage3,vimage4,vimage5],
        mainIMG: vimage8
    }
];

function BrandSection(){
    return(
        <div className="page-grid">
            {content.map((grid) => (
                <div className="grid">
                    <p className="brand-name">{grid.section}</p>
                    <img className="main-page-img" src={grid.mainIMG} alt="" />
                    <div className="caption">
                        <h1>BEST SELLERS</h1>
                    </div>

                    <div className="quick-buy">
                        {grid.images.map((product) => (
                            <a className="shoe-link" href=""><img className="quick-buy-shoes-img" src={product} alt="" /> <button className="shop-now-btn">Shop Now</button></a>
                        ))}
                        <div className="see-more-container">
                            <a className="see-more" href="">MORE</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );  
}
export default BrandSection;