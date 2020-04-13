import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import useHttp from '../hooks/useHttp';
import NavigationUrls from '../routers/NavigationUrls';
import AboutLink from './AboutLink';
import BlogEntry from './BlogEntry';
import Footer from './Footer';
import Header from './Header';

const BlogDetailPage = ({ match, history }) => {
  const { httpState: { error, isLoading, data: blogEntries }, getBlockEntries } = useHttp();
  let blogEntry = null;

  useEffect(() => {
    getBlockEntries();
  }, [getBlockEntries]);

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
