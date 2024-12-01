import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Books from './modules/Books';
import Navigation from './modules/Navigation';
import NewReleases from './modules/NewReleases';
import BookItem from './modules/BookItems';
//using "/" to direct to the desired change 
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/NewReleases" element={<NewReleases />} />
      </Routes>      
    </Router>
  );
}

export default App;