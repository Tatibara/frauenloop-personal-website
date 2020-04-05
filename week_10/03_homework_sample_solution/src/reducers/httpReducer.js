export const HttpActionType = {
  SEND: 'SEND',
  RESPONSE: 'RESPONSE',
  ERROR: 'ERROR',
};

export const InitHttpState = { isLoading: true, error: null, data: null };

export default (currentHttpState, action) => {
  switch (action.type) {
    case HttpActionType.SEND:
      return { isLoading: true, error: null, data: null };
    case HttpActionType.RESPONSE:
      return { ...currentHttpState, isLoading: false, data: action.responseData };
    case HttpActionType.ERROR:
      return { isLoading: false, error: action.errorMessage };
    default:
      throw new Error('Should not be reached!');
  }
};
