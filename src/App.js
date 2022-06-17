import React from 'react';
import './App.css';
import {Button} from 'reactstrap';
import {ToastContainer,toast} from 'react-toastify';
import Header from './Components/Header';
import Home from './Components/Home';
import Course from './Components/Course';
import AllCourse from './Components/AllCourses';

function App() {
  const btnHandle = () =>{
    toast.success("Done", {
      position:'top-center'
    });
  }
  return (
  <div>
      <Header />
      <Home />
      <AllCourse />  
      <ToastContainer />
      <h1>This is bootstrap</h1>
      <Button onClick={btnHandle} color="warning" outline>
        First React Button
      </Button>
  </div>
  );
}

export default App;
