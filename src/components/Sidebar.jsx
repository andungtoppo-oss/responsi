import React from 'react';
import { LayoutDashboard, Package, Tag, ShoppingCart, BarChart3, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper p-3 d-none d-md-flex flex-column col-md-3 col-lg-2">
      <div className="d-flex align-items-center gap-3 px-2 mb-4">
        <div className="bg-primary text-white p-2 rounded-3">
          <ShoppingCart size={22} />
        </div>
        <div>
          <h5 className="fw-bold text-white m-0" style={{ fontSize: '1.1rem' }}>ToppoStore</h5>
          <small className="text-muted" style={{ fontSize: '0.75rem' }}>E-Commerce Admin</small>
        </div>
      </div>

      <hr className="border-secondary opacity-25 my-2" />

      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <a href="#" className="nav-link active d-flex align-items-center gap-3">
            <LayoutDashboard size={18} /> Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link d-flex align-items-center gap-3">
            <Package size={18} /> Katalog Produk
          </a>
        </li>
        <li>
          <a href="#" className="nav-link d-flex align-items-center gap-3">
            <Tag size={18} /> Promo & Diskon
          </a>
        </li>
        <li>
          <a href="#" className="nav-link d-flex align-items-center gap-3">
            <BarChart3 size={18} /> Analitik
          </a>
        </li>
        <li>
          <a href="#" className="nav-link d-flex align-items-center gap-3">
            <Settings size={18} /> Pengaturan
          </a>
        </li>
      </ul>

      <div className="mt-auto pt-3 border-top border-secondary opacity-25">
        <a href="#" className="nav-link text-danger d-flex align-items-center gap-3">
          <LogOut size={18} /> Keluar
        </a>
      </div>
    </div>
  );
};

export default Sidebar;