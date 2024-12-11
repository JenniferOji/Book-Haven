function HomePage(){
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1><img src="/images/bookLogo.png" style={{height: "30%", width: "30%", marginTop: 5}}></img></h1>
        <p>Discover your next great read, share your thoughts, add to list. Your book needs, all in one spot</p>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
                <div style={{width:"30%"}}>
                    <img src="/images/books.png" style={{ width: "70%", height:"80%"}} alt="Discover Books" />
                    <h3>Discover</h3>
                    <p>Explore new books to read</p>
                </div>
                <div style={{width:"50%"}}>
                    <img src="/images/favouritess.png" style={{ width: "87%" , height:"75%", marginTop:25}} alt="Favorites" />
                    <h3>Favourites</h3>
                    <p>Save books to your favourites list</p>
                </div>
                <div style={{width:"30%"}}>
                    <img src="/images/reviews.png" style={{ width: "70%", height:"80%" }} alt="Review" />
                    <h3>Review</h3>
                    <p>Keep track of all your reviews</p>
                </div>
            </div>
        </div>
        )
    }
    
    export default HomePage;
    