import React, {
  useEffect,
  useReducer,
} from 'react';

import { Link } from 'react-router-dom';

import httpReducer, {
  HttpActionType,
  InitHttpState,
} from '../reducers/httpReducer';
import NavigationUrls from '../routers/NavigationUrls';
import database from '../services/firebase';
import AboutLink from './AboutLink';
import BlogEntry from './BlogEntry';
import Footer from './Footer';
import Header from './Header';

const BlogDetailPage = ({ match, history }) => {
  const [{ error, isLoading, data: blogEntries }, dispatchHttp] = useReducer(httpReducer, InitHttpState);
  let blogEntry = null;

  useEffect(() => {
    dispatchHttp({ type: HttpActionType.SEND });

    database
      .ref('blogs')
      .once('value')
      .then((dataSnapshot) => {
        const blogEntriesFromDB = [];

        dataSnapshot.forEach((childSnapshot) => {
          blogEntriesFromDB.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });

        dispatchHttp({ type: HttpActionType.RESPONSE, responseData: blogEntriesFromDB });
      })
      .catch((e) => {
        dispatchHttp({ type: HttpActionType.ERROR, errorMessage: e.message });
        console.log('Error fetching data!', e.message);
      });
  }, []);

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
