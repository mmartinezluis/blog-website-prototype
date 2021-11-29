# Blog Website Prototype

This project attemps to render dynamic meta tags starting with a create-react-app and using a Node JS server. The goal is to inject the meta tags to the code retrieved by search engines in the first render of the page. Potential solutions currently under test include manual setup of server-side-rendering during first request to the app's root url, and using react-helmet and prerender.io. Project is currrently deployed at [Server Side Rendering](https://server-side-rendering-seo.netlify.app/).

The desired result is that the meta tags are present when sharing the url of a given route so that a preview image and a descrition of the shared page are included when sharing the link in social medial platforms.

If you have any solutions for solving this problem, please feel free to reach out to me. It will be appreciated. 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


Blog Website Prototype
This app is a prototype for a blog website that uses Draft JS Wysiwyg as a post editor. 
            
The app is furnished with the necessary components to demonstrate one way of persiting data to a back end using the Wysiwyg editor.                 
            
The app utilizes React Router v6 for routes, and a json server to emulate a back end. Because I wanted to make this demonstration in a codesanbox rather than a deployed repository, I had to find a way of starting the react client and the json Server simoultanesly so that the visitor of the codesanbox does not need to run any 
scripts for the app to start working. To achieve this, the app uses the 
concurretly npm package for running multiple commands concurrenltly when starting the app. [more info upcoming ...]
            