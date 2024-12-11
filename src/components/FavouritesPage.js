//When the component is called it will be displayed on screen 
import Books from "./Books";
import Favourites from "./Favourites"
import { useState, useEffect } from "react";

import axios from "axios";

const FavouritesPage = () => {
  //manages data in the class
  //useState returns the current state and the function to update it 
  const [favourite,setFavouriteBooks] = useState([]);
  
  //defines and manages the Reload function which fetches updated books data from the server and updates the state
  const Reload = () => {
    axios.get('http://localhost:4000/api/favourites')
      .then((response) => {
        console.log("Books fetched:", response.data); 
        setFavouriteBooks(response.data);
      })
      .catch((error) => {
        console.error("Error reloading data:", error);
      });
  };
    
  useEffect(() => {
    //reloading the data
    Reload();
  }, []);

    return (
    <div>
      <img src="/images/bookLogo.png" style={{height: 70, width: "15%", marginTop: 5, marginLeft:15}}></img>
      {/* fetching the favourited books and reloading the book data */}
      <Favourites myFavourites={favourite} ReloadData={Reload} />
    </div>
    );
};
  
  export default FavouritesPage;