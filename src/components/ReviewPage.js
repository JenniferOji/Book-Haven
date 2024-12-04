//When the component is called it will be displayed on screen 
import { useState, useEffect } from "react";
import axios from "axios";
import Reviews from "./Reviews";
import NewReview from "./NewReview";
import { Button } from "bootstrap";

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
      <a href="/newReview"><button className="btn btn-warning" style={{height: 45, width: "98%", marginTop: 5, marginLeft:15}}> Add Review</button></a>
      <Reviews myReviews={reviews} ReloadData={Reload} />
      {/* <div id="here">
      <NewReview ></NewReview>
      </div> */}
    </div>
    );
};
  
  export default ReviewPage;