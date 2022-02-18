import React, { useEffect } from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({ listingList, setListingList}) {
  

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((listings) => {setListingList(listings)});
  }, [setListingList]);

  function handleDeleteListing(deletedListing){
    const updatedListings = listingList.filter((listing)=>{
      return listing.id !== deletedListing.id;
    })
    setListingList(updatedListings);
  }

  const listings = listingList.map((listing)=>{
    return <ListingCard key={listing.id} listing={listing} onDelete={handleDeleteListing}/>
  })



  return (
    <main>
      <ul className="cards">
        {listings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
