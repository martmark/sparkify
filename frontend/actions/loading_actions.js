export const LOADING_TRUE = 'LOADING_TRUE';
export const LOADING_FALSE = 'LOADING_FALSE';

const loadingTrue = () => {
  return({
    type: LOADING_TRUE
  });
};

const loadingFalse = () => {
  return({
    type: LOADING_FALSE
  });
};

export const setLoadingTrue = () => dispatch => {
  return dispatch(loadingTrue());
};

export const setLoadingFalse = () => dispatch => {
  return dispatch(loadingFalse());
};