import React, { Component } from 'react'
import Navbar from './componants/Navbar'
import News from './componants/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default class App extends Component {
  render() {
    let pageSize=7
    return (
      <div>
        
        <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<News pageSize={pageSize} country='in' category='general' />} />
         
          <Route exact path="/business" element={< News key="business" pageSize={pageSize} country='in' category='business' />}/>
          <Route exact path="/entertainment" element={< News key="entertainment" pageSize={pageSize} country='in' category='entertainment' />}/>
          <Route exact path="/health" element={< News key="health" pageSize={pageSize} country='in' category='health' />}/>
          <Route exact path="/science" element={< News key="science" pageSize={pageSize} country='in' category='science' />}/>
          <Route exact path="/sports" element={< News key="sports" pageSize={pageSize} country='in' category='sports' />}/>
          <Route exact path="/technology" element={< News key="technology" pageSize={pageSize} country='in' category='technology' />}/>
        </Routes>
      </BrowserRouter>



      </div>
    )
  }
}
