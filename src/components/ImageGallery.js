// import ImageGalleryItem from './ImageGalleryItem.js';

const ImageGallery = ({ images }) => {
    // const imageList = images.hits;
    console.log(images);
    // return (
    //     <ul className="gallery">
    //         {images.hits.map(image => (
    //             <li className="gallery-item" key={image.id}>
    //                 <img
    //                     // key={image.id}
    //                     src={image.pageURL}
    //                     alt={image.tags}
    //                     className="image"
    //                 />
    //             </li>
    //         ))}
    //     </ul>
    // )
}


// const ImageGallery = ({ images }) => {
//     const imageList = images.hits; // Отримуємо список зображень з ключа hits

//     return (
//         <ul className="gallery">
//             {imageList.map(image => (
//                 <li className="gallery-item" key={image.id}>
//                     <img
//                         src={image.previewURL}
//                         alt={image.tags}
//                         className="image"
//                     />
//                 </li>
//             ))}
//         </ul>
//     );
// };







export default ImageGallery;