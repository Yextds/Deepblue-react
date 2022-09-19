import * as React from 'react';
import dtl3 from "../../images/dtl3.jpg"
import  { useState,useEffect } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


export default function Faq(props) {
    const[current,setCurrent]=useState('');
    let preExpandedarr=[];

    if(props.c_relatedFAQs.length > 0){
        props.c_relatedFAQs.map((e,i)=>{
            if(i==0){
                preExpandedarr=[e.question]
            
            } 
        })
    }

    function setclass(e){
        setCurrent(e.target.id)
    }
    
    return (
    <>
    {props.c_relatedFAQs.length>0?
    <div className=" faq-sec w-full mt-0 lg:mt-36 xl:mt-52 relative  pb-9  before:shadow-[10px_3px_26px_rgba(0,0,0,0.10)] 
    before:border-opacity-5 before:bg-cover  before:bg-left before:bg-no-repeat before:bg-[#f8fafc] before:content-[''] z-0 before:block before:absolute before:top-0 before:left-0 before:lg:-left-1/2 before:xl:-left-[40%] before:w-full before:bottom-0 before:xl-bottom-10">
        <div className=" container-custom   mx-auto relative">
            <div className=" grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative pr-0  lg:pr-16 pb-14">
                        <h2 className=" text-optimabold hidden lg:block text-[42px] text-left pt-10 xl:pt-8 pb-4 uppercase text-text-blue-dark ">FREQUENTLY ASKED QUESTIONS </h2>
                    <div className="faq-tabs" >
                  
              {props.c_relatedFAQs.map((e,i)=>{
                
                  return(<>
                <div  className={`faq-tab py-0 mt-2  ${current==e.question?'current':''}`} >
                 <Accordion  preExpanded={preExpandedarr}>
                 {e.question? <AccordionItem uuid={e.question}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h3 id={e.question} className="faq-tab-label  border-[1px] !text-base   border-[#3A78B7]  !p-2 " onClick={setclass}>{e.question}</h3>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="faq-tab-content">
                  {e.answer}
                </div>
                </AccordionItemPanel>
               </AccordionItem>:''}
              </Accordion>
              </div>  
                  </>)
              })}  
      </div>
      <div className="text-center  absolute bottom-0 xl:bottom-0 left-0 w-full pr-0  lg:pr-16"> <a href="#" className="bg-blue-primary mt-4  xl:mt-0 uppercase  px-5
                         text-white hover:text-white text-sm !leading-9 text-center
                        inline-block rounded-sm text-main-blue   w-[163px]
                        hover:transition-all transform hover:scale-[1.09]"> view more </a> </div> 

    </div>
<div className="relative  order-0 lg:order-1  right-0 mt-4 px-4 lg:px-0 mt-0 lg:-mt-10  xl:-mt-36 lg:-ml-14 xl:ml-6">
<img className="rounded-tl-2xl w-full rounded-br-2xl  " src={dtl3} alt=""/>
    </div>
    </div>
    </div>
    </div>
:''}
    </>
    );
}