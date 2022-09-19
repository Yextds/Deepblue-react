import * as React from "react";
import abbanner from "../../images/ab-banner.jpg"
import dt12 from "../../images/dtl2.jpg"
import PhotoSlider from "./PhotoSlider"

export default function About(){
  return (

    <>
    <div className="about-sec">
    <div className="container-custom mx-auto flex flex-wrap">
        <div className="w-full lg:w-2/5 xl:w-[47%] relative lg:absolute left-0 lg:h-full ">
        
          <div id="splide" className="splide lg:-mx-[15px]">
            <div className="splide__track">
                <ul className="splide__list">
                <PhotoSlider />
                    {/* <li className="splide__slide"><div className="slide-img"><img src={abbanner} className="block w-full max-h-full  h-[500px] object-cover" alt="..." /></div></li>

                    <li className="splide__slide"><div className="slide-img"><img src={dt12} className="block  w-full max-h-full h-[500px] object-cover" alt="..." /></div></li> */}
                </ul>
            </div>
        </div>  
        </div>
        <div className="w-full overflow-hidden overflow-visible lg:w-3/5 xl:w-[50.6%] about-content ml-auto">
            <h3>BEVERLEY</h3>
            <b>Quality ingredients, sustainably sourced, cooked with care and served locally</b>
            <p>In 2003, our founding mission was to build a network of local restaurants and takeaways serving the very best quality Fish & Chips throughout Britain.</p>
 <p>Since then, we have surpassed our goals and are the nation’s largest community of Fish & Chip restaurants and takeaways. We are proud to be cooking Britain’s favourite meal in iconic British locations, loved by locals and visitors alike.
</p>

 <p>We think everyone should get a chance to try our Fish & Chips, so we’re working to spread the joy as widely as we can. As we move to new towns and cities, our hardworking teams will ensure we remember what makes us who we are; enthusiasts of quality, sustainable and deliciously traditional Fish & Chips.
</p>

 <p>We’re Britain’s favourite because we stick to what we do best; Great British Fish & Chips, served with care.
</p>
        </div>
    </div>
</div>
    </>
  )


}