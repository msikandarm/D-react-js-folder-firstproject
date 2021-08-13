import React from 'react'
import slideimg from '../assetsimages/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp'
function Slidertext() {
    return (
        <div className="container">
          <div className="row slider_text_and_pic">
  <div className="col-sm-5">
    <img src={slideimg} alt="Los Angeles" className="slider_image1" />
  </div>
  <div className="col-sm-5 slider_text"><p className="editors"> EDITOR'S PICK</p>
    <p className="news">News Needs to Meet Its Audiences <br /> Where They Are</p>
    <p className="lorem_text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?</p>
    <p className="dave"> Dave Rogers</p>
    <p className="in"> in</p><p className="food"> Food</p>
    <p className="date"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p></div>
</div>
  
        </div>
    )
}

export default Slidertext
