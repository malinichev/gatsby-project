import React from "react";
// import Slider from "react-slick";
import Swiper from 'react-id-swiper';
import {useSliderquery} from "../staticqueryslider"

// import 'react-id-swiper/lib/styles/scss/swiper.scss'


const params = {
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
  
                    { wordpressPage.acf.slider1.map((slide)=>{
                        //смотрим название файла картинки в поле slider1
                        var file = slide.substring(slide.lastIndexOf('/')+1)
                        // console.log(slide)
                        return(
                          <div className="" key={`Image${slide}`} 
                          style={{
                            backgroundImage: `url(${slide})`,
                            backgroundSize: "cover",
                            width: "1030px",
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat no-repeat"
                          }}
                          >
                            {              
                                
                                allWordpressWpMedia.edges.map((ar)=>{
                                   //смотрим название файла картинки в списке всех файлов которые есть у вордпресс
                                  var url2 = ar.node.source_url
                                  //сравниваем имя файла с именем из слайда
                                  var file2 = url2.substring(url2.lastIndexOf('/')+1)
                                    
                                    if(file2 === file){
                                      // если совпадает то берем оттуда описание
                                      return (<span
                                      key={ar.node.id}
                                      dangerouslySetInnerHTML={{ __html: ar.node.caption }}
                                  />);
                                    }else{
                                      return <p key={ar.node.id}></p>
                                    }
                                  
                                })
                              
                            }
                           
                          </div>
                          
                        );
                    })}
                </Swiper>
                </div>
              </div>
          </div>
          </div>
        );
}
