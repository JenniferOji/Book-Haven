import FavouriteItems from "./FavouriteItems";
//for every object in the array it outputs this function 
const Favourites = (props) => {
    return (
        //returning as a div to to display the cards correctly (side by side)
            props.myFavourites.map((favourite) => (
                <FavouriteItems
                    key={favourite._id}
                    myFavourite={favourite}
                    Reload={props.ReloadData}
                />
            ))
    );
};

export default Favourites