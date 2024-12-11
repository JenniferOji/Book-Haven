//When the component is called it will be displayed on screen 
import { useState, useEffect } from "react";
import axios from "axios";
import Reviews from "./Reviews";

const ReviewPage = () => {
  //manages data in the class
  //useState returns the current state and the function to update it 
  const [reviews,setReviews] = useState([]);
  
  //defines and manages the Reload function, which fetches updated movie data from the server and updates the state
  const Reload = () => {
    axios.get('http://localhost:4000/api/reviews')
        .then((response) => {
            console.log("Reviews fetched:"); 
            setReviews(response.data);
        })
        .catch((error) => {
            console.error("Error reloading data:", error);
        });
  };
    
    //the page is constantly reloading 
    useEffect(() => {
      Reload();
    }, []);
      

    return (
    <div>
      <img src="/images/bookLogo.png" style={{height: 70, width: "15%", marginTop: 5, marginLeft:15}}></img>
      {/* fetching the reviews and reloads the review data */}
      <Reviews myReviews={reviews} ReloadData={Reload} />
    </div>
    );
};
  
  export default ReviewPage;