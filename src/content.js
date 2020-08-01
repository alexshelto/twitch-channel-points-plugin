/*
 * Filename: /Users/alexshelton/Desktop/twitch-channel-points-plugin/src/click_twitch_button.js
 * Path: /Users/alexshelton/Desktop/twitch-channel-points-plugin/src
 * Created Date: Wednesday, July 29th 2020, 6:40:45 pm
 * Author: Alex Shelton
 * 
 * Copyright (c) 2020 Your Company
 */



// Update the points collected n shit
// Converting the number from text to integer
// Check the page
// Click the button when it appears

//run the whole thing of check page


console.log('Content.js loaded')


// // Background.js communication
// // Handles all incoming and outgoing messages with commands 
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log('Inside of the onMessage listener');
        if (request.content == 'check') {
            sendResponse({status: 'confirmed'});
            console.log('got the okay for the twitch site!');
            // chrome.runtime.sendMessage({"status": "handled"});
            return true;
        }
        else {
            console.log(`recieved message ${msg.text}, \n not 'check'`);
        }


});








// function checkPage() {

//     var elements = document.querySelector('community-points-summary').querySelectorAll('button');

//     for(let i = 0; i < elements.length; i++){
//         console.log(elements[i]);
//     }
// }







// function main() {
//     setTimeout(function(){
//         console.log("running content.js");
//     },1000);
    
// }

// main();