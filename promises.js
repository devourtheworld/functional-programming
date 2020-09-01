
//1
import loadImagePromised from './load-image-promised'

let whenCatLoaded = loadImagePromised('images/cat3.jpg')
    
whenCatLoaded.then((img) => {
    let imgElement = document.createElement('img');
    imgElement.src = img.src;
    document.body.appendChild(imgElement);
})

//2
import loadImagePromised from './load-image-promised'

let whenCatLoaded = loadImagePromised('images/cat3.jpg',
(error, img) => {
    let imgElement = document.createElement('img');
    imgElement.src = img.src;
    document.body.appendChild(imgElement);
})

//3
import loadImagePromised from './load-image-promised'

let whenCatLoaded = loadImagePromised('images/cat3.jpg')
    
    let addImage = (src) => {
    let imgElement = document.createElement('img');
    imgElement.src = img.src;
    document.body.appendChild(imgElement);
}

let whenCatLoaded = loadImagePromised('images/cat3.jpg',
    (error, img) => { addImage(img1.src);
let whenCatLoaded = loadImagePromised('images/cat3.jpg',
    (error, img) => { addImage(img2.src);
let whenCatLoaded = loadImagePromised('images/cat3.jpg',
    (error, img) => { addImage(img3.src);
})
})
})
