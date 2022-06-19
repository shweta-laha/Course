import React from 'react';
import './App.css';
import {Button, Container, Row, Col} from 'reactstrap';
import {ToastContainer,toast} from 'react-toastify';
import Header from './Components/Header';
import Home from './Components/Home';
import Course from './Components/Course';
import AllCourses from './Components/AllCourses';
import AddCourse from './Components/AddCourse';
import About from './Components/About';
import Menus from './Components/Menus';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import {BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const btnHandle = () =>{
    toast.success("Done", {
      position:'top-center'
    });
  }
  return (
  <div className="body">
     
     <BrowserRouter>
     <ToastContainer />
     <Container>
      <Header className="text-center"></Header>
      <Row>
        <Col md={4}>
          <Menus></Menus>
        </Col>

        <Col md={8}>
        <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/add-course" element={<AddCourse />} exact />
        <Route path="/view-course" element={<AllCourses />} exact/>
        <Route path="/about" element={<About />} exact/>
        <Route path="/contact" element={<Contact/>} exact/>
       
        </Routes>
        </Col>
        
      </Row>
     
     </Container>
     </BrowserRouter>
     <Footer/>
    
  </div>
  );
}

export default App;
