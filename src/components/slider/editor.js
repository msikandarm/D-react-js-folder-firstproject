import React from 'react';
import img from '../assetsimages/ximg_v_1.jpg.pagespeed.ic.Gl8yKkRUpG.webp';
import img1 from '../assetsimages/ximg_v_2.jpg.pagespeed.ic.LvRqrfFXI1.webp';
import img2 from '../assetsimages/ximg_v_3.jpg.pagespeed.ic._k9cdXbyH3.webp';
function Editor() {
    return (
        <div className="container">
        <div className="row Editor_tranding_text">
          <div className="col-sm-4">
            <p><u className="editor">Editor's Pick</u></p>
            <img src={img} alt='images' className="images" />
            <p>
            </p><p className="news_order1">News Needs to Meet Its Audiences Where They Are</p>
            <p className="lorem_text_order1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
            <p className="dave_order1"> Dave Rogers</p>
            <p className="in_order1"> in</p><p className="food_order1"> Food</p>
            <p className="date_order1"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p>
            <p />
          </div>
          <div className="col-sm-3">
            <div className="Need_audience">
              <img src={img} alt="needaudience " className="needimage" />
              <p>
              </p><p className="news_order2">News Needs to Meet Its  <br /> Audiences Where They Are</p>
              <p className="dave_order2"> Dave Rogers</p>
              <p className="in_order2"> in</p><p className="food_order2"> Food</p>
              <p className="date_order2"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p>
            </div>
            <div className="Need_audience1">
              <img src={img1} alt="needaudience " className="needimage" />
              <p>
              </p><p className="news_order2">News Needs to Meet Its  <br /> Audiences Where They Are</p>
              <p className="dave_order2"> Dave Rogers</p>
              <p className="in_order2"> in</p><p className="food_order2"> Food</p>
              <p className="date_order2"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p>
            </div>
            <div className="Need_audience2">
              <img src={img2}alt="needaudience " className="needimage" />
              <p>
              </p><p className="news_order2">News Needs to Meet Its  <br /> Audiences Where They Are</p>
              <p className="dave_order2"> Dave Rogers</p>
              <p className="in_order2"> in</p><p className="food_order2"> Food</p>
              <p className="date_order2"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p>
            </div>
          </div>
          <div className="col-sm-4">
            <p><u className="trending">Trending</u></p>
            <div className="Need_audience0">
              <div className="numbers01">
                <p style={{fontSize: 30, color: '#ccc', fontFamily: 'cabin,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'}}>01</p>
              </div>
              <p>
              </p><p className="news_order2">News Needs to Meet Its  <br /> Audiences Where They Are</p>
              <p className="dave_order2"> Dave Rogers</p>
              <p className="in_order2"> in</p><p className="food_order2"> Food</p>
              <p className="date_order2"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p>
            </div>
            <div className="Need_audience1">
              <div className="numbers01">
                <p style={{fontSize: 30, color: '#ccc', fontFamily: 'cabin,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'}}>02</p>
              </div>
              <p>
              </p><p className="news_order2">News Needs to Meet Its  <br /> Audiences Where They Are</p>
              <p className="dave_order2"> Dave Rogers</p>
              <p className="in_order2"> in</p><p className="food_order2"> Food</p>
              <p className="date_order2"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p>
            </div>
            <div className="Need_audience2">
              <div className="numbers01">
                <p style={{fontSize: 30, color: '#ccc', fontFamily: 'cabin,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'}}>03</p>
              </div>
              <p>
              </p><p className="news_order2">News Needs to Meet Its  <br /> Audiences Where They Are</p>
              <p className="dave_order2"> Dave Rogers</p>
              <p className="in_order2"> in</p><p className="food_order2"> Food</p>
              <p className="date_order2"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p>
            </div>
            <div className="Need_audience3">
              <div className="numbers01">
                <p style={{fontSize: 30, color: '#ccc', fontFamily: 'cabin,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'}}>04</p>
              </div>
              <p>
              </p><p className="news_order2">News Needs to Meet Its  <br /> Audiences Where They Are</p>
              <p className="dave_order2"> Dave Rogers</p>
              <p className="in_order2"> in</p><p className="food_order2"> Food</p>
              <p className="date_order2"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p><p />
            </div>
            <div className="see_all_trends">
              <a href className="seeallbutton"> See All trends <i className="fa fa-angle-right" /></a>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Editor
