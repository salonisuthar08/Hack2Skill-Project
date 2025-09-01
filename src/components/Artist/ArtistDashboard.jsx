import React, { useState } from 'react';
import './ArtistDashboard.css';

const ArtistDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');

  // Mock data - replace with actual data from backend
  const products = [
    { id: 1, name: 'Handmade Pottery', price: 299, stock: 5, orders: 12 },
    { id: 2, name: 'Ceramic Vase', price: 599, stock: 3, orders: 8 },
  ];

  const recentOrders = [
    { id: '#1234', product: 'Handmade Pottery', customer: 'John Doe', status: 'Pending' },
    { id: '#1235', product: 'Ceramic Vase', customer: 'Jane Smith', status: 'Shipped' },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <div className="artist-profile">
          <img src="default-avatar.png" alt="Artist" className="artist-avatar" />
          <h3>Artist Name</h3>
        </div>
        <nav className="dashboard-nav">
          <button 
            className={`nav-item ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
          <button 
            className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
          <button 
            className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            Analytics
          </button>
          <button 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        <header className="dashboard-header">
          <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
          {activeTab === 'products' && (
            <button className="add-product-btn">+ Add New Product</button>
          )}
        </header>

        <div className="dashboard-content">
          {/* Products Tab */}
          {activeTab === 'products' && (
            <div className="products-grid">
              {products.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src="placeholder.jpg" alt={product.name} />
                  </div>
                  <div className="product-details">
                    <h3>{product.name}</h3>
                    <p>₹{product.price}</p>
                    <div className="product-stats">
                      <span>Stock: {product.stock}</span>
                      <span>Orders: {product.orders}</span>
                    </div>
                    <div className="product-actions">
                      <button>Edit</button>
                      <button className="delete">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="orders-table">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Product</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map(order => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.product}</td>
                      <td>{order.customer}</td>
                      <td>
                        <span className={`status ${order.status.toLowerCase()}`}>
                          {order.status}
                        </span>
                      </td>
                      <td>
                        <button className="view-btn">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="analytics-grid">
              <div className="stat-card">
                <h3>Total Sales</h3>
                <p className="stat-value">₹15,299</p>
                <span className="stat-period">This Month</span>
              </div>
              <div className="stat-card">
                <h3>Total Orders</h3>
                <p className="stat-value">24</p>
                <span className="stat-period">This Month</span>
              </div>
              <div className="stat-card">
                <h3>Active Products</h3>
                <p className="stat-value">8</p>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="settings-form">
              <form>
                <div className="form-group">
                  <label>Shop Name</label>
                  <input type="text" defaultValue="My Craft Shop" />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea defaultValue="Handmade crafts with love" />
                </div>
                <div className="form-group">
                  <label>Contact Email</label>
                  <input type="email" defaultValue="artist@example.com" />
                </div>
                <button type="submit" className="save-btn">Save Changes</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistDashboard;