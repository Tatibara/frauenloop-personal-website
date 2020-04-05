import React, {
  useEffect,
  useState,
} from 'react';

import { Link } from 'react-router-dom';

import NavigationUrls from '../routers/NavigationUrls';
import database from '../services/firebase';
import BlogEntry from './BlogEntry';
import Footer from './Footer';
import Header from './Header';

const BlogPage = () => {
  const [blogEntries, setBlogEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    database
      .ref('blogs')
      .once('value')
      .then((dataSnapshot) => {
        dataSnapshot.forEach((childSnapshot) => {
          setBlogEntries((existingBlogEntries) => [
            ...existingBlogEntries,
            {
              id: childSnapshot.key,
              ...childSnapshot.val(),
            }]);
        });
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message);
        console.log('Error fetching data!!!', e.message);
      });
  }, []);

  return (
    <>
      <Header />
      <h3> My Blog is Everything! </h3>
      <Link to={NavigationUrls.addBlogPageUrl}>Add New Entry</Link>
      {isLoading ? <p>Loading...</p>
        : blogEntries.map((blogEntry) => (
          <>
            <BlogEntry blogEntry={blogEntry} />
            <Link to={`${NavigationUrls.blogDetailPageUrl}/${blogEntry.id}`}>Read more</Link>
            <hr />
          </>
        ))}
      {error && <p>{error}</p>}
      <Footer />
    </>
  );
};

export default BlogPage;
