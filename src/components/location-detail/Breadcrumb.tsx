import * as React from "react";

export default function Breadcrumb(props){

    return(
        <>
        <div className="breadcrumb">
    <div className="px-10">
       <div className="boxes">
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li className="after:content-[] after:mx-1.5">
              {props.dm_directoryParents?
              <>
              {props.dm_directoryParents.map((e,i)=>{
                //console.log(i,e)
                   return(
                    
                    <>
                    {i==2?
                    <a key={i} className="transition-all duration-300 "
                    href={e.slug}>{e.name}</a>:''}
                    </>
                   )

                })}</>
                :''}
              </li>
            <li>{props.name}</li>
          </ul>
      </div>
      </div>
    </div>
        </>
    )
}