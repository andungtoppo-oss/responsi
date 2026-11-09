import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const ProductModal = ({ show, handleClose, handleSave, productToEdit }) => {
  const [formData, setFormData] = useState({
    nama: '',
    kategori: 'Elektronik',
    harga: '',
    stok: '',
    diskon: 0,
    gambar: ''
  });

  useEffect(() => {
    if (productToEdit) {
      setFormData(productToEdit);
    } else {
      setFormData({
        nama: '',
        kategori: 'Elektronik',
        harga: '',
        stok: '',
        diskon: 0,
        gambar: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300'
      });
    }
  }, [productToEdit, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">
          {productToEdit ? 'Ubah Detail / Harga Produk' : 'Tambah Produk Baru'}
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Row className="g-3">
            <Col md={12}>
              <Form.Group>
                <Form.Label className="fw-medium">Nama Produk</Form.Label>
                <Form.Control
                  type="text"
                  name="nama"
                  placeholder="Contoh: Wireless Headphones Sony WH-1000XM5"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-medium">Kategori</Form.Label>
                <Form.Select name="kategori" value={formData.kategori} onChange={handleChange}>
                  <option value="Elektronik">Elektronik</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Aksesoris">Aksesoris</option>
                  <option value="Gaya Hidup">Gaya Hidup</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-medium">Stok Unit</Form.Label>
                <Form.Control
                  type="number"
                  name="stok"
                  placeholder="0"
                  value={formData.stok}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-medium">Harga Normal (Rp)</Form.Label>
                <Form.Control
                  type="number"
                  name="harga"
                  placeholder="0"
                  value={formData.harga}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-medium">Diskon (%)</Form.Label>
                <Form.Control
                  type="number"
                  name="diskon"
                  min="0"
                  max="100"
                  placeholder="0"
                  value={formData.diskon}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="primary" type="submit" className="px-4">
            {productToEdit ? 'Simpan Perubahan' : 'Tambah ke Etalase'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ProductModal;