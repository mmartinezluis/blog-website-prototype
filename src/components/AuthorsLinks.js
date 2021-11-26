import { Link } from 'react-router-dom'

const AuthorsLinks = ({authors}) => {
    
    const renderAuthors = authors && authors.map( ({name, id}) => {
       return (
            <li key={id}>
                <Link to={`${id}`} >
                    {name} 
                </Link>
            </li>
       ) 
    })

    return (
        <div>
            {renderAuthors}
        </div>
    )
}

export default AuthorsLinks;