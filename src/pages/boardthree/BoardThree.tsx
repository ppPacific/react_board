import React, {useState} from "react";
import './boardthree.scss';
const BoardThree = () => {
    const [widgets, setWidgets] = useState<string[]>([])

    function handleOnDrag(e:React.DragEvent,widgetType:string){
        e.dataTransfer.setData("widgetType", widgetType);
    }
    function handleOnDrop(e:React.DragEvent){
        const widgetType =e.dataTransfer.getData("widgetType");
        console.log("widgetType", widgetType);
        setWidgets([...widgets, widgetType]);
    }
    function handleDragOver(e:React.DragEvent){
        e.preventDefault();
        console.log("drag over");
    }
    return (
        <>
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
                {widgets.map((widget, index)=> (
                    <div className={"dropped-widget"} key={index}>{widget}</div>
                ))}
            </div>
        </>
    )

}

export default BoardThree;