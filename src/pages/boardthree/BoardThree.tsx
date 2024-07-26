import React, {useState} from "react";
import './boardthree.scss';

const BoardThree = () => {
    const [widgets, setWidgets] = useState<string[]>([])

    function handleOnDrag(e: React.DragEvent, widgetType: string) {
        e.dataTransfer.setData("widgetType", widgetType);
    }

    function handleOnDrop(e: React.DragEvent) {
        const widgetType = e.dataTransfer.getData("widgetType");
        console.log("widgetType", widgetType);
        setWidgets([...widgets, widgetType]);
    }

    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
        console.log("drag over");
    }

    // const editor = new EditorJS({
    //     /**
    //      * Id of Element that should contain the Editor
    //      */
    //     holder: 'editorjs',
    //
    //     /**
    //      * Available Tools list.
    //      * Pass Tool's class or Settings object for each Tool you want to use
    //      */
    //     tools: {
    //         header: {
    //             class: Header,
    //             inlineToolbar: ['link']
    //         },
    //         list: {
    //             class: List,
    //             inlineToolbar: true
    //         }
    //     },
    // })
    // <p>{JSON.stringify(data, null, 4)}</p>
    // <p>{JSON.stringify(getValues(), null, 4)}</p>
    return (
        <>
            <div>
                <button
                    className={"p-2 bg-black text-white"}
                    onClick={() => {
                        console.log(widgets)
                    }}>Export
                </button>
                <div className={"widgets"}>
                    <div
                        className={"widget"}
                        draggable
                        onDragStart={(e) => handleOnDrag(e, "WidgetA")}>
                        Widget A
                    </div>
                    <div
                        className={"widget"}
                        draggable
                        onDragStart={(e) => handleOnDrag(e, "WidgetB")}>
                        Widget B
                    </div>
                </div>
                <div className={"page"} onDrop={handleOnDrop} onDragOver={handleDragOver}>
                    {widgets.map((widget, index) => (
                        <div className={"dropped-widget"} key={index}>{widget}</div>
                    ))}
                </div>
            </div>
            <div>
                {/*editorjs*/}
            </div>
        </>
    )

}

export default BoardThree;