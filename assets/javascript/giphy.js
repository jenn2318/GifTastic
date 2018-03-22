//Make an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
//Your app should take the topics and create buttons in your HTML
//Try using a loop that appends a button for each string in the array
//Under each gif a rating should be displayed PG, G and etc.
//=============================================================================================================
//Global Variables
//=============================================================================================================
var topics = ["Serena Williams", "Danicka Patrick", "Michael Phelps", "Michael Jordan", "Kyrie Irving", "Simone Biles", "Drew Brees", "Hope Solo", "Chloe Kim"]

var gifsPerPage = 10;
//============================================================================================================
//FUNCTIONS
// $(document).ready(function) {
//function to query the API for the athlete gifs/ajax call stored here/new div, image and and rating will display as text
function displayAthletes () {
	var athletes = $(this).attr("data-person");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=0LtjmwyUivgwh70IYlx6W5fwSgRZoTwH";
	console.log (queryURL);
   $.ajax({
      url: queryURL,
      method: "GET"
        }).then(function(response) {
      	var resultsTopics = response.data;
         for (var i = 0; i < response.data.length; i++) {
          var gifDiv = $("<div>");
          // var gifImg = $("<img class="gifImage">");
          var ratingInfo = response.data[i].rating;
          var gifRating = $("<p>").text("Rating: " + rating);
          var animated = response.data[i].images.fixed_height.url;
          var still = response.data[i].images.fixed_height_still.url;

//Here I added attributes to the gif Images that will make them still, animate then still again, that will be used for a function later
var gifImg = $("<img class="gifImage">");
gifImg.attr('data-state', 'still');
gifImg.attr('data-animate');
gifImg.attr('data-state', 'still');

gitDiv.append(gifImg);
gifDiv.append(gifRating);

}
//function to create the button
function createButton() {
	    $("#buttonArea").empty();
	    for (var i = 0; i < topics.length; i++;) {
		$("<button>").text(topics[i]);
		btn.attr("data-person", topics[i]).addClass('btn btn-primary topic');
		$("#buttonArea").append(btn);
	}
}

function addButton () {
    $("#gif-input").val().trim();
    topics.push(input);
    createButton();
}

//function to add the button each time user clicks add for their search results
  // event.preventDefault();

// $(".add-giph").on("click", function(event)

// function addButton () {
//     $("#gif-input").val().trim();
//     topics.push(input);
//     createButton();
// }

//function changeState() {}

//  $("#buttonArea").on('click','.gifImg', (){
//     if (state == 'still') {
//     	$(this).attr('src', $(this).data('animate'));
//     	$(this).attr('data-state', 'animate');

//     } else { 
//     	$(this).attr('src', $(this).data('still'));
//     	$(this).attr('data-state', 'still');

//     }