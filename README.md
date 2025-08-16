# ShopEase - React Shopping Website

A modern, responsive shopping website built with React.js featuring a complete e-commerce experience.

## Features

### 🛍️ Core Shopping Features
- **Product Catalog**: Browse through various product categories
- **Product Details**: Detailed product pages with features and reviews
- **Shopping Cart**: Add, remove, and manage cart items
- **Checkout Process**: Complete checkout with forms and payment simulation
- **User Profile**: Manage personal information and view order history

### 📱 User Interface
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Scrollable Pages**: Smooth scrolling with custom scrollbar styling
- **Modern UI**: Clean design with gradients and smooth animations
- **Interactive Elements**: Hover effects and transitions

### 📋 Forms & Functionality
- **Search & Filter**: Search products and filter by category
- **Contact Forms**: Contact support with subject selection
- **Profile Management**: Update personal information
- **Checkout Forms**: Complete billing and payment forms
- **Form Validation**: Required field validation

### 🎨 Design Features
- **Beautiful Gradients**: Modern gradient backgrounds
- **Font Awesome Icons**: Rich iconography throughout
- **Custom Styling**: Professional CSS with hover effects
- **Loading States**: Visual feedback for user actions

## Pages

1. **Home**: Hero section with featured products and company features
2. **Products**: Full product catalog with search and filtering
3. **Product Details**: Individual product pages with tabs and reviews
4. **Checkout**: Shopping cart and complete checkout process
5. **Profile**: User account management with multiple tabs

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- **React 18.2.0** - Frontend framework
- **React Router DOM 6.8.0** - Client-side routing
- **Context API** - State management for shopping cart
- **CSS3** - Styling with custom properties and animations
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js       # Navigation header with cart
│   ├── Footer.js       # Site footer
│   └── ProductCard.js  # Product display card
├── pages/              # Page components
│   ├── Home.js         # Homepage with hero section
│   ├── Products.js     # Product catalog page
│   ├── ProductDetails.js # Individual product page
│   ├── Checkout.js     # Shopping cart and checkout
│   └── Profile.js      # User profile and settings
├── context/            # React Context
│   └── CartContext.js  # Shopping cart state management
├── data/               # Mock data
│   └── products.js     # Product catalog data
├── App.js              # Main app component with routing
├── index.js            # React app entry point
└── index.css           # Global styles
```

## Features in Detail

### Shopping Cart
- Add products to cart from any page
- Update quantities in cart
- Remove items from cart
- Persistent cart state across navigation
- Visual cart counter in header

### Forms
- **Checkout Form**: Complete billing and payment information
- **Profile Form**: Personal information management
- **Contact Form**: Customer support with subject categories
- **Search Form**: Product search with real-time filtering

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Flexible grid layouts
- Touch-friendly interface

### Performance
- Optimized bundle size
- Lazy loading considerations
- Efficient re-renders with React hooks
- Smooth animations and transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Demo Features

The website includes mock data and simulated functionality:
- 10 sample products across different categories
- Simulated order placement
- Mock user profile data
- Sample order history
- Simulated contact form submission

Perfect for demonstrating a complete e-commerce shopping experience!
