import React, {
  Fragment,
  useEffect,
} from 'react';

import { Link } from 'react-router-dom';

import useHttp from '../hooks/useHttp';
import NavigationUrls from '../routers/NavigationUrls';
import BlogEntry from './BlogEntry';
import Footer from './Footer';
import Header from './Header';

const BlogPage = () => {
  const { httpState, getBlockEntries } = useHttp();

  useEffect(() => {
    getBlockEntries();
  }, [getBlockEntries]);

  return (
    <>
      <Header />
      <h3> My Blog is Everything! </h3>
      <Link to={NavigationUrls.addBlogPageUrl}>Add New Entry</Link>
      {httpState.isLoading ? <p>Loading...</p>
        : !httpState.error && httpState.data.map((blogEntry) => (
          <Fragment key={blogEntry.id}>
            <BlogEntry blogEntry={blogEntry} />
            <Link to={`${NavigationUrls.blogDetailPageUrl}/${blogEntry.id}`}>Read more</Link>
            {' '}
            |
            <Link to={`${NavigationUrls.editBlogPageUrl}/${blogEntry.id}`}>Edit</Link>
            {' '}
            {/* <hr /> */}
          </Fragment>
        ))}
      {httpState.error && <p>{httpState.error}</p>}
      <Footer />
    </>
  );
};

export default BlogPage;
