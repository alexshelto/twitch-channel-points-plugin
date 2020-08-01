/*
 * Filename: /Users/alexshelton/Desktop/twitch-channel-points-plugin/popup.js
 * Path: /Users/alexshelton/Desktop/twitch-channel-points-plugin
 * Created Date: Wednesday, July 29th 2020, 6:26:50 pm
 * Author: Alex Shelton
 * 
 * Copyright (c) 2020 Your Company
 */



// File contains the logic for opening the settings popup and displaying the channel points
// Preforms logic on the points if larger than 999k

// Contains some sort of logic to know how many points it has clicked and how many it has done forever. 
// |-> that number will have to be initialized somehow and iterated









// Once the content is fully loaded to the page:
document.addEventListener('DOMContentLoaded', function () {
    // Holding the elements that display points in the popup window
    const currentPointsValue = document.getElementById('current-value');
    const totalPointsValue = document.getElementById('total-value');  


    //Displaying 
    currentPointsValue.textContent = 420;
    totalPointsValue.textContent = 420000;
});