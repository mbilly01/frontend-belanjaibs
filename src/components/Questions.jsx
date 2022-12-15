import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Accordion from 'react-bootstrap/Accordion';
const Questions = () => {
  return (
    <>
    <Container id="faq" className='mt-5'>
      <Row>
        <Col>
        <h1 className='fw-bold'>FAQ</h1>
        </Col>
      </Row>
      <Row className='mt-5'>
      <Col>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Perusahaan Ini Menjual Apa Aja Sih?</Accordion.Header>
        <Accordion.Body>Kami Menjual Bahan Makanan Dengan Kualitas Tinggi Agar Anda Bisa Menikmati Bahan Makanan Favorit Kalian Dengan Nikmat Dan Sehat
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Bagaimana Proses Pembelian Di Perusahaan Ini?</Accordion.Header>
        <Accordion.Body>
        Anda Memilih Produk Yang Ingin Anda Beli Kemudian Menghubungi Kami Dengan Melalui Email,Social Media, Dan Bahkan Telepon.Setelah Itu Barang Akan Sampai Dalam Waktu Singkat Dengan Jarak Tertentu
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Apakah Kita Bisa Berlangganan Agar Mendapatkan Harga Lebih Baik?</Accordion.Header>
        <Accordion.Body>
        Anda Bisa Berlangganan Dengan Cara Memasukkan Email/No.Telp Anda Agar Kami Proses Lebih Lanjut
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Questions;