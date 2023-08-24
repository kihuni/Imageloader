// array holding images
const imageUrls = [
   'Wallpapers/pexels-alexander-krivitskiy-1126663 (1).jpg',
   'Wallpapers/pexels-ellen-araujo-1845827.jpg',
   'Wallpapers/pexels-vincent-ma-janssen-2302802.jpg'

];

// Function to load an image and return a promise
function loadImage(url) {
    return new Promise((resolve, reject) =>{
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
    });
}

// load all images
const promises = imageUrls.map(loadImage);

// Update progress bar as images load
let loadedCount = 0;
promises.forEach(promise =>{
    promise.then(img =>{
        loadedCount++;
        const progress = (loadedCount / imageUrls.length) * 100;
        document.getElementById('filler').style.width = progress + '%';

        // append loaded image to the images div
        document.getElementById('images').appendChild(img)
    });
});

// Handle all loaded or any errors
Promise.all(promises)
    .then(()=>{
        console.log("all images loaded successfully.");

    })
    .catch(error =>{
        console.log('Some images failed to load:', error)
    })