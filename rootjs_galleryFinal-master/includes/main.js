/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
    'images/landscape-14.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg'
];
var nameOfPictures = [
    'landscape-1.jpg',
    'landscape-10.jpg',
    'landscape-11.jpg',
    'landscape-14.jpg',
    'landscape-13.jpg',
    'landscape-15.jpg',
    'landscape-17.jpg',
    'landscape-18.jpg',
    'landscape-19.jpg',
    'landscape-2.jpg',
    'landscape-3.jpg',
    'landscape-8.jpg',
    'landscape-9.jpg',
    'pexels-photo-132037.jpeg',
    'pretty.jpg'
];

function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/

	makeGallery(pictures);
	addModalCloseHandler();

	$("#gallery").sortable({
         update: function (event, originalPosition){
             var sortedPictures = $("#gallery").sortable("toArray", {attribute: "originalImage"});
             console.log(sortedPictures);
         }
    });
}
function makeGallery(){
    var section =$("<section id= 'gallery'>");

    for (i=0; i<pictures.length; i++){
        var figure= $("<figure>",{
            class:"imageGallery col-xs-12 col-sm-6 col-md-4",
            style: "background-image:url(" +(pictures[i])+ ")",
            originalImage: pictures[i]
        });
        var figCaption = $("<figcaption>").text(nameOfPictures[i]);
        $(figure).append(figCaption);
        $(section).append(figure);
        $(figure).click(displayImage);
    }

    $("body").append(section);

    //use loops and jquery dom creation to make the html structure inside the #gallery section

    //create a loop to go through the pictures
    //create the elements needed for each picture, store the elements in variable

    //attach a click handler to the figure you create.  call the "displayImage" function.

    //append the element to the #gallery section
}

function addModalCloseHandler(){

    $("img").click(function(){
        alert("Modal will close now");
        $("#galleryModal").modal("hide");
    });


	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp	
}

function displayImage(){

    var backgroundProperty =$(this).css('background-image');
     //test the backgroundProperty variable
	console.log(backgroundProperty);

    var slashPosition = backgroundProperty.lastIndexOf("/");
    //var letterPosition= backgroundProperty.lastIndexOf("j");
    var directLink = backgroundProperty.substring(slashPosition+1, backgroundProperty.length -2);
    var title= directLink.substring(0, directLink.lastIndexOf("."));

     //test the directLink variable
    console.log(directLink);

$(".modal-title").text(title);
$("img").attr("src", "images/" + directLink);
$("#galleryModal").modal("show");


    //find the url of the image by grabbing the background-image source, store it in a variable
	//grab the direct url of the image by getting rid of the other pieces you don't need

	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method

	//change the modal-title text to the name you found above
	//change the src of the image in the modal to the url of the image that was clicked on

	//show the modal with JS.  Check for more info here: 
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}




