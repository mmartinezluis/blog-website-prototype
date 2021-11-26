import React from "react";
import { useParams } from "react-router-dom";

function Post({posts}) {
    const { postId } = useParams();
    const post = posts && posts.find( ({id}) => `${id}` === postId )
    console.log(post)
    return(
        <React.Fragment>
            {post && 
                <div>
                    <h1>{post.title}</h1>
                    {post.body}
                </div>
            }
        </React.Fragment>
    );
}

export default Post;