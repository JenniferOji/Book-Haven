import BookItem from "./BookItems";

//for every object in the array it outputs this function 
const Books = (props) => {
    return (
        //returning as a div to to display the cards correctly 
        <div className="row">
            {props.myBooks.map((book) => (
                <BookItem
                    key={book._id}
                    myBook={book}
                    Reload={props.ReloadData}
                />
            ))}
        </div>
    );
};

export default Books