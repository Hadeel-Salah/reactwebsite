import React from 'react';
import './search.css';

const Search = props => (
  <div className="md-form active-purple-2 mb-3">
     <input className="form-control mt-3 search_box"
      type="search" 
      placeholder='search for a monsters'
      onChange={props.onSearchChange}

      />
  </div>
);
export default Search;