import BookItem from "./BookItems";

//for every object in the array it outputs this function 
const Books = (props) => {
    const books = props.myBooks || []; 
    return (
        //returning as a div to to display the cards correctly 
        <div className="row">
            {books.map((book) => (
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