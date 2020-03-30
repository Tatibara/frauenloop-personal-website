import React, {
  useEffect,
  useState,
} from 'react';

import { Link } from 'react-router-dom';

import database from '../firebase/firebase';
import NavigationUrls from '../routers/NavigationUrls';
import AboutLink from './AboutLink';
import BlogEntry from './BlogEntry';
import Footer from './Footer';
import Header from './Header';

const BlogDetailPage = ({ match, history }) => {
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

  const blogEntry = blogEntries.find((blog) => blog.id === match.params.id);

  const blogButtonHandler = () => {
    history.push(NavigationUrls.blogPageUrl);
  };

  if (!blogEntry) return null;

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
