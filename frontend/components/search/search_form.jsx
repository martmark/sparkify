import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, clearSearchTerm } from './../../actions/search_actions';
import SearchResults from './search_results';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ''};
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSearchTerm();
  }

  updateSearchTerm(e) {
    
      this.setState({ searchTerm: e.target.value });
      this.props.setSearchTerm(this.state.searchTerm);
  }

  render() {
    let searchResults;
    if (this.state.searchTerm.length === 0) {
      searchResults = <div className='pre-search-window'><h1>Search Sparkify</h1></div>
    } else {
      searchResults = <SearchResults searchTerm={this.state.searchTerm} />
    }

    return(
      <div className='search-window'>
        <div className='search-form'>
          <input type="text" value={this.state.searchTerm} placeholder='Start typing...' onChange={this.updateSearchTerm} />
        </div>
        {searchResults}
      </div>
    )
  }
}

// const msp = state => {
//   return({

//   });
// };

const mdp = dispatch => {
  return({
    setSearchTerm: (searchTerm) => dispatch(setSearchTerm(searchTerm)),
    clearSearchTerm: () => dispatch(clearSearchTerm())
  });
};

export default connect(null, mdp)(SearchForm);