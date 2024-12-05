import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

//useParams
export default function EditReview(props) {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");
    const navigate = useNavigate();

//when this component becomes active it goes off and reads a review back by its id
useEffect(() => {
    axios.get('http://localhost:4000/api/reviews/' + id)
        .then((response) => {
            setTitle(response.data.title);
            setReview(response.data.review);
            setRating(response.data.rating);
        })
        .catch((error) => {
            console.log(error);
        });
}, [id]);

//an event that handles what happens when the button is clicked 
const handleSubmit = (event) => {
    event.preventDefault();
    const updatedReview = { id, title, review, rating };
    axios.put('http://localhost:4000/api/reviews/' + id, updatedReview)
        .then((res) => {
            console.log(res.data);
            navigate('/reviewPage');
        });
}

//on the handl sumbit event it re submits the update movie information 
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
                                value={title}
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
                                value={review}
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
                                value={rating}
                                onChange={(e) => { setRating(e.target.value) }}
                            />
                        </div>
                    <div>
                        <label></label>
                    </div>
                <button className="btn btn-warning" onClick={handleSubmit}>Edit Review</button>
            </form>
        </Card>
    </div>
);
}