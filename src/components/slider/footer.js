import React from 'react'

function Footer() {
    return (
        <div className="container-fluid">
            <div>
  <div className="row">
    <div className="col-sm-12 footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <p /><h3 className="footer_text">Newsletter Subcribe</h3><p />
            <p className="footer_text_lorm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis <br /> aspernatur ut at quae omnis pariatur obcaecati possimus nisi ea iste!</p>
          </div>
          <div className="col-sm-6">
            <input type="text" placeholder="Enter Your email" className="send_data" />
            <div className="search_button ">
              <i className="fa fa-paper-plane" style={{color: 'white', marginTop: 16, fontSize: 14}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-12 copy_right ">
      <div className="col-sm-12 text-center">
        <p className="copy_right_text">Copyright ©2021 All rights reserved | This template is made with M Sikandar Mumtaz</p>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Footer
