import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {



    return (
        <div className='searchBox'>
            <input type='text' placeholder='체험활동 검색하기'  className='searchInput'/>
            <button id='search-btn'>
                <FaSearch/>
            </button>
        </div>

    );
};

export default React.memo(SearchBar);