import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ROUTERS } from '../../roots/const';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';
import { userDatas } from '../../mockDatas';



function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          {/* <Link to={ROUTERS.PATH} className='me-4' >logo </Link> */}

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!userDatas.permissions.includes("STUDENT") && <Link to={ROUTERS.FORM} className='me-4' >Form </Link> }
            <Link to={ROUTERS.STUDENTS.PATH} className='me-4' >Student</Link>
            <Link to={ROUTERS.TEACHER.PATH} className='me-4' >Teacher</Link>

          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}
export default NavbarComponent;