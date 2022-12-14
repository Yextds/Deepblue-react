import * as React from "react";

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  background,
  item,
  index,
  onClick,
}) => (
    
  <div className="faq-tab py-0 mt-2" key={item.question}>

      <button
        aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}_desc`}
        data-qa="faq__question-button"
        className={`faq__question-button !px-0 ${fontWeightBold}`}
        onClick={onClick}
      >
      <h3 className={`faq-tab-label  border-[1px]   border-[#3A78B7]  !p-2 ${background} `}>{item.question}</h3>
      </button>
      <div
        id={`faq${index + 1}_desc`}
        data-qa="faq__desc"
        className={`faq-tab-content ${showDescription}`}
      >
        {item.answer}
      </div>
  </div>
);

export default AccordionItem;