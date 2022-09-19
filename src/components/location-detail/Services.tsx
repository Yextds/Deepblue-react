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
        <h2 className=" text-[42px] text-center pt-14 pb-6 uppercase text-[#115EAC] ">Services</h2>
 <div className="row">
        <div className=" flex flex-col md:flex-row px-4 lg:px-0  justify-center">

            <div
                className="w-full md:w-1/3 xl:w-[399px] mx-0 md:mx-2 my-2 lg:my-0  lg:mx-8  bg-white shadow-lg rounded-tl-2xl rounded-br-2xl  relative ">
                <img className="w-full rounded-tl-2xl shadow-xl md:h-56 object-cover	" src={dt12} alt=""/>
                <div className="  service-bx">

                    <h4> Collection</h4>
                    <p>Click below to place an order ready for collection</p>

                    <a href="#menu"
                        className=" bg-[#115EAC] bg-opacity-90 xl:w-[278px] font-optimabold rounded py-2  xl:py-3 px-10 text-white transition-all transform hover:scale-[1.09]   text-center w-60 inline-block ">
                        View Collection</a>
                </div>
            </div>

            <div
                className="w-full md:w-1/3 xl:w-[399px] mx-0 md:mx-2 my-2 lg:my-0  lg:mx-8  bg-white shadow-lg rounded-tl-2xl rounded-br-2xl relative">
                <img className="w-full  rounded-tl-2xl shadow-xl md:h-56 object-cover	 " src={abbaer} alt=""/>


                <div className=" service-bx">

                    <h4> Delivery : Our Driver</h4>
                    <p>Please click below to view our menus or order online</p>

                    <a href="https://order.deepbluerestaurants.com/store/store-selection?app=online" target="_blank"
                        className=" bg-[#115EAC] bg-opacity-90 xl:w-[278px] font-optimabold rounded py-2 xl:py-3 px-10 text-white transition-all transform hover:scale-[1.09]   text-center w-60 justify-center inline-flex ">
                        <svg className="mr-2" id="recipes" xmlns="http://www.w3.org/2000/svg" width="19.374" height="20.704"
                            viewBox="0 0 19.374 25.704">
                            <path id="Path_409" data-name="Path 409"
                                d="M8.27,22.848a.387.387,0,0,1-.39-.39l0-18.9A3.612,3.612,0,0,1,10.993,0,.378.378,0,0,1,11.3.1a.387.387,0,0,1,.133.293V19.6a.39.39,0,0,1-.779,0V.876A2.831,2.831,0,0,0,8.663,3.566l0,18.892A.39.39,0,0,1,8.27,22.848Z"
                                transform="translate(-7.88 0)" fill="#fff" />
                            <path id="Path_410" data-name="Path 410"
                                d="M31,19.989a.387.387,0,0,1-.39-.39V.779H15.18a.387.387,0,0,1-.39-.39A.387.387,0,0,1,15.18,0H31a.387.387,0,0,1,.39.39V19.6A.39.39,0,0,1,31,19.989Zm-.847,2.86H15.18a.39.39,0,1,1,0-.779H30.152a.39.39,0,1,1,0,.779Z"
                                transform="translate(-12.015 0)" fill="#fff" />
                            <path id="Path_411" data-name="Path 411"
                                d="M29.311,23.547H22.186A3.082,3.082,0,0,1,19.11,20.47a.387.387,0,0,1,.39-.39H32a.387.387,0,0,1,.39.39A3.082,3.082,0,0,1,29.311,23.547Zm-9.39-2.691a2.3,2.3,0,0,0,2.265,1.908h7.125a2.3,2.3,0,0,0,2.265-1.908ZM32,18.759H19.5a.387.387,0,0,1-.39-.39c0-3.378,3.506-5.9,6.639-5.9s6.639,2.522,6.639,5.9A.387.387,0,0,1,32,18.759ZM19.909,17.98H31.592c-.265-2.695-3.253-4.731-5.84-4.731S20.174,15.289,19.909,17.98Z"
                                transform="translate(-14.6 -7.462)" fill="#fff" />
                            <path id="Path_412" data-name="Path 412"
                                d="M23.027,28.27a.414.414,0,0,1-.181-.044l-.49-.257a.863.863,0,0,0-.863.036,1.651,1.651,0,0,1-1.667.052l-.245-.137a.866.866,0,0,0-.751-.04l-.414.173a1.645,1.645,0,0,1-1.321-.024l-.406-.185a.857.857,0,0,0-.623-.04l-.908.285a.39.39,0,1,1-.237-.743l.908-.285a1.643,1.643,0,0,1,1.181.076l.406.185a.871.871,0,0,0,.695.012l.414-.173a1.633,1.633,0,0,1,1.426.076l.245.137a.863.863,0,0,0,.88-.028,1.645,1.645,0,0,1,1.643-.064l.49.257a.391.391,0,0,1,.165.526.4.4,0,0,1-.345.2Zm.928.8a.39.39,0,1,1,0-.779.659.659,0,0,0,0-1.317.39.39,0,1,1,0-.779,1.438,1.438,0,1,1,0,2.876Zm-9.84,0a1.438,1.438,0,1,1,0-2.876.39.39,0,1,1,0,.779.659.659,0,1,0,0,1.317.39.39,0,1,1,0,.779Zm12.756,12.31H11.135a3.245,3.245,0,0,1,0-6.49H26.871a.388.388,0,0,1,.333.586,4.842,4.842,0,0,0,0,5.317.386.386,0,0,1,0,.39A.4.4,0,0,1,26.871,41.375ZM11.135,35.66a2.466,2.466,0,0,0,0,4.932H26.22a5.5,5.5,0,0,1,0-4.936H11.135Z"
                                transform="translate(-7.886 -15.672)" fill="#fff" />
                        </svg>
                        Order Now </a>
                </div>

            </div>

            <div
                className="w-full md:w-1/3 xl:w-[399px] mx-0 md:mx-2 my-2 lg:my-0  lg:mx-8  bg-white shadow-lg rounded-tl-2xl rounded-br-2xl relative">
                <img className="w-full rounded-tl-2xl	shadow-xl md:h-56 object-cover " src={dine} alt=""/>


                <div className="  service-bx">

                    <h4> Dine In</h4>
                    <p>Please click below to view our menus</p>

                    <a href="#menu"
                        className=" bg-[#115EAC] font-optimabold  xl:w-[278px] bg-opacity-90 rounded py-2  xl:py-3 px-10 text-white transition-all transform hover:scale-[1.09]   text-center w-60 inline-block ">
                        View Menu</a>
                </div>
            </div>



        </div>
 </div>

    </div>

</div>
 </> 
  )


}