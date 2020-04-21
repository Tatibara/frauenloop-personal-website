import React, {
  Fragment,
  useContext,
} from 'react';

import { Link } from 'react-router-dom';

import NavigationUrls from '../routers/NavigationUrls';
import { BlogEntriesContext } from '../store/BlogEntriesContext';
import BlogEntry from './BlogEntry';
import Footer from './Footer';
import Header from './Header';

const BlogPage = () => {
  const { error, isLoading, blogEntries } = useContext(BlogEntriesContext);

  return (
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
  );
};

export default BlogPage;
