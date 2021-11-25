import { useParams } from 'react-router-dom'


function Author() {
    const { authorId } = useParams();
    console.log(useParams())
    return (
        <div>
            <h1>Author id: {authorId}</h1>
        </div>
    );
}

export default Author;
