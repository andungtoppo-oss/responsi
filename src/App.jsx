import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { Plus, Search, User, Bell } from 'lucide-react';
import Sidebar from './components/Sidebar';
import StatCards from './components/StatCards';
import ProductTable from './components/ProductTable';
import ProductModal from './components/ProductModal';

const initialProducts = [
  {
    id: 101,
    nama: 'Wireless Headphone Premium ANC',
    kategori: 'Elektronik',
    harga: 3499000,
    stok: 12,
    diskon: 10,
    gambar: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300'
  },
  {
    id: 102,
    nama: 'Keyboard Gaming Mechanical RGB',
    kategori: 'Elektronik',
    harga: 1250000,
    stok: 3,
    diskon: 0,
    gambar: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300'
  },
  {
    id: 103,
    nama: 'Jam Tangan Skin Leather Edition',
    kategori: 'Aksesoris',
    harga: 850000,
    stok: 0,
    diskon: 15,
    gambar: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300'
  }
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const handleSaveProduct = (productData) => {
    if (productToEdit) {
      setProducts(
        products.map((p) => (p.id === productToEdit.id ? { ...productData, id: p.id } : p))
      );
    } else {
      const newProduct = { ...productData, id: Date.now() };
      setProducts([newProduct, ...products]);
    }
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Yakin ingin menghapus produk ini?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const filteredProducts = products.filter((p) =>
    p.nama.toLowerCase().includes(search.toLowerCase()) ||
    p.kategori.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid p-0 min-vh-100">
      <Row className="g-0">
        <Sidebar />

        <Col className="p-4">
          <Container fluid>
            {/* Top Bar Navigation */}
            <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
              <div>
                <h3 className="fw-bold m-0 text-dark">Manajemen Katalog Produk</h3>
                <small className="text-muted">Kelola stok etalase, penetapan diskon, dan ubah harga barang.</small>
              </div>

              <div className="d-flex align-items-center gap-3">
                <Button
                  variant="primary"
                  className="d-flex align-items-center gap-2 px-3 py-2 rounded-3 fw-bold shadow-sm"
                  onClick={() => {
                    setProductToEdit(null);
                    setShowModal(true);
                  }}
                >
                  <Plus size={18} /> Tambah Produk Baru
                </Button>

                <div className="bg-white p-2 rounded-circle border shadow-sm" style={{ cursor: 'pointer' }}>
                  <Bell size={20} className="text-muted" />
                </div>

                <div className="d-flex align-items-center gap-2 border-start ps-3">
                  <div className="bg-primary bg-opacity-10 text-primary p-2 rounded-circle">
                    <User size={20} />
                  </div>
                  <div>
                    <h6 className="m-0 fw-bold" style={{ fontSize: '14px' }}>Andung Toppo</h6>
                    <small className="text-muted" style={{ fontSize: '11px' }}>Administrator Store</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Cards */}
            <StatCards products={products} />

            {/* Search Filter */}
            <Row className="mb-3">
              <Col md={5}>
                <InputGroup className="shadow-sm rounded-3">
                  <InputGroup.Text className="bg-white border-end-0 ps-3">
                    <Search size={18} className="text-muted" />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Cari nama produk atau kategori..."
                    className="bg-white border-start-0 py-2 shadow-none"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </InputGroup>
              </Col>
            </Row>

            {/* Table Products */}
            <ProductTable
              products={filteredProducts}
              onEdit={(item) => {
                setProductToEdit(item);
                setShowModal(true);
              }}
              onDelete={handleDeleteProduct}
            />

            {/* Modal Create & Update */}
            <ProductModal
              show={showModal}
              handleClose={() => setShowModal(false)}
              handleSave={handleSaveProduct}
              productToEdit={productToEdit}
            />
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default App;