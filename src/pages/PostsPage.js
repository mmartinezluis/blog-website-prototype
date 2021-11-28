import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PostsLinks from '../components/PostsLinks'
import Post from '../components/Post'
import WysiwygEditorDataPersistance from '../components/postEditor/WysiwygEditorDataPersistance'

function PostsPage({posts}) {

    return(
        <div>
            <Routes>
                <Route path="/*" element={<PostsLinks posts = {posts} />} />
                <Route path="/:postId/*" element={<Post posts={posts}  />} />
                <Route path="new" element={<WysiwygEditorDataPersistance posts={posts} />} />
                <Route path="/:postId/edit" element={<WysiwygEditorDataPersistance posts={posts} />} />
            </Routes>
        </div>
    )
}

export default PostsPage;