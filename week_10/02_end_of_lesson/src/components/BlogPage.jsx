import React, {
  useEffect,
  useState,
} from 'react';

import { Link } from 'react-router-dom';

import database from '../firebase/firebase';
import NavigationUrls from '../routers/NavigationUrls';
import BlogEntry from './BlogEntry';
import Footer from './Footer';
import Header from './Header';

const BlogPage = () => {
  const [blogEntries, setBlogEntries] = useState([]);

  useEffect(() => {
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
      })
      .catch((e) => {
        console.log('Error fetching data', e.message);
      });
  }, []);

  return (
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
};

export default BlogPage;
