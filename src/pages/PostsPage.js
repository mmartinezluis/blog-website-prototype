import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PostsLinks from '../components/PostsLinks'
import Post from '../components/Post'

function PostsPage({posts}) {
    return(
        <React.Fragment>
            <Routes>
                <Route path="/*" element={<PostsLinks posts = {posts} />} />
                <Route path=":postId" element={<Post posts={posts} />} />
            </Routes>
        </React.Fragment>
    )
}

export default PostsPage;