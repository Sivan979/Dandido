
//nike shoes images
import nikeMainIMG from "../assets/nikeShoes/nike-shoe.jpg";
import nimage1 from "../assets/nikeShoes/NIKE-DUNK-LOW.png";
import nimage2 from "../assets/nikeShoes/custom-nike-dunk-high-by-you-shoes.png";
import nimage3 from "../assets/nikeShoes/AIR-MAX-DN.png";
import nimage4 from "../assets/nikeShoes/NIKE+AIR+MAX+1.png";
import nimage5 from "../assets/nikeShoes/NIKE+AIR+MAX+PLUS.png";
import nimage6 from "../assets/nikeShoes/nike-dunk-high-midnight-navy-.webp";
import nimage7 from "../assets/nikeShoes/WMNS-NIKE-AIR-MAX-PLUS.jpg";
import nimage8 from "../assets/nikeShoes/NIKE+DUNK+LOW+RETRO.png";

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


export const brandData = [
    {
        section: "NIKE",
        sectionUrl: "/brand/nike",
        mainImg: nikeMainIMG,
        amount: 9,
        product: [
            {id:"01", name:"Nike Dunk Low", img: nikeMainIMG, url:"", discountprocent: 10, originalprice: 110, discountprice: 95},
            {id:"02", name:"Nike Dunk Low Retro", img: nimage1, url:"", discountprocent: 25, originalprice: 130, discountprice: 99.99},
            {id:"03", name:"Nike Dunk High", img: nimage2, url:"", discountprocent: 50, originalprice: 200.68, discountprice: 100.34},
            {id:"04", name:"Nike Air Max DN", img: nimage3, url:"", discountprocent: 20, originalprice: 100, discountprice: 80},
            {id:"05", name:"Nike Air Max 1", img: nimage4, url:"", discountprocent: 34, originalprice: 120, discountprice: 99.99},
            {id:"06", name:"Nike Air Max Plus", img: nimage5, url:"", discountprocent: 40, originalprice: 140, discountprice: 75},
            {id:"07", name:"Nike Dunk High", img: nimage6, url:"", discountprocent: 25, originalprice: 115, discountprice: 80},
            {id:"08", name:"Nike Air Max Plus", img: nimage7, url:"", discountprocent: 10, originalprice: 140, discountprice: 130},
            {id:"09", name:"Nike Dunk Low", img: nimage8, url:"", discountprocent: 20, originalprice: 140, discountprice: 125},
        ]
    },
    {
        section: "ADIDAS",
        sectionUrl: "/brand/adidas",
        mainImg: aimage3,
        amount: 7,
        product: [
            {id:"01", name: "Adidas Low", img: aimage1, url:"", discountprocent: 10, originalprice: 100, discountprice: 90},
            {id:"02", name: "Adidas Low High", img: aimage2, url:"", discountprocent: 20, originalprice: 120, discountprice: 90},
            {id:"03", name: "Adidas X2O", img: aimage3, url:"", discountprocent: 20, originalprice: 110, discountprice: 95},
            {id:"04", name: "Adidas M23", img: aimage4, url:"", discountprocent: 30, originalprice: 115, discountprice: 85},
            {id:"05", name: "Adidas Lil On", img: aimage5, url:"", discountprocent: 10, originalprice: 120, discountprice: 115},
            {id:"06", name: "Adidas P JACK", img: aimage6, url:"", discountprocent: 40, originalprice: 135, discountprice: 80},
            {id:"07", name: "Adidas O Melly", img: aimage7, url:"", discountprocent: 30, originalprice: 125, discountprice: 95},
        ]
    },
    {
        section: "PUMA",
        sectionUrl: "/brand/puma",
        mainImg: pimage1,
        amount: 7,
        product: [
            {id:"01", name: "Puma PAO31", img: pimage1, url:"", discountprocent: 40, originalprice: 135, discountprice: 80},
            {id:"02", name: "Puma Low High", img: pimage2, url:"", discountprocent: 20, originalprice: 120, discountprice: 90},
            {id:"03", name: "Puma X5", img: pimage3, url:"", discountprocent: 20, originalprice: 110, discountprice: 95},
            {id:"04", name: "Puma G23", img: pimage4, url:"", discountprocent: 30, originalprice: 115, discountprice: 85},
            {id:"05", name: "Puma Low", img: pimage5, url:"", discountprocent: 10, originalprice: 100, discountprice: 90},
            {id:"06", name: "Puma Lili", img: pimage6, url:"", discountprocent: 10, originalprice: 120, discountprice: 115},
            {id:"07", name: "Puma PAO2", img: pimage7, url:"", discountprocent: 30, originalprice: 125, discountprice: 95},
        ]
    },
    {
        section: "VAINS",
        sectionUrl: "/brand/vains",
        mainImg: vimage8,
        amount: 8,
        product: [
            {id:"01", name: "vains FI9", img: vimage1, url:"", discountprocent: 40, originalprice: 135, discountprice: 80},
            {id:"02", name: "vains Low", img: vimage2, url:"", discountprocent: 20, originalprice: 120, discountprice: 90},
            {id:"03", name: "vains X2O", img: vimage3, url:"", discountprocent: 20, originalprice: 110, discountprice: 95},
            {id:"04", name: "vains GO", img: vimage4, url:"", discountprocent: 30, originalprice: 115, discountprice: 85},
            {id:"05", name: "vains Low", img: vimage5, url:"", discountprocent: 10, originalprice: 100, discountprice: 90},
            {id:"06", name: "vains Laka", img: vimage6, url:"", discountprocent: 10, originalprice: 120, discountprice: 115},
            {id:"07", name: "vains SM2", img: vimage7, url:"", discountprocent: 30, originalprice: 125, discountprice: 95},
            {id:"08", name: "vains XM4", img: vimage8, url:"", discountprocent: 30, originalprice: 125, discountprice: 95},
        ]
    }
]