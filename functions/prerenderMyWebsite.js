exports.handler = async function(event, context) {
    const prerender = require('prerender');
    const server = prerender();
    server.start();
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Started Prerender.io server"})
    };
}

