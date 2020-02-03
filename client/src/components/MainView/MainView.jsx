import {Image, Images} from '../App.jsx';

import arrowPath from './Header/images/arrow.png';
import perosnPath from './Header/images/person.png';
import trainglePath from './Header/images/triangle.png';
import truckHeaderPath from './Header/images/trucksHeader.png'


const imgOne = new Image('arrow', arrowPath, 'curved arrow');
const imgTwo = new Image('person', perosnPath, 'outline of person ');
const imgThree = new Image('triangle', trainglePath, 'shape of triangle')
const imgFour = new Image('trucksHeader',truckHeaderPath, 'trucks stand in row on parking' )

const imagesHeader= Images.addImgObj(imgOne, imgTwo, imgThree, imgFour );

export {imagesHeader}