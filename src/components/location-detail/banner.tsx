import * as React from "react";
import {useEffect} from "react";
import Hero from "../../images/hero-banner.jpg";
import SearchBar from "./SearchBar";
export type Address = {
  line1: string;
  city: string; 
  region: string;
  postalCode: string;
  countryCode: string;
};

type Banner = {
  name?: string;
  c_deepBlueStoreMessage?: string;
  children?: React.ReactNode;
};

const renderPrettyAddress = (address?: Address) => {
  return (
    <>
      {address && (
        <span>
          {address.line1} in {address.city}, {address.region}
        </span>
      )}
    </>
  );
};

const Banner = (props: Banner) => {
  const { name, c_deepBlueStoreMessage, children } = props;

  return (
    <>
  <div className="hero">
    <img className="hero-img" src={Hero} alt="banner"/>
    <div className="w-full   flex items-center justify-center py-12 2xl:pb-11 ">
     <div className="mx-2 text-center">
            <h1 className="uppercase">{name}</h1>
            <div className="w-[138px]  mb-4 mx-auto"> <a className="btn-hero bg-white  text-base font-optimanormal uppercase  text-text-blue-dark btn-outline-secondary nav-link  !border-2 border-[#f9c85f]" href=""> Order Online</a></div>
        <p>{c_deepBlueStoreMessage}</p>
        <div className="answers-layout">
      <div className="search-bar"></div>
    <SearchBar />
    </div>
</div>  


    </div>
</div>

    </>
  );
};

export default Banner;
