import { Link, Routes, Route } from 'react-router-dom'
import Author from './Author'

const AuthorsLinks = ({authors}) => {
    
    const renderAuthors = authors.map( ({name, id}) => {
       return (
            <li key={id}>
                <Link to={id} >
                    {name}
                </Link>
                {id}
            </li>
       ) 
    })
    return (
        <div>
            {renderAuthors}

            <Routes>
                <Route path=":authorId" element={ <Author />} />
            </Routes>
        </div>
    )
}

export default AuthorsLinks;