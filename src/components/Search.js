import React from "react";

function Search({ input, setInput }) {

  function handleSubmit(e) {
    e.preventDefault();
    setInput(input);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
