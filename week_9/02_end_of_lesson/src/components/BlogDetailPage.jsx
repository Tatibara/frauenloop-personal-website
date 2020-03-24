import React from 'react';

import { Link } from 'react-router-dom';

import blogEntries from '../data/blogEntries';
import NavigationUrls from '../routers/NavigationUrls';
import AboutLink from './AboutLink';
import BlogEntry from './BlogEntry';
import Footer from './Footer';
import Header from './Header';

const BlogDetailPage = ({ match, history }) => {
  const blogEntry = blogEntries.find((blog) => blog.id === match.params.id);

  const blogButtonHandler = () => {
    history.push(NavigationUrls.blogPageUrl);
  };
  return (
    <>
      <Header />
      <span role="presentation" style={{ textDecoration: 'underline' }} onClick={blogButtonHandler}>Back to Blog</span>
      {' '}
      |
      <AboutLink />
      {' '}
      |
      <Link to={NavigationUrls.homePageUrl}>Back to Home</Link>
      <BlogEntry blogEntry={blogEntry} />
      <Footer />
    </>
  );
};

export default BlogDetailPage;
