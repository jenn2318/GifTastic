//Make an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
//Your app should take the topics and create buttons in your HTML
//Try using a loop that appends a button for each string in the array
//Under each gif a rating should be displayed PG, G and etc.
//=============================================================================================================
//Global Variables
//=============================================================================================================
var topicsArray = ["Serena Williams", "Danicka Patrick", "Michael Phelps", "Michael Jordan", "Kyrie Irving", "Simone Biles", "Drew Brees", "Hope Solo", "Chloe Kim"]

var gifsPerTopic = 10;
//============================================================================================================
//FUNCTIONS
// $(document).ready(function) {


// $("body").addClass("color", "blue");


//Function to query the API for the athlete gifs/ajax call stored here/new div, image and and rating will display as text
//Function defines variables for setting the images to a div and attributes for the images
$("#add-Gif").on("click", function(event) {
        event.preventDefault();
        console.log("buttonclick");
        var topics = $("#gif-input").val().trim();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=0LtjmwyUivgwh70IYlx6W5fwSgRZoTwH";
    
    $.ajax({
        url: queryURL,
        method: "GET",
        success: function (response) {
        console.log(response);
        var resultsTopics = response.data;





         } 
      });
  });      
         
    //      for (var i = 0; i < response.data.length; i++) {
    //       var gifDiv = $("<div>");
    //       var ratingInfo = response.data[i].rating;
    //       var gifRating = $("<p>").text("Rating: " + ratingInfo);
    //       var gifImg = $("<img>");
    //       gifImg.addClass("gifImage");
    //       gifImg.attr("src", results[i].images.fixed_height.url);
    //       var still = response.data[i].images.fixed_height_still.url;
    //       var animated = response.data[i].images.fixed_height.url;
    // // gitDiv.append(gifImg);
    //     $("#gifDiv").append(gifImg);
    //     $("#gifDiv").append(gifRating);
    //     console.log('response', response);
    //     createButtons();

        
       



//  //Function to create the button
// function createButtons() {
//     $("#buttonArea").empty();
//     for (var i = 0; i < topics.length; i++) {
//     var gifButtons = $("<button>");
//     gifButtons.addClass("athleteGifs");
//     gifButtons.attr("data-person", topics[i]);
//     $("<button>").text(topics[i]);
//     $("#buttonArea").append(btn);
//   }
// }
         



         


    // .then(function (response) {
    //   var resultsTopics = response.data;
    //      for (var i = 0; i < response.data.length; i++) {
    //       var gifDiv = $("<div>");
    //       var ratingInfo = response.data[i].rating;
    //       var gifRating = $("<p>").text("Rating: " + ratingInfo);
    //       var gifImg = $("<img>");
    //       gifImg.addClass("gifImage");
    //       gifImg.attr("src", results[i].images.fixed_height.url);
    //       var still = response.data[i].images.fixed_height_still.url;
    //       var animated = response.data[i].images.fixed_height.url;

    // // gitDiv.append(gifImg);
    // $("#gifDiv").prepend(gifImg);
    //  gifDiv.append(gifRating);
    // console.log('response', response);
  // }

//This function changes the state of the gifs from still to animated back to still

//  $("#buttonArea").on('click','.gifImg')() {
//     if (state == 'still') {
//       $(this).attr('src', $(this).data('animate'));
//       $(this).attr('data-state', 'animate');
//         //Otherwiser, change the state
//     else { 
//       $(this).attr('src', $(this).data('still'));
//       $(this).attr('data-state', 'still');

//     }


// });

// function displayAthletes () {
// 	var athletes = $(this).attr("data-person");
// 	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=0LtjmwyUivgwh70IYlx6W5fwSgRZoTwH";
// 	console.log (queryURL);
//    $.ajax({
//       url: queryURL,
//       method: "GET"
//         }).then(function(response) {
//       	var resultsTopics = response.data;
//          for (var i = 0; i < response.data.length; i++) {
//           var gifDiv = $("<div>");
//           // var gifImg = $("<img class="gifImage">");
//           var ratingInfo = response.data[i].rating;
//           var gifRating = $("<p>").text("Rating: " + ratingInfo);
//           var animated = response.data[i].images.fixed_height.url;
//           var still = response.data[i].images.fixed_height_still.url;

// gitDiv.append(gifImg);
// gifDiv.append(gifRating);
// $("#gifArea").prepend(gifDiv);
// }





