import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import OrdersPage from './pages/OrdersPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul style={{ display: 'flex', listStyleType: 'none', justifyContent: 'center', gap: '20px', padding: '10px' }}>
              <li><Link to="/products">Ecommerce</Link></li>
              <li><Link to="/orders">Orders</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/product/:productId' element={<ProductDetailPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for 404 Not Found */}
          </Routes>

          <footer style={{ backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center', marginTop: '50px' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
