import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//What the navbar will look like when called 
//the "/" directs you to the page 
const Navigation = () => {
  return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/NewReleases">Book Haven</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/NewReleases">New Release</Nav.Link>
              <Nav.Link href="/FavouritesPage">My Favourites</Nav.Link>
              <Nav.Link href="/ReviewPage">My Reviews</Nav.Link>
              <Nav.Link href="/NewReview">Add Review</Nav.Link>

              {/* <Nav.Link href="/AddReview">Add Reviews</Nav.Link> */}
            </Nav>
          </Container>
      </Navbar>
  );
};

export default Navigation;