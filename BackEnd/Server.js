const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
//connecting to mongoose database with my connection string  
mongoose.connect('mongodb+srv://admin:admin@cluster0.sqwxk.mongodb.net/MyBooksDB');

  //whagt the collections in the mongo db hold
  //the schema that holds the books that will be displayed on the new releases page 
  const bookSchema = new mongoose.Schema({
      title: String,
      description: String,
      cover: String
  });

  //the schema that holds the reviews that are displayed on the reviewpage
  const reviewSchema = new mongoose.Schema({
      title: String,
      review: String,
      rating: String
  });

  const favouritesSchema = new mongoose.Schema({
      title: String,
      description: String,
      cover: String
  });
 
  //the collections in the mongo db
  const BookModel = mongoose.model('Book', bookSchema);
  const ReviewModel = mongoose.model('Review', reviewSchema);
  const FavouritesModel = mongoose.model('Favourite', favouritesSchema);


//method to add books 
app.post('/api/books', async (req, res)=>{
  const { title, description, cover } = req.body;
  const newBook = new BookModel({ title, description, cover });
  await newBook.save();
 
  res.status(201).json({ message: 'Book created successfully', Book: newBook});
})

//adding the newly made review onto the reviews page 
app.post('/api/reviews', async (req, res)=>{
  console.log("Book review title: " +req.body.title);
  //variables being pulled out of request 
    const { title, review, rating } = req.body;
  //putting it into the bookmodel database 
  const newReview = new ReviewModel({ title, review, rating});
  await newReview.save();
  
  res.status(201).json({ message: 'Review created successfully', Review: newReview});
})

//adding the book onto the users favourites page 
app.post('/api/favourites', async (req, res)=>{
  console.log("Favourties title: " +req.body.title);
  //variables being pulled out of request 
    const { title, description, cover } = req.body;
  //putting it into the bookmodel database 
  const newFavourite = new FavouritesModel({ title, description, cover});
  await newFavourite.save();
  
  res.status(201).json({ message: 'Favoourite added successfully', Favourite: newFavourite});
})

//fetching all the book records 
  app.get('/api/books', async (req, res) => {
  const Books = await BookModel.find({});
  res.json(Books);
});

//fetching all the review records 
app.get('/api/reviews', async (req, res) => {
  let Reviews = await ReviewModel.find({});
  res.json(Reviews);
});
    

//retrieving a specfic by its id 
app.get('/api/books/:id', async (req, res) => {
  const Books = await BookModel.findById(req.params.id);
  res.send(Books);
});

//when gettign a post to add a book 
app.post('/api/books',(req, res)=>{
    console.log(req.body.title);
    res.send("Book Added!");
})

//the server handling the delete request on a review 
app.delete('/api/reviews/:id', async (req, res) => {
  
  console.log('Deleting review with ID:', req.params.id);
  //deleting the movie by the ID
  const review = await ReviewModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Review deleted successfully", review });
  
});

//the server handling the edit request on review 
app.put('/api/reviews/:id', async (req, res) => { //async = dont proceed until the next line until youve edited the record in the database 
  //find the movie by its ID and update it 
  //pull the request out of the body and overright it 
  let review = await ReviewModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(review);//send it back the new movie 
});

// app.get('/api/reviews', (req, res) => {
//     const reviews = [
//       {
//         title: "The Symphony of Secrets",
//         description: "Suspenseful story that keeps you reading, but the non-musical audience may become frustrated by all the musical notation references. The character of Josephine is a fascinating study of autistic synesthesia. I hope that the audio version includes the sounds of the notes she hears instead of just naming them. This story would translate well to film. But copy editors, please please catch common misspellings! (ad nauseum instead of ad nauseam).",
//         rating: 4
//       },
//       {
//         title: "Weyward",
//         description: "I am mesmerized by this book! The vivid descriptions have left me with images and sounds that I don’t want to be without! Oh, how I would love to be at Weyward Cottage with the garden and the wildlife. The author seamlessly wove together three generations of women who had never met- it read so smoothly! There was a rhythm to the storytelling; it ebbed and flowed just as the beck. Oh, how I wish for a sequel. Emilia Hart is now on my list of favorite authors! Absolutely marvelous book!",
//         rating: 5
//       },
//     ];
    
//       res.status(200).json({ reviews });
//   });


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});