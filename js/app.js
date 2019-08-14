'use strict';

// alert('hi');
const gallery = [];

// ----- CONSTRUCTOR FUNCTION ---------
const getAllImagesfromGallery = () => {

    $.get('./js/page-1.json').then(images => {
        //console is logging the confirmation of image receieved from .json file
        console.log('Images received from .then', images);


        //forEach is looping once over each image to obtain the title,url,horns,description, and keyword properties of each image
        images.forEach(eachImage => {
            new Image(
                this.url = eachImage.image_url,
                this.title = eachImage.title ,
                this.description=eachImage.description, 
                this.keyword=eachImage.keyword, 
                this.horns=eachImage.horns);
                gallery.push(this);
                console.log(`${this.title} has loaded`);
        });
    
    // allImages[0].renderWithjQuery();
    });    
};

// PROTOTYPES
Image.prototype.renderWithjQuery = function(){
    const $myTemplate = $('#photo-template');
    const myTemplateHtml = $myTemplateHtml.html();

    const $newSection = $('<section></section>');
    $newSection.find('h2').html(this.title);
    
    $newSection.find('p').text(this.description);
    
    //are these attributes?
    $newSection.find('img').attr('src', this.image_url);

    // $newSection.find('h2').attribute(this.keyword);

    // $newSection.find('h2').attribute(this.horns);

    //append
    $('main').append($newSection);
    console.log('appending newSection to id photo-template');
};

getAllImagesfromGallery();
console.log('get all images')
renderWithjQuery(this);
console.log('render with query')
// render
