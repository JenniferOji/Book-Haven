import ReviewItems from "./ReviewItems";
//for every object in the array it outputs this function 
const Reviews = (props) => {
    return (
        //returning as a div to to display the cards correctly 
        <div className="row">
            {props.myReviews.map((review) => (
                <ReviewItems
                    key={review._id}
                    myReview={review} 
                    Reload={props.ReloadData}
                />
            ))}
        </div>
    );
};

export default Reviews