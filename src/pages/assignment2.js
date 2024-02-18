import React from "react"
import face_styles from "./css/face_styles.module.css"

import { Container, Row, Col, Button } from "react-bootstrap"


export default function Assignment2 () {

    var selected_id = "";
    var color = "";
    // console.log(color);
    function smile(){
        if (color!==""){
            document.getElementById(selected_id).style.fill=color;
        } 
        document.getElementById(`${face_styles.upleft}`).style.fill = 'red';
        selected_id = `${face_styles.upleft}`;
        color = "green";
    }

    function shocked(){
        if (color!==""){
            document.getElementById(selected_id).style.fill=color;
        } 
        document.getElementById(`${face_styles.upright}`).style.fill = 'red';
        selected_id = `${face_styles.upright}`;
        color = "pink"; 
    }
    function daze(){
        if (color!==""){
            document.getElementById(selected_id).style.fill=color;
        } 
        document.getElementById(`${face_styles.lowleft}`).style.fill = 'red';
        selected_id = `${face_styles.lowleft}`;
        color = "orange"; 
    }
    function laugh(){
        if (color!==""){
            document.getElementById(selected_id).style.fill=color;
        } 
        document.getElementById(`${face_styles.lowright}`).style.fill = 'red';
        selected_id = `${face_styles.lowright}`;
        color = "steelblue"; 
    }
    function reset(){
        if (color!==""){
            document.getElementById(selected_id).style.fill=color;
        } 
        selected_id = "";
        color = ""; 
    }

    return (
        <React.Fragment>

        <Container>
        <div className={face_styles.mainbody}>
            <h1>Making faces using svg</h1>
            <div className="d-flex justify-content-start mb-3">
                <Button onClick={smile} className="bg-primary m-2">Smile</Button>
                <Button onClick={shocked} className="bg-primary m-2">Shocked</Button> 
                
                <Button onClick={daze} className="bg-primary m-2">Daze</Button>
            
                <Button onClick={laugh} className="bg-primary m-2">Laugh</Button>
                
                <Button onClick={reset} className="bg-primary m-2">Reset</Button>
            </div>
        </div>
        <Row>
            <svg width='600' height="600">
                <g transform='translate(0, 0)' className={face_styles.group}>
                    <rect id={face_styles.upleft} width='300' height='300'/>
                    <circle className={face_styles.face} cx='150' cy='150' r='150'/>
                    <circle className={face_styles.eye} cx='75' cy='100' r='15' />
                    <circle className={face_styles.eye} cx='225' cy='100' r='15' /> 
                    <line className={face_styles.nose} x1='150' y1='100' x2='150' y2='160'></line>
                    <path className={face_styles.mouth} d="M 75 200 C 125 240 175 240 225 200"></path>
                </g>
                <g transform='translate(300, 0)' className={face_styles.group}>
                    <rect id={face_styles.upright} width='300' height='300'/>
                    <circle className={face_styles.face} cx='150' cy='150' r='150'/>
                    <circle className={face_styles.eye} cx='75' cy='100' r='15' />
                    <circle className={face_styles.eye} cx='225' cy='100' r='15' /> 
                    <line className={face_styles.nose} x1='150' y1='100' x2='150' y2='160'></line>
                    <path className={face_styles.mouth} d="M 75 220 C 125 180 175 180 225 220 Z" style={{"stroke-width":"10px"}}></path>
                </g>
                <g transform='translate(0, 300)' className={face_styles.group}>
                    <rect id={face_styles.lowleft} width='300' height='300'/>
                    <circle className={face_styles.face} cx='150' cy='150' r='150'/>
                    <circle className={face_styles.eye} cx='75' cy='100' r='15' />
                    <circle className={face_styles.eye} cx='225' cy='100' r='15' /> 
                    <line className={face_styles.nose} x1='150' y1='100' x2='150' y2='160'></line>
                    <path className={face_styles.mouth} d="M 75 220 C 125 220 175 220 225 220"></path>
                </g>
                <g transform='translate(300, 300)' className={face_styles.group}>
                    <rect id={face_styles.lowright} width='300' height='300'/>
                    <circle className={face_styles.face} cx='150' cy='150' r='150'/>
                    <circle className={face_styles.eye} cx='75' cy='100' r='15' />
                    <circle className={face_styles.eye} cx='225' cy='100' r='15' /> 
                    <line className={face_styles.nose} x1='150' y1='100' x2='150' y2='160'></line>
                    <path className={face_styles.mouth} d="M 75 200 C 125 240 175 240 225 200 Z" style={{"stroke-width":"10px"}}></path>
                </g>
            </svg>
            </Row>
        </Container>
    </React.Fragment>
    );
}

