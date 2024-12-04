import ReviewItems from "./ReviewItems";
//for every object in the array it outputs this function 
const Reviews = (props) => {
    return (
            props.myReviews.map((review) => (
                <ReviewItems
                    key={review._id}
                    myReview={review} 
                    Reload={props.ReloadData}
                />
            ))
    );
};

export default Reviews