//Make an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
//Your app should take the topics and create buttons in your HTML
//Try using a loop that appends a button for each string in the array
//Under each gif a rating should be displayed PG, G and etc.
//=============================================================================================================
//Global Variables
//=============================================================================================================
var topicsArray = [];

var gifsPerTopic = 10;


//============================================================================================================
//FUNCTIONS
// $(document).ready(function) {

//Function to query the API for the athlete gifs/ajax call stored here/new div, image and and rating will display as text
//Function defines variables for setting the images to a div and attributes for the images
$("#add-Gif").on("click", function(event) {
        event.preventDefault();
        console.log("buttonclick");
        var topics = $("#gif-input").val().trim();
        topicsArray.push(topics);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=0LtjmwyUivgwh70IYlx6W5fwSgRZoTwH";
    
    $.ajax({
        url: queryURL,
        method: "GET",
        success: function (response) {
        console.log(response);
         for (var i = 0; i < 10; i++) {
            //  html = '';
            //  html = html + "<div class='imageWrapper'> <img class='gifImage' src=";
            //  html = html + response.data[i].images.fixed_height_still.url;
            //  html = html + ">";
            //  html = html + "<p>Rating: ";
            //  html = html + response.data[i].rating;
            //  html = html + "</p></div>";
            // $("#gifArea").append(html);
//========================================================================================
           //This is the block of code I tested it works now  
             var gifDiv = $("<div>");
             $("#gifArea").addClass("imageWrapper");
             var gifImage = $("<img>");
             gifImage.addClass("gifImage");
             gifImage.attr("src", response.data[i].images.fixed_height_still.url);
             gifImage.attr("data-state", "still");
             gifImage.attr("data-still", response.data[i].images.fixed_height_still.url);
             gifImage.attr("data-animate", response.data[i].images.fixed_height.url);
            var ratingInfo = response.data[i].rating;
            var gifRating = $("<p>").text("Rating: " + ratingInfo);
            $("#gifArea").append(gifImage);
            // $("#gifArea").append(ratingInfo);
            $("#gifArea").append(gifRating);
}
            // gifImage.attr("src", still);
            // gifImage.attr("data-state", "still");
            // gifImage.attr("data-still", still);
            // gifmage.attr("data-animate", animated);

        createButtons();
            
         } 
     
      });
  
  });      
         
  // createButtons();
 
       
//  //Function to create the buttons
function createButtons() {
    $("#buttonArea").empty();
    for (var i = 0; i < topicsArray.length; i++) {
      var html = '';
      html = html + "<button class='athleteGifs', data-person=";
      html = html + topicsArray[i];
      html = html + '>';
      html = html + topicsArray[i];
      html = html + '</button>';
      // var gifButtons = $("<button>");
      // gifButtons.addClass("athleteGifs");
      // gifButtons.attr("data-person", topics[i]);
      // $("<button>").text(topics[i]);
      $("#buttonArea").append(html);
    }
}
//Concatenated the html above this sentence just shows what I want to say and the button the text will append to above the gifs
// <button class="atheleteGifs" data-person="Serena Williams">Serena Williams</button>         

//This function changes the state of the gifs from still to animated back to still

 $('#gifArea').on('click', '.gifImage', function() {
     console.log('gifImage');
     var state = $(this).attr("data-state");
    if (state == 'still') {
      $(this).attr('src', $(this).attr("data-animate"));
      $(this).attr('data-state', 'animate');
        //Otherwiser, change the state of the gif
    } else { 
      $(this).attr('src', $(this).attr("data-still"));
      $(this).attr('data-state', 'still');

    }
});






    






