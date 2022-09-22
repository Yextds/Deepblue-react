import * as React from "react";
import Banner from "../components/location-detail/banner";
import Breadcrumb from "../components/location-detail/Breadcrumb"
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
import  Nav  from "../components/Nav";
import Footer from "../components/footer";


/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "state",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
        "id",
        "uid",
        "meta",
        "name",
        "address",
        "mainPhone",
        "slug",
        "dm_directoryParents.name",
        "dm_directoryParents.slug",
        "dm_directoryChildren.name",
        "dm_directoryChildren.address",
        "dm_directoryChildren.slug",
        "dm_directoryChildren.dm_directoryChildren.name",
        "dm_directoryChildren.dm_directoryChildren.slug"
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
     entityTypes: ["deepblue_region"],
     savedFilterIds:[
        "dm_restaurents-directory_address_region"
        ]
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};


export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `${document.slug.toString()}`;
};

// export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
//   return [`index-old/${document.id.toString()}`];
// };


export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          description: "This site was generated by the Yext SSG",
        },
      },
    ],
  };
};

const State: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {    
    name,
    _site,
    dm_directoryParents,
    dm_directoryChildren
  } = document;


  return (
    <>
       <Nav c_deepblueheader={_site} />
         {/* <Banner name={name} c_deepBlueStoreMessage={c_deepBlueStoreMessage}/> */}
         <ul className="m-0 pt-5 flex flex-wrap  text-dark_orange">
            <li className="after:content-['/'] after:mx-1.5"><a className="transition-all duration-300 hover:text-green"
                    href="index.html">Home</a></li>
            <li>{name}</li>
        </ul>
     <div className="text-2xl text-center text-dark_orange font-bold">{name}</div> 
     {dm_directoryChildren.map((e,i)=>{
        return(
            <>
            <div className="ml-32 "><a href={`${e.slug}`}>{e.name}</a></div>
            </>
        )
     })}
        {/* <Breadcrumb dm_directoryParents={dm_directoryParents} name={name}/>                       */}
        <Footer c_footerdeepblue={_site}/>
    </>
  );
};

export default State;
