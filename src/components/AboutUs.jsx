import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const AboutUs = () => {
  return (
    <>
    <Container className='mt-5'>
      <Row>
        <Col>
        <h1 className='fw-bold'>TENTANG KAMI</h1>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col className='border border-primary rounded border-3'>
        <p className='p-5 fs-3'>Belanja IBS adalah Perusahaan Penyedia Bahan Makanan Yang Memberikan
Anda Produk Terbaik Dengan Harga Yang Terjangkau.
Produk Kami Diantar Dengan Cepat.</p>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default AboutUs;