exports.handler = async function(event, context) {
    
    const express = require('express');
    const app = express();
    app.use(require("prerender-node").set("prerenderToken", process.env.REACT_APP_PRERENDER_TOKEN));
    const prerender = require('prerender');
    const server = prerender();
    server.start();
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Started Prerender.io server"})
    };
}

