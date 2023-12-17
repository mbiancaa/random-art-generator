import { useState } from "react";
import { generateRandomColor } from "../helpers";
import { CanvasStyle } from "../constants";
import Shape from "./Shape";

export default function Canvas(props) {

    const {
        columns,
        rows
    } = props;

    const [rerenderFlag, setRerenderFlag] = useState(false);
    const [canvasStyle, setCanvasStyle] = useState(CanvasStyle.DEFAULT);

    const toggleCanvasStyle = () => {
        const style = canvasStyle === CanvasStyle.DEFAULT ? CanvasStyle.ALTERNATE : CanvasStyle.DEFAULT;
        setCanvasStyle(style);
    };

    const regenerateArt = () => {
        setRerenderFlag(!rerenderFlag);
    };

    const renderShapes = () => {
        const rowsArray = [];

        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < columns; j++) {
                row.push(<Shape key={`${i}-${j}`} />);
            }
            rowsArray.push(<div key={i} className="CanvasColumn">{row}</div>);
        }

        return rowsArray;
    }

    return (
        <>
            <h1>Random Art Generator</h1>
            <div className="CanvasContainer">
                <div
                    className={`CanvasGrid ${canvasStyle}`}
                    style={{ background: generateRandomColor() }}
                    onClick={regenerateArt}
                >
                    {renderShapes()}
                </div>
            </div>
            <div>Click on the image to regenerate it <br/>
                or <u style={{cursor: 'pointer'}} onClick={toggleCanvasStyle}>click here</u> to change the shapes
            </div>
        </>
    );

}