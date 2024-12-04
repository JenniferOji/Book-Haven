import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

//useParams
export default function EditReview(props) {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();

//when this ocmponent becomes active it goes off and reads a review back by its id
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
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Book Title: </label>
                <input type="text" 
                className="form-control" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Review: </label>
                <input type="text" 
                className="form-control" 
                value={review} 
                onChange={(e) => setReview(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Rating: </label>
                <input type="text" 
                className="form-control" 
                value={rating} 
                onChange={(e) => setRating(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="submit" value="Edit Movie" className="btn btn-primary" />
            </div>
        </form>
    </div>
);
}