import { Link } from 'react-router-dom'

const AuthorsLinks = ({authors}) => {
    
    const renderAuthors = authors && authors.map( ({first_name, last_name, id}) => {
       return (
            <li key={id}>
                <Link to={`${id}`} >
                    {first_name} {last_name}
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