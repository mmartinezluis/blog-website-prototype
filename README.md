# Blog Website Prototype

### Introduction
This app is a prototype for a blog website that uses Draft JS Wysiwyg as a post editor and create-react-app. 
            
The app is furnished with the necessary components to demonstrate one way of persisting data to a back end using the Wysiwyg editor.                 

The app utilizes React Router V6 for routes and a json server to emulate a back end. Because I wanted to make this demonstration in a codesanbox rather than in a deployed repository, I had to find a way of starting the react client and the json server simultaneously so that the visitor of the codesanbox does not need to run any scripts for the app to start working. To achieve this, the app uses the `concurretly` npm package for running multiple commands concurrenltly when starting the app. The demo codesandbox for this repository can be found [here](https://codesandbox.io/s/blog-website-prototype-p4lwp?file=/src/db.json). You can find a full discussion on how the post editor for the app works in my blog post [Persisting Your Draft JS Wysiwyg Editor's Data To Your BackEnd]().

### Running This Repository Locally
You can run this app in your computer by following these steps:
1. Clone this repo by running this in your terminal:
```
git clone https://github.com/mmartinezluis/blog-website-prototype.git
```
2. Open the cloned folder using a code editor. For VScode this would be `cd blog-website-prototype`, then `code .`.
3. Once open, run `npm install`.
4. Finally, run `npm start`. At ths point, a new tap in your browser opens and the app loads on the page. 



            