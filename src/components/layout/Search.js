import React, { useState } from "react";

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText('');
    }
  };

    return (
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={handleChange}
            placeholder="Search Users.."
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
}

export default Search;
