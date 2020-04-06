import React, {
  useEffect,
  useReducer,
} from 'react';

import httpReducer, {
  HttpActionType,
  InitHttpState,
} from '../reducers/httpReducer';
import NavigationUrls from '../routers/NavigationUrls';
import database from '../services/firebase';
import BlogForm from './BlogForm';
import Footer from './Footer';
import Header from './Header';

const EditBlogPage = ({ match, history }) => {
  const [{ error, isLoading, data: blogEntries }, dispatchHttp] = useReducer(httpReducer, InitHttpState);
  let blogEntry = null;

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

  if (blogEntries) {
    blogEntry = blogEntries.find((blog) => blog.id === match.params.id);
  }

  const onEditBlogHandler = (updatedBlog) => {
    if (blogEntry) {
      database
        .ref(`blogs/${blogEntry.id}`)
        .update({ ...updatedBlog, updatedAt: new Date().getTime() })
        .then(() => {
          console.log('updated successful with key: ', blogEntry.id);
          history.push(NavigationUrls.blogPageUrl);
        }).catch((e) => {
          console.log('Error saving data', e.message);
        });
    }
  };

  const onDeleteBlog = () => {
    if (blogEntry) {
      database
        .ref(`blogs/${blogEntry.id}`)
        .remove()
        .then(() => {
          console.log('deleted successful with key: ', blogEntry.id);
          history.push(NavigationUrls.blogPageUrl);
        });
    }
  };

  return (
    <>
      <Header />
      <h3> Edit blog </h3>
      {isLoading ? <p>Loading...</p>
        : !error && blogEntry && (
        <>
          <button type="button" onClick={onDeleteBlog}>Delete</button>
          <BlogForm onSubmit={onEditBlogHandler} blogEntry={blogEntry} />
        </>
        ) }
      {error && <p>{error}</p>}

      <Footer />
    </>
  );
};

export default EditBlogPage;
