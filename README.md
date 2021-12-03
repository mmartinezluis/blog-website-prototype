# Blog Website Prototype

### Introduction
This app is a prototype for a blog website that uses Draft JS Wysiwyg as a post editor and create-react-app. 
            
The app is furnished with the necessary components to demonstrate one way of persisting data to a back end using the Wysiwyg editor.   

The app utilizes React Router v6 for routes and a json server to emulate a back end. Because I wanted to make this demonstration in a codesanbox rather than in a deployed repository, I had to find a way of starting the react client and the json server simultaneously so that the visitor of the codesanbox does not need to run any scripts for the app to start working. To achieve this, the app uses the `concurretly` npm package for running multiple commands concurrenltly when starting the app. 

This respository contains two post editors: a data persistence Wysiwyg editor and a stable Wysiwyg editor (that includes data persistence). You can find a working codesandbox for the data persistence editor [here](https://codesandbox.io/s/blog-website-prototype-p4lwp?file=/src/index.js), and a codesandbox for the stable Wysiwyg editor [here](https://codesandbox.io/s/draft-js-wysiwygstable-53qnq?file=/src/index.js). 

This repo is part of my one of my blog posts, [Stabalizing Your Draft JS Wysiwyg Editor](https://devblog.dev/posts/136) in my website [DevBlog](https://devblog.dev/). There will be at least two blog posts that will explain how the code for this repository works.

### Running This Repository Locally
You can run this app in your computer by following these steps:
1. Clone this repo by running this in your terminal:
```
git clone https://github.com/mmartinezluis/blog-website-prototype.git
```
2. Open the cloned folder using a code editor. For VScode this would be `cd blog-website-prototype`, then `code .`.
3. Once open, run `npm install`.
4. Finally, run `npm start`. At this point, a new tap in your browser opens and the app loads on the page. 



            