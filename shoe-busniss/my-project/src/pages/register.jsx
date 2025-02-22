import Styles from "../styles/register.module.css";
import { Link } from "react-router-dom";

function Register(){

    return(
            
        <div className={Styles.container}>
            <div className={Styles.info}>
                <Link className= {Styles.brandName} to= '/home'>DanDido</Link>
                <div className={Styles.narrowIcon}>&#8623;</div>
                <h2>Join Us</h2>
                <p>Join us for more information and access to our website. If you would like to know more about us please click on About us button.</p>
                <a className={Styles.btn} href="">About Us</a>
            </div>

            <div className={Styles.registrationContainer}> 
                <h1>Register Here</h1>
                <div className= {Styles.registrationForm}>
                    <input className= {Styles.formControl} type="text" placeholder="First and last name" required/>
                    <input className={Styles.formControl} type="text" placeholder="Username" required />
                    <input className={Styles.formControl} type="email" placeholder="Email" required />
                    <input className={Styles.formControl} type="password" placeholder="Password" required />
                    <input className={Styles.formControl} type="password" placeholder="Control Password" required />
                    <a className= {Styles.btn} href="">Register</a>
                </div>
            </div>
        </div>
    );
}
export default Register;