import { useParams } from "react-router";

function Post({posts}) {
    const postId = useParams();
    const post = posts && posts.find( ({id}) => id === postId )
    return(
        <div>
            {post && 
                <h1>{post.title}</h1>      
            }
        </div>
    );
}

export default Post;