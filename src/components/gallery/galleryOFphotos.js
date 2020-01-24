
import React, { useState, useCallback } from "react";


import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";


const GalleryOFphotos = ({photoData}) => {
    const imgGallery = photoData.allWordpressPage.edges[0].node.acf.picturesGallery;
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  // вставляем фотки
  let photos = []; 
  imgGallery.map(element => {
    console.log(photos.push({
        src: element,
        width: 1,
        height: 1
      }))
    
    });

  return (
    <>
       <h2
        style={{
          margin: "1em 0"
        }}
        >Фото</h2>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
}


export default GalleryOFphotos
