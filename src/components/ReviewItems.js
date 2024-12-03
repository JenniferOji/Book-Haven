import Card from 'react-bootstrap/Card';
import axios from "axios";
//how all the reviews are displayed
const ReviewItems = (props) => {

//what will be output in the rating section 
const stars = (rating) =>{

    //rounding to the nearest .5 for a more accurate rating 
    //https://stackoverflow.com/questions/72727340/how-do-i-round-to-the-nearest-0-5
    const roundRating = Math.round(parseFloat(rating) * 2.0) / 2.0;

    switch(roundRating){
        case 0: return <img src="/images/rating0.png" alt="Review" height="40" style={{ marginTop: '-10px' }} />
        case 0.5: return <img src="/images/rating0.5.5.png" alt="Review" height="40" style={{ marginTop: '-10px' }} />

        case 1: return <img src="/images/rating1.png" alt="Review" height="40" style={{ marginTop: '-10px' }} />
        case 1.5: return <img src="/images/rating1.5.png" alt="Review" height="40" style={{ marginTop: '-10px' }} />

        case 2: return <img src="/images/rating2.png" alt="Review" height="40" style={{ marginTop: '-20px' }} />
        case 2.5: return <img src="/images/rating2.5.png" alt="Review" height="40" style={{ marginTop: '-10px' }} />

        case 3: return <img src="/images/rating3.png" alt="Review" height="40" style={{ marginTop: '-20px' }} />
        case 3.5: return <img src="/images/rating3.5.png" alt="Review" height="40" style={{ marginTop: '-10px' }} />

        case 4: return <img src="/images/rating4.png" alt="Review" height="40" style={{ marginTop: '-20px' }} />
        case 4.5: return <img src="/images/rating4.5.png" alt="Review" height="40" style={{ marginTop: '-10px' }} />

        case 5: return <img src="/images/rating5.png" alt="Review" height="40" style={{ marginTop: '-20px' }} />

    }
}

//displaying the items of the array 
//using card is decorative and makes the page look better 
const handleDelete = (e)=>{
    e.preventDefault();
    axios.delete('http://localhost:4000/api/reviews/' + props.myReview._id)
        .then(() => {
            props.Reload(); //refreshing the review list after deletion
        })
        .catch((error) => {
            console.error("Error deleting movie:", error);
        });
};

//handles what happens to what been submitted
const handleSubmit = (e) => {
    e.preventDefault();

    const review = {
        title: props.myReview.title,
        review: props.myReview.review,
        rating: props.myReview.rating
      };
    
    axios.post('http://localhost:4000/api/reviewItems', review)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));

  }
    return(
        //allows the two divs to be displayed in the same row 
        <div class="d-flex flex-row justify-content-start align-items">
            <div class="col-10 mb-3">
                <div class="card" style={{ height: "12rem", marginLeft:15, marginTop:5}}>
                    <h5 class="card-header">{props.myReview.title}</h5> 
                    <div class="card-body d-flex align-items-center">
                    {/* this container displays the description of the book - theres a scroll wheel in order to view the full description */}
                        <div class="text-container"  style={{overflowY: "auto",flex: 1,position: "relative",}}>
                            <p  style={{padding: 8,height: "240px",lineHeight: "1.2",}}>
                                {props.myReview.review}
                            </p>
                        </div>
    
                        <a class="btn btn-primary" onClick={handleSubmit} style={{position: "absolute",left: 15,width: "10%",bottom: 6,height: "30px",lineHeight: "10px",}}>Edit</a>
                        <a class="btn btn-danger" onClick={handleDelete} style={{position: "absolute",left: 150,width: "10%",bottom: 6,height: "30px",lineHeight: "10px",}}>Delete</a>

                    </div>
                </div>
            </div>

            <div class="col-2 mb-3">
                <div class="card" style={{ height: "12rem", marginLeft:15, marginRight: 15, marginTop:10}}>
                    <h5 class="card-header">Rating : {props.myReview.rating}</h5> 
                    <div class="card-body d-flex align-items-center">
                    <div className="text-container d-flex justify-content-center" style={{ flex: 1 }}>
                    {/* {props.myReview.rating} */}
                                {stars(props.myReview.rating)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewItems;