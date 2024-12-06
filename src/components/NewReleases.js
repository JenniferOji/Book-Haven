//When the component is called it will be displayed on screen 
import Books from "./Books";
import { useState, useEffect } from "react";
import axios from "axios";

const NewReleases = () => {
  //manages data in the class
  //useState returns the current state and the function to update it 
  const [value, setGenre] = useState([]);

  const handleChange = (event) => {
    const genre = event.target.value; 
    setGenre(genre); 
  
    console.log("Reloading book data for genre:", genre);
    //sending the url that contains the genre to the server 
    axios.get('http://localhost:4000/api/books/genre/' + genre) 
      .then((response) => {
        console.log(" Filtered books fetched");
        setBooks(response.data); 
      })
      .catch((error) => {
        console.error("Error reloading data:", error);
      });
  };
  

  
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
      <div>
        <label>
          Filter by genre 
          <select value={value} onChange={handleChange}>
            <option value="allBooks">All Books</option>
            <option value="romance">Romance</option>
            <option value="mystery">Mystery</option>
            <option value="drama">Drama</option>
            <option value="history">History</option>
            <option value="action">Action</option>
          </select>
        </label>
      </div>

      <a href="/FavouritesPage"><button className="btn btn-success" style={{height: 45, width: "98%", marginTop: 5, marginLeft:15}}> View Favourites </button></a>
      <Books myBooks={books} ReloadData={Reload} />
    </div>
    );
};
  
  export default NewReleases;

