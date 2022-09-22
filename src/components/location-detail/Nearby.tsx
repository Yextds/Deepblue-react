import * as React from "react";
import ApiCall from "../ApiCall";
import { openClose } from "../openClose";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Nearby(props: any) {
  
  const [neabyData, setnearbyData] = React.useState(props.externalApiData.response.entities);

  

  return (
   
    <>
      <div className="nearby-sec">
        <div className="container-custom mx-auto">
          <div className="w-full text-center">
            <h3>NEARBY LOCATIONS</h3>
          </div>
          
                <Splide
                  options={{
                    perPage: 3,
                    perMove: 1,
                    type:'slide',
                    pagination: false,
                    lazyLoad: 'nearby',
                    arrows:false,
                    drag:false,
                    breakpoints: {
                      1279: {
                        perPage: 1,
                      },
                      767: {
                        perPage: 1,
                        pagination: true,
                        drag:true,
                      },
                      575: {
                        perPage: 1,
                        pagination: true,
                        drag:true,
                      },
                    }
                  }}
                >
                  {neabyData.map((location, index) => {
                    let abc = openClose.parseTimeZoneUtcOffset(
                      location.timeZoneUtcOffset
                    );
                    return (
                      <>
                        {index>0?
                          <SplideSlide key={location.name}>
                            <div className="near-location">
                              <h4>
                                <a href={location.slug}>{location.name}</a>
                              </h4>
                              <div className="store-address">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19.23"
                                  height="28"
                                  viewBox="0 0 21.23 30"
                                >
                                  <g transform="translate(0 0)">
                                    <path
                                      d="M6.789,23.576c1.079,1.719,2.246,3.8,3.4,5.825.427.747.813.859,1.326-.027,1.113-1.931,2.207-3.931,3.359-5.8,3.5-5.661,9.223-11.181,4.67-18.8C15.5-1.987,4.5-1.265,1.216,5.034c-3.769,7.219,2.117,13.039,5.574,18.542Z"
                                      fill="#fff"
                                      fill-rule="evenodd"
                                    />
                                    <path
                                      d="M10.61,6.247a4.116,4.116,0,1,1-4.116,4.116A4.117,4.117,0,0,1,10.61,6.247Z"
                                      fill="#337DC6"
                                      fill-rule="evenodd"
                                    />
                                  </g>
                                </svg>
                                <p>{location.address.line1} {location.address.line2} {location.address.postalCode}</p>
                              </div>
                              <div className="store-phone">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="15.35"
                                  height="23.96"
                                  viewBox="0 0 14.35 22.96"
                                >
                                  <path
                                    id="Icon_awesome-mobile-alt"
                                    data-name="Icon awesome-mobile-alt"
                                    d="M12.2,0H2.152A2.153,2.153,0,0,0,0,2.152V20.807A2.153,2.153,0,0,0,2.152,22.96H12.2a2.153,2.153,0,0,0,2.152-2.153V2.152A2.153,2.153,0,0,0,12.2,0ZM7.175,21.525A1.435,1.435,0,1,1,8.61,20.09,1.433,1.433,0,0,1,7.175,21.525ZM12.2,16.682a.54.54,0,0,1-.538.538H2.691a.54.54,0,0,1-.538-.538V2.691a.54.54,0,0,1,.538-.538h8.969a.54.54,0,0,1,.538.538Z"
                                    fill="#fff"
                                  />
                                </svg>
                                <p>
                                  <a href={`tel:${location.mainPhone}`}>
                                    {location.mainPhone}
                                  </a>
                                </p>
                              </div>
                              <div className="store-link">
                                <a
                                  className="direction"
                                  href={`https://www.google.com/maps/dir/?api=1&destination=${location.yextDisplayCoordinate.latitude},%20${location.yextDisplayCoordinate.longitude}`}
                                  target="_blank"
                                >
                               
                                  Get Directions{" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16.843"
                                    height="11.547"
                                    viewBox="0 0 13.843 9.547"
                                  >
                                    <path
                                      id="Icon_ionic-md-arrow-forward"
                                      data-name="Icon ionic-md-arrow-forward"
                                      d="M-.023,11.347H11.523L8.181,14.688l.865.835L13.82,10.75,9.046,5.977l-.835.835,3.312,3.342H-.023Z"
                                      transform="translate(0.023 -5.977)"
                                    />
                                  </svg>
                                </a>
                              </div>
                              <div className="mt-5 lg:absolute lg:bottom-4 "></div>
                            </div>
                            </SplideSlide>

:''}
                      </>
                    );
                  })}
                </Splide>
        </div>
      </div>
    </>
  );
}
