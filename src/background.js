/*
 * Filename: /Users/alexshelton/Desktop/twitch-channel-points-plugin/src/background.js
 * Path: /Users/alexshelton/Desktop/twitch-channel-points-plugin/src
 * Created Date: Wednesday, July 29th 2020, 6:36:35 pm
 * Author: Alex Shelton
 * 
 * Copyright (c) 2020 Your Company
 */



//See what tabs are open.
//tabs that are open with twitch link can get the click_twitch_button code injected 






// handle The extension is first installed or updated to a new version.
// Listen to the runtime.onInstalled event to initialize an extension on installation. 
// Use this event to set a state or for one-time initialization, such as a context menu.

// Initialzing the application
chrome.runtime.onInstalled.addListener(function() {
   console.log('on install triggered');
 });


 

 


 setTimeout(function() {
   chrome.tabs.query({
      url: '*://*.twitch.tv/*'
   }, function(tabs){
      if( !tabs.length || !Array.isArray(tabs) ) {
         console.log('No twitch tabs were found.');
         return null;
      } 

      tabs.forEach(function(tab) {
         console.log(`Found a twitch url: ${tab.url}\nTab id: ${tab.id}`);

         // chrome.tabs.sendMessage(tab.id, {content: 'check'}, function(response) {
         //    //sent a message to the content script.
         //    //if there was a runtime error clear the response:
         //    console.log(response.status);
         //    if(chrome.runtime.lastError) {
         //       console.log(`there was a runtime lastError...\nChanging response from: ${response} to {}`);
         //       response = {};
         //    }
         //    else {response = response; }

         //    //if the response got cleared due to a runtime error. Manually inject the code into the tab:
         //    if(response.status != 'confirmed'){
         //       chrome.tabs.executeScript(tab.id, {file: 'arrive.js'});
         //       chrome.tabs.executeScript(tab.id, {file: 'content.js'});
         //    }
           
         // });
      });
   });
 },1000);










