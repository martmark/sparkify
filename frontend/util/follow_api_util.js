export const followItem = followInfo => {
  return $.ajax({
    url: '/api/follows/',
    method: 'POST',
    data: followInfo
  });
};

export const unfollowItem = unfollowInfo => {
  return $.ajax({
    url: '/api/follows/1',
    method: 'DELETE',
    data: unfollowInfo
  });
};