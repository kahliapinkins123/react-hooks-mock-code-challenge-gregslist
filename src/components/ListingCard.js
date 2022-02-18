import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {
  const [favorited, setFavorited] = useState(false);

  function clickHandler(){
    setFavorited(()=>!favorited);
  }

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${listing.id}`,{
      method: 'DELETE',
    })
      .then((resp)=> resp.json())
      .then(()=> onDelete(listing))
  }



  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={clickHandler}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={clickHandler}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
