import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PostsLinks from '../components/PostsLinks'
import Post from '../components/Post'
// import WysiwygDataPersistence from '../components/postEditor/WysiwygDataPersistence'
import WysiwygStable from '../components/postEditor/WysiwygStable'

function PostsPage({posts}) {

    return(
        <div>
            <Routes>
                <Route path="/*" element={<PostsLinks posts = {posts} />} />
                <Route path="/:postId/*" element={<Post posts={posts}  />} />
            {/* Editor with Data Persistence */}
                {/* <Route path="new" element={<WysiwygDataPersistence posts={posts} />} />
                <Route path="/:postId/edit" element={<WysiwygDataPersistence posts={posts} />} /> */}

            {/* Edtiro with Data Persistence and Stable on Page Refresh */}
                <Route path="new" element={<WysiwygStable posts={posts} />} />
                <Route path="/:postId/edit" element={<WysiwygStable posts={posts} />} />
            </Routes>
        </div>
    )
}

export default PostsPage;