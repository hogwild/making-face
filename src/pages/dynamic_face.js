import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import face_styles from "./css/face_styles.module.css"
import { Container, Row, Col, Button } from "react-bootstrap"


function Face (props){
    const {width, height, mood} = props
    let mouthArc = ""
    let id = ""
    let strokeWidth = ""
    switch(mood) {
        case 'daze':
            id = face_styles.lowleft
            mouthArc = "M 75 220 C 125 220 175 220 225 220";
            break
        case 'smile':
            id = face_styles.upleft
            mouthArc = "M 75 200 C 125 240 175 240 225 200";
            break
        case 'shocked':
            id = face_styles.upright
            mouthArc = "M 75 220 C 125 180 175 180 225 220 Z";
            strokeWidth = "10px"
            break
        case 'laugh':
            id = id = face_styles.lowright
            mouthArc = "M 75 200 C 125 240 175 240 225 200 Z";
            strokeWidth = "10px"
            break
    }

    return (<div>
            <svg width={width} height={height}>
                <rect id={id} width={width} height={height}/>
                <circle className={face_styles.face} cx={width/2} cy={height/2} r={height/2}/>
                <circle className={face_styles.eye} cx={width/4} cy={height/3} r='15' />
                <circle className={face_styles.eye} cx={width*3/4} cy={height/3} r='15' /> 
                <line className={face_styles.nose} x1={width/2} y1={height/3} x2={width/2} y2={height*8/15}></line>
                <path className={face_styles.mouth} d={mouthArc} style={{"stroke-width":`${strokeWidth?strokeWidth:"20px"}`}}></path>
            </svg>
        </div>)
}
export default function DynamicFace(){
    const [mood, setMood]= useState('daze')
    const onClick = (mood) => {
        setMood(mood)
    }
    return (
        <Container>
            <div className="justify-content-start mb-0">
                <Button onClick={() => onClick('smile')} className="bg-primary m-2">Smile</Button>
                <Button onClick={() => onClick('shocked')} className="bg-primary m-2">Shocked</Button> 
                <Button onClick={() => onClick('daze')} className="bg-primary m-2">Daze</Button>
                <Button onClick={() => onClick('laugh')} className="bg-primary m-2">Laugh</Button>
                
            </div>
            <Row className="justify-content-start mt-5">
                <Col lg="3">
                    <Face width="300" height="300" mood={mood} />
                </Col>
            </Row>
        </Container>
    )
}