import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Interweave from 'interweave'
import { deletePost } from './../actions/postActions'

function Post({posts}) {
    const { postId } = useParams();
    const navigate = useNavigate()
    const post = posts && posts.find( ({id}) => `${id}` === postId )

    return(
        <React.Fragment>
            {post ? (
                <div>
                    <Link to="edit" style={{ padding: 20 }}>
                        Edit
                    </Link>
                        <button
                           onClick={() => deletePost(postId, navigate)}
                           style= {{ 
                                background: "none",
                                color: "inherit",
                                border: "none",
                                padding: "0",
                                font: "inherit",
                                cursor: "pointer",
                                outline: "inherit",
                           }}
                        >
                            Delete
                         </button>
                    
                    <h1>{post.title}</h1>
                    <Interweave  content={post.body} />
                </div>
            ) : (
                <strong>Loading post...</strong>
            )
            }
        </React.Fragment>
    );
}

export default Post;