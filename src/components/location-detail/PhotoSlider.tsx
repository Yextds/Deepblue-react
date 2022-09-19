import * as React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import abbanner from "../../images/ab-banner.jpg"
import dt12 from "../../images/dtl2.jpg"

const PhotoSlider = (props: any) => {
  const { photoGallery, height, width } = props;  
  return (
    <Splide options={ {
      arrows: true
    } }>
     
      {photoGallery.map((e,i)=>{
         return(
          <>
           <SplideSlide>
        <div className="slide-img">
        <img src={e.image.url} className="block w-full max-h-full  h-[420px] object-cover" alt="..." />
        </div>
        </SplideSlide>
          </>
         )
      })}
    </Splide>
  );



};

export default PhotoSlider;