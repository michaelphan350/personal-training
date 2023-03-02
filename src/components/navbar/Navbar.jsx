import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap'

function Navbar() {
  return (
    <Container>
    <Row className='flex-wrap'>
        <Col>1</Col>
        <Col>2</Col>
    </Row>
    </Container>
  );
}

export default Navbar;