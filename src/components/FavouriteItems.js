import Card from 'react-bootstrap/Card';
import axios from "axios";

const FavouriteItems = (props) => {
//displaying the items of the array 
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

    return(
        <div className="col-12 mb-3">
            <div className="card" style={{width:"98%", height: "14rem", marginLeft:15, marginTop:10}}>
                <h5 className="card-header">{props.myFavourite.title}</h5> 
                <div className="card-body d-flex ">
                    <img src={props.myFavourite.cover}alt={props.myFavourite.title}style={{ paddingBottom: "45px", height:190, width:120 }}/>
                    {/* this container displays the description of the book - theres a scroll wheel in order to view the full description */}
                    <div className="text-container"  style={{overflowY: "auto",flex: 1,position: "relative",}}>
                        <p  style={{padding: 10,height: "240px",lineHeight: "1.2",}}>
                                {props.myFavourite.description}
                        </p>
                    </div>
                    <a href="NewReview" className="btn btn-warning" style={{position: "absolute",right: 300,width: "15%",bottom: 6,height: "30px",lineHeight: "10px", marginBottom:10}}>Leave Review</a>
                    <a className="btn btn-danger" onClick={handleDelete} style={{position: "absolute",right:30,width: "15%",bottom: 6,height: "30px",lineHeight: "10px", marginBottom:10}}>Remove from list</a>
                </div>
            </div>
        </div>
    )
}

export default FavouriteItems;