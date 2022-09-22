 import * as React from "react";
 import  { useState,useEffect } from 'react';
 import Banner from "../components/location-detail/banner";
 import Breadcrumb from "../components/location-detail/Breadcrumb"
 import Contact from "../components/location-detail/contact";
 import Nearby from "../components/location-detail/Nearby";
 import { nearByLocation } from "../types/nearByLocation";
 import "../index.css";
 import {
   Template,
   GetPath,
   GetRedirects,
   TemplateConfig,
   TemplateProps,
   TemplateRenderProps,
   GetHeadConfig,
   HeadConfig,
   TransformProps
 } from "@yext/pages";
 import PageLayout from "../components/PageLayout";
import Services from "../components/location-detail/Services";
import About from "../components/location-detail/About";
import Menu from "../components/location-detail/Menu";
import Model from "../components/location-detail/Model";
import Faciltites from "../components/location-detail/Facilities";
import { JsonLd } from "react-schemaorg";
import   Nav  from "../components/Nav";
import Footer from "../components/footer";
import Faq from "../components/location-detail/Faq";
// import { fetch } from "@yext/pages/util";

 export const config: TemplateConfig = {
   stream: {
     $id: "deepbluelocation",
     fields: [
      "id",
      "uid",
      "meta",
      "name",
      "mainPhone",
      "address",
      "description",
      "hours",
      "photoGallery",
      "slug",
      "yextDisplayCoordinate",
      "services",
      "neighborhood",
      "paymentOptions",
      "c_facilitiesService",
      "c_relatedFAQs.question",
      "c_documentFile",
      "c_documentURLDeepBlue1",
      "c_restaurantsServices1",
      "c_extraServiceAvailable1",
      "takeoutHours",
      "timezone",
      "c_deepBlueStoreMessage",
      "c_extraservices2",
      "deliveryHours",
      "c_restaurantService",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "c_relatedmenuitemsdeepblue.c_menunav",
      "c_relatedmenuitemsdeepblue.name",
      "c_relatedmenuitemsdeepblue.slug",
      "c_relatedmenuitemsdeepblue.photoGallery",
      "c_relatedFAQs.answer",
      "c_footerdeepblue.c_footerlabel",
      "c_footerdeepblue.c_socialicon",
      "c_footerdeepblue.c_titledeep",
      "c_deepblueheader.c_deepblue_dropdown",
      "c_deepblueheader.name",
      "c_deepblueheader.slug",
      "c_deepblueheader.c_cTA",

     ],
     filter: {
      savedFilterIds: ["1012371889"],
     },
     localization: {
       locales: ["en"],
       primary: false,
     },
   },
 };

 export const getPath: GetPath<TemplateProps> = ({ document }) => {
   return `${document.slug.toString()}`;
 };
 
 export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
   return [`index-old/${document.id.toString()}`];
 };
 
 
 export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
   relativePrefixToRoot,
   path,
   document,
 }): HeadConfig => {
   return {
     title: document.name,
     charset: "UTF-8",
     viewport: "width=device-width, initial-scale=1",
     other:`<link
     rel="stylesheet"
     type="text/css"
     href="https://assets.sitescdn.net/answers/v1/answers.css"
   />`,
     tags: [
       {
         type: "meta",
         attributes: {
           description: "This site was generated by the Yext SSG",
         },
       },
       {
        type: "meta", // Meta Tag (og:image)
        attributes: {
          name: "robots",
          content: "INDEX,FOLLOW",
        },
      },
     ],
     
   };
 };
 

 type ExternalApiData = TemplateProps & { externalApiData: nearByLocation };
 export const transformProps: TransformProps<ExternalApiData> = async (
   data: any
 ) => {
   var baseURL = "https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch?radius=2500";
   var api_key = "b262ae7768eec3bfa53bfca6d48e4000";
   var vparam = "20181017";
   var location=`${data.document.yextDisplayCoordinate.latitude},${data.document.yextDisplayCoordinate.longitude}`;
   var limit = 4;
   var offset=0;
   var entityTypes =
       "restaurant";
   var fields = "name,hours,neighborhood,address,mainPhone,slug,timeZoneUtcOffset,displayCoordinate,yextDisplayCoordinate";
   
   var fullURL = baseURL
       + "&api_key=" + api_key 
       + "&v=" +  vparam
       + "&location=" + location
       + "&limit=" + limit
       + "&entityTypes=" + entityTypes
       + "&fields=" + fields
       + "&resolvePlaceholders=true"
       +"&offset="+offset; 
   
   const externalApiData = (await fetch(fullURL).then((res: any) =>
     res.json()
   )) as nearByLocation;
   return { ...data, externalApiData };
 };


 type ExternalApiRenderData = TemplateRenderProps & {
  externalApiData: nearByLocation;
};

 const Location: Template<ExternalApiRenderData> = ({
   relativePrefixToRoot,
   path,
   document,
   externalApiData
 }) => {

   const {    
    _site,
     name,
     address,
     hours,
     deliveryHours,
     takeoutHours,
     c_deepBlueStoreMessage,
     c_extraservices2,
     c_facilitiesService,
     c_restaurantService,
     c_documentURLDeepBlue1,
     photoGallery,
     description,
     dm_directoryParents,
     c_extraServiceAvailable1,
     c_relatedmenuitemsdeepblue,
     services,
     c_relatedFAQs,
     mainPhone,
     yextDisplayCoordinate,
     c_footerdeepblue,
     c_deepblueheader
   } = document;


   let preExpandedarr=[];

    if(c_relatedFAQs){
        c_relatedFAQs.map((e,i)=>{
            if(i==0){
                preExpandedarr=[e.question];            
            } 
        })
    }
    const[current,setCurrent]=useState('');
    function setclass(e){
      setCurrent(e.target.id)
    }

   
    if (c_relatedmenuitemsdeepblue === undefined) {
      console.log([c_relatedmenuitemsdeepblue, 'c_relatedmenuitemsdeepblue']);
    }

    let url2 = "";
    if(typeof c_documentURLDeepBlue1.uRL2 !== undefined && c_documentURLDeepBlue1.uRL2 !== ""){
       url2 = c_documentURLDeepBlue1.uRL2;
    }

    let primaryCTA = "";
    if(typeof c_documentURLDeepBlue1.primaryCTA !== undefined){
      primaryCTA = c_documentURLDeepBlue1.primaryCTA;
    }

    // console.log(['c_documentURLDeepBlue1', c_documentURLDeepBlue1]);
    


   return (
     <>
    
        <JsonLd<Restaurant>
          item={{
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name,
            address: {
              "@type": "PostalAddress",
              streetAddress: address.line1,
              addressLocality: address.city,
              addressRegion: address.region,
              postalCode: address.postalCode,
              addressCountry: address.countryCode,
            },
          }}
        />
        <JsonLd<BreadcrumbList>
          item={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            name: "DeepBlue",
            // url: window.location.href,
            logo: "https://drupalyext.24livehost.com/sites/default/files/logo123_0.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: address.line1,
              addressLocality: address.city,
              addressRegion: address.region,
              postalCode: address.postalCode,
              addressCountry: address.countryCode,
            },
          }}
        />
           {c_deepblueheader?
          <Nav c_deepblueheader={_site} />
             :''}
          <Banner name={name} c_deepBlueStoreMessage={c_deepBlueStoreMessage}/>

          <Breadcrumb dm_directoryParents={dm_directoryParents} name={name}/> 
          {address||name||c_documentURLDeepBlue1||c_extraservices2||yextDisplayCoordinate||hours||deliveryHours||takeoutHours?            
          
          <Contact address={address} name={name} c_documentURLDeepBlue1={c_documentURLDeepBlue1} c_extraservices2={c_extraservices2} phone={mainPhone} latitude={yextDisplayCoordinate.latitude}
          longitude={yextDisplayCoordinate.longitude} hours={hours} deliveryHours={deliveryHours} takeoutHours={takeoutHours}></Contact>
          :''}
          
          {c_restaurantService?
          <Services c_restaurantService={c_restaurantService}/>
          :""}
          
          {photoGallery?
          <About name={name} photoGallery={photoGallery}  description={description}/>
          :''}
          
          {c_relatedmenuitemsdeepblue !== undefined?
          <Menu c_relatedmenuitemsdeepblue={c_relatedmenuitemsdeepblue}   c_documentURLDeepBlue1={url2} c_documentURLDeepBlue1prim={primaryCTA} name="Allergens"/>
                        :''}
          
          {c_facilitiesService?
          <Faciltites c_facilitiesService={c_facilitiesService} />
          :''}
          
          {c_relatedFAQs?
          <Faq c_relatedFAQs={c_relatedFAQs}/>:''}
          
          {yextDisplayCoordinate?
          <Nearby externalApiData={externalApiData}/>:''}    
          {c_footerdeepblue?       
          <Footer c_footerdeepblue={_site}/>
        :''}
   

     </>
   );
 };
 
 export default Location;
 