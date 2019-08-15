'use strict';

// alert('hi');
const gallery = [];
let pageOneImages = [];

// ----- CONSTRUCTOR FUNCTION ---------
function Image(url, title, desc, keyword, horns){
    this.url = url;
    this.title = title;
    this.description = desc;
    this.keyword = keyword;
    this.horns = horns;

    gallery.push(this);
};

// -------EXECUTABLE HELPER-------
const getAllImagesfromGallery = () => {

    $.get('./js/page-1.json').then(images => {
        //forEach is looping once over each image to obtain the title,url,horns,description, and keyword properties of each image
        images.forEach(eachImage => {
            pageOneImages.push(new Image(
                eachImage.image_url,
                eachImage.title ,
                eachImage.description, 
                eachImage.keyword, 
                eachImage.horns));
        }); 
    })   
    .then(data=>{
        // console.log('i am here');
        // console.log(pageOneImages);
        renderImagesOne();
        renderDropdown();
        // console.log(data);
    });
};
// PROTOTYPES
//renderWithjQuery identifies DOM, creates a <section> fills with data and appends to main. 
Image.prototype.renderWithjQuery = function(){
    //grabbing a template from html
    const $myTemplate = $('#photo-template');
    const $myTemplateHtml = $myTemplate.html();

    //adding section to template
    const $newSection = $('<section></section>');
    
    //Setting the blank template in html
    $newSection.html($myTemplateHtml);
    
    //inside of added section:
    $newSection.find('h2').html(this.title);
    $newSection.find('#descript').text(this.description);
    $newSection.find('img').attr('src', this.url);
    $newSection.find('#keyword').text(this.keyword);
    $newSection.find('#horns').text(this.horns);
    
    //appending section to main with data
    $('main').append($newSection);
};

//////////////////////////////////////

const renderDropdown = () => {
    pageOneImages.forEach(function(element) {
        $('#menu').append(`<option>${element.keyword}</option>`);
    });
}







let renderImagesOne = function(){

    // console.log('I am at the for loop')
    // console.log(pageOneImages)
    pageOneImages.forEach(object=>{
        // console.log('inside of the for loop')
        object.renderWithjQuery();
    });
    // console.log('I am after the for loop');
}
// console.log('preloop');


getAllImagesfromGallery();