import React from "react";
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { arrayOf, shape, string } from "prop-types";
import { sizes, colors } from "../../tokens";

/* Carousel
 *
 * Simple carousel to display payment method options
 */
const Carousel = ({ images, className, ...props }) => {
  return (
    <StyledCarousel className={className}>
      <AwesomeSlider organicArrows={false} {...props}>
        {images &&
          images.map((image) => (
            <div key={image.source} style={{ display: "flex" }}>
              <img src={image.source} />
            </div>
          ))}
      </AwesomeSlider>
    </StyledCarousel>
  );
};

Carousel.propTypes = {
  images: arrayOf(shape({ source: string })).isRequired,
};

const StyledCarousel = styled.div`
  > .awssld {
    --control-bullet-color: ${colors.onSurface500};
    --control-bullet-active-color: ${colors.onBackground500};
    --content-background-color: transparent;
    --loader-bar-color: ${colors.background500};
    --loader-bar-height: 1px;
  }
  .awssld__content > img,
  .awssld__content > video {
    object-fit: contain;
  }
  .awssld__bullets {
    position: relative;
    bottom: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0;
    height: 36px;
    align-items: flex-end;
    button {
      width: ${sizes.sizebase};
      height: ${sizes.sizebase};
      margin: 0 : ${sizes.sizesm};
      opacity: 0.6;
      border-radius: 50%;
    }
    & > .awssld__bullets--active {
      transform: none;
    }
  }
`;

export default Carousel;
