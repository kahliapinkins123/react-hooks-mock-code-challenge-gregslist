import React from "react";
import Search from "./Search";

function Header({ input, setInput}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setInput={setInput} input={input}/>
    </header>
  );
}

export default Header;
