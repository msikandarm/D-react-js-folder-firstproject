/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const App = () => {
  return (
   <>
   <div className="container-fluid">
  <div className="container">
    <div className="row logoicons">
      <div className="col-sm-3   logo">
        Meranda
      </div>
      <div className="col-sm-8 text-end icons-searchbar ">
        <div className="icon"><i className="fa fa-facebook" /></div>
        <div className="icon"> <i className="fa fa-twitter" /></div>
        <div className="icon"> <i className="fa fa-instagram" /></div>
        <input type="text" placeholder="Search...." className="searchbar" />
        <div className="searchbutton ">
          <i className="fa fa-search" style={{color: 'white', marginTop: 16, fontSize: 14}} />
        </div>
      </div></div>
  </div><br /><br />
  <div className="container navSticky">
    <div className="row">
      <div className="col-sm-12 navbarclass">
        <nav>
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="menu-btn">
            <i className="fas fa-bars" />
          </label>
          <ul>
            <li><a href="#" target="_blank">Home</a></li>
            <li><a href="#" target="_blank">categorise</a></li>
            <li><a href="#" target="_blank">politics</a></li>
            <li><a href="#" target="_blank">Business</a></li>
            <li><a href="#" target="_blank">Health</a></li>
            <li><a href="#" target="_blank">design</a></li>
            <li><a href="#" target="_blank">sport</a></li>
            <li><a href="#" target="_blank">contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <hr style={{marginTop: 10, color: 'rgb(190, 190, 190)', position: 'sticky', top: 50}} />
</div>

   </>
  )
}

export default App;
