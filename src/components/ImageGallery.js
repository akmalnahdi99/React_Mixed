// TASK Ayham: i wanted to integrate this code for gallery and replace the current what we have, can you help me to do this? i tried but stucked doing this gallery, thanks
// What featues does this library provide extra please list the features below because previously I created simple css flex-box for images
import React from "react";
import PT from "prop-types";
import { Link } from "react-router-dom";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

 

const PhotoItem = ({ image, thumb, group }) => (
  <div style={{ padding: "5px" }}>
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <Link to="">
        <img src={image} style={{ width: "100%" }} alt="" />
      </Link>
    </LightgalleryItem>
  </div>
);

PhotoItem.propTypes = {
  image: PT.string.isRequired,
  thumb: PT.string,
  group: PT.string.isRequired,
};

const ImageGallery = ({images}) => {
  return (
    <>
      <LightgalleryProvider
        onBeforeOpen={() => console.info("onBeforeOpen")}
        onAfterOpen={() => console.info("onAfterOpen")}
        onSlideItemLoad={() => console.info("onSlideItemLoad")}
        onBeforeSlide={() => console.info("onBeforeSlide")}
        onAfterSlide={() => console.info("onAfterSlide")}
        onBeforePrevSlide={() => console.info("onBeforePrevSlide")}
        onBeforeNextSlide={() => console.info("onBeforeNextSlide")}
        onDragstart={() => console.info("onDragstart")}
        onDragmove={() => console.info("onDragmove")}
        onDragend={() => console.info("onDragend")}
        onSlideClick={() => console.info("onSlideClick")}
        onBeforeClose={() => console.info("onBeforeClose")}
        onCloseAfter={() => console.info("onCloseAfter")}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {images.map((p, idx) => (
            <PhotoItem key={idx} image={p[0]} thumb={p[0]} group="group1" />
          ))}
        </div>
      </LightgalleryProvider>
    </>
  );
};

export default ImageGallery;
