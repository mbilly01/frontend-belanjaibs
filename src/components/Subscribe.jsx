import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
// import {useNavigate} from 'react-router-dom';
const Subscribe = () => {
  const [nama,setNama] = useState('');
  const [telephone,setTelephone] = useState('');
  // const navigate = useNavigate();




  const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  //   console.log(validated);
  // };

  const saveCustomer = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/customers',{
        nama,telephone
      });
      setValidated(true);
      // navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Container className='mt-5' id="subscribe">
      <Row>
        <Col>
        <h1 className='fw-bold'>FORM BERLANGGANAN</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form className='mt-5' noValidate validated={validated} onSubmit={saveCustomer}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className='fw-bold mt-5'>Nama Lengkap</Form.Label>
      <Form.Control type="text" placeholder="Masukkan Nama Lengkap Disini" value={nama} onChange={(e) => setNama(e.target.value)}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className="fw-bold mt-5">No.Telephone/WA</Form.Label>
      <Form.Control type="text" placeholder="Masukkan No.Telephone/WA" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Berlangganan
    </Button>
  </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Subscribe;