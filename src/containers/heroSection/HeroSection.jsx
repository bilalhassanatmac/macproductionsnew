import "./heroSection.css";
import { HeroCard, Spinner } from "../../components/index";
import heroBanner from "../../images/heroSection/banner.svg";
import adIcon from "../../images/heroIcons/advertisment.svg";
import webIcon from "../../images/heroIcons/webdev.svg";
import graphicIcon from "../../images/heroIcons/graphicsdesign.svg";
import whatsappIcon from "../../images/heroSection/whatsapp.svg";
const HeroSection = () => { 
  const services = [
    {
      name: "Advertising and Marketing",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, nihil",
      image: adIcon
    },
    {
      name: "Website Development",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, nihil",
      image: webIcon
    },
    {
      name: "Graphic Designing",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, nihil",
      image: graphicIcon
    },
  ];
  return (
    <div id="home" className="hero-section" >
      <div className="pos-center">
      </div>
      <a href="https://api.whatsapp.com/send?phone=+923338070666&text=Hi%20there%21" className="float" target="_blank">
      <i className="fa fa-whatsapp my-float">
        <img className="float-icon" src={whatsappIcon} alt="" srcSet="" />
      </i>
      </a>
      <div className="hero-flex container" >
        <div className="hero-section-left">
          <h1>
            <span>
            We do
            </span>
            <br/> 
            <span className="what-we" >
            What we Say
            </span>
            </h1>
          <div>
          <div className="description" >
            <p>
            MAC Production & Graphics is a company that specializes in the creation of various forms of media content, including commercials, promotional videos, corporate videos, training videos, graphic designs, social media management, documenteries, short films and other multimedia projects. We are responsible for the entire process of media production & digital content creation, from ideation and conceptualization to filming, editing, post-production & graphic designing.
            </p> 
          </div>
            <a href="https://www.google.com/maps/place/MAC+Production+%26+Graphics/@33.9939075,72.93723,15z/data=!4m2!3m1!1s0x0:0xd5783962cdeab88e?sa=X&ved=2ahUKEwi8nITgjpX-AhXN7rsIHZUWATAQ_BJ6BAhXEAM" target="_blank" >
            <div className="button button-big button-blue">
              <p>Meet with Us</p>
            </div>
            </a>

          </div>
        </div>
        <div className="hero-section-right">
          <img src={heroBanner} alt="Hero Banner"/>
        </div>
      </div>
      <div className="hero-cards-section" >
        <div className="hero-animation" >
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0,112,56,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0,112,56,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0,112,56,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#007038" />
            </g>
            </svg>
        </div>
        <div className="hero-cards container">
          {
            services.map(
              service =>
              (
                <HeroCard name={service.name} image={service.image} info={service.info} key={service.name} />
              )
            )
          }
        </div>
          <div className="hero-cards-info container" >
        </div>
      </div>
    </div>
  )
}

export default HeroSection;