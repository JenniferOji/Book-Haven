import Card from 'react-bootstrap/Card';
import axios from "axios";
//how all the movies are displayed
const BookItem = (props) => {
//displaying the items of the array 
//using card is decorative and makes the page look better 
const handleDelete = (e)=>{
    e.preventDefault();
    axios.delete('http://localhost:4000/api/books/' + props.myBook._id)
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

    const book = {
        title: props.myBook.title,
        description: props.myBook.description,
        cover: props.myBook.cover
      };
    
    axios.post('http://localhost:4000/api/favourites', book)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  }
    return(
        <div className="col-4 mb-3">
            <div className="card" style={{ width: "28.5rem", height: "20rem", marginLeft:20,marginRight:25, marginTop:10}}>
                <h5 className="card-header">{props.myBook.title}</h5> 
                <div className="card-body d-flex align-items-center">
                    <img src={props.myBook.cover}alt={props.myBook.title}height={250}width={150}style={{ paddingBottom: "35px" }}/>
                    {/* this container displays the description of the book - theres a scroll wheel in order to view the full description */}
                    <div className="text-container"  style={{overflowY: "scroll",flex: 1,position: "relative"}}>
                        <p  style={{padding: 6,height: "240px",lineHeight: "1.2", marginLeft:6}}>
                            {props.myBook.description}
                        </p>
                    </div>
                    <a className="btn btn-success" onClick={handleSubmit} style={{position: "absolute",left: 15,width: "35%",bottom: 6,height: "30px",lineHeight: "10px",}}>Add to List</a>
                    {/* <a href="#"className="btn btn-danger"  onClick={handleDelete} style={{position: "absolute",left: 15,width: "94%",bottom: 6,height: "30px",lineHeight: "10px",}}>Add to List</a> */}

                </div>
            </div>
        </div>

    )
}

export default BookItem;