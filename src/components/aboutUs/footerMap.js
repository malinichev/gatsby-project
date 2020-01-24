import React from 'react'
// import { YMaps, Map, Placemark } from 'react-yandex-maps';

// const mapState = { center: [55.76, 37.64], zoom: 10};

const MyPlacemark = () => (
//   <YMaps query={{
//     apikey: '// your api key here',
//   }}>
      
//     <Map state={mapState}>

//       <Placemark
//         geometry={{
//           coordinates: [55.751574, 37.573856]
//         }}
      
//       />

//     </Map>
//   </YMaps>
<>
    
    <a href="https://yandex.ru/maps/?um=constructor%3A2a906af06473046ac950b80e825b09c8986b2aa01a4ffcf793a5c43d2e324497&amp;source=constructorStatic" target="_blank" rel="noopener noreferrer" >
         <img 
         style={{
            width: "100%",
            border: "0"
          }}
         src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A2a906af06473046ac950b80e825b09c8986b2aa01a4ffcf793a5c43d2e324497&amp;width=600&amp;height=178&amp;lang=ru_RU" alt="map" />
    </a>
</>
);
export default MyPlacemark