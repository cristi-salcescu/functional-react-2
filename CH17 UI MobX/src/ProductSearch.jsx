import React from 'react';
import { useInputState } from './hooks';

import './ProductSearch.css';

export default function ProductSearch({ onSearch }) {
    const [text, setText] = useInputState('');

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
            onChange={setText}
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