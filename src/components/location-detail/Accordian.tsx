import * as React from 'react';
import Hours from '../hours';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


export default function Accordian(props) {
    let preExpandedarr=[];
    if(props.deliveryHours){
        preExpandedarr=[props.deliveryHours]
    }else if(props.hours){
        preExpandedarr=[props.hours]
    }
    else{
        preExpandedarr=[props.takeoutHours]
    }
   
    console.log('preExpandedarr', preExpandedarr)

    return (
        <Accordion preExpanded={preExpandedarr}>
                 {props.deliveryHours? <AccordionItem uuid={props.deliveryHours}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h4 className="tab-label text-[22px]  current">RESTAURANT HOURS</h4>
                  
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="tab-content">
                        <div className="hours">
                   <Hours hours={props.deliveryHours}/>
                           </div>
                        </div>  
                </AccordionItemPanel>
            </AccordionItem>:''}
            
            {props.hours?<AccordionItem uuid={props.hours}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h4 className="tab-label text-[22px]  " >OPENING HOURS</h4>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="tab-content">
                        <div className="hours">
                      <Hours hours={props.hours}/>
                           </div>
                        </div>
                </AccordionItemPanel>
            </AccordionItem>:''}     

            {props.takeoutHours? <AccordionItem uuid={props.takeoutHours}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h4  className="tab-label text-[22px]" >TAKEOUT HOURS</h4>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="tab-content">
                        <div className="hours">
                <Hours hours={props.takeoutHours}/>
                           </div>
                        </div>
                </AccordionItemPanel>
            </AccordionItem>:''}
        </Accordion>
    );
}