
import React from "react";
import YouTube from 'react-youtube';



const GalleryOFvideo = ({videoUrl}) => {
 
    // console.log()
  //  videoUrl = "https://youtu.be/zWkfvuLatRE";
  // console.log()
  const opts = {
    // height: '20%',
    // width: '30%',
    
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };
  
  

    
        return(
        <>
        <h2
        style={{
          margin: "1em 0"
        }}
        >Видео</h2>
        <div
        style={{
          display:"flex",
          width: "100%",
         flexFlow: "wrap",
         justifyContent:"space-around"

        }}
        >
          {
              videoUrl.allWordpressPage.edges[0].node.acf.video.map((e)=>{
                console.log(e.urls)
                if(e.urls){
                    return(
                      <div
                      style={{
                        margin: '2px',
                        // width: '30%',
                      }}
                      >
                        <YouTube
                          videoId={e.urls.match(/\w+$/g)[0]}
                          opts={opts}
                          // onReady={this._onReady}
                         
                          
                        />
                      </div>
                  )
                }
              })
          }
        </div>
        </>
        )
      
    
  
  
}


export default GalleryOFvideo
