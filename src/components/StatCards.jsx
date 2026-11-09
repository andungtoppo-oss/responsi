import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Package, Layers, DollarSign, Tag } from 'lucide-react';

const StatCards = ({ products }) => {
  const totalProducts = products.length;
  const totalStock = products.reduce((acc, curr) => acc + Number(curr.stok), 0);
  const totalValue = products.reduce((acc, curr) => acc + (Number(curr.harga) * Number(curr.stok)), 0);
  const discountedCount = products.filter(p => Number(p.diskon) > 0).length;

  return (
    <Row className="g-3 mb-4">
      <Col md={3}>
        <Card className="stat-card-vibrant bg-white p-3 h-100">
          <div className="d-flex justify-content-between align-items-center h-100">
            <div>
              <small className="text-muted fw-bold text-uppercase" style={{ fontSize: '11px' }}>Total Produk</small>
              <h3 className="fw-extrabold m-0 mt-1 text-dark">{totalProducts}</h3>
            </div>
            <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-4">
              <Package size={24} />
            </div>
          </div>
        </Card>
      </Col>

      <Col md={3}>
        <Card className="stat-card-vibrant bg-white p-3 h-100">
          <div className="d-flex justify-content-between align-items-center h-100">
            <div>
              <small className="text-muted fw-bold text-uppercase" style={{ fontSize: '11px' }}>Total Stok</small>
              <h3 className="fw-extrabold m-0 mt-1 text-dark">{totalStock} <span className="fs-6 fw-normal text-muted">Unit</span></h3>
            </div>
            <div className="bg-success bg-opacity-10 text-success p-3 rounded-4">
              <Layers size={24} />
            </div>
          </div>
        </Card>
      </Col>

      <Col md={3}>
        <Card className="stat-card-vibrant bg-white p-3 h-100">
          <div className="d-flex justify-content-between align-items-center h-100">
            <div>
              <small className="text-muted fw-bold text-uppercase" style={{ fontSize: '11px' }}>Nilai Inventaris</small>
              <h5 className="fw-extrabold m-0 mt-1 text-dark" style={{ fontSize: '1.15rem' }}>
                Rp {totalValue.toLocaleString('id-ID')}
              </h5>
            </div>
            <div className="bg-warning bg-opacity-10 text-warning p-3 rounded-4">
              <DollarSign size={24} />
            </div>
          </div>
        </Card>
      </Col>

      <Col md={3}>
        <Card className="stat-card-vibrant bg-white p-3 h-100">
          <div className="d-flex justify-content-between align-items-center h-100">
            <div>
              <small className="text-muted fw-bold text-uppercase" style={{ fontSize: '11px' }}>Produk Diskon</small>
              <h3 className="fw-extrabold m-0 mt-1 text-dark">{discountedCount}</h3>
            </div>
            <div className="bg-danger bg-opacity-10 text-danger p-3 rounded-4">
              <Tag size={24} />
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default StatCards;