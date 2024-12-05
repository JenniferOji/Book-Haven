//When the component is called it will be displayed on screen 
import Books from "./Books";
import Favourites from "./Favourites"
import { useState, useEffect } from "react";

import axios from "axios";

const FavouritesPage = () => {
  //manages data in the class
  //useState returns the current state and the function to update it 
  const [favourite,setFavouriteBooks] = useState([]);
  
  //defines and manages the Reload function, which fetches updated movie data from the server and updates the state
  
  const Reload = () => {
    axios.get('http://localhost:4000/api/favourites')
      .then((response) => {
        console.log("Books fetched:", response.data); // Debug log
        setFavouriteBooks(response.data);
      })
      .catch((error) => {
        console.error("Error reloading data:", error);
      });
  };
    
  useEffect(() => {
    console.log("Reloading data...");
    Reload();
  }, []);

    return (
    <div>
      <a href="/NewReleases"><button className="btn btn-primary" style={{height: 45, width: "98%", marginTop: 5, marginLeft:15}}> See More Books </button></a>
      <Favourites myFavourites={favourite} ReloadData={Reload} />
    </div>
    );
};
  
  export default FavouritesPage;