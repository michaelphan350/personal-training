// import Stack from 'react-bootstrap/Stack';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap';
import "./workoutChecklist.scss";

function workoutChecklist () {
    return (
        <ThemeProvider
        breakpoints = {['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint = "xxs"
    >
        <Container>
            <Row>
                <Col>1</Col>
                <Col>2</Col>
            </Row>
        </Container>
    </ThemeProvider>
    )
}

export default workoutChecklist;