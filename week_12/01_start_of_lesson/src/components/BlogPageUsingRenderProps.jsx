import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

import BlogsFetcher from '../render_props/BlogsFetcher';
import NavigationUrls from '../routers/NavigationUrls';
import BlogEntry from './BlogEntry';
import Footer from './Footer';
import Header from './Header';

const BlogPage = () => (
  <BlogsFetcher>
    {({ isLoading, error, data: blogEntries }) => (
      <>
        <Header />
        <h3> My Blog is Everything! </h3>
        <Link to={NavigationUrls.addBlogPageUrl}>Add New Entry</Link>
        {isLoading ? <p>Loading...</p>
          : !error && blogEntries && blogEntries.map((blogEntry) => (
            <Fragment key={blogEntry.id}>
              <BlogEntry blogEntry={blogEntry} />
              <Link to={`${NavigationUrls.blogDetailPageUrl}/${blogEntry.id}`}>Read more</Link>
              {' '}
              |
              <Link to={`${NavigationUrls.editBlogPageUrl}/${blogEntry.id}`}>Edit</Link>
              {' '}
              <hr />
            </Fragment>
          ))}
        {error && <p>{error}</p>}
        <Footer />
      </>
    )}
  </BlogsFetcher>
);

export default BlogPage;
