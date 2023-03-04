// import Stack from 'react-bootstrap/Stack';
import { Dropdown, DropdownButton } from "react-bootstrap";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap';
import "./workoutChecklist.scss";
import React, {useState} from 'react';
import Week1Radio from "./Week1Radio";

function WorkoutChecklist () {

    const [selectedOption, setSelectedOption] = useState(null);
    const [dropdownTitle, setDropdownTitle] = useState('Training Weeks:');
    const handleSelect = (eventKey, event) => {
        setSelectedOption(eventKey);
        setDropdownTitle (event.target.innerText);
    }

    return (
        <ThemeProvider
        breakpoints = {['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint = "xxs"
        >
        <Container>
            <Row>
                <Col className="weekDropdownContainer">
                    <DropdownButton id='dropdown-basic-button' className="dropdownMenu" title={dropdownTitle} onSelect={handleSelect}>
                        <Dropdown.Item eventKey='option1'>Weeks 1-4</Dropdown.Item>
                        <Dropdown.Item eventKey='option2'>Weeks 5-8</Dropdown.Item>
                        <Dropdown.Item eventKey='option3'>Weeks 9-12</Dropdown.Item>
                    </DropdownButton>
                    {selectedOption === "option1" && (
                        <Week1Radio></Week1Radio>
                    )}
                    {selectedOption === "option2" && (
                        <div>
                            <p>Goodbye</p>
                        </div>
                    )}
                    {selectedOption === "option3" && (
                        <div>
                            <p>Welcome</p>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    </ThemeProvider>
    )
}

export default WorkoutChecklist;