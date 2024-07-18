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
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<ProductsPage/>} />
            <Route path='/product/:productId' element={<ProductDetailPage/>} />
            <Route path="/orders" element={<OrdersPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;