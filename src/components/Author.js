import { useParams } from 'react-router-dom'


function Author({authors}) {
    const { authorId } = useParams();
    const currentAuthor = authors.find( author => author.id === authorId) 
    
    return (
        <div>
            <h1>{currentAuthor.name}, Author id: {authorId}</h1>
        </div>
    );
}

export default Author;
