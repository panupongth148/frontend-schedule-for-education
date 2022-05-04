// import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "../page/Homepage";
import AddSchedule from "../page/AddSchedule";
import CreateSchedule from "../page/CreateSchedule";
import CreateScheduleNext from "../page/CreateScheduleNext";
import AddSubject from "../page/AddSubject"
import Login from "../page/Login"
import Register from "../page/Register"
import Schedule from "../page/Schedule"

const Navigation = () => {
    return (
      <>
        <BrowserRouter>
          <Navbar style={{backgroundColor: "#FF6FB5"}} variant="dark" expand="lg" sticky="top">
            <Container>
              <Navbar.Brand style={{color: "#FCF69C"}} as={Link} to="/">
                CMS
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link style={{color: "#FCF69C"}} as={Link} to="/postpage">
                    Post
                  </Nav.Link>
                  <Nav.Link style={{color: "#FCF69C"}} as={Link} to="/Register">
                    Register
                  </Nav.Link>
                  <Nav.Link style={{color: "#FCF69C"}} as={Link} to="/Login">
                    Login
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            {/* <Route path="/" element={<Index />}></Route> */}
            <Route name="home" path="/" element={<HomePage/>}></Route>
            <Route name="AddSchedule" path="/AddSc" element={<AddSchedule/>}></Route>
            <Route name="CreateSchedule" path="/CreateSc" element={<CreateSchedule/>}></Route>
            <Route name="CreateScheduleNext" path="/CreateSc2" element={<CreateScheduleNext/>}></Route>
            <Route name="AddSubject" path="/AddSj" element={<AddSubject/>}></Route>
            <Route name="Login" path="/Login" element={<Login/>}></Route>
            <Route name="Register" path="/Register" element={<Register/>}></Route>
            <Route name="Schedule" path="/Schedule" element={<Schedule/>}></Route>
            {/* <Route name="posts" path="/postpage" element={<Post />}></Route>
            <Route name="content" path="/postpage/post/content/:id" element={<Content />}></Route>
            <Route name="author" path="/postpage/post/author/:id" element={<Authorpage />}></Route>
            <Route name="tag" path="/posts/tagandcategory" element={<TagAndCategoryPage />}></Route>
            <Route name="categorypost" path="/posts/category/:id" element={<CategoryPage />}></Route>
            <Route name="tagpost" path="/posts/tag/:id" element={<TagPage />}></Route>
            <Route name="listauthor" path="/author" element={<ListAuthor />}></Route> */}
            {/* <Route path="/category" element={<Category />}></Route>
            <Route path="/author" element={<Author />}></Route>
            <Route path="/about" element={<About />}></Route> */}
          </Routes>
        </BrowserRouter>
      </>
    );
  };

export default Navigation;
