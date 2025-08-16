import React, { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    bio: 'I love shopping for quality products at great prices!'
  });

  const [contactForm, setContactForm] = useState({
    subject: '',
    message: ''
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [messageSent, setMessageSent] = useState(false);
  const [profileUpdated, setProfileUpdated] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordForm({
      ...passwordForm,
      [e.target.name]: e.target.value
    });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setProfileUpdated(true);
    setTimeout(() => setProfileUpdated(false), 3000);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setContactForm({ subject: '', message: '' });
    setTimeout(() => setMessageSent(false), 3000);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    setPasswordChanged(true);
    setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setTimeout(() => setPasswordChanged(false), 3000);
  };

  const orderHistory = [
    { id: '#ORD-001', date: '2024-01-15', total: 159.98, status: 'Delivered', items: 3 },
    { id: '#ORD-002', date: '2024-01-10', total: 89.99, status: 'Shipped', items: 2 },
    { id: '#ORD-003', date: '2024-01-05', total: 249.97, status: 'Processing', items: 4 },
    { id: '#ORD-004', date: '2024-01-01', total: 79.99, status: 'Delivered', items: 1 }
  ];

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">My Profile</h1>
        
        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            className={`btn ${activeTab === 'profile' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('profile')}
          >
            <i className="fas fa-user"></i> Profile
          </button>
          <button
            className={`btn ${activeTab === 'orders' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('orders')}
          >
            <i className="fas fa-shopping-bag"></i> Orders
          </button>
          <button
            className={`btn ${activeTab === 'contact' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('contact')}
          >
            <i className="fas fa-envelope"></i> Contact
          </button>
          <button
            className={`btn ${activeTab === 'security' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('security')}
          >
            <i className="fas fa-lock"></i> Security
          </button>
        </div>

        <div className="scrollable-content">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Personal Information</h2>
              {profileUpdated && (
                <div style={{ background: '#48bb78', color: 'white', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <i className="fas fa-check-circle"></i> Profile updated successfully!
                </div>
              )}
              <form onSubmit={handleProfileSubmit} className="form">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-input"
                      value={profileData.firstName}
                      onChange={handleProfileChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-input"
                      value={profileData.lastName}
                      onChange={handleProfileChange}
                      required
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-input"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-input"
                    value={profileData.address}
                    onChange={handleProfileChange}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      name="city"
                      className="form-input"
                      value={profileData.city}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      name="state"
                      className="form-input"
                      value={profileData.state}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      className="form-input"
                      value={profileData.zipCode}
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Bio</label>
                  <textarea
                    name="bio"
                    className="form-textarea"
                    value={profileData.bio}
                    onChange={handleProfileChange}
                    placeholder="Tell us about yourself..."
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  <i className="fas fa-save"></i> Update Profile
                </button>
              </form>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Order History</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {orderHistory.map(order => (
                  <div key={order.id} className="cart-item">
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                        <h4 className="cart-item-name">Order {order.id}</h4>
                        <span className={`btn ${
                          order.status === 'Delivered' ? 'btn-success' : 
                          order.status === 'Shipped' ? 'btn-primary' : 'btn-secondary'
                        }`} style={{ padding: '0.25rem 0.75rem', fontSize: '0.8rem' }}>
                          {order.status}
                        </span>
                      </div>
                      <p style={{ color: '#64748b', marginBottom: '0.25rem' }}>
                        Date: {order.date}
                      </p>
                      <p style={{ color: '#64748b', marginBottom: '0.25rem' }}>
                        Items: {order.items}
                      </p>
                      <p className="cart-item-price" style={{ fontSize: '1.1rem' }}>
                        Total: ${order.total}
                      </p>
                    </div>
                    <button className="btn btn-secondary">
                      <i className="fas fa-eye"></i> View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Contact Support</h2>
              {messageSent && (
                <div style={{ background: '#48bb78', color: 'white', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <i className="fas fa-check-circle"></i> Message sent successfully! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleContactSubmit} className="form">
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <select
                    name="subject"
                    className="form-input"
                    value={contactForm.subject}
                    onChange={handleContactChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="order-inquiry">Order Inquiry</option>
                    <option value="product-question">Product Question</option>
                    <option value="shipping-info">Shipping Information</option>
                    <option value="return-refund">Return/Refund</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    placeholder="Please describe your inquiry in detail..."
                    required
                    style={{ minHeight: '150px' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <h3 style={{ marginBottom: '1rem' }}>Other Ways to Reach Us</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <i className="fas fa-phone" style={{ fontSize: '2rem', color: '#667eea', marginBottom: '0.5rem' }}></i>
                    <p><strong>Phone</strong></p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <i className="fas fa-envelope" style={{ fontSize: '2rem', color: '#667eea', marginBottom: '0.5rem' }}></i>
                    <p><strong>Email</strong></p>
                    <p>support@shopease.com</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <i className="fas fa-clock" style={{ fontSize: '2rem', color: '#667eea', marginBottom: '0.5rem' }}></i>
                    <p><strong>Hours</strong></p>
                    <p>24/7 Support</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Change Password</h2>
              {passwordChanged && (
                <div style={{ background: '#48bb78', color: 'white', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <i className="fas fa-check-circle"></i> Password changed successfully!
                </div>
              )}
              <form onSubmit={handlePasswordSubmit} className="form">
                <div className="form-group">
                  <label className="form-label">Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    className="form-input"
                    value={passwordForm.currentPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    className="form-input"
                    value={passwordForm.newPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-input"
                    value={passwordForm.confirmPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  <i className="fas fa-lock"></i> Change Password
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
