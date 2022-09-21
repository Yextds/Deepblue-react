import * as React from "react";
import "../index.css";
// import locationv2 from "../images/location-detail_v2.jpg";

const Footer = (props) => {
    
  return (
    <>
    <footer className="page__footer bg-primary text-white bg-[#004b97] py-2">
    <div className="container-custom mx-auto flex flex-wrap items-center">
        <div className="w-full lg:w-[40%] px-4">
            <ul className="flex flex-wrap lg:max-w-[380px] justify-center lg:justify-start text-xs lg:text-base">
            {props.c_footerdeepblue.map((c_footer,i)=>{
             return(
                c_footer.c_footerlabel.map((label,i)=>{
                    return(<>
                        <li className="mx-3 py-1"><a href={label.link} className="" >{label.title}</a></li>
                        </>)
                })
             )
            })}
            </ul>
        </div>
        <div className="w-full lg:w-[20%] my-2 lg:my-0">
            <ul className="flex items-center justify-center">
                {props.c_footerdeepblue.map((icon)=>{
                      console.log(icon)
                    return(
                       icon.c_socialicon.map((icondata)=>{
                        return(
                            <>
                             <li className="mx-2"><a href={icondata.link}>
                        <svg className="w-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon={icondata.title}
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                            <path fill="currentColor"
                                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                            </path>
                        </svg>
                    </a></li>
                            </>
                        )
                       })
                    )
                })}
            </ul>
        </div>

        <div className="w-full lg:w-[40%] px-4 mb-auto text-center uppercase lg:text-right">
        {props.c_footerdeepblue.map((title)=>{
            return(
                <>
                <small>{title.c_titledeep}</small>
                </>
            )
        })}
            
        </div>

    </div>
</footer>

<div className="matches"><img src='#'className="" alt="..."/></div>
</>
  );
};

export default Footer;
