'use strict';

function getDogImages() {
    console.log(`'getDogImages' ran`);
    let breedChoice = $('input').val();
    console.log(breedChoice);
    var originalURL =  "https://dog.ceo/api/breed/" + breedChoice + "/images/random";
    var queryURL = "https://cors-anywhere.herokuapp.com/" + originalURL
    $('.results').empty();
  
    fetch(queryURL)
    .then(response => response.json())
    
    .then(responseJson => displayResults(responseJson))
    .catch(error => console.log('Something went wrong. Try again later.'))
}

function displayResults(responseJson) { 
    console.log(responseJson);
    console.log(responseJson.message);   
    if (responseJson.status == "success") {
        $('.results').append('<h2>Here is your lovable puppy!</h2>');
        $('.results').append(`<img src="${responseJson.message}" class="results-img">`); 
        
    } else  {
        showError();
    }
}

function showError(responseJson) {
    $('.results').append("Sorry, that breed does not exist in the database. Please try again.");
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImages();
        $('.results').removeClass('hidden');
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });