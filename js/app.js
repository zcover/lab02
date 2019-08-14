const gallery = $.get('page-1.json');

// ----- CONSTRUCTOR FUNCTION ---------
const getAllImagesfromGallery = () => {

    $.get('page-1.json').then(images => {
        //console is logging the confirmation of image receieved from .json file
        console.log('Images received from .then', images);


        //forEach is looping once over each image to obtain the title,url,horns,description, and keyword properties of each image
        images.forEach(eachImage => {
            new images(eachImage.title, eachImage.image_url, eachImage.horns, eachImage.description, eachImage.keyword);
        });
    
    allImages[0].renderWithjQuery();
    });    
};

