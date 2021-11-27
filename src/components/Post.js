import React from "react";
import { Link, useParams } from "react-router-dom";

function Post({posts}) {
    const { postId } = useParams();
    const post = posts && posts.find( ({id}) => `${id}` === postId )
    
    return(
        <React.Fragment>
            {post ? (
                <div>
                    <Link to="edit" >Edit</Link>
                    <h1>{post.title}</h1>
                    {post.body}
                </div>
            ) : (
                <strong>Loading post...</strong>
            )}
        </React.Fragment>
    );
}

export default Post;