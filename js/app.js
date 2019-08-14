'use strict';

// alert('hi');
const gallery = [];

function Image(url, title, desc, keyword, horns){
    this.url = url;
    this.title = title;
    this.description = desc;
    this.keyword = keyword;
    this.horns = horns;

    gallery.push(this);
};

// ----- CONSTRUCTOR FUNCTION ---------
const getAllImagesfromGallery = () => {

    $.get('./js/page-1.json').then(images => {
        //console is logging the confirmation of image receieved from .json file
        console.log('Images received from .then', images);


        //forEach is looping once over each image to obtain the title,url,horns,description, and keyword properties of each image
        images.forEach(eachImage => {
            new Image(
                eachImage.image_url,
                eachImage.title ,
                eachImage.description, 
                eachImage.keyword, 
                eachImage.horns);
        });
        for(let i = 0; i<gallery.length; i++){
            gallery[i].renderWithjQuery();
            console.log(`rendered ${gallery[i]} at index ${i}`);
        }
        console.log('render with query')
    });    
};

// PROTOTYPES
Image.prototype.renderWithjQuery = function(){
    const $myTemplate = $('#photo-template');
    const $myTemplateHtml = $myTemplate.html();

    const $newSection = $('<section></section>');
    $newSection.html($myTemplateHtml);

    $newSection.find('h2').html(this.title);
    
    $newSection.find('#descript').text(this.description);
    
    $newSection.find('img').attr('src', this.url);

    $newSection.find('#keyword').text(this.keyword);

    $newSection.find('#horns').text(this.horns);

    //append
    $('main').append($newSection);
    console.log('appending newSection to id photo-template');
};

getAllImagesfromGallery();
console.log('get all images')

// render
