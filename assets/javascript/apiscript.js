//--------------- GLOBAL VARIABLES------------------ //
var userName = "";
var userPassword = "";
var filterArray = ["Vegetables", "Grain (cereal) foods", " Red Meats", "Fish", "Chicken", "Eggs", "Tofu", "Seeds", "Legumes/Beans", "Dairies"];
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
//---------------- STORE VALUE OF BUTTONS --------------->


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
    var queryURL = baseURL + "?fillIngredients=false&ingredients=" + filterChoices + "&limitLicense=false&number=5&ranking=1";


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
            var recipeDiv = $("<div>").addClass("recipes");
            var recipeImage = $("<img>");
            var recipeTitle = $("<p>");
            recipeImage.addClass("recipe_image");
            recipeImage.attr("src", results[i].image);
            recipeDiv.append(recipeImage);
            //recipeTitle.addClass("recipe_title");
            //recipeTitle.attr("src", results[i].id);
            //recipeDiv.append(recipeTitle);
            $("#recipesCont").append(recipeDiv, recipeTitle);

        }

    });


});