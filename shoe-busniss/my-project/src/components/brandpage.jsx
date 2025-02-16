//icons
import Filtericon from '../assets/icons/filter-icon.png';
import SortbyIcon from '../assets/icons/sortby.png';
//css
import styles from "../styles/brandpage.module.css";

import { Link, useParams } from "react-router-dom";
import { brandData } from './brandData';

function BrandPage(){
    const { brandName } = useParams();
    const brand = brandData.find(
        (item) => item.section.toLowerCase() === brandName.toLowerCase()
    );

    return(

        <div className= {styles.mainContainer}>
            <div className={styles.filterSection}>
                <h2>{brand.amount} PRODUCTS</h2>
                <div className={styles.filterSortbyContianer}>
                    <div className={styles.filterBtnContainer}>
                        <a className={styles.filterBtn} href="">Show Filter <img src={Filtericon} alt="nofoto" /></a>
                    </div>
                    <div className= {styles.sortbyBtnContainer}>
                        <a className= {styles.sortbyBtn} href="">Sort By <img src='' alt="" /></a>
                    </div>
                </div>
            </div>


            <div className= {styles.pageGrid}>
                {brand.product.map((product) =>(
                    <div className= {styles.shoeContainer}>
                        <div className= {styles.imgContainer}>
                            <Link to={`/brand/${brandName}/${product.id}`}>
                                <img className= {styles.shoeImage} src={product.img} alt="noimg" />
                            </Link>
                        </div>
                        <div className= {styles.shoeInfoContainer}>
                            <div className= {styles.infoContainer}>
                                <p className= {styles.colors}>1 color</p>
                                <a className= {styles.shoeName} href="">{product.name}</a>
                                <p className= {styles.off}>{product.discountprocent}%<span className= {styles.spanOff}>off</span></p>
                            </div>
                            <div className= {styles.priceContainer}>
                                <p className= {styles.newPrice}>&euro;{product.discountprice}</p>
                                <p className= {styles.oldPrice}>&euro;{product.originalprice}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>                    
    );
};
export default BrandPage;