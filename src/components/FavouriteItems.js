import Card from 'react-bootstrap/Card';
import axios from "axios";
//how all the movies are displayed
const FavouriteItems = (props) => {
//displaying the items of the array 
//using card is decorative and makes the page look better 
const handleDelete = (e)=>{
    e.preventDefault();
    axios.delete('http://localhost:4000/api/favourites/' + props.myFavourite._id)
        .then(() => {
            props.Reload(); //refreshing the book list after deletion
        })
        .catch((error) => {
            console.error("Error deleting movie:", error);
        });
};

//handles what happens to what been submitted
const handleSubmit = (e) => {
    e.preventDefault();

    const favourite = {
        title: props.myFavourite.title,
        description: props.myFavourite.description,
        cover: props.myFavourite.cover
      };
    
    axios.post('http://localhost:4000/api/favourites', favourite)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  }
    return(
        <div className="col-12 mb-3">
            <div className="card" style={{width:"98%", height: "13rem", marginLeft:15, marginTop:10}}>
                <h5 className="card-header">{props.myFavourite.title}</h5> 
                <div className="card-body d-flex ">
                    <img src={props.myFavourite.cover}alt={props.myFavourite.title}height={170}width={100}style={{ paddingBottom: "35px" }}/>
                    {/* this container displays the description of the book - theres a scroll wheel in order to view the full description */}
                    <div className="text-container"  style={{overflowY: "auto",flex: 1,position: "relative",}}>
                        <p  style={{padding: 8,height: "240px",lineHeight: "1.2",}}>
                            {props.myFavourite.description}
                        </p>
                    </div>
                    <a href="NewReview" className="btn btn-warning" style={{position: "absolute",right: 260,width: "15%",bottom: 6,height: "30px",lineHeight: "10px", marginBottom:10}}>Leave Review</a>
                    <a className="btn btn-danger" onClick={handleDelete} style={{position: "absolute",right:30,width: "15%",bottom: 6,height: "30px",lineHeight: "10px", marginBottom:10}}>Remove from list</a>

                </div>
            </div>
        </div>

    )
}

export default FavouriteItems;