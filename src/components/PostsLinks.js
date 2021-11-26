import { Link } from 'react-router-dom'

function PostsLinks({posts}) {
    return(
        <div>
            {posts && posts.map(({title, id}) => {
                return (
                    <li key={id}>
                        <Link to={`${id}`}>{title}</Link>
                    </li>
                )
            })}
        </div>
    )
}

export default PostsLinks;