import * as React from "react";
import abbanner from "../../images/ab-banner.jpg"
import dt12 from "../../images/dtl2.jpg"
import PhotoSlider from "./PhotoSlider"

export default function About(props:any){
 
  return (
    <>
    <div className="about-sec">
    <div className="container-custom mx-auto flex flex-wrap">
        <div className="w-full lg:w-2/5 xl:w-[47%] relative lg:absolute left-0 lg:h-full ">
        
          <div id="splide" className="splide lg:-mx-[15px]">
            <div className="splide__track">
                <ul className="splide__list">
                <PhotoSlider photoGallery={props.photoGallery} />
                </ul>
            </div>
        </div>  
        </div>
        <div className="w-full overflow-hidden overflow-visible lg:w-3/5 xl:w-[50.6%] about-content ml-auto"> 
            <h3>{props.name}</h3>
            <p>{props.description}
</p>
        </div>
    </div>
</div>
    </>
  )


}