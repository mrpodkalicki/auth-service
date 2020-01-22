import {Image, Images} from '../App.jsx';

import arrowPath from './Header/images/arrow.png';
import perosnPath from './Header/images/person.png';
import trainglePath from './Header/images/triangle.png';


const imgOne = new Image('arrow', arrowPath, 'curved arrow');
const imgTwo = new Image('person', perosnPath, 'outline of person ');
const imgThree = new Image('triangle', trainglePath, 'shape of triangle')

const images= Images.addImgObj(imgOne, imgTwo, imgThree );

export {images}