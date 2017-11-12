import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

export default () => {
const image = document.createElement('img');
image.src ='https://cdn1.droom.in/photos/images/drm/super-cars.png';    
document.body.appendChild(image);
};
