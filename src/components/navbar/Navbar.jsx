// import Stack from 'react-bootstrap/Stack';
import Sun from "../assets/images/sun_moon.jpeg";
// import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from 'react'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap'
import './navbar.scss';
import DateTime from './DateTime'
function Navbar() {

    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

  return (
    <ThemeProvider
        breakpoints = {['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint = "xxs"
    >
        <Container className='navbarContainer'>
            <Row className='navContentsContainer'>
                <Col lg={2} className="btnContainer">
                    <button onClick={toggleTheme}>
                        <img src={Sun} alt="moon/sun img" />
                    </button>
                </Col>
                <Col lg={8}className="titleContainer">
                    <h1>Military Training Regimen</h1>
                </Col>
                <Col className="dateTime">
                    <DateTime />
                </Col>
                {/* <Col lg={2} className="menuContainer">
                    <ul>
                        <li>About</li>
                        <li>Contacts</li>
                    </ul>
                </Col> */}
            </Row>
        </Container>
    </ThemeProvider>
  );
}

export default Navbar;