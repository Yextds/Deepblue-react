import * as React from "react";
import {useEffect} from "react";
		
class SearchBar extends React.Component {
	
  render() {
    return <div className="SearchBarContainer"></div>;
  }

  componentDidMount() {
    const answersScriptPromise = new Promise((resolve, reject) => {
      const answersScript = document.createElement('script');
      document.body.appendChild(answersScript);
      answersScript.onload = resolve;
      answersScript.onerror = reject;
      answersScript.async = true;
      answersScript.src = 'https://assets.sitescdn.net/answers/v1/answers.min.js';
    });

    answersScriptPromise.then(() => {
      ANSWERS.init({
        apiKey: 'sandbox-cc8b0bde99d9d71f0f7a6fa03200807b',
        experienceKey: 'deepblue-test',
		businessId: "2679138", 
		experienceVersion: "STAGING",		
        onReady: function() {
          ANSWERS.addComponent('SearchBar', {
            container: ".SearchBarContainer",
			placeholderText: 'What would you like to know?',
			redirectUrl: "https://master-laborious--mammal--antiques-sbx-pgsdemo-com.sbx.preview.pagescdn.com",
			customIconUrl: "/src/images/search.svg"
          });
        }
      });
    });
  }
}

export default SearchBar;