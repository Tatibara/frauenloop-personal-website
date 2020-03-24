import React from 'react';

import { Link } from 'react-router-dom';

import blogEntries from '../data/blogEntries';
import NavigationUrls from '../routers/NavigationUrls';
import BlogEntry from './BlogEntry';
import Footer from './Footer';
import Header from './Header';

const BlogPage = () => (
  <>
    <Header />
    <h3> My Blog is Everything! </h3>
    <Link to={NavigationUrls.addBlogPageUrl}>Add New Entry</Link>
    {blogEntries.map((blogEntry) => (
      <>
        <BlogEntry blogEntry={blogEntry} />
        <Link to={`${NavigationUrls.blogDetailPageUrl}/${blogEntry.id}`}>Read more</Link>
        <hr />
      </>
    ))}
    <Footer />
  </>
);

export default BlogPage;
