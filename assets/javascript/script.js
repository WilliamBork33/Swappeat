
// GLOBAL VARIABLES INDEX 
var userName = "";
var userPassword = "";
var filterArray = ["diary", "chocolate", "almonds"];
var filterChoices = [];
var otherFilterChoice = "";

//#quick_start button on-click event  takes you to create user 
buttonsRender();
// rendering buttons
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

/*
$("#search-more").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var otherFilterChoice = $("#search_giphys").val().trim();

    if (otherFilterChoice != "") {

        celebritiesArray.push(newCelebrity);
        console.log(celebritiesArray);
        buttonsRender();
    }
});

*/

/// TRYOUT BTNS //
document.addEventListener('DOMContentLoaded', function() {
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


//#create_acount pop up window to fill in information + submit button jquery 

//#login_btn function, recieves users password and user name input and takes you to the dashboard

// jquery creates buttons for variable filterArray

// Jquery creates buttons for others

//jquery stores user choices in to filterChoices