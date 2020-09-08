import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

/* received list or array of objects holding images from App component */
/* when we map it, we go one by one to each object */
const ImageList = props => {
	const images = props.images.map(image => {
		return <ImageCard key={image.id} image={image} />;
	});
	return <div className="image-list"> {images} </div>;
};

export default ImageList;
