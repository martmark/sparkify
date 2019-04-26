export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const CLEAR_SEARCH_TERM = 'CLEAR_SEARCH_TERM';

export const setSearchTerm = searchTerm => {
  return({
    type: SET_SEARCH_TERM,
    searchTerm
  });
};

export const clearSearchTerm = () => {
  return({
    type: CLEAR_SEARCH_TERM
  });
};