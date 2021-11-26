import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PostsLinks from '../components/PostsLinks'
import Post from '../components/Post'

function PostsPage({posts}) {
    return(
        <React.Fragment>
            <PostsLinks posts = {posts} />
            <Post posts = {posts} />

            <Routes>
                <Route path="/*" element={<PostsLinks />} />
                <Route path=":postId" element={<Post />} />
            </Routes>
        </React.Fragment>
    )
}

export default PostsPage;