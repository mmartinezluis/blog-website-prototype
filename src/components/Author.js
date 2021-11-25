import { useParams } from 'react-router-dom'


function Author({authors}) {
    const { authorId } = useParams();
    const currentAuthor = authors.find( ({id}) => `${id}` === authorId) 
    return (
        <div>
            <h1>{currentAuthor.first_name}, Author Id: {authorId}</h1>
        </div>
    );
}

export default Author;
