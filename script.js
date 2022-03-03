
//Objects for each photo
let img1 = {
    photo: "./img/001.jpg",
    title: "Hawaii",
    description: "Beautiful sight on shore cliffs of Hawaii from sea"
};

let img2 = {
    photo: "./img/002.jpg",
    title: "China",
    description: "Tianzi Mountains. Yes, they’re the original inspiration behind the movie Avatar’s hovering mountains. Amazing rock formations of this unique park are prototypes of world-famous “Hallelujah Mountains”."
};

let img3 = {
    photo: "./img/003.jpg",
    title: "England",
    description: "Pulpit Rock is a coastal feature at Portland Bill, the southern tip of the Isle of Portland, Dorset, England. Representing an open bible leaning on a pulpit."
};

let img4 = {
    photo: "./img/004.jpg",
    title: "Alaska",
    description: "Alaskan mountains, three principal mountain groups of far northwestern North America—the Brooks Range, Alaska Range, and Aleutian Range—found in the U.S. state of Alaska."
};

let img5 = {
    photo: "./img/005.jpg",
    title: "Oregon",
    description: "Marys Peak, at 4,097 feet, is the highest point in Oregon’s Coast Range and the most prominent peak to the west of Corvallis."
};

let img6 = {
    photo: "./img/006.jpg",
    title: "Yellowstone",
    description: "“A grander scene than the lower cataract of the Yellowstone was never witnessed by mortal eyes.” - Mr. N.P. Langford"
};

let img7 = {
    photo: "./img/007.jpg",
    title: "Germany",
    description: "Neuschwanstein Castle 19th-century historicist palace on a rugged hill above the village of Hohenschwangau near Füssen in southwest Bavaria, Germany."
};

//this var is used to pull data from array
let currentPhoto = 0;

//array of objects
let images = [img1, img2, img3, img4, img5, img6, img7];

//Show the first photo at start
$("#photo").attr("src", images[currentPhoto].photo); //this sets the source of img
$("#photo-title").text(images[currentPhoto].title);     //this sets title of img
$("#photo-description").text(images[currentPhoto].description); //this sets description of img



// Click on arrows handling

$("#next").click(function(){
    if (currentPhoto < images.length - 1){      //If - to prevent overpassing currentPhoto the variables in array
        currentPhoto++;         //add 1 to current photo
    } else {
        currentPhoto = 0;       //if it overpasses, this will reset currentPhoto to 0, so to the first picture
    }

    $(".box").removeClass("choosen");       //removing highlight from thumbnail
    $(`.box${currentPhoto}`).addClass("choosen");   //this will set the highlight to actual picture's thumbnail
    loadimg();      //and reload picture
});

$("#prev").click(function(){
    if (currentPhoto > 0){  //This if will prevent to be currentPhoto less then 0
        currentPhoto--;
    } else {
        currentPhoto = images.length - 1;  //if currentPhoto should be less then 0, will be set to last var in array
    }

    $(".box").removeClass("choosen");
    $(`.box${currentPhoto}`).addClass("choosen");
    loadimg();  //reload picture
});

//forEach will add thumbnails to application

images.forEach((item, index) => {
    //              (add html code)     (p contain the hidden tile of thumbnail, show at hovering)             (images-index is used to recognize which thumbnail was clicked to be able to show it)
    $("#thumbnailContainer").append(`<div><p class="hidden">${images[index].title}</p><img class="box box${index}"  images-index="${index}" src=${images[index].photo}></div>`);
    //                                                                      (index=currentPhoto - box(index) is used in arrow handling)
    $(".box:first").addClass("choosen");    //add highlight to first thumbnail, which picture is showed

    thumbnailClick();

});

//FUNCTIONS

//function that reload photo after changing the currentPhoto value
function loadimg () {
    $("#photo").attr("src", images[currentPhoto].photo);
    $("#photo-title").text(images[currentPhoto].title);
    $("#photo-description").text(images[currentPhoto].description);
    };

//Handling of action - click on thumbnail
function thumbnailClick () {
    
    $('.box').click((event) => {

//class = choosen is highlighting thumbnail of picture that is currently showing
        $(".box").removeClass("choosen");    //remove class from all thumbnails
        $(event.target).addClass("choosen");    //add class to clicked thumbnail

//Action - After click on thumbnail, the picture on thumbnail will be showed
        let indexClicked = $(event.target).attr('images-index');    //save value of attr "images-index" into variable
        currentPhoto = indexClicked;    //currentPhoto is handling which picture will be showing

        loadimg();  //reload images
    });

};