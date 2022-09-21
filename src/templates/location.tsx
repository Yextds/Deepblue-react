 import * as React from "react";
 import  { useState,useEffect } from 'react';
 import Banner from "../components/location-detail/banner";
 import Breadcrumb from "../components/location-detail/Breadcrumb"
 import Contact from "../components/location-detail/contact";
 import Nearby from "../components/location-detail/Nearby";
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
 } from "@yext/pages";
 import PageLayout from "../components/PageLayout";
import Services from "../components/location-detail/Services";
import About from "../components/location-detail/About";
import Menu from "../components/location-detail/Menu";
import Model from "../components/location-detail/Model";
import { SearchHeadlessProvider } from "@yext/search-headless-react";
import Faciltites from "../components/location-detail/Facilities";
import { JsonLd } from "react-schemaorg";
import   Nav  from "../components/Nav";
import Footer from "../components/footer";
import Faq from "../components/location-detail/Faq";
 
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
      "c_relatedFAQs.answer"
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
 
 const Location: Template<TemplateRenderProps> = ({
   relativePrefixToRoot,
   path,
   document,
 }) => {


  console.log('-----');

   const {    
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
     yextDisplayCoordinate
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
    <Nav />
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
          <Menu c_relatedmenuitemsdeepblue={c_relatedmenuitemsdeepblue} c_documentURLDeepBlue1={c_documentURLDeepBlue1.uRL2} c_documentURLDeepBlue1prim={c_documentURLDeepBlue1.primaryCTA} name="Allergens"/>
                        :''}
          
          {c_facilitiesService?
          <Faciltites c_facilitiesService={c_facilitiesService} />
          :''}
          
          {c_relatedFAQs?
          <Faq c_relatedFAQs={c_relatedFAQs}/>:''}
          
          {yextDisplayCoordinate?
          <Nearby latitude={yextDisplayCoordinate.latitude} longitude={yextDisplayCoordinate.longitude}/>:''}     
    <Footer/>


     </>
   );
 };
 
 export default Location;
 