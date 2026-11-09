import React from 'react';
import { Table, Badge, Button, Card } from 'react-bootstrap';
import { Edit3, Trash2 } from 'lucide-react';

const ProductTable = ({ products, onEdit, onDelete }) => {
  const getStockBadge = (stok) => {
    if (stok <= 0) return <Badge bg="danger" className="px-3 py-2 rounded-pill">Habis</Badge>;
    if (stok <= 5) return <Badge bg="warning" text="dark" className="px-3 py-2 rounded-pill">Stok Menipis ({stok})</Badge>;
    return <Badge bg="success" className="px-3 py-2 rounded-pill">Tersedia ({stok})</Badge>;
  };

  const calculateFinalPrice = (harga, diskon) => {
    if (!diskon) return Number(harga);
    return Number(harga) - (Number(harga) * (Number(diskon) / 100));
  };

  return (
    <Card className="table-card-container bg-white overflow-hidden">
      <Card.Body className="p-0">
        <Table responsive hover align="middle" className="table-modern m-0">
          <thead>
            <tr>
              <th className="ps-4">Detail Produk</th>
              <th>Kategori</th>
              <th>Harga etalase</th>
              <th>Status Stok</th>
              <th className="text-end pe-4">Kelola Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-5 text-muted">
                  Belum ada produk terdaftar. Klik tombol Tambah Produk Baru di atas.
                </td>
              </tr>
            ) : (
              products.map((item) => {
                const finalPrice = calculateFinalPrice(item.harga, item.diskon);
                return (
                  <tr key={item.id}>
                    <td className="ps-4">
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src={item.gambar}
                          alt={item.nama}
                          className="rounded-3 shadow-sm border"
                          style={{ width: '52px', height: '52px', objectFit: 'cover' }}
                        />
                        <div>
                          <h6 className="m-0 fw-bold text-dark">{item.nama}</h6>
                          <small className="text-muted">ID SKU: #{item.id}</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <Badge bg="light" text="dark" className="border px-3 py-2 rounded-3 fw-semibold">
                        {item.kategori}
                      </Badge>
                    </td>
                    <td>
                      {item.diskon > 0 ? (
                        <div>
                          <span className="fw-bold text-primary fs-6 me-2">
                            Rp {finalPrice.toLocaleString('id-ID')}
                          </span>
                          <Badge bg="danger" className="rounded-pill">-{item.diskon}%</Badge>
                          <div>
                            <small className="text-decoration-line-through text-muted">
                              Rp {Number(item.harga).toLocaleString('id-ID')}
                            </small>
                          </div>
                        </div>
                      ) : (
                        <span className="fw-bold text-dark fs-6">
                          Rp {Number(item.harga).toLocaleString('id-ID')}
                        </span>
                      )}
                    </td>
                    <td>{getStockBadge(item.stok)}</td>
                    <td className="text-end pe-4">
                      <Button
                        variant="light"
                        className="text-primary bg-primary bg-opacity-10 me-2 border-0 rounded-3"
                        size="sm"
                        onClick={() => onEdit(item)}
                      >
                        <Edit3 size={16} /> Edit
                      </Button>
                      <Button
                        variant="light"
                        className="text-danger bg-danger bg-opacity-10 border-0 rounded-3"
                        size="sm"
                        onClick={() => onDelete(item.id)}
                      >
                        <Trash2 size={16} /> Hapus
                      </Button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default ProductTable;