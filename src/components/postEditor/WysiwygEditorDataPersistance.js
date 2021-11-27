import React, { useState } from "react";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { convertFromHTML } from "draft-convert";
import { useParams, useLocation } from "react-router";
import { addPost, editPost } from "../../actions/postActions";

function WysiwygEditorDataPersistance() {
  
    const location  = useLocation();

    const [editorState, setEditorState] = useState( 
        () => {
            EditorState.createEmpty();
        }
    );

    const onEditorStateChange= (editorState) => {
        setEditorState(editorState);
    };

    function publsih() {
        const postData = draftToHtml(
            convertFromHTML(
                editorState.getCurrentContent()
            )
        )
        addPost(postData);
    }

    function update() {
        const postData = draftToHtml(
            convertFromHTML(
                editorState.getCurrentContent()
            )
        )
        editPost(postData);
    }

    let buttons;
    if(location.pathname === "/posts/new") {
        buttons = <button onClick={publsih}>Publish</button>
     } else if(location.pathname === "/posts/new") {
        buttons = <button onClick={update}>Publish</button>
     }
    console.log(buttons)

    return (
        <div className="textEditor">
            <header className="posteditor-header">
                <strong>Post Editor</strong>
            </header>
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


