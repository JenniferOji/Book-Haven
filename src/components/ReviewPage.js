//When the component is called it will be displayed on screen 
import { useState, useEffect } from "react";
import axios from "axios";
import Reviews from "./Reviews";
// import AddReview from "./AddReview";
// import AddReview from "./AddReview";
import NewReview from "./NewReview";
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
      <Reviews myReviews={reviews} ReloadData={Reload} />
      {/* <AddReview></AddReview> */}
      <NewReview></NewReview>
    </div>
    );
};
  
  export default ReviewPage;