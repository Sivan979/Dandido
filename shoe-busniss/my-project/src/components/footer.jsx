import "./footer.css"
import FacebookIcon from "../assets/icons/facebook-icon.png"
import InstgramIcon from "../assets/icons/instagram-icon.png"
import TwitterIcon from "../assets/icons/twitter-icon.png"



function Footer(){
    //upper section
    const footerContent = [
        {
            class:"resources column",
            section: "Resources",
            links: [
                {
                    name: "Gift Cards",
                    url: "#"
                },
                {
                    name: "Become a Member",
                    url: "#"
                },
                {
                    name: "Student Discount",
                    url: "#"
                },
                {
                    name: "Feedback",
                    url: "#"
                },
                {
                    name: "promo Codes",
                    url: "#"
                }
            ]
        },
        {
            class:"help column",
            section: "Help",
            links: [
                {
                    name: "Get Help",
                    url: "#"
                },
                {
                    name: "Order Status",
                    url: "#"
                },
                {
                    name: "Shipping and Delivery",
                    url: "#"
                },
                {
                    name: "Returns",
                    url: "#"
                },
                {
                    name: "Payment Options",
                    url: "#"
                },
                {
                    name: "Contact Us",
                    url: "#"
                },
                {
                    name: "Reviews",
                    url: "#"
                },
                {
                    name: "Report a Concern",
                    url: "#"
                }
            ]
        },
        {
            class:"company column",
            section: "Company",
            links: [
                {
                    name: "About DanDido",
                    url: "#"
                },
                {
                    name: "News",
                    url: "#"
                },
                {
                    name: "Careers",
                    url: "#"
                },
                {
                    name: "Purpose",
                    url: "#"
                },
                {
                    name: "Sustainability",
                    url: "#"
                }
            ]
        },
    ]
    
    const socialLinks = [
        { url: '#', imgSrc: FacebookIcon, alt: 'Instagram' },
        { url: '#', imgSrc: InstgramIcon, alt: 'Facebook' },
        { url: '#', imgSrc: TwitterIcon, alt: 'Twitter' }
    ];

    //terms section
    const termsContent = [
        {
            name: "Terms of Use",
            url: "#"
        },
        {
            name: "Terms of Sale",
            url: "#"
        },
        {
            name: "Company Details",
            url: "#"
        },
        {
            name: "Privacy & Cookie Policy",
            url: "#"
        },
        {
            name: "Privacy & Cookie Setting",
            url: "#"
        }
    ];

    return(

        <div className="footer">
            <hr className="topHr"/>
            <div className="upper-section">
                {footerContent.map((content) => (
                    <div className={content.class}>
                        <h3>{content.section}</h3>
                        <ul>
                            {content.links.map((item) => (
                                <li><a href={item.url}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="follow-us">
                    <h3>Follow Us</h3>
                    {socialLinks.map((img) => (
                        <a className="follow-icons" href={img.url}><img className="follow-icons-img" src={img.imgSrc} alt={img.alt} /></a>
                    ))}
                </div>

            </div>

            <div className="terms">
                <p><strong>&copy;DanDido, Inc.</strong></p>
                {termsContent.map((content) => (
                    <a href={content.url}>{content.name}</a>
                ))}
            </div>
            <hr className="footer-hr" />
        </div>
    );
}
export default Footer;