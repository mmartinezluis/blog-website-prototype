import React, { useState } from "react";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { convertFromHTML } from "draft-convert";

function WysiwygEditorDataPersistance() {
  
    const [editorState, setEditorState] = useState( 
        () => {
            EditorState.createEmpty();
        }
    );

    const onEditorStateChange= (editorState) => {
        setEditorState(editorState);
    };

    return (
        <div className="textEditor">
            <header className="posteditor-header">
                Post Editor
            </header>
            <Editor
                editorState={editorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                onEditorStateChange={onEditorStateChange}
            />
        </div>
    );
}

export default WysiwygEditorDataPersistance;
