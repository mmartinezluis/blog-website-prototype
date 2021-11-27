         
         // Im not sure if I have to run the below three lines for prerender.io to work
// const prerender = require('prerender');
// const server = prerender();
// server.start();
require('dotenv').config();
import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

const PORT = 8000;
const app = express();

// app.use(require("prerender-node").set("prerenderToken", process.env.REACT_APP_PRERENDER_TOKEN));

app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
});

// Is this the correct place for this line?


app.use(express.static(path.resolve(__dirname, '..', 'build')))


app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});






// app.get('/*', (req, res, next) => {
//   fs.readFile(path.resolve("./build/index.html"), 'utf8', (err, htmlData) => {
//       if (err) {
//           console.error('Error during file reading', err);
//           return res.status(404).end()
//       }
      // get post info
      // const postId = req.query.id;
      // const post = getPostById(postId);
      // if(!post) return res.status(404).send("Post not found");

      // inject meta tags
//       htmlData = htmlData.replace(
//           "<title>React App</title>",
//           `<title>My Title</title>`
//       )
//       .replace('__META_OG_TITLE__', 'This is the OG title')
//       .replace('__META_OG_DESCRIPTION__', 'post.description')
//       .replace('__META_DESCRIPTION__', 'post.description')
//       .replace('__META_OG_IMAGE__', 'post.thumbnail')
//       return res.send(htmlData);
//   });
// });
// listening...
// app.listen(PORT, (error) => {
//   if (error) {
//       return console.log('Error during app startup', error);
//   }
//   console.log("listening on " + PORT + "...");
// });