import { Routes, Route } from 'react-router-dom'
import AuthorsLinks from '../components/AuthorsLinks';
import Author from '../components/Author'

function Authors({authors}) {

    return (
        <div>
            <Routes>
                <Route path="/*" element={ <AuthorsLinks authors={authors} /> }/>
                <Route path=":authorId" element= { <Author authors={authors} />} />
            </Routes>
        </div>
    )
}

export default Authors;