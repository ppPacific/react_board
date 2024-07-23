import {useRef} from "react";
import EmailEditor, {EditorRef, EmailEditorProps} from "react-email-editor";

import React from 'react';
import defaultBlockList from './defaultBlockList.json'
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
            <div className={"p-4 bg-blue-600 flex flex-row"}>
                <h1 className={"text-white"}>Email Template Editor</h1>

                {/*<button onClick={togglePreview}>*/}
                {/*    {preview ? 'Hide' : 'Show'} Preview*/}
                {/*</button>*/}
                <button className={"p-2 bg-white rounded-xl mr-2 "} onClick={saveDesign}>Save Design</button>
                <button className={"p-2 bg-white rounded-xl"} onClick={exportHtml}>Export HTML</button>
            </div>

            <React.StrictMode>
            <EmailEditor
                ref={emailEditorRef}
                //onLoad={onLoad}
                defaultBlockList={defaultBlockList}
                onReady={onReady}
                options={{
                    version: "latest",
                    tabs: {
                        content: {
                            enabled: true,
                        },
                        blocks: {
                            enabled: false,
                        },
                        // 'custom#my_tab': {
                        //     enabled: true,
                        // }
                    },
                    appearance: {
                        theme: "modern_light",
                        panels: {
                            tools: {
                                dock: 'left'
                            }
                        }
                    },
                    tools: {
                        button: {
                            enabled:true,
                            properties: {
                                buttonColors: {
                                    value: {
                                        color: "#FFFFFF",
                                        backgroundColor: "#e03a40",
                                        hoverColor: "#FFFFFF",
                                        hoverBackgroundColor: "#075170"
                                    }
                                }
                            }
                        },
                        column: {
                            enabled:true
                        },
                        social: {
                            enabled:true
                        },
                    },
                    features: {
                        preview: true
                    }
                }}
            />
            </React.StrictMode>
        </div>
    )

}

export default Board;