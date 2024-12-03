import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Books from './components/Books';
import Navigation from './components/Navigation';
import NewReleases from './components/NewReleases';
import BookItem from './components/BookItems';
import Reviews from './components/Reviews';
import ReviewPage from './components/ReviewPage';

//using "/" to direct to the desired change 
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/NewReleases" element={<NewReleases />} />
        <Route path="/ReviewPage" element={<ReviewPage/>} />

      </Routes>      
    </Router>
  );
}

export default App;