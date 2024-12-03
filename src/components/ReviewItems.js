import Card from 'react-bootstrap/Card';
import axios from "axios";
//where all the movies are displayed
const ReviewItems = (props) => {
    //const { title, description, cover } = props.myBook;
//displaying the items of the array 
//using card is decorative and makes the page look better 
const handleDelete = (e)=>{
    e.preventDefault();
    axios.delete('http://localhost:4000/api/books/' + props.myReview._id)
        .then(() => {
            props.Reload(); //refreshing the movie list after deletion
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
        <div class="col-4 mb-3">
            <div class="card" style={{ width: "26rem", height: "20rem", marginLeft:40, marginTop:10}}>
                <h5 class="card-header">{props.myReview.title}</h5> 
                <div class="card-body d-flex align-items-center">
                    <img src={props.myReview.rating}alt={props.myReview.title}height={250}width={150}style={{ paddingBottom: "35px" }}/>
                    {/* this container displays the description of the book - theres a scroll wheel in order to view the full description */}
                    <div class="text-container"  style={{overflowY: "scroll",flex: 1,position: "relative",}}>
                        <p  style={{padding: 8,height: "240px",lineHeight: "1.2",}}>
                            {props.myReview.review}
                        </p>
                    </div>
                    <a class="btn btn-success" onClick={handleSubmit} style={{position: "absolute",left: 15,width: "94%",bottom: 6,height: "30px",lineHeight: "10px",}}>Add to List</a>
                    {/* <a href="#"className="btn btn-danger"  onClick={handleDelete} style={{position: "absolute",left: 15,width: "94%",bottom: 6,height: "30px",lineHeight: "10px",}}>Add to List</a> */}

                </div>
            </div>
        </div>
    )
}

export default ReviewItems;