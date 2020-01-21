import {Image, Images} from '../App.jsx';

import arrowPath from './Header/images/arrow.png';
import perosnPath from './Header/images/person.png';
import trainglePath from './Header/images/triangle.png';



const imgOne = new Image('arrow', arrowPath, 'curved arrow');

const images = new Images()
images.addImgObj(imgOne)
images.addImgObj(imgOne)



export {images}