import * as React from "react";
import dtl3 from "../../images/dtl3.jpg";
import { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem ";
export default function Faq(props) {
  const [current, setCurrent] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [faqId, setFaqId] = useState(null);
  const [faqClass, setFaqClass] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  let preExpandedarr = [];

  if (props.c_relatedFAQs.length > 0) {
    props.c_relatedFAQs.map((e, i) => {
      if (i == 0) {
        preExpandedarr = [e];
      }
    });
  }
  const isShowContent = (e: any) => {
    setFaqId(e.currentTarget.id);

    if (isShow) {
      setIsShow(false);
      setFaqClass("");
    } else {
      setIsShow(true);
      setFaqClass("opened");
    }
  };
  function setclass(e) {
    setCurrent(e.target.id);
  }
    const renderedQuestionsAnswers = props.c_relatedFAQs.map((item, index) => {
    const showDescription = index ===  activeIndex  ? "current" : "hidden";
    const background = index ===  activeIndex  ? "bg-[#115eac] !text-white" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold faq-tab py-0 mt-2": "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        background={background}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(index);
          console.log('click',"faq")
        }}
      />
    );
  });

  return (
    <>
      <div
          className=" faq-sec w-full mt-0 lg:mt-36 xl:mt-52 relative  pb-9  before:shadow-[10px_3px_26px_rgba(0,0,0,0.10)] 
    before:border-opacity-5 before:bg-cover  before:bg-left before:bg-no-repeat before:bg-[#f8fafc] before:content-[''] z-0 before:block before:absolute before:top-0 before:left-0 before:lg:-left-1/2 before:xl:-left-[40%] before:w-full before:bottom-0 before:xl-bottom-10"
        >
          <div className=" container-custom   mx-auto relative">
        <div className=" grid grid-cols-1 lg:grid-cols-2">
        <h2 className=" text-optimabold block text-center lg:hidden text-[42px]  pt-10 xl:pt-8 pb-4 uppercase text-text-blue-dark ">FREQUENTLY ASKED QUESTIONS </h2>
            <div className="relative order-1 lg:order-0 faq-sec-inner pr-0  lg:pr-20 xl:pr-6 pb-14  xl:pb-12 2xl:pb-16">
                <h2 className=" text-optimabold hidden lg:block text-[42px] text-left pt-10 xl:pt-8 pb-4 uppercase text-text-blue-dark ">
                  FREQUENTLY ASKED QUESTIONS{" "}
                </h2>
                <div className="faq-tabs">{renderedQuestionsAnswers}</div>
              
                <div className="text-center  absolute  xl:bottom-0  2xl:bottom-4 left-0 w-full pr-0  lg:pr-16"> <a href="#" className="bg-blue-primary mt-4  xl:mt-0 uppercase  px-5
                         text-white hover:text-white text-sm !leading-9 text-center
                        inline-block rounded-sm text-main-blue   w-[163px]
                        hover:transition-all transform hover:scale-[1.09]"> view more </a> </div>

              </div>
              <div className="relative  order-0 lg:order-1  right-0 mt-4 lg:px-4 lg:px-0 mt-0 lg:-mt-10  xl:-mt-36 lg:-ml-14 xl:ml-6">
                <img
                  className="rounded-tl-2xl w-full rounded-br-2xl object-cover h-full "
                  src={dtl3}
                  alt=""
                />
              </div>
            </div>
        </div>
       
       
        </div>
    </>
  );
}

