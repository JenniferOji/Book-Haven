import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import NewReleases from './components/NewReleases';
import ReviewPage from './components/ReviewPage';
import NewReview from './components/NewReview';
import EditReview from './components/EditReview';
import FavouritesPage from './components/FavouritesPage';
import HomePage from './components/HomePage';
//using "/" to direct to the desired change 
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/NewReleases" element={<NewReleases />} />
        <Route path="/FavouritesPage" element={<FavouritesPage />} />
        <Route path="/ReviewPage" element={<ReviewPage/>} />
        <Route path="/NewReview" element={<NewReview/>} />
        <Route path="/EditReview/:id" element={<EditReview />}/>
        <Route path="/NewReview/:id" element={<NewReview />}/>
      </Routes>   
      <HomePage/>   
    </Router>
  );
}

export default App;