
//Objects for each photo
let img1 = {
    photo: "./img/001.jpg",
    title: "Title",
    description: "Description"
};

let img2 = {
    photo: "./img/002.jpg",
    title: "Title",
    description: "Description"
};

let img3 = {
    photo: "./img/003.jpg",
    title: "Title",
    description: "Description"
};

let img4 = {
    photo: "./img/004.jpg",
    title: "Title",
    description: "Description"
};

let img5 = {
    photo: "./img/005.jpg",
    title: "Title",
    description: "Description"
};

let img6 = {
    photo: "./img/006.jpg",
    title: "Title",
    description: "Description"
};

let img7 = {
    photo: "./img/007.jpg",
    title: "Title",
    description: "Description"
};

//this var is used to pull data from array
let currentPhoto = 0;

//array of objects
let images = [img1, img2, img3, img4, img5, img6, img7];

//Show the first photo at start
$("#photo").attr("src", images[currentPhoto].photo); //set the source of img
$("#photo-title").text(images[currentPhoto].title);     //set title of img
$("#photo-description").text(images[currentPhoto].description); //set description of img

//function that reload photo after counting order from array
function loadimg () {
$("#photo").attr("src", images[currentPhoto].photo);
$("#photo-title").text(images[currentPhoto].title);
$("#photo-description").text(images[currentPhoto].description);
};

// Click on arrows handling
$("#next").click(function(){
    if (currentPhoto < images.length - 1){      //If to prevent overpassing currentPhoto the variables in array
        currentPhoto++;         //add 1 to current photo
    } else {
        currentPhoto = 0;       //if it overpasses, this will reset currentPhoto to 0, so to first picture
    }
    loadimg();      //and reload picture
});
$("#prev").click(function(){
    if (currentPhoto > 0){  //This if will prevent to be currentPhoto less then 0
        currentPhoto--;
    } else {
        currentPhoto = images.length - 1;  //if currentPhoto should be less then 0, will be set to last var in array
    }
    loadimg();  //reload picture
});



images.forEach((item, index) => {
    $("#thumbnailContainer").append(`<div><img src=${images[index].photo}></div>`);
});
