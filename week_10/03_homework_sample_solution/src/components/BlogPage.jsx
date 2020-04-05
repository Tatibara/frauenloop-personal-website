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
import BlogEntry from './BlogEntry';
import Footer from './Footer';
import Header from './Header';

const BlogPage = () => {
  const [{ error, isLoading, data: blogEntries }, dispatchHttp] = useReducer(httpReducer, InitHttpState);


  useEffect(() => {
    dispatchHttp({ type: HttpActionType.SEND });

    database
      .ref('blogs')
      // once returns a promice
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
