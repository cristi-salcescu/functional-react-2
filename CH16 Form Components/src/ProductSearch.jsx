import React, { useState } from 'react';

import './ProductSearch.css';

export default function ProductSearch({ onSearch }) {
    const [text, setText] = useState('');

    function submitSearch(e){
        e.preventDefault();
        onSearch({text});
    }

    return (
    <form 
        className="search-form" 
        onSubmit={submitSearch}>

        <input
            value={text}
            onChange={e=> setText(e.target.value)}
            placeholder="Product"
            type="text"
            name="text"
        />
        <button 
            type="search" 
            className = "search-button">
                Search
        </button>
    </form>
    );
}