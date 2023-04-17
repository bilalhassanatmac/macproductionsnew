import "./serviceSection.css";
import { ServiceCard } from "../../components/index";
import facebookIcon from "../../images/heroIcons/facebook.svg";
import documentryIcon from "../../images/heroIcons/documentry.svg";
import filmsIcon from "../../images/heroIcons/films.svg";
import graphicsIcon from "../../images/heroIcons/graphics.svg";
import youtubeIcon from "../../images/servicesIcons/servicesIconWhite/youtube.svg";
import instagramIcon from "../../images/servicesIcons/servicesIconWhite/instagram.svg";
import twitterIcon from "../../images/servicesIcons/servicesIconWhite/twitter.svg";
import marketingIcon from "../../images/servicesIcons/servicesIconWhite/marketing.svg";
import contentIcon from "../../images/servicesIcons/servicesIconWhite/content.svg";
import graphicsIconGreen from "../../images/servicesIcons/servicesIconGreen/graphics.svg";
import documentaryIconGreen from "../../images/servicesIcons/servicesIconGreen/documentry.svg";
import filmsIconGreen from "../../images/servicesIcons/servicesIconGreen/films.svg";
import facebookIconGreen from "../../images/servicesIcons/servicesIconGreen/facebook.svg";
import instagramIconGreen from "../../images/servicesIcons/servicesIconGreen/instagram.svg";
import twitterIconGreen from "../../images/servicesIcons/servicesIconGreen/twitter.svg";
import youtubeIconGreen from "../../images/servicesIcons/servicesIconGreen/youtube.svg";
import postIconGreen from "../../images/servicesIcons/servicesIconGreen/post.svg";
import postIconWhite from "../../images/servicesIcons/servicesIconWhite/post.svg";
import marketingIconGreen from  "../../images/servicesIcons/servicesIconGreen/marketing.svg";
import contentIconGreen from  "../../images/servicesIcons/servicesIconGreen/content.svg";
import Zoom from 'react-reveal/Zoom';



const ServiceSection = () => {
    const services = [
        {
            id:1,
            name: "Graphic Designing",
            image: graphicsIcon,
            greenIcon: graphicsIconGreen,
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, necessitatibus."
        },
        {

            id:2,
            name: "Post Production",
            image:  postIconWhite,
            greenIcon: postIconGreen,
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, necessitatibus."
        },
        {
            id:3,
            name: "Docoumenteries",
            image: documentryIcon,
            greenIcon: documentaryIconGreen,
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, necessitatibus."
        },
        {

            id:4,
            name: "Promotional Videos",
            image: filmsIcon,
            greenIcon: filmsIconGreen,
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, necessitatibus."
        },
        {
            id:5,
            name: "Facebook Management",
            image:facebookIcon,
            greenIcon: facebookIconGreen,
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, necessitatibus."
        },
        {
            id:6,
            name: "Youtube Management",
            image: youtubeIcon,
            greenIcon: youtubeIconGreen,
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, necessitatibus."
        },
        {
            id:7,
            name: "Instagram Management",
            image: instagramIcon,
            greenIcon:  instagramIconGreen,
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, necessitatibus."
        },
        {
            id:8,
            name: "Twitter Management",
            image: twitterIcon,
            greenIcon: twitterIconGreen,
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, necessitatibus."
        },
        {
            id:9,
            name: "Digital Marketing",
            image: marketingIcon,
            greenIcon: marketingIconGreen,
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, necessitatibus."
        },
        {
            id:10,
            name: "Digital Content Creation",
            image: contentIcon,
            greenIcon: contentIconGreen,
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, necessitatibus."
        },
        ];
  return (
    <div id="services" className="services-section reveal">
            <div className="services-section-body  section-padding">
                <div className="services-section-header">
                    <p>It Support For Business</p>
                    <h2>Our Services</h2>
                </div>
                <div className="services-section-cards" >
                    {
                    services.map(
                        service => <ServiceCard name={service.name} greenIcon={service.greenIcon}  image={service.image} info={service.info} key={service.id} />
                    )
                    }
                </div>
            </div>
    </div>
  )
}

export default ServiceSection;

