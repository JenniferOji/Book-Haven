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


//adding the books onto the books page 
app.post('/api/books', async (req, res)=>{
  const { title, description, cover } = req.body;
  //variables being pulled out of request 
  //putting it into the bookmodel database 
  const newBook = new BookModel({ title, description, cover });
  await newBook.save();
 
  res.status(201).json({ message: 'Book created successfully', Book: newBook});
})

//adding the newly made review onto the reviews page 
app.post('/api/reviews', async (req, res)=>{
  console.log("Book review title: " +req.body.title);
  const { title, review, rating } = req.body;
  const newReview = new ReviewModel({ title, review, rating});
  await newReview.save();

  res.status(201).json({ message: 'Review created successfully', Review: newReview});
})

//adding the book onto the users favourites page 
app.post('/api/favourites', async (req, res)=>{
  console.log("Favourties title: " +req.body.title);
  const { title, description, cover } = req.body;
  const newFavourite = new FavouritesModel({ title, description, cover});
  await newFavourite.save();
  
  res.status(201).json({ message: 'Favoourited book added successfully', Favourite: newFavourite});
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

//fetching all the favourited books records 
app.get('/api/favourites', async (req, res) => {
  let favourites = await FavouritesModel.find({});
  res.json(favourites);
});
    

//retrieving a specfic book by its id 
app.get('/api/books/:id', async (req, res) => {
  const Books = await BookModel.findById(req.params.id);
  res.send(Books);
});

//retrieving a specfic review by its id 
app.get('/api/reviews/:id', async (req, res) => {
  const review = await ReviewModel.findById(req.params.id);
  res.send(review);
});


//the server handling the delete request on a review 
app.delete('/api/reviews/:id', async (req, res) => {
  
  console.log('Deleting review with ID:', req.params.id);
  //deleting the movie by the ID
  const review = await ReviewModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Review deleted successfully", review });
  
});

//the server handling the delete request on a favourited book 
app.delete('/api/favourites/:id', async (req, res) => {
  
  console.log('Deleting favourited book with ID:', req.params.id);
  //deleting the book by the ID
  const favourite = await FavouritesModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Favourited book deleted successfully", favourite });
  
});

//the server handling the edit request on review 
app.put('/api/reviews/:id', async (req, res) => { //async = dont proceed until the next line until youve edited the record in the database 
  //find the movie by its ID and update it 
  //pull the request out of the body and overright it 
  let review = await ReviewModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(review);//send it back the new movie 
});

// //the server handling the edit request on review 
// app.put('/api/editReview/:id', async (req, res) => { //async = dont proceed until the next line until youve edited the record in the database 
//   //find the movie by its ID and update it 
//   //pull the request out of the body and overright it 
//   let review = await ReviewModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.send(review);//send it back the new movie 
// });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});