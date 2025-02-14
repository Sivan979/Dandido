import styles from "./productDetails.module.css";
import { brandData } from "../components/brandData";
import { useParams } from "react-router-dom";


function ProductDetails(){
    const { brandName, productId } = useParams();
    const brand = brandData[brandName.toLowerCase()];

    const product = brand.product.find((p) => p.id === productId);

    return(
        <div className= {styles.pageContainer}>
            <div className= {styles.productContainer}> 
                <div className= {styles.imgContainer}>
                    <img className= {styles.img} src= {product.img} alt="" />
                </div>
                <div className= {styles.infoContainer}>
                    <p className= {styles.productName}>{product.name}</p>
                    <div className= {styles.info}>
                        <p className= {styles.originalPrice}>Original price: <span>&euro;{product.originalprice}</span></p>
                        <p className= {styles.discountPrice}>New price: &euro;{product.discountprice}</p>
                        <p className= {styles.colors}>colors: 1</p>
                        <p className= {styles.availability}>Availability: <span>In Stock</span></p>
                    </div>
                    <p className= {styles.discountPercent}>{product.discountprocent}% off</p>

                </div>
            </div>
        </div>
    );

}
export default ProductDetails;