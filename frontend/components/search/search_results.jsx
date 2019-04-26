import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import SearchNav from './search_nav';
import SongSearch from './song_search';
import AlbumSearch from './album_search';
import ArtistSearch from './artist_search';

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.searchTerm) {
      return(
        <h1>Search Sparkify</h1>
      )
    } else {
      return(
        <div className='search-results'>
          <SearchNav />
          <Route exact path='/search' render={() => <Redirect to='/search/tracks' />} />
          <Route
            path='/search/albums'
            render={(props) => <AlbumSearch {...props} searchTerm={this.props.searchTerm} />}
          />
          <Route
            path='/search/artists'
            render={(props) => <ArtistSearch {...props} searchTerm={this.props.searchTerm} />}
          />
          <Route
            path='/search/tracks'
            render={(props) => <SongSearch {...props} searchTerm={this.props.searchTerm} />}
          />
        </div>
      )
    }
  }
}



export default SearchResults;