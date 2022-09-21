import * as React from "react";
import  { useState,useEffect } from 'react';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Tabs, TabList, Tab, TabPanel } from '@zendeskgarden/react-tabs';
import Model from "./Model";
  
const Menu = (props) => {
    console.log(props,"jfvyhfchygfchfc")
    const [selectedTab, setSelectedTab] = useState('tab-1');
    const [myDataAccordintToMe, setMyDataAccordintToMe] = useState({});
    const [current,setCurrent]=useState('');
   var myObject=[];

   function setClass(e){
    setCurrent(e.target.id);
   }


   
 useEffect(()=>{

    const keysFromData =props.c_relatedmenuitemsdeepblue?props.c_relatedmenuitemsdeepblue.map((e)=>{ return e.c_menunav }):'';

    if(keysFromData){
        var keysFromDataUnique = keysFromData.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
        var dataAccordintToMe = {};
        for (let index = 0; index < keysFromDataUnique.length; index++) {
            const element = keysFromDataUnique[index]
            dataAccordintToMe[element] = props.c_relatedmenuitemsdeepblue.filter((fe)=>{
                return fe.c_menunav==element
            })
        }   
        setMyDataAccordintToMe(dataAccordintToMe);
    }
 },[])
  return (  
    <>
    { props.c_relatedmenuitemsdeepblue!== undefined?
     <ThemeProvider>
      <div className="xyz">
      <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>
         <div id="menu" className="container-custom  mx-auto border-none">
            <div className="menu-main-bx ">
             <h2 className=" text-[42px] text-center py-2 lg:pt-8 lg:pb-5 uppercase text-[#115EAC] ">Menu</h2>
        <TabList className="!border-none">          
        <ul id="tabs" className="border-none bg-blue-primary hidden border border-[#707070]  justify-center lg:justify-around lg:px-3 lg:inline-flex rounded-[30px]  py-2 xl:py-3 px-1 w-full border-b">   
            { Object.keys(myDataAccordintToMe).map((menuItem,i)=>{             
            return(
                <>
                <Tab item={`tab-${(i+1)}`} className="!border-none !px-0  text-white font-semibold !py-2" >
                
                <a onClick={setClass} id={`${menuItem}`} href={`#${ menuItem }`} className={selectedTab=='tab-0'?'border-none text-white px-4 py-2 tab-link  current':`border-none text-white px-4 py-2 tab-link  ${current==menuItem?'current':''}`}> { menuItem.replaceAll('_',' ') }</a>
               
                    </Tab>      
                </>
            )
            })}
             </ul> 
        </TabList> 
        <div id="tab-contents">
        <a id="default-tab" href="#fish" className="text-black mob-tab-label  border-[1px] !text-base   border-[#3A78B7]  !p-2  current   p-4 tab-link !block lg:!hidden">FISH & CHIPS</a>    
        <div id="fish" className="p-4 border border-blue-primary lg:border-none">
        <div className="flex flex-wrap xl:-mx-6">
        { Object.keys(myDataAccordintToMe).map((menuItem,i)=>{             
            return(
                <>

                <TabPanel className="w-full" key={menuItem} item={`tab-${(i+1)}`}>
<div className="flex  flex-wrap  xl:-mx-6 justify-center">
                    {props.c_relatedmenuitemsdeepblue?<>
                        {props.c_relatedmenuitemsdeepblue.map((itemdish,i)=>{
                            
                    return( (menuItem == itemdish.c_menunav) ?<>
                             <div className="menu-box">
                                        {itemdish.photoGallery.map((photo,p)=>{
                                            return(
                                                <div className="menu-img"> <img src={photo.image.url} alt=""/> </div>
                                            )
                                        })}                      
                                        <h4>{itemdish.name}</h4>
                                        </div>
                                        </>
                                        : ""  
                                )      
                        })}
                    </>:''}
                    </div>
                </TabPanel>

                </>
            )
            })}
             </div>
           </div>
            </div>
            <div className="allergens-sec">
                <ul>
                <li>
              
                
               <Model c_documentURLDeepBlue1={props.c_documentURLDeepBlue1} c_documentURLDeepBlue1prim={props.c_documentURLDeepBlue1prim} name="Allergens"/>
                 
                </li>
                <li><a className="#"> Collection</a></li>
                <li><a className="#"> Delivery : Our Driver</a></li>
                <li><a className="#"> Dine In</a></li>
                </ul>
            </div> 
            </div> 
         </div>  
      </Tabs>
      </div>
      </ThemeProvider>
      :''}
      



</>
    
  );
};
  
export default Menu;