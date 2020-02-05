/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js is up and running.');



// the image names
var myGallery = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.png",
    "11.jpeg",
    "12.jpeg"
];

for (i = 0; i < myGallery.length; i++) {

    // note the shorthand code below
    // Here we make the path to the images in the folder
    exhibition.innerHTML += '<img src="images/'

        +
        myGallery[i] + '" alt="Dogs">';
}
// see that the image tag are split up, very important!
// let the loop create the HTML for your gallery



//TRYING TO MAKE A BACKGROUND
//
//document.body.backgroundImage = "url('images/paper.jpg')";
//
//
//var background = [
//    "paper.jpg"
//];
//
//for (i = 0; i < background.length; i++) {
//
//    body.innerHTML += '<img src="images/'
//        +background[i] + '" alt="paper">';
//}
//
//
