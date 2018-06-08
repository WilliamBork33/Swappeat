//--------------- GLOBAL VARIABLES------------------ //
var userName = "";
var userPassword = "";
var filterArray = ["Vegetables", "CEREAL", " Beef", "Fish", "Chicken", "Eggs", "Tofu", "Seeds", "Legumes/Beans", "Milk", "Cheese"];
var userChoices = [];

buttonsRender();
//--------------- RENDER filterArray BTNS------------------ //
function buttonsRender() {

    for (var i = 0; i < filterArray.length; i++) {
        var filterBtn = $("<button>");
        filterBtn.addClass("filter_render chip");
        // Adding a data-attribute
        filterBtn.attr("data-name", filterArray[i]);
        // Providing the initial button text
        filterBtn.text(filterArray[i]);
        // Adding the button to the buttons-view div
        $("#show_filterbtn").append(filterBtn);
    }
}
//--------------onclick event for filters and text input -----------//
$(".filter_render").on("click", function (event) {
    event.preventDefault();

    if (userChoices.indexOf(event.target.innerText) === -1) {
        userChoices.push(event.target.innerText);
    }



});
//--------------chips -----------//
$('.chips').chips();
//---------------- cLEARS TEXT AND  --------------->


//--------------- API CALL------------------ //  
$(document).on("click", "#searchBtn", function (event) {
    var filterChoices = "";
    for (var i = 0; i < userChoices.length; i++) {
        filterChoices += userChoices[i] + ",";
    }

    var chips = $("div.chip");
    for (var i = 0; i < chips.length; i++) {
        filterChoices += chips[i].firstChild.data + ",";
    }

    var baseURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients";
    var queryURL = baseURL + "?fillIngredients=false&ingredients=" + filterChoices + "&limitLicense=false&number=6&ranking=1";


    $.ajax({
        type: "GET",
        url: queryURL,
        headers: {
            "X-Mashape-Key": "DZZdpVKLHSmshgD67ScIQcz9BQY3p1mgljSjsnkJyKyQ2YvcV7"
        }
    }).then(function (response) {
        console.log(response);
        var results = response;
        for (var i = 0; i < results.length; i++) {
            var recipeDiv = $("<div>")
            recipeDiv.addClass("recipes col l4 m4 s4");
            var recipeImage = $("<img>");
            var recipeTitle = $("<p>");
            $(recipeTitle).attr("id", "recipe_title");
            recipeImage.addClass("recipe_image");
            recipeImage.attr("src", results[i].image);
            recipeDiv.append(recipeImage);
            recipeTitle.text(results[i].title);
            recipeDiv.append(recipeTitle);
            //like btn--------------//
            likeBtn = $("<button>");
            likeBtn.text("Like <3");
            likeBtn.addClass("btn btn-info");
            recipeDiv.append(likeBtn);
            $("#recipesCont").append(recipeDiv);

        }

    });
});
    $(likeBtn).click(function () {
        var imageUrl = $()
});
/*
//--------------- API CALL------------------ //
var config = {
    apiKey: "AIzaSyBmJcFcPiRh6XXHCMcGKdYR8QjAgOUYUJQ",
    authDomain: "swappie-bf64e.firebaseapp.com",
    databaseURL: "https://swappie-bf64e.firebaseio.com",
    projectId: "swappie-bf64e",
    storageBucket: "swappie-bf64e.appspot.com",
    messagingSenderId: "695015832855"
};
firebase.initializeApp(config);
var database = firebase.database();
var recipesLikedRef = database.ref("recipe_likes")
recipesLikedRef.on("child_added", function (snapshot) {
}
$("#btn_liked").on("click", function (event) {
    var Recipe = $()
    var saved_obj
    } */