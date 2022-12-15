import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import tahu1 from '../assets/tahu1.png';
import tempe1 from '../assets/tempe1.png';
import telur1 from '../assets/telur1.png';
import beras1 from '../assets/beras1.png';
const Products = () => {
  return (
    <Row xs={1} md={4} className="g-4 m-0 ms-5 me-5" id="products">
        <Col>
          <Card >
            <Card.Img variant="top" src={beras1}/>
            <Card.Body>
              <Card.Title>Beras 25 Kg</Card.Title>
              <Container>
                <Row>
                  <Col>
                  <Card.Text className='text-danger fw-bold fs-6'>
                Sisa 10
              </Card.Text>
                  </Col>
                  <Col>
                  <Card.Text className='text-success fw-bold fs-4'>
                Rp.22.500
              </Card.Text>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card >
            <Card.Img variant="top" src={telur1}/>
            <Card.Body>
              <Card.Title>Telur Ayam Kampung</Card.Title>
              <Container>
                <Row>
                  <Col>
                  <Card.Text className='text-danger fw-bold fs-6'>
                Sisa 1000
              </Card.Text>
                  </Col>
                  <Col>
                  <Card.Text className='text-success fw-bold fs-4'>
                Rp.12.500
              </Card.Text>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card >
            <Card.Img variant="top" src={tempe1}/>
            <Card.Body>
              <Card.Title>Tempe</Card.Title>
              <Container>
                <Row>
                  <Col>
                  <Card.Text className='text-danger fw-bold fs-6'>
                Sisa 100
              </Card.Text>
                  </Col>
                  <Col>
                  <Card.Text className='text-success fw-bold fs-4'>
                Rp.10.000
              </Card.Text>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card >
            <Card.Img variant="top" src={tahu1}/>
            <Card.Body>
              <Card.Title>Tahu Lembang</Card.Title>
              <Container>
                <Row>
                  <Col>
                  <Card.Text className='text-danger fw-bold fs-6'>
                Sisa 150
              </Card.Text>
                  </Col>
                  <Col>
                  <Card.Text className='text-success fw-bold fs-4'>
                Rp.10.000
              </Card.Text>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
}

export default Products;