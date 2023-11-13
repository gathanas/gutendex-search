import React, { ChangeEventHandler, KeyboardEventHandler } from "react";
import "../styles/search-bar.css";
import { Search } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router";

const SearchBar: React.FC = () => {
  const [input, setInput] = React.useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const addQueryToURL = (query: string) => {
  
    const newURL = location.pathname + "?filter=" + query;
    navigate(query==="" ? location.pathname : newURL);

  
  }



  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInput(event.target.value);
  };

  const searchOnEnter: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      addQueryToURL(input);
    }
  };

  const onSearchAction = () => {
    addQueryToURL(input);
  };

  return (
    <div className="search-container">
      <input
        onKeyDown={searchOnEnter}
        onChange={handleChange}
        type="text"
        className="search-input"
        placeholder="Search..."
      />
      <button onClick={onSearchAction} className="search-button">
        <Search />
      </button>
    </div>
  );
};

export default SearchBar;
