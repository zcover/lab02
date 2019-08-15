'use strict';

// alert('hi');
const gallery = [];
let pageOneImages = [];

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
        // console.log('Images received from .then', images);


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
        console.log('i am here');
        console.log(pageOneImages);
        renderImagesOne();
        console.log(data);
    });
};

let renderImagesOne = function(){

    console.log('I am at the for loop')
    console.log(pageOneImages)
    pageOneImages.forEach(object=>{
        console.log('inside of the for loop')
        // object.renderWithjQuery();
    })
    console.log('I am after the for loop');
}
console.log('preloop')
// console.log('render with query')

//for every object in the gallery arr we will renderWithjQuery

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


// Image.prototype.renderDropDown = function(keyword){
//     const $myMenu = $('#menu');
//     const $myMenuHtml = $myMenu.html();

//     const $newMenu = $('<option></option>');
//     $newMenu.html($myMenuHtml);

//     $newMenu.find('option').html(this.keyword);

//     //append
//     $('option').append($newMenu);
//     console.log('hi');
// }


// let example = function(){
//     const $exDropDown = $('#menu');
//     const $templateHtml = $exDropDown.html();
//     //created template of drop down menu
//     const $newSelect = $('<select></select>');
    
//     $newSelect.find('option').text('1');
//     $('select'.child).append()
// }




getAllImagesfromGallery();

console.log('get all images')
// renderDropDown();
console.log('render drop down');

// render
console.log();
