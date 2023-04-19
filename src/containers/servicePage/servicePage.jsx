import "./servicePage.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import services from "../serviceSection/services";

const ServicePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const location = useLocation();
    const data = location.state;
    const servicesList = services;
  return (
    <div className="service-page">
        <div className="left-nav" >
            <div className="left-nav-link" >
                {
                    servicesList.map(({name:name, images:pageImages, info:pageInfo}) => <Link to="/service" state={{name, pageImages, pageInfo }}>{name}</Link>)
                }
            </div>
        </div>
        <div className="service-page-info section-padding">
            <img src={data.pageImage} />
            <h2>{data.name}</h2>
            <p>{data.pageInfo}</p>
        </div>
        <div className="service-images" >
            <img src={data.pageImages[0]} alt="" />
            <img src={data.pageImages[1]} alt="" />
            <img src={data.pageImages[3]} alt="" />
            <img src={data.pageImages[2]} alt="" />
        </div>
    </div>
  )
};

export default ServicePage;