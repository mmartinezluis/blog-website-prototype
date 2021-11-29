function Home() {
    return ( 
        <div>
            <h1>Blog Website Prototype</h1>
            <p>This app is a prototype for a blog website that uses Draft JS Wysiwyg as a
               post editor. 
            </p>
            <p>The app is furnished with the necessary components to demonstrate one way of
                persiting data to a back end using the Wysiwyg editor.                 
            </p>
            <p>The app utilizes React Router v6 for routes, and a json server to emulate a back end.
                Because I wanted to make this demonstration in a codesanbox rather than a deployed
                repository, I had to find a way of starting the react client and the json Server
                simoultanesly so that the visitor of the codesanbox does not need to run any 
                scripts for the app to start working. To achieve this, the app uses the 
                concurretly npm package for running multiple commands concurrenltly when starting the
                app. [more info upcoming ...]
            </p>

        </div>
    )
}

export default Home