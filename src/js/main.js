"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


const button_1=document.querySelector('.button1--js');
const button_2=document.querySelector('.button2--js');
const textArea=document.querySelector('.writing--js');

button_2.addEventListener('click',(e) => {
  localStorage.setItem('pole',textArea.value);
})
button_1.addEventListener('click',(e) => {
  if(localStorage.getItem('pole'))textArea.value=localStorage.getItem('pole');
  console.log(textArea.value);
})


//if(localStorage.getItem('pole'))textArea.value=localStorage.getItem('pole');




