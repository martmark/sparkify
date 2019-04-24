import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { setLoadingTrue, setLoadingFalse } from './../../actions/loading_actions';

// const artistIndexItem = ({ artist, history }) => {

class ArtistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.setLoadingTrue()
    this.props.history.push(`/artist/${this.props.artist.id}`)
  }

  render() {
    const { artist } = this.props;
    return (
      <li className='artist-index-item'>
        <div className='artist-index-item-image'>
          <img onClick={this.redirect} src={artist.small_image_url} alt={artist.name} />
        </div>
        <button onClick={this.redirect}>{artist.name}</button>
      </li>
    );
  }
}

const mdp = dispatch => {
  return({
    setLoadingTrue: () => dispatch(setLoadingTrue())
  })
}

export default withRouter(connect(null, mdp)(ArtistIndexItem));