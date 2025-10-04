import React from "react";
import "../../assets/styles/Vocabulary.css"

type SearchWordProps = {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const SearchWord: React.FC<SearchWordProps> = ( {search, setSearch} ) => {
    return (
        <form action="">
             <input 
                id="search"
                type="text"
                placeholder="Search vocabulary"
                role="searchbox"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <i className="ri-search-line"></i>
        </form>
    );
}

export default SearchWord;