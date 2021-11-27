import { Link } from 'react-router-dom'

function PostsLinks({posts}) {
    return(
        <div>
            <Link to="new">New Post</Link>
            {posts && posts.map(({title, id}) => {
                return (  
                    <li key={id}>
                       <h2> <Link to={`${id}`}>{title}</Link></h2>
                    </li>
                )
            })}
        </div>
    )
}

export default PostsLinks;