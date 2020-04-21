export const HttpActionType = {
  SEND: 'SEND',
  RESPONSE: 'RESPONSE',
  ERROR: 'ERROR',
  RESET: 'RESET',
};

export const InitHttpState = { isLoading: false, error: null, data: null };

export default (currentHttpState, action) => {
  switch (action.type) {
    case HttpActionType.SEND:
      return { isLoading: true, error: null, data: null };
    case HttpActionType.RESPONSE:
      return { ...currentHttpState, isLoading: false, data: action.responseData };
    case HttpActionType.ERROR:
      return { isLoading: false, error: action.errorMessage };
    case HttpActionType.RESET:
      return InitHttpState;
    default:
      throw new Error('Should not be reached!');
  }
};
