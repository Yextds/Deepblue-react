import * as React from "react";
import ANSWERS from "@yext/answers-search-ui";


ANSWERS.init({

    apiKey: "sandbox-cc8b0bde99d9d71f0f7a6fa03200807b",  //sample test experience
    experienceKey: "deepblue-test",  //sample test experience
    businessId: "2679138",  //sample test experience
    experienceVersion: "STAGING",
    onReady: function () {
    this.addComponent("SearchBar", {
        container: ".search-bar",
        placeholderText: 'What would you like to know?',
        redirectUrl: "https://master-laborious--mammal--antiques-sbx-pgsdemo-com.sbx.preview.pagescdn.com",
        customIconUrl: "/images/search.svg"
    });

 
  }
});

const SearchBar = () => {    
    return (
      <>  
      <div className="searchbar-container"></div>
      </>
    );
  };
  export default SearchBar;