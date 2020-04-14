import {
  useCallback,
  useReducer,
} from 'react';

import httpReducer, {
  HttpActionType,
  InitHttpState,
} from '../reducers/httpReducer';
import database from '../services/firebase';

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, InitHttpState);

  const getBlockEntries = useCallback(() => {
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

  const addBlogEntry = useCallback((newBlog) => {
    dispatchHttp({ type: HttpActionType.SEND });

    database
      .ref('blogs')
      .push({ ...newBlog, createdAt: new Date().getTime() })
      .then((ref) => {
        dispatchHttp({ type: HttpActionType.RESPONSE, responseData: newBlog });

        console.log('added successful with key: ', ref.key);
      })
      .catch((e) => {
        dispatchHttp({ type: HttpActionType.ERROR, errorMessage: e.message });

        console.log('Error saving data', e.message);
      });
  }, []);

  const deleteBlogEntry = useCallback((blogId) => {
    dispatchHttp({ type: HttpActionType.SEND });

    database
      .ref(`blogs/${blogId}`)
      .remove()
      .then(() => {
        console.log('deleted successful with key: ', blogId);

        dispatchHttp({ type: HttpActionType.RESPONSE, responseData: blogId });
      }).catch((e) => {
        console.log('Error deleting data', e.message);

        dispatchHttp({ type: HttpActionType.ERROR, errorMessage: e.message });
      });
  }, []);

  const updateBlogEntry = useCallback((updatedBlogEntry) => {
    dispatchHttp({ type: HttpActionType.SEND });

    database
      .ref(`blogs/${updatedBlogEntry.id}`)
      .update({ ...updatedBlogEntry, updatedAt: new Date().getTime() })
      .then(() => {
        console.log('updated successful with key: ', updatedBlogEntry.id);

        dispatchHttp({ type: HttpActionType.RESPONSE, responseData: updatedBlogEntry.id });
      }).catch((e) => {
        console.log('Error saving data', e.message);

        dispatchHttp({ type: HttpActionType.ERROR, errorMessage: e.message });
      });
  }, []);

  return {
    httpState, getBlockEntries, addBlogEntry, deleteBlogEntry, updateBlogEntry,
  };
};

export default useHttp;
