
function Images(){
    // this.name = name;
    // this.imgObj = imgObj;
    // this.box = box;

    this.addImgObj = (imgObj) =>{
        // console.log(imgObj)
        this.box = Object.assign(this, imgObj)
    }

    return this.box
}



function Image(name, src, alt, author){
    this.name = name;
    this.src = src;
    this.alt = alt;
    this.author = author;

}



export {Image, Images} 
