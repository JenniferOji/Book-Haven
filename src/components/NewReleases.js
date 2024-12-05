//When the component is called it will be displayed on screen 
import Books from "./Books";
import { useState, useEffect } from "react";
import axios from "axios";


const NewReleases = () => {
  //manages data in the class
  //useState returns the current state and the function to update it 
  const [books,setBooks] = useState([]);
  
  //defines and manages the Reload function, which fetches updated movie data from the server and updates the state
  const Reload = () => {
    axios.get('http://localhost:4000/api/books')
        .then((response) => {
            console.log("Books fetched:"); 
            setBooks(response.data);
        })
        .catch((error) => {
            console.error("Error reloading data:", error);
            setBooks([]); 
        });
};
    
    //the page is constantly reloading 
    useEffect(() => {
      Reload();
    }, []);
      

    return (
    <div>
      <a href="/FavouritesPage"><button className="btn btn-success" style={{height: 45, width: "98%", marginTop: 5, marginLeft:15}}> View List </button></a>
      <Books myBooks={books} ReloadData={Reload} />
    </div>
    );
};
  
  export default NewReleases;