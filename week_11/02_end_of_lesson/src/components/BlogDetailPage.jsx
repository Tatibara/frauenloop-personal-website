import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import useHttp from '../hooks/useHttp';
import NavigationUrls from '../routers/NavigationUrls';
import AboutLink from './AboutLink';
import BlogEntry from './BlogEntry';
import Footer from './Footer';
import Header from './Header';

const BlogDetailPage = ({ match, history }) => {
  let blogEntry = null;
  const { httpState, getBlockEntries } = useHttp();

  useEffect(() => {
    getBlockEntries();
  }, [getBlockEntries]);

  if (httpState.data) {
    blogEntry = httpState.data.find((blog) => blog.id === match.params.id);
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
      {httpState.isLoading ? <p>Loading...</p>
        : !httpState.error && blogEntry && <BlogEntry blogEntry={blogEntry} /> }
      {httpState.error && <p>{httpState.error}</p>}
      <Footer />
    </>
  );
};

export default BlogDetailPage;
