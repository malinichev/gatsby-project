import React, { useState, useEffect } from 'react';

// import Slider from "react-slick";
import Swiper from 'react-id-swiper';
// import 'lazysizes';
// import a plugin
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import {useSliderquery} from "../staticqueryslider"
// import Img from "gatsby-image"

// import 'react-id-swiper/lib/styles/scss/swiper.scss'
// { wordpressPage.acf.slider1.map((slide)=>{
//   //смотрим название файла картинки в поле slider1
//   var file = slide.substring(slide.lastIndexOf('/')+1)
//   // console.log(slide)
  // return(
  //   <div className="lazyload" 
  //   data-bg={slide}
  //   key={`Image${slide}`} 
  //   style={{
  //     backgroundImage: `url(${slide})`,
  //     backgroundSize: "cover",
  //     width: "1030px",
  //     backgroundPosition: "center center",
  //     backgroundRepeat: "no-repeat no-repeat"
  //   }}
  //   >
  //     {              
          
  //         allWordpressWpMedia.edges.map((ar)=>{
  //            //смотрим название файла картинки в списке всех файлов которые есть у вордпресс
  //           var url2 = ar.node.source_url
  //           //сравниваем имя файла с именем из слайда
  //           var file2 = url2.substring(url2.lastIndexOf('/')+1)
              
  //             if(file2 === file){
  //               // если совпадает то берем оттуда описание
  //               return (<span
  //               key={ar.node.id}
  //               dangerouslySetInnerHTML={{ __html: ar.node.caption }}
  //           />);
  //             }else{
  //               return <p key={ar.node.id}></p>
  //             }
            
  //         })
        
  //     }
     
  //   </div>
    
  // );
// })}

const uuidv4 = require('uuid/v4');
const params = {
  lazy: true,
  loop:true,
  slidesPerView: 'auto',
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true
  },
  spaceBetween: 0
}
export default () => {
  // useEffect(() => {
    
  // });

  const { allWordpressWpMedia, wordpressPage } = useSliderquery()
  const imagesResolutions = wordpressPage.acf.slider11

  // console.log(imagesResolutions)
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    
  });
  
  return (
          <div className="slider_content">
             <div className="main_slider">
               <div
                style={{
                  position: "relative"
                }}
               >


                <div className="shop-detail">
              
                <Swiper {...params}>
                {
                  imagesResolutions.map((e)=>{
                      console.log(e.imageslider.img.localFile.childImageSharp.fluid.base64)
                      return(
                        <div  
                        key={uuidv4()}
                       
                        style={{
                          position: "relative",
                          left:"0",
                          top:"0",
                          // backgroundImage: `url(${slide})`,
                          backgroundSize: "cover",
                          width: "1030px",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat no-repeat"
                        }}
                        >
                          <img
                          style={{
                            position:"absolit",
                            left:"0",
                            top:"0",
                            width: "1030px",
                            height: "100%"
                          }}
                          className="swiper-lazy"
                          data-src={e.imageslider.img.localFile.url}
                          // fluid={e.imageslider.img.localFile.childImageSharp.fluid}
                          src={e.imageslider.img.localFile.childImageSharp.fluid.base64}
                          />
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                          <span
                            style={{
                              display:"flex",
                              position:'absolute',
                              top:'0',
                              left:'0',
                              width:"100%",
                              height:"100%",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                          <p>{e.imageslider.headerTitle}</p>
                          </span>
                         
                        </div>
                        
                      );
                    
                
                        })
                  
                }
                    
                </Swiper>
                </div>
              </div>
          </div>
          </div>
        );
}
