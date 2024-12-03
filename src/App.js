import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import NewReleases from './components/NewReleases';
import ReviewPage from './components/ReviewPage';
import AddReview from './components/AddReview';

//using "/" to direct to the desired change 
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/NewReleases" element={<NewReleases />} />
        <Route path="/ReviewPage" element={<ReviewPage/>} />
        {/* <Route path="/AddReview" element={<AddReview/>} /> */}
      </Routes>      
    </Router>
  );
}

export default App;