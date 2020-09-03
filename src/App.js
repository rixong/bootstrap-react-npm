import React from 'react';
import 'bootstrap';
import NavBar from './NavBar';
import Carousel from './Carousel'
import Footer from './Footer'

function App() {
  return (
    <div className='container-lg bg-primary' >
      <NavBar />
      <div className='text-secondary text-center title'>This is my App</div>
      <div className='row text-info'>
        <div className='col-md-4'>
          <h4 className=''>Column 1</h4>
          <p>This is a really long statement to fill up this column.</p>
        </div>
        <div className='col-md-8'>
          <h4>Column2</h4>
          <p>This is a more information to fill out the second column which is wider than the first.</p>
        </div>
      </div>
      <div className='row'>
        <Carousel />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
