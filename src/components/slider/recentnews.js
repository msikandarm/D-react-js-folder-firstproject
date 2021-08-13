/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import recentimg from '../assetsimages/ximg_h_4.jpg.pagespeed.ic.peEd0nw2Ox.webp'
import recentimg2 from '../assetsimages/ximg_h_3.jpg.pagespeed.ic.YQVX6P0g2G.webp'
import recentimg3 from '../assetsimages/ximg_h_3.jpg.pagespeed.ic.YQVX6P0g2G.webp'
function Recentnews() {
    return (
        <div className="container">
            <div className="row  News_cards">
  <div className="col-sm-8">
    <div className="Need_audience_news_card">
      <p><u className="Recent_news">Recent News</u></p>
      <div className=" text_news_card">
        <p>
        </p><p className="news_order2">News Needs to Meet Its   Audiences Where They Are</p>
        <p className="lorem_text_order2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium <br /> neque, voluptatum quam quibusdam.</p>
        <p className="dave_order2"> Dave Rogers</p>
        <p className="in_order2"> in</p><p className="food_order2"> Food</p>
        <p className="date_order_news2"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p><p /></div>
      <img src={recentimg} alt="needaudience " className="needimagenewscards" />
    </div>
    <div className="Need_audience_news_card1">
      <div className=" text_news_card">
        <p>
        </p><p className="news_order2">News Needs to Meet Its Audiences Where They Are</p>
        <p className="lorem_text_order2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium <br />neque, voluptatum quam quibusdam.</p>
        <p className="dave_order2"> Dave Rogers</p>
        <p className="in_order2"> in</p><p className="food_order2"> Food</p>
        <p className="date_order_news2"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p><p /></div>
      <img src={recentimg2} alt="needaudience " className="needimagenewscards1" />
    </div>
    <div className="Need_audience_news_card2">
      <div className=" text_news_card">
        <p>
        </p><p className="newseditors"> EDITOR'S PICK</p>
        <p className="news_order2">News Needs to Meet Its  Audiences Where They Are</p>
        <p className="lorem_text_order2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium <br />neque, voluptatum quam quibusdam.</p>
        <p className="dave_order2"> Dave Rogers</p>
        <p className="in_order2"> in</p><p className="food_order2"> Food</p>
        <p className="date_order_news2"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p><p /></div>
      <img src={recentimg3} alt="needaudience " className="needimagenewscardschange" />
      <div className="pagination">
        {/* <a href="#">&laquo;</a> */}
        <a href="#">1</a>
        <a href="#" className="active">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        {/* <a href="#">&raquo;</a> */}
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="Need_audience_news_number0">
      <p><u className="Popular_Posts">Popular Posts</u></p>
      <div className="numbers_01">
        <p style={{fontSize: 30, color: '#ccc', fontFamily: 'cabin,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'}}>01</p>
      </div>
      <p>
      </p><p className="news_order_2">News Needs to Meet Its  <br /> Audiences Where They Are</p>
      <p className="dave_order2"> Dave Rogers</p>
      <p className="in_order2"> in</p><p className="food_order2"> Food</p>
      <p className="date_order_news2"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p>
    </div>
    <div className="Need_audience_news_number1">
      <div className="numbers_01">
        <p style={{fontSize: 30, color: '#ccc', fontFamily: 'cabin,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'}}>02</p>
      </div>
      <p>
      </p><p className="news_order_2">News Needs to Meet Its  <br /> Audiences Where They Are</p>
      <p className="dave_order2"> Dave Rogers</p>
      <p className="in_order2"> in</p><p className="food_order2"> Food</p>
      <p className="date_order_news2"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p>
    </div>
    <div className="Need_audience_news_number2">
      <div className="numbers_01">
        <p style={{fontSize: 30, color: '#ccc', fontFamily: 'cabin,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'}}>03</p>
      </div>
      <p>
      </p><p className="news_order_2">News Needs to Meet Its  <br /> Audiences Where They Are</p>
      <p className="dave_order2"> Dave Rogers</p>
      <p className="in_order2"> in</p><p className="food_order2"> Food</p>
      <p className="date_order_news2"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p>
    </div>
    <div className="Need_audience_news_number3">
      <div className="numbers_01">
        <p style={{fontSize: 30, color: '#ccc', fontFamily: 'cabin,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'}}>04</p>
      </div>
      <p>
      </p><p className="news_order_2">News Needs to Meet Its  <br /> Audiences Where They Are</p>
      <p className="dave_order2"> Dave Rogers</p>
      <p className="in_order2"> in</p><p className="food_order2"> Food</p>
      <p className="date_order_news2"> Jun 14 • 3 min read <span className="fa fa-star checked" /> </p><p />
    </div>
    <div className="see_all_trends">
      <a href className="see_all_button"> See All trends <i className="fa fa-angle-right" /></a>
    </div>
  </div>
</div>

        </div>
    )
}

export default Recentnews
