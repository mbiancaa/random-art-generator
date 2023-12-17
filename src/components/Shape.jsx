import { generateRandomRotation, generateRandomColor } from "../helpers";

export default function Shape() {

    return (
        <div className="Shape" style={{transform: `rotate(${generateRandomRotation()}deg)`}}>
            <div className="Circle small" style={{ background: generateRandomColor() }}/>
            <div className="Circle big" style={{ background: generateRandomColor() }}/>
            <div className="Square" style={{ background: generateRandomColor() }}/>
        </div>
    );

}