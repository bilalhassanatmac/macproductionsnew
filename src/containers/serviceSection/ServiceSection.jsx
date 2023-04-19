import "./serviceSection.css";
import services from "./services";
import { ServiceCard } from "../../components/index";


const ServiceSection = () => {
    const service = services;
  return (
    <div id="services" className="services-section reveal">
            <div className="services-section-body  section-padding">
                <div className="services-section-header">
                    <p>It Support For Business</p>
                    <h2>Our Services</h2>
                </div>
                <div className="services-section-cards" >
                    {
                    service.map(
                        service => <ServiceCard name={service.name} greenIcon={service.greenIcon}  image={service.image} info={service.info} key={service.id} pageInfo={service.info} pageImage={service.greenIcon} pageImages={service.images}  />
                    )
                    }
                </div>
            </div>
    </div>
  )
}

export default ServiceSection;
