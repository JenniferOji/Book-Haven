import FavouriteItems from "./FavouriteItems";
//for every object in the array it outputs this function 
const Favourites = (props) => {
    return (
            props.myFavourites.map((favorite) => (
                <FavouriteItems
                    key={favorite._id}
                    myFavourite={favorite} 
                    Reload={props.ReloadData}
                />
            ))
    );
};

export default Favourites