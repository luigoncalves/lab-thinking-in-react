import { useState } from 'react';

function SearchBar({ filterProduct, check }) {
  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        onChange={(e) => filterProduct(e.target.value)}
        placeholder="Type"
      />
      <br />
      <input
        type="checkbox"
        id="checkbox"
        name="checkbox"
        onChange={(e) => check(e.target.checked)}
      />
      <label for="checkbox">Only show products in stock</label>
    </div>
  );
}

export default SearchBar;
