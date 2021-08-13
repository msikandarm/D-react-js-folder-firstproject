import React from 'react'
import logo from '../assetsimages/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp'
import { Carousel } from 'react-bootstrap';
function Slider() {
    return (
      <div className="flex_position">
        <div className="container-fluid">
        <div className="row">
       <div className="col-sm-12 slider">
       <Carousel>
  <Carousel.Item>
  <div className="item active">
  <div className="col-sm-5">
    <img src={logo} alt="Los Angeles" className="slider_image" />
  </div>
  <div className="col-sm-5 slidertext"><p className="editors"> EDITOR'S PICK</p>
    <p className="news">News Needs to Meet Its Audiences <br /> Where They Are</p>
    <p className="lorem_text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?</p>
    <p className="dave"> Dave Rogers</p>
    <p className="in"> in</p><p className="food"> Food</p>
    <p className="date"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p></div>
</div>


  </Carousel.Item>
  <Carousel.Item>
  <div className="item active">
  <div className="col-sm-5">
    <img src={logo} alt="Los Angeles" className="slider_image" />
  </div>
  <div className="col-sm-5 slidertext"><p className="editors"> EDITOR'S PICK</p>
    <p className="news">News Needs to Meet Its Audiences <br /> Where They Are</p>
    <p className="lorem_text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?</p>
    <p className="dave"> Dave Rogers</p>
    <p className="in"> in</p><p className="food"> Food</p>
    <p className="date"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p></div>
</div>


    
  </Carousel.Item>
  <Carousel.Item>
  <div className="item active">
  <div className="col-sm-5">
    <img src={logo} alt="Los Angeles" className="slider_image" />
  </div>
  <div className="col-sm-5 slidertext"><p className="editors"> EDITOR'S PICK</p>
    <p className="news">News Needs to Meet Its Audiences <br /> Where They Are</p>
    <p className="lorem_text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?</p>
    <p className="dave"> Dave Rogers</p>
    <p className="in"> in</p><p className="food"> Food</p>
    <p className="date"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p></div>
</div>
  </Carousel.Item>
</Carousel>
         </div>
       </div>
     </div>
     
     </div>
     
    )
}

export default Slider;
