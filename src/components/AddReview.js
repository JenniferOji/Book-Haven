import { useState } from "react";
import axios from "axios";
//creating a form that will send data to the create
function AddReview() {
  //created a state variavle and a method to update it
  //the initial value of title will be an empty string
  const [Title, setTitle] = useState('');
  const [Review, setReview] = useState('');
  const [Rating, setRating] = useState('');

  //handles what happens to what been submitted
  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(`Title: ${Title}, Review: ${Review}, Rating: ${Rating}`);
    
    const review = {
      title: Title,
      review: Review,
      rating: Rating
    };
    
    //posting the new review onto the review page
    axios.post('http://localhost:4000/api/reviews', review)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Book Title: </label>
          <input type="text"
            //styling from bootstrap
            className="form-control"
            // value is set to title and when theres change it executes the arrow function and passes in the value of the aria-controls=""
            value={Title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>
        <div>
            <label></label>
        </div>
        <div>
        <label>Add Book Review: </label>
          <input type="text"
            //styling from bootstrap
            className="form-control"
            // value is set to title and when theres change it executes the arrow function and passes in the value of the aria-controls=""
            value={Review}
            onChange={(e) => { setReview(e.target.value) }}
          />
        </div>
        <div>
            <label></label>
        </div>
        
        <div>
        <label>Add rating: </label>
          <input type="text"
            //styling from bootstrap
            className="form-control"
            // value is set to title and when theres change it executes the arrow function and passes in the value of the aria-controls=""
            value={Rating}
            onChange={(e) => { setRating(e.target.value) }}
          />
        </div>

        <div>
            <label></label>
        </div>
        <input type="submit" value="Add Review" />
      </form>
    </div>
  );
}

export default AddReview;