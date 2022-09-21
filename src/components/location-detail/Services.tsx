import * as React from "react";
import dt12 from "../../images/dtl2.jpg"
import abbaer from "../../images/ab-baer.jpg"
import dine from "../../images/dine-in.jpg"
export default function Services(props){
 
  return(
 <>
 
        <div
    className="w-full inline-block relative mt-5  lg:mt-0  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[554px] before:xl:w-[684px] before:z-0  before:bg-top-pattern  before:bg-no-repeat ">

    <div className="container-custom  mx-auto">
        <h2 className=" text-[42px] text-center pt-14 pb-6 uppercase text-[#115EAC] ">SERVICES</h2>
 <div className="row">
        <div className=" flex flex-col md:flex-row px-4 lg:px-0  justify-center">
        {props.c_restaurantService.map((Services,i)=>{     
    return(
       
        <>
            <div
                className="w-full md:w-1/3 xl:w-[399px] mx-0 md:mx-2 my-2 lg:my-0  lg:mx-8  bg-white shadow-lg rounded-tl-2xl rounded-br-2xl  relative ">
                 {Services.servicePhoto.map((photo)=>{
                    
                    return(
                        <>
                         <img className="w-full rounded-tl-2xl shadow-xl md:h-56 object-cover	" src={photo.url} alt=""/>
                        </>
                    )
                 })}   
               
                <div className="  service-bx">

                    <h4> {Services.serviceName}</h4>
                    <p>{Services.serviceText}</p>

                    <a href={Services.serviceURL.uRL} target="_blank" className=" bg-[#115EAC] bg-opacity-90 xl:w-[278px] font-optimabold rounded py-2  xl:py-3 px-10 text-white transition-all transform hover:scale-[1.09]   text-center w-60 inline-block ">
                       {Services.serviceURL.primaryCTA}</a>
                </div>
            </div>
            </>
    )
})}
        </div>
 </div>

    </div>

</div>
        
        

 
 </> 
  )


}