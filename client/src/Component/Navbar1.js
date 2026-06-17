import React from "react";
import { Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { PiStudentBold } from "react-icons/pi";

function Navbar1() {

  // let navigate = useNavigate()

  // const goCourses = () =>{
  //   navigate("/")

    
  // }
return (
    <Navbar expand="lg" className=" color" >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
                      <h4 className="ms-5 letter "><PiStudentBold className="icon"/>  Edu<span style={{color:"blue"}}>Learn</span></h4> 
                      

          <Nav
            className="mx-auto gap-5 my-2 my-lg-0"
            style={{ maxHeight: "100px",position:"absolute",top:"14px",left:"500px" }}
            navbarScroll
          >
             
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            {/* <Nav.Link onClick={goCourses} as={Link} to={'/Courser'} >Courese</Nav.Link> */}
            <Nav.Link href="#Courses">Courses</Nav.Link>
            {/* <Nav.Link as={Link} to={'/courses'}>Courses</Nav.Link> */}
            <Nav.Link href="#Statistics">Statistics</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link as={Link} to={'/list'}> LoginList</Nav.Link>
            {/* <Nav.Link as={Link} to={'/edit/:id'}> Edit</Nav.Link> */}
            <div className="login-main">
              <Nav.Link as={Link} to={'/Add'} className="login p-2 ps-2 text-center text-white" style={{background:"blue",width:"90px"}}> Login</Nav.Link>
            </div>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;