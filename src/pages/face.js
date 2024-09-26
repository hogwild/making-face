import * as d3 from "d3"

import styles from "./css/styles.module.css"


function Ball(props){
    return <circle cx= {props.cx} cy={props.cy} r={props.r} fill={props.color} />
};

function Eye(props){
    const {cx, cy, r, color} = props;
    return (
        <circle cx={cx} cy={cy} r={r} fill={color}/>
    )
};

function Mouth(props){
    const {radius, width, startAngle, endAngle} = props;
    const mouthArc = d3.arc()
            .innerRadius(radius)
            .outerRadius(radius + width)
            .startAngle(startAngle)
            .endAngle(endAngle);
    return (
        <g transform={`translate(0, 0)`}> 
            <path d={mouthArc()} strokeWidth='20px' stroke='black'></path>
        </g>
    )
}

function Face(){
    return (
        <>
        <div>
            <h1 className={styles.task}>Making a face</h1>

        </div>
        <svg width={600} height={600}>
            <g transform={`translate(300,300)`}>
                <Ball cx={0} cy={0} r={200} color={"yellow"} />
                <Eye cx={-80} cy={-80} r={30} />
                <Eye cx={80} cy={-80} r={30} />
                <Mouth radius={90} width={5} startAngle={Math.PI*2/3} endAngle={Math.PI*4/3} />
            </g>
        </svg>
        </>)
};


export default Face