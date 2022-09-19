import * as React from "react";
import faci1 from "../../images/faci1.svg";
import faci2 from "../../images/faci2.svg"
import faci3 from "../../images/faci3.svg"
import faci4 from "../../images/faci4.svg"

export default function Faciltites(props){

    return(
        <>
        { props.c_extraServiceAvailable1!== undefined?
<div className="w-full inline-block relative mt-0 lg:mt-14 pb-10  bg-faci-bg  bg-repeat ">
    <div className="container-custom mt-10 mx-auto">
        <h2 className=" text-[42px] text-center pt-4 pb-12  uppercase text-text-blue-dark ">FACILITIES</h2>
        <div className=" flex  flex-wrap justify-center">
            {props.c_extraServiceAvailable1.map((services,i)=>{
              
              return(
                <>
            <div className=" w-full p-8 lg:px-2 xl:px-2 md:w-1/2 lg:w-1/4">
                <div className=" bg-white rounded shadow-lg w-full pt-12 pb-8 relative">
                    <div className=" absolute left-1/2  shadow-lg -translate-x-1/2 -top-9 bg-white rounded-full p-4 w-[65px] h-[65px]"> <img src={faci1} className="ml-0.5" width="26" alt=""/> </div>
                    <div className="w-full text-center py-1  text-blue-primary font-optimabold  text-lg  inline-block">{services}</div>
                </div>
            </div>
                </>
              )
            })}
           
            
        </div>
    </div>
</div>:''}
        </>
    )
}