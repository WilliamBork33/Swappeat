
//--------------- GLOBAL VARIABLES------------------ //
var userName = "";
var userPassword = "";
var filterArray = ["Vegetables", "Grain (cereal) foods", " Red Meats", "Fish", "Chicken", "Eggs", "Tofu", "Seeds", "Legumes/Beans", "Dairies"];
var otherFilterChoice = "";

buttonsRender();
//--------------- RENDER filterArray BTNS------------------ //
function buttonsRender() {

    for (var i = 0; i < filterArray.length; i++) {
        var filterBtn = $("<button>");
        filterBtn.addClass("#filter_render");
        // Adding a data-attribute
        filterBtn.attr("data-name", filterArray[i]);
        // Providing the initial button text
        filterBtn.text(filterArray[i]);
        // Adding the button to the buttons-view div
        $("#show_filterbtn").append(filterBtn);
    }
}
//---------------- STORE VALUE OF BUTTONS --------------->

//--------------- new search btn------------------ //
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.chips');
    var instances = M.Chips.init(elems, options);
});
var chip = {
    tag: 'chip content',
    image: '', //optional
};
$('.chips').chips();
$('.chips-initial').chips({
    data: [{
        tag: 'Apple',
    }, {
        tag: 'Microsoft',
    }, {
        tag: 'Google',
    }],
});
$('.chips-placeholder').chips({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Tag',
});
$('.chips-autocomplete').chips({
    autocompleteOptions: {
        data: {
            'Apple': null,
            'Microsoft': null,
            'Google': null
        },
        limit: Infinity,
        minLength: 1
    }
});

//--------------- API CALL------------------ //  
$(document).on("click", "button", function (event) {
    var filterChoices = $(this).attr("data-name");
    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?=fillIngredients=false" + filterChoices + "limitLicense=false&number=5&ranking=1";

    $.ajax({
        type: "GET",
        url: queryURL,
        headers: {
            "X-Mashape-Key": "DZZdpVKLHSmshgD67ScIQcz9BQY3p1mgljSjsnkJyKyQ2YvcV7"
        }
    }).then(function (response) {
        console.log(response);
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var celebrityDiv = $("<div class = 'recipes' >").addClass("col-sm-4");
            var t = $("<h5>");
            p.text(results[i].title);
            var recepieImage = $("<img>");
            recepieImage.addClass("recipe_image");
            recepieImage.attr({
                "src": results[i].images.url,
                "image": results[i].images.url,
                "title": results[i].images.fixed_height.url,

            });
            celebrityDiv.prepend(p, t, celebrityImage);

            $("#giphys_view").prepend(celebrityDiv);
        }

    });


});