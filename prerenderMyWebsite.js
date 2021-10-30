exports.handler = async function(event, context) {
    // const prerender = require('./lib');
    // const prerender = require('prerender');
    // const server = prerender({
    //     chromeLocation: '/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary'
    // });
    // server.start();

    const prerender = require('prerender');
    const server = prerender();
    server.start();
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Started Prerender.io server"})
    };
}

