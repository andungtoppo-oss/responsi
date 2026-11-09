import React from 'react';
import { Navbar, Container, Form, InputGroup, Button } from 'react-bootstrap';
import { Search, Bell, User, Plus } from 'lucide-react';

const NavbarAdmin = ({ search, setSearch, onAddNew }) => {
  return (
    <Navbar bg="white" className="border-bottom px-4 py-3 shadow-sm">
      <Container fluid className="px-0">
        {/* Kolom Pencarian */}
        <Form className="d-flex align-items-center w-50">
          <InputGroup>
            <InputGroup.Text className="bg-light border-end-0">
              <Search size={18} className="text-muted" />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Cari nama produk atau kategori..."
              className="bg-light border-start-0 ps-0 shadow-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </Form>

        {/* Tombol Aksi & Profil Admin */}
        <div className="d-flex align-items-center gap-3">
          <Button
            variant="primary"
            className="d-flex align-items-center gap-2 fw-semibold px-3 py-2"
            onClick={onAddNew}
          >
            <Plus size={18} /> Tambah Produk
          </Button>

          <div className="bg-light p-2 rounded-circle text-muted position-relative" style={{ cursor: 'pointer' }}>
            <Bell size={20} />
          </div>

          <div className="d-flex align-items-center gap-2 border-start ps-3">
            <div className="bg-primary-subtle text-primary p-2 rounded-circle">
              <User size={20} />
            </div>
            <div className="d-none d-md-block text-start">
              <h6 className="m-0 fw-bold" style={{ fontSize: '14px' }}>Admin Toppo</h6>
              <small className="text-muted" style={{ fontSize: '12px' }}>Owner Toko</small>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarAdmin;