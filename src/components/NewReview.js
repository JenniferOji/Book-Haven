import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardHeader } from "react-bootstrap";
import { useParams } from "react-router-dom";

//creating a form that will send data to the create
function NewReview() {
    const { id } = useParams();
    //created a state variavle and a method to update it
    //the initial value of title will be an empty string
    const [Title, setTitle] = useState('Untitled');
    const [Review, setReview] = useState('');
    const [Rating, setRating] = useState('0');
    //when this component becomes active it goes off and reads a favourited book back by its id
    useEffect(() => {
        axios.get('http://localhost:4000/api/favourites/' + id)
            .then((response) => {
                setTitle(response.data.title);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

  //handles what happens to what been submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert("Review successfully added to My Reviews Page!")

    console.log(`Title: ${Title}, Review: ${Review}, Rating: ${Rating}`);
    
    const review = {
      title: Title,
      review: Review,
      rating: Rating,
      time: new Date().toLocaleString()//adding the time and date as part of the review 
    };

    //posting the new review onto the review page to handle it
    axios.post('http://localhost:4000/api/reviews', review)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  }

  return (
    //https://stackoverflow.com/questions/42125775/reactjs-react-router-how-to-center-div
    <div>
    <img src="/images/bookLogo.png" style={{height: 70, width: "15%", marginTop: "10px", marginLeft:15, }}></img>
        <div style={{display: "flex", justifyContent: "center", height:"80vh", alignItems: "center"}}>
        <Card style={{width: "60%", height:"90%", justifyContent: "center", alignItems: "center", backgroundColor: "#8fbc8f", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)"}}>
        <form style={{width:"80%"}}>
                    <div className="form-group">
                        <div>
                            <label style={{ fontSize: "20px", fontWeight: "bold" }}>Add Book Title:</label>
                                <input type="text"
                                    //styling from bootstrap
                                    className="form-control"
                                    // value is set to title and when theres change it executes the arrow function and passes in the value of the aria-controls=""
                                    value={Title}
                                    placeholder="Enter the book title"
                                    onChange={(e) => { setTitle(e.target.value) }}
                                />
                            </div>
                        </div>
                    <div>
                        <label></label>
                    </div>
                        <div>
                            <label style={{ fontSize: "20px", fontWeight: "bold"}}>Add Book Review: </label>
                                {/* textarea allows you to apply multi line input, im using it for the review box to give the user better visibility of what theyre typing*/}
                                <textarea type="text" style={{resize: "none", overflow: "auto", height:150}}
                                    className="form-control"
                                    value={Review}
                                    placeholder="Write your thoughts on the book here"
                                    onChange={(e) => { setReview(e.target.value) }}
                                />
                            </div>
                        <div>
                            <label></label>
                        </div>
                            <div>
                            <label style={{ fontSize: "20px", fontWeight: "bold"}}>Add rating: </label>
                                <input type="text"
                                    className="form-control"
                                    value={Rating}
                                    placeholder="Rate the book out of 5"
                                    onChange={(e) => { setRating(e.target.value) }}
                                />
                            </div>
                        <div>
                            <label></label>
                        </div>
                    <button className="btn btn" style={{width:"100%", backgroundColor:"#228b22", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)"}} onClick={handleSubmit}><label style={{ fontSize: "18px", fontWeight: "normal" }}>Add Reiew</label></button>
                </form>
            </Card>
        </div>
    </div>
  );
}

export default NewReview;
