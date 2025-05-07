import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from '@phosphor-icons/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/BlogPage.css';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Evolution of Drone Technology: Past, Present, and Future',
      excerpt: 'From military applications to consumer gadgets, explore how drone technology has evolved over the years and what the future holds for this rapidly advancing field.',
      date: 'May 5, 2023',
      author: 'Alex Chen',
      readTime: '8 min read',
      category: 'Technology',
      image: 'evolution'
    },
    {
      id: 2,
      title: 'Mastering Aerial Photography: Tips and Techniques',
      excerpt: 'Discover professional tips and techniques for capturing stunning aerial photographs with your drone, from composition to camera settings and post-processing.',
      date: 'April 18, 2023',
      author: 'Sarah Johnson',
      readTime: '6 min read',
      category: 'Photography',
      image: 'photography'
    },
    {
      id: 3,
      title: 'Drone Regulations Around the World: What You Need to Know',
      excerpt: 'A comprehensive guide to drone regulations in different countries, helping you navigate the complex legal landscape of drone operation wherever you fly.',
      date: 'March 22, 2023',
      author: 'Michael Rodriguez',
      readTime: '10 min read',
      category: 'Regulations',
      image: 'regulations'
    },
    {
      id: 4,
      title: 'The Future of Delivery Drones: Revolutionizing Logistics',
      excerpt: 'How autonomous delivery drones are set to transform the logistics industry, from last-mile delivery to emergency medical supplies in remote areas.',
      date: 'February 10, 2023',
      author: 'Emily Wilson',
      readTime: '7 min read',
      category: 'Innovation',
      image: 'delivery'
    }
  ];

  return (
    <div className="blog-page">
      <Navbar />

      <main className="blog-content">
        <section className="blog-hero">
          <div className="container">
            <motion.h1
              className="page-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              DX-DRONES Blog
            </motion.h1>

            <motion.p
              className="page-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Insights, tutorials, and news from the world of drone technology
            </motion.p>
          </div>
        </section>

        <section className="blog-posts-section">
          <div className="container">
            <div className="blog-grid">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="blog-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.8 }}
                >
                  <div className="blog-image">
                    <div className="placeholder-image">
                      <span>{post.image} Image</span>
                    </div>
                    <div className="blog-category">{post.category}</div>
                  </div>

                  <div className="blog-content">
                    <h2 className="blog-title">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>

                    <div className="blog-meta">
                      <div className="meta-item">
                        <Calendar size={16} weight="light" />
                        <span>{post.date}</span>
                      </div>
                      <div className="meta-item">
                        <User size={16} weight="light" />
                        <span>{post.author}</span>
                      </div>
                      <div className="meta-item">
                        <Clock size={16} weight="light" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <p className="blog-excerpt">{post.excerpt}</p>

                    <Link to={`/blog/${post.id}`} className="read-more">
                      Read More
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
