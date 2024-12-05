import { useState } from "react";
import axios from "axios";
import { Card, CardHeader } from "react-bootstrap";
//creating a form that will send data to the create
function NewReview() {
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
    
    //posting the new review onto the review page to handle it
    axios.post('http://localhost:4000/api/reviews', review)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  }

  return (
    //https://stackoverflow.com/questions/42125775/reactjs-react-router-how-to-center-div
    <div style={{display: "flex", justifyContent: "center", height:"100vh", alignItems: "center"}}>
        <Card style={{width: "60%", height:"70%", justifyContent: "center", alignItems: "center"}}>
            <form style={{width:"80%"}}>
                <div className="form-group">
                    <div>
                        <label>Add Book Title: </label>
                            <input type="text"
                                //styling from bootstrap
                                className="form-control"
                                // value is set to title and when theres change it executes the arrow function and passes in the value of the aria-controls=""
                                value={Title}
                                onChange={(e) => { setTitle(e.target.value) }}
                            />
                        </div>
                    </div>
                <div>
                    <label></label>
                </div>
                    <div>
                        <label>Add Book Review: </label>
                            {/* textarea allows you to apply multi line input, im using it for the review box to give the user better visibility of what theyre typing*/}
                            <textarea type="text" style={{resize: "none", overflow: "auto", height:150}}
                                className="form-control"
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
                                className="form-control"
                                value={Rating}
                                onChange={(e) => { setRating(e.target.value) }}
                            />
                        </div>
                    <div>
                        <label></label>
                    </div>
                <button className="btn btn-warning" onClick={handleSubmit}>Add Review</button>
            </form>
        </Card>
    </div>
  );
}

export default NewReview;