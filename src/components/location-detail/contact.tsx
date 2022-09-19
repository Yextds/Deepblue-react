import * as React from "react";
import Cta from "../cta";
import IframeMap from "../location-detail/IframeMap"
import {useState}  from "react";
import Accordian from "../location-detail/Accordian";
import { Modal } from "reactstrap";
import Model from "./Model";


const Contact = (props: any) => {
const [isActive, setIsActive] = useState(false);


  const { address, phone,name,c_documentURLDeepBlue1,c_extraservices2,takeoutHours,hours,latitude,longitude,deliveryHours } = props;

  return (
    <>
   <div className="location-information">
    <div className="px-10">
        <div className="boxes">
            <div className="box bg-bodypattern store-info">

               
                <div className="inner-box">
                    <h4 className="text-[22px]">Address</h4>
                    <div className="store-address">
                    <div className="ad-icons">
                        <svg className="w-5 h-5 inline-block mt-1 " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg="">
                                <path fill="#fff" d="M172.268
                                501.67C26.97 291.031 0 269.413 0 192 0 85.961
                                85.961
                                0 192 0s192 85.961 192 192c0 77.413-26.97
                                99.031-172.268 309.67-9.535 13.774-29.93
                                13.773-39.464 0zM192 272c44.183 0 80-35.817
                                80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80
                                80
                                80z"></path>
                            </svg>
                        </div>
                    <div className="">
                        <h3 className="text-[#3D3935] text-[15px] ">{name}</h3>
                        <div id="address" className="mb-3 text-[#2f363b] text-base">
                            <div className="">{address.line1}</div>
                            <div className="">{address.city}</div>
                            <div> {address.postalCode}</div>
                            <div className=""></div>
                        </div>
                    </div>
                </div>
                <div className="store-phone">
                <div className="phn-icons">
                <div className="phn-icons">

                           
                <svg className="w-5 h-5 mt-1 inline-block text-sm"  xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16">
  <path id="mobile-alt" d="M8.5,0h-7A1.5,1.5,0,0,0,0,1.5v13A1.5,1.5,0,0,0,1.5,16h7A1.5,1.5,0,0,0,10,14.5V1.5A1.5,1.5,0,0,0,8.5,0ZM5,15a1,1,0,1,1,1-1A1,1,0,0,1,5,15Zm3.5-3.375A.376.376,0,0,1,8.125,12H1.875a.376.376,0,0,1-.375-.375V1.875A.376.376,0,0,1,1.875,1.5h6.25a.376.376,0,0,1,.375.375Z" fill="#fff"/>
</svg>
                        </div>
                        </div>
                   
                    <p><a href={`tel:${phone}}`}>{phone}</a></p>
                    </div>

                    <ul className="flex flex-row flex-wrap ml-10 font-nexa_boldregular
                    items-center mt-2 gap-4 md:gap-5">
                       <li><a id="address" className=" bg-blue-primary text-sm w-36
                            md:w-40 xl:w-[177px]  inline-block !leading-8 rounded-sm  lg:py-1 xl:py-0.5
                            text-white  text-center transition-all transform
                            hover:scale-[1.09]" href={`https://www.google.com/maps/dir/?api=1&amp;destination=${address.line1},${address.postalCode}`}
                           target="_blank"><svg className="w-4 h-4
                                inline-block" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M172.268
                                    501.67C26.97 291.031 0 269.413 0 192 0
                                    85.961 85.961
                                    0 192 0s192 85.961 192 192c0 77.413-26.97
                                    99.031-172.268 309.67-9.535 13.774-29.93    
                                    13.773-39.464 0zM192 272c44.183 0 80-35.817
                                    80-80s-35.817-80-80-80-80 35.817-80 80
                                    35.817 80 80
                                    80z"></path>
                            </svg> Map &amp; Direction</a></li>
                </ul>
               
                {c_extraservices2?
                <div>
                  <>  <h4 className="!mb-1.5 mt-7 text-[22px]  text- border-b border-b-drak-blue font-bold">Delivery Services</h4> 
                 {c_extraservices2.map((e,i)=>{
                  //console.log(e)
                       return(
                        <>
                        <div key={e.url} className="text-sm text-white py-1.5 px-0.5 rounded-md 
                  inline-block "><a href="#">
                  <img className="inline-block w-10 h-auto" src={e.url}/>
                  </a>
                              </div>
                              
                        </>
                       )   

                 })

                 }
                  </>
                  </div> 
                  :''
                 
                  }
                    </div>
                    </div> 
            <div className="box store-timing">
                <div className="tabs inner-box">    
                    <div className="tab py-0 current ">
                        <Accordian hours={hours} takeoutHours={takeoutHours} deliveryHours={deliveryHours} />
                    </div>
                </div>
            </div>
           
          <div className="box map-info">
                <div className="inner-box">
                    {address && (
                      <IframeMap
                        address={address}
                      ></IframeMap>
                    )}
                 </div>
            </div> 
        </div>
        </div>
        </div>
    </>
  );
};

export default Contact
