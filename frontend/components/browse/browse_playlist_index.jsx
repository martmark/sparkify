import { connect } from 'react-redux';
import PlaylistIndex from '../playlist/playlist_index';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { setLoadingTrue, setLoadingFalse } from '../../actions/loading_actions';
import React from 'react';

class BrowsePlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sparkifyPlaylists: [], otherPlaylists: [] };
  }

  componentDidMount() {
    this.props.fetchPlaylists()
    .then(() => {
      var shuffle = function (array) {
        var currentIndex = array.length;
        var temporaryValue, randomIndex;

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
      };
      let spPlaylists = [];
      let otPlaylists = [];
      this.props.playlists.forEach(playlist => {
        if (playlist.userId === 2) {
          spPlaylists.push(playlist)
        } else {
          otPlaylists.push(playlist)
        }
      })
      let shuffledPlaylists = shuffle(otPlaylists);
      this.setState( { otherPlaylists: shuffledPlaylists, sparkifyPlaylists: spPlaylists });
    })
    .then(() => this.props.setLoadingFalse());
  }

  componentWillUnmount() {
    this.props.setLoadingTrue();
  }

  render() {
    const { loading } = this.props;
    
    if (loading) {
      return (
        <div className='spinner-outer'>
          <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
          </div>
        </div>
      )
    }

    if (this.props.playlists.length === 0) {
      return (
        <div className='sad'>
          
            <p>You have literally followed every existing playlist.</p>
            
            <p>¯\_(ツ)_/¯</p>
          
        </div>
      )
    }

    let sparkPlaylists = this.state.sparkifyPlaylists;
    let publicPlaylists;

    if (this.state.otherPlaylists.length > 0) {
      publicPlaylists = <div className='other-playlists-outer'>
        <span className='other-playlists'>Playlists from Other Users</span>
        <div className='browse-playlist-index'>
          <PlaylistIndex playlists={this.state.otherPlaylists} />
        </div>
      </div>  
    }
   
    return (
      <div className='browse-playlists-outer'>
        <div className='browse-playlist-index'>
          <PlaylistIndex playlists={sparkPlaylists} />
        </div>
        {publicPlaylists}
      </div>
    )
  }
}

const msp = state => {
  return({
    playlists: Object.values(state.entities.playlists),
    loading: state.ui.loading.status
  })
}

const mdp = dispatch => {
  return({
    fetchPlaylists: () => dispatch(fetchPlaylists({ fetchType: 'browse' })),
    setLoadingTrue: () => dispatch(setLoadingTrue()),
    setLoadingFalse: () => dispatch(setLoadingFalse())
  })
}

export default connect(msp, mdp)(BrowsePlaylistIndex);