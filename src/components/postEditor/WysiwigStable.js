import React, { useState, useEffect, useCallback } from "react";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { convertFromHTML } from "draft-convert";
import { useParams, useLocation, useNavigate  } from "react-router-dom";
import { addPost, editPost } from "../../actions/postActions";
import { validPost } from './validator'

function WysiwygEditorDataPersistance({posts}) {
  
    const routeParams = useParams();
    const location  = useLocation();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [draftOrPost, setDraftOrPost] = useState({body: "<p>Loding content...</p>"})

    const loadedDraftOrPost = useCallback( () => {         
        return posts.find( post => `${post.id}` === routeParams.postId)
    },[posts, routeParams])

    const loadedInitialEditorState = useCallback( () => (EditorState.createWithContent(convertFromHTML(draftOrPost.body))),[draftOrPost])

    const reinitializeState = useCallback ((argument) => {
        const blocksFromHTML = htmlToDraft(argument?.body);
        const { contentBlocks, entityMap} = blocksFromHTML
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        return EditorState.createWithContent(contentState)
    },[])

    useEffect( () => {
        if (location.pathname !== "/posts/new") {
            const content = loadedDraftOrPost()
            setDraftOrPost(content)
            setEditorState(reinitializeState(content))
        }
      },[location, loadedDraftOrPost, reinitializeState, draftOrPost]
    )

    const [editorState, setEditorState] = useState( 
        () => {
          if(location.pathname === "/posts/new") {    
            return reinitializeState({body: ""})
          } else {
            return loadedInitialEditorState()
          }
        }
    );
        
    const onEditorStateChange= (editorState) => {
        setEditorState(editorState);
    };

    function publish() {
        const body = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        if(validPost(title, body)) {
            console.log(body)
            const postData = {title, body}
            addPost("posts", postData, navigate);
        } else {
            console.log("Posts need to include a title and a body")
        }
    }

    function update() {
        const body = draftToHtml(convertToRaw(editorState.getCurrentContent())).trim()
        const id = routeParams.postId;
        console.log(title)
        console.log(body)
        if(validPost(title, body)) {
            const postData = {title, body}
            editPost(id, postData, navigate);
        } else {
            console.log("Posts need to include a title and a body")
        }
    }

    const handleTitle= (event) => {
        setTitle(event.target.value)
    }

    let buttons;
    if(location.pathname === "/posts/new") {
        buttons = <button onClick={publish}>Publish</button>
     } else {
        buttons = <button onClick={update}>Update</button>
     }
    
    return (
        <div className="textEditor">
            <header className="posteditor-header">
                <strong>Post Editor</strong>
            </header>
            <input 
                type="text" 
                placeholder="Title" 
                value = {title}
                onChange={handleTitle}
            />
            <Editor
                editorState={editorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                onEditorStateChange={onEditorStateChange}
            />
            {buttons}
        </div>
    );
}

export default WysiwygEditorDataPersistance;


