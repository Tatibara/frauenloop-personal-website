import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import NavigationUrls from '../routers/NavigationUrls';
import { BlogEntriesContext } from '../store/BlogEntriesContext';
import AboutLink from './AboutLink';
import BlogEntry from './BlogEntry';
import Footer from './Footer';
import Header from './Header';

const BlogDetailPage = ({ match, history }) => {
  const { error, isLoading, blogEntries } = useContext(BlogEntriesContext);
  let blogEntry = null;

  if (blogEntries) {
    blogEntry = blogEntries.find((blog) => blog.id === match.params.id);
  }

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
      {isLoading ? <p>Loading...</p>
        : !error && blogEntry && <BlogEntry blogEntry={blogEntry} /> }
      {error && <p>{error}</p>}
      <Footer />
    </>
  );
};

export default BlogDetailPage;
