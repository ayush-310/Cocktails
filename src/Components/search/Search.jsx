import React, { useState } from 'react';
import {Card} from "../cards/Card"
import "../search/Search.css";

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <div className="container search-form">
                <div className="row form-control">
                    <h2>Search Your Favourite Beverage Here</h2>

                    <input
                        id="searchInput"
                        type="text"
                        placeholder="Search here..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                    />

                </div>
            </div>
            <Card searchTerm={searchTerm} />
        </div>
    );
}

// export default Search
