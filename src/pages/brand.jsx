import { useParams } from "react-router-dom";

import MainHeader from "../components/mainHeader.jsx";
import SecondHeader from "../components/second-Header";
import BrandPage from "../components/brandpage";
import Footer from "../components/footer";
import { brandData } from "../components/brandData.jsx";
import NotFound from "../pages/notfound.jsx";



function Brand(){
    const { brandName } = useParams();
    const brand = brandData.find(
        (item) => item.section.toLowerCase() === brandName.toLowerCase()
    );
    
    if (!brand) {
        return <NotFound />;
    }

    return(
        <div>
            <MainHeader/>
            <SecondHeader/>
            <BrandPage/>
            <Footer/>
        </div>
    )
}
export default Brand;