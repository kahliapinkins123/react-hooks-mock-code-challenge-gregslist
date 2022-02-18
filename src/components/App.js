import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingList, setListingList] = useState([]);
  const [input, setInput] = useState('');

  const shownListings = listingList.filter((listing)=>{
    return listing.description.toLowerCase().includes(input.toLowerCase());
  })

  return (
    <div className="app">
      <Header input={input} setInput={setInput}/>
      <ListingsContainer listingList={shownListings} setListingList={setListingList}/>
    </div>
  );
}

export default App;
