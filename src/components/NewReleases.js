//When the component is called it will be displayed on screen 
import Books from "./Books";
import { useState, useEffect } from "react";
import axios from "axios";

const NewReleases = () => {
  //manages data in the class
  //useState returns the current state and the function to update it 
  //https://www.simplilearn.com/tutorials/reactjs-tutorial/how-to-create-functional-react-dropdown-menu
  const [value, setGenre] = useState([]);

  //when the users selects a genre from the option it updqates the state and fetches all the books under the specified genre 
  const handleChange = (event) => {
    const genre = event.target.value; 
    setGenre(genre); 
  
    console.log("Reloading book data for genre:", genre);
    //sending the url that contains the genre to the server 
    axios.get('http://localhost:4000/api/books/genre/' + genre) 
      .then((response) => {
        console.log("Filtered books fetched");
        setBooks(response.data); 
      })
      .catch((error) => {
        console.error("Error reloading data:", error);
      });
  };
  
  const [books,setBooks] = useState([]);
  //defines and manages the Reload function, which fetches updated book data from the server and updates the state
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
      <img src="/images/bookLogo.png" style={{height: 70, width: "15%", marginTop: 5, marginLeft:15}}></img>
      {/* https://www.simplilearn.com/tutorials/reactjs-tutorial/how-to-create-functional-react-dropdown-menu */}
      <div style={{marginLeft: "40%", marginTop:10, fontSize: "22px",  fontWeight: "bold", fontFamily:"Helvetica"}}>
        <label>
          {/* a drop down menu that allows the user to choose which genres will be shown on screen  */}
          {/* https://www.simplilearn.com/tutorials/reactjs-tutorial/how-to-create-functional-react-dropdown-menu */}
          Filter by genre 
          <select value={value} onChange={handleChange} style={{marginLeft:20}}>
            <option value="allBooks">All Books</option>
            <option value="romance">Romance</option>
            <option value="mystery">Mystery</option>
            <option value="drama">Drama</option>
            <option value="history">History</option>
            <option value="action">Action</option>
          </select>
        </label>
      </div>
      {/* fetching the books and reloads the book data */}
      <Books myBooks={books} ReloadData={Reload} />
    </div>
    );
};
  
  export default NewReleases;

