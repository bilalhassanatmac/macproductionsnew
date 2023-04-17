import "./footerSection.css";
import numberIcon from "../../images/footerIcons/number.svg";
import emailIcon from "../../images/footerIcons/email.svg";
import locationIcon from "../../images/footerIcons/location.svg";
import facebookIcon from "../../images/footerIcons/facebook.svg";
import instagramIcon from "../../images/footerIcons/instagram.svg";
import twitterIcon from "../../images/footerIcons/twitter.svg";
import { Map } from "../../components/index";

const FooterSection = () => {
  return (
    <div id="contactUs" className={`footer-wrapper reveal ${location.pathname == '/contact-us'  ? "contact-height" : ""} `} >
      <div className="footer-section container section-padding-top">
        <div className="footer-icons" >
          <div className="footer-icon" >
            <div className="footer-icon-wrapper" >
              <img src={numberIcon} alt="number" />
            </div>
            <div className="footer-icon-sub" >
              <p className="main">Call Us</p>
              <p className="sub">+92 333 8070666</p>
            </div>
          </div>
          <div className="footer-icon" >
            <div className="footer-icon-wrapper" >
            <img src={emailIcon} alt="number" />
            </div>
            <div className="footer-icon-sub" >
              <p className="main">Email Us</p>
              <p className="sub">mac.hrp01@gmail.com</p>
            </div>
          </div>
          <div className="footer-icon" >
            <div className="footer-icon-wrapper" >
              <img src={locationIcon} alt="number" />
            </div>
            <div className="footer-icon-sub" >
              <p className="main">Reach Us</p>
              <p className="sub">Haripur, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Map/>
      <hr />
      <div className="footer-end container section-padding-bottom" >
        <div className="footer-end-icons section-margin" >
          <img src={facebookIcon} alt="facebook icon" />
          <img src={instagramIcon} alt="instagram icon" />
          <img src={twitterIcon} alt="twitter icon" />
        </div>
        <p>© Copyright 2023 MAC Production & Graphics All Rights Reserved</p>
      </div>
    </div>
  )
}

export default FooterSection;