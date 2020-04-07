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

  return { httpState, getBlockEntries };
};

export default useHttp;
