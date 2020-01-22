

class Image{
    constructor(name, src, alt, author = "none"){
        try{
            if (typeof name !== 'string') throw "name isn't string";
            this.name = name;

            if (typeof src !== 'string') throw "src isn't string";
            this.src = src;

            if (typeof alt !== 'string') throw "alt isn't string";
            this.alt = alt;

            if (typeof author !== 'string') throw "author isn't string";
            this.author = author;
        }
        catch(err){
            console.log(err);
        };
    };
};



class Images{
    static addImgObj (...imgObjs){
        const container ={};
        try {
            if (imgObjs.length === 0) throw "inputEmpty";
            imgObjs.forEach(imgObj => {
                if (typeof imgObj !== 'object') throw `${imgObj} is not a object`;
                if (typeof imgObj.name !=='string') throw ` imgObj.name  isn't  a string : ${imgObj.name}`;
                container[imgObj.name] = imgObj;
            });
        } catch(err){
            console.log(err);
        };
        return container
    };
};






export {Image, Images} 
