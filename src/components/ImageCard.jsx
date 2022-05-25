import React, { useState, useEffect} from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Card } from "react-bootstrap";
import Image from "components/Image";
import "./ImageCard.scss";

const ImageCard = ({ className, imageFileName, imageAlt, header, subheader, extraInfo }) => {

  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 768;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  })

  return width > breakpoint ?

    // DESKTOP VERSION //

    // Changes
    <Card id="noBorder" className={clsx("image-card text-white text-center", className)}>
      <div id="mainImgContainer">

        <div id="green-image-background">
          <div id="green-image" >
            <Image className="image" fileName={imageFileName} alt={imageAlt || header || subheader} />
          </div>
        </div>

        <div id="blue-image-background">
          <div id="blue-image">
            <Image className="image" fileName={imageFileName} alt={imageAlt || header || subheader} />
          </div>
        </div>  

        <div id="header-promo">
            <Image className="image" fileName="web_overlay_new.png" alt={imageAlt || header || subheader} />
        </div>     

        
        {/* <img id="blue-image" src="/static/4692852b4168a5c785e92715364877e1/3e393/background.jpg" alt="background"/> */}
      
        
      
        {/* <div id="blue-image-div"> */}
        {/* <Image id="blue-image" className="image" fileName={imageFileName} alt={imageAlt || header || subheader} /> */}
          {/* <div className="header-promo">
            <img src="https://2itesting.com/media/1497/web_overlay_new.png?anchor=center&mode=crop&width=1900&height=550&rnd=132748808250000000" alt="overlay"/>
          </div> */}
        {/* </div> */}

        <Card.ImgOverlay className="no-padding">
          <Container>
            <div className="intro-text">
              <div className="intro-lead-in">{subheader}</div>
              {/* Change */}
              <div className="intro-heading">{header}</div>
              {/* <div className="intro-heading text-uppercase">{header}</div> */}
              {extraInfo}
            </div>
          </Container>
        </Card.ImgOverlay>

      </div>

    </Card>

    :

        // MOBILE VERSION //

    <Card id="noBorder" className={clsx("image-card text-white text-center", className)}>
      
      <div id="blue-image-background-mobile">
        <div id="blue-image-mobile">
          <Image className="image" fileName={imageFileName} alt={imageAlt || header || subheader} />
        </div>
      </div>
    

      <Card.ImgOverlay className="no-padding">
        <Container>
          <div className="intro-text">
            <div className="intro-lead-in">{subheader}</div>
            {/* Change */}
            <div className="intro-heading">{header}</div>
            {/* <div className="intro-heading text-uppercase">{header}</div> */}
            {extraInfo}
          </div>
        </Container>
      </Card.ImgOverlay>
    </Card>
};

ImageCard.propTypes = {
  className: PropTypes.string,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
};

ImageCard.defaultProps = {
  className: null,
  imageFileName: null,
  imageAlt: null,
  header: "",
  subheader: "",
  extraInfo: null,
};

export default ImageCard;
