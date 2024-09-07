import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
import Login from './pages/Login.jsx'; // Import Login
import Signup from './pages/Signup.jsx'; // Import Signup
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Sidebar>
                <Dashboard />
              </Sidebar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Sidebar>
                <Dashboard />
              </Sidebar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <Sidebar>
                <About />
              </Sidebar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/comment"
          element={
            <ProtectedRoute>
              <Sidebar>
                <Comment />
              </Sidebar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Sidebar>
                <Analytics />
              </Sidebar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/product"
          element={
            <ProtectedRoute>
              <Sidebar>
                <Product />
              </Sidebar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/productList"
          element={
            <ProtectedRoute>
              <Sidebar>
                <ProductList />
              </Sidebar>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
