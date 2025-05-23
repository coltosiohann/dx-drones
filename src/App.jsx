import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TestComponent from './TestComponent';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import DX4MiniPage from './pages/DX4MiniPage';
import DX4MPage from './pages/DX4MPage';
import DX6MPage from './pages/DX6MPage';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Full routing enabled
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogPostPage />} />
      <Route path="/products/dx4-mini" element={<DX4MiniPage />} />
      <Route path="/products/dx4-m" element={<DX4MPage />} />
      <Route path="/products/dx6-m" element={<DX6MPage />} />
    </Routes>
  );
}

export default App;
