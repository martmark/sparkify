import * as AlbumAPIUtil from './../util/album_api_util';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';

const receiveAlbum = payload => {
  return({
    type: RECEIVE_ALBUM,
    payload
  });
};

const receiveAlbums = albums => {
  return({
    type: RECEIVE_ALBUMS,
    albums
  });
};

export const fetchAlbum = id => dispatch => {
  return AlbumAPIUtil.fetchAlbum(id).then(payload => {
    return dispatch(receiveAlbum(payload));
  });
};

export const fetchAlbums = fetchType => dispatch => {
  return AlbumAPIUtil.fetchAlbums(fetchType).then(albums => {
    return dispatch(receiveAlbums(albums));
  });
};