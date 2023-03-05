import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col } from 'react-bootstrap';
import { Form, InputGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import MyTableA from './workout-tables/weekOne/MyTableA';
import MyTableB from './workout-tables/weekOne/MyTableB';
import './week1radio.scss';

function Week1Radio() {

    const [selectedRadio, setSelectedRadio] = useState(null)
    const handleSelect = (event) => {
        setSelectedRadio (event.target.value)
    }
    
    return (

        <ThemeProvider
        breakpoints = {['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint = "xxs"
        >
        
        <Container className='week1Container'>
            <Col className='week1RadioContainer'>
                <Form>
                    <InputGroup>
                        <Form.Check
                            type='radio'
                            label='Workout A'
                            name='radioOption'
                            value='option1'
                            checked= {selectedRadio === 'option1'}
                            onChange={handleSelect}
                        />
                        <Form.Check
                            type='radio'
                            label='Workout B'
                            name='radioOption'
                            value='option2'
                            checked= {selectedRadio === 'option2'}
                            onChange={handleSelect}
                        />
                    </InputGroup>
                    {selectedRadio === 'option1' && (
                        <MyTableA/>
                    )}
                    {selectedRadio === 'option2' && (
                        <MyTableB/>
                    )}
                </Form>
            </Col>
        </Container>

        </ThemeProvider>
    )

}

export default Week1Radio;