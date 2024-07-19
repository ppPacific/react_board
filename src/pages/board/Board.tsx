import {useRef} from "react";
import EmailEditor, {EditorRef, EmailEditorProps} from "react-email-editor";

import React from 'react';

const Board = ()=>{
    const emailEditorRef = useRef<EditorRef | null>(null);
    //const [preview, setPreview] = useState(false);

    const saveDesign = () => {
        const unlayer = emailEditorRef.current?.editor;

        unlayer?.saveDesign((design) => {
            console.log('saveDesign', design);
            alert('Design JSON has been logged in your developer console.');
        });
    };

    const exportHtml = () => {
        const unlayer = emailEditorRef.current?.editor;

        unlayer?.exportHtml((data) => {
            const {  html } = data;
            console.log('exportHtml', html);
            alert('Output HTML has been logged in your developer console.');
        });
    };

    // const togglePreview = () => {
    //     const unlayer = emailEditorRef.current?.editor;
    //
    //     if (preview) {
    //         unlayer?.hidePreview();
    //         setPreview(false);
    //     } else {
    //         unlayer?.showPreview('desktop');
    //         setPreview(true);
    //     }
    // };

    // const onDesignLoad = (data) => {
    //     console.log('onDesignLoad', data);
    // };

    // const onLoad: EmailEditorProps['onLoad'] = (unlayer) => {
    //     console.log('onLoad', unlayer);
    //     unlayer.addEventListener('design:loaded', onDesignLoad);
    //     unlayer.loadDesign(sample);
    // };

    const onReady: EmailEditorProps['onReady'] = (unlayer) => {
        console.log('onReady', unlayer);
    };

    return (
        <div>
            <div>
                <h1>React Email Editor v (Demo)</h1>

                {/*<button onClick={togglePreview}>*/}
                {/*    {preview ? 'Hide' : 'Show'} Preview*/}
                {/*</button>*/}
                <button onClick={saveDesign}>Save Design</button>
                <button onClick={exportHtml}>Export HTML</button>
            </div>

            <React.StrictMode>
            <EmailEditor
                ref={emailEditorRef}
                //onLoad={onLoad}
                onReady={onReady}
                options={{
                    version: "latest",
                    appearance: {
                        theme: "modern_light"
                    }
                }}
            />
            </React.StrictMode>
        </div>
    )

}

export default Board;