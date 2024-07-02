import React from 'react';
import './css/Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of Web Development in Business',
      excerpt: 'Discover how web development can boost your business...',
      link: '/blog/web-development-importance'
    },
    {
      id: 2,
      title: 'Top IT Solutions for Modern Businesses',
      excerpt: 'Explore the latest IT solutions to enhance your business operations...',
      link: '/blog/top-it-solutions'
    },
    {
      id: 3,
      title: 'Digital Marketing Trends in 2024',
      excerpt: 'Stay ahead with the latest trends in digital marketing for 2024...',
      link: '/blog/digital-marketing-trends-2024'
    }
  ];

  return (
    <section className="blog-container">
      <h2>Latest Blog Posts</h2>
      <div className="blog-posts">
        {blogPosts.map(post => (
          <div className="blog-post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href={post.link} className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
