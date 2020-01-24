import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import { Link} from "gatsby"
import {useSliderquery} from "../staticqueryslider"
import arrowLeft from "../../images/arrow_next.png"
// import 'swiper/css/swiper.min.css'
import Img from "gatsby-image"
import "../layout.scss"


const params = {
  slidesPerView: '3',
  loop:true,
  containerClass: 'product_swiper-container',
  spaceBetween: 30,
  keyboard: { enabled: true }
};







export default () => {
  const [swiper, updateSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };






  const { allWordpressPost } = useSliderquery()
  
  return (
    <div className="product_slider" >
      <div className="m_container myCont">
      <Swiper {...params} getSwiper={updateSwiper}>
      { allWordpressPost.edges.map((ar)=>{
        function compareSlug(a, b) {
          if (a.slug === "catalog" || a.slug === "news") {
            return -1
          }else{
            return 1
          }
        }
              
        
        ar.node.categories.sort(compareSlug);
        return (
          <div
          key={`slider-2${ar.node.wordpress_id}`}
          
        >
          <div className="img">
            <Img
              fluid={ar.node.acf.imgDescriptPost.localFile.childImageSharp.fluid}
              // src={ar.node.acf.imgDescriptPost.source_url}
              alt={ar.node.acf.imgDescriptPost.title}
              // loading="lazy"
            />
          </div>
          <div className="swiper_slide_text flex flex-column">
            <div>
              <span>{ar.node.date}</span>
              <h4>{ar.node.title}</h4>
              <p />
              <p>
              {ar.node.acf.descriptPost}
              </p>
              <p />
            </div>
            <div className="flex link_container">
              <div className="arrow_next">
                <img
                  loading="auto"
                  src={arrowLeft}
                  alt='5'
                />
              </div>
           
                
              <Link to={`/category/news/${ar.node.categories[1].slug}/${ar.node.slug}`}>Подробнее</Link>
             
            </div>
          </div>
        </div>
      
          );
      })}
      </Swiper>
     

      <div className="swiper-button-prev product_slider_swiper-button-prev" role="button" onClick={goPrev} tabIndex="0" onKeyDown={goPrev} ></div>
      <div className="swiper-button-next product_slider_swiper-button-next" role="button" onClick={goNext} tabIndex="0" onKeyDown={goNext}></div>
      
      </div>
      
      
    </div>

        );
}






