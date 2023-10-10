// Selcct DOM Items
/* Const is constent meaning it cannot be changed.*/
const menuBtn  = document.querySelector('.menu-btn'); /*Gets the html element and the css attatched to it.*/
const menu  = document.querySelector('.menu'); /*Gets the html element and the css attatched to it.*/
const menuNav  = document.querySelector('.menu-nav'); /*Gets the html element and the css attatched to it.*/
const menuBranding  = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
 /*Gets the html element and the css attatched to it.*/
/*Nodes are html elements. Anything within the html document even comments are called nodes.*/
/*Html DOM methods are actions you can perform on HTML elements.
HTMl DOM properties are values of HTML Elements that you can set or change.
HTML DOM can be accesed by JavaScript or other programming languages.
Node is an HTML element that can be manipulated by JavaScript.*/

// Set Initial State Of menu
/*Let is used when you know you're gonna changed something later, in this case we changed it 
down in the toggleMenu function.*/
let showMenu = false;
/* We are telling JavaScript to detect if someone is trying to click on menuBtn
 then we want a function to fire off an action to happen which we create ourselves
 the function that wre create is gonna open the menuBtn when someone clicks on it. */


menuBtn.addEventListener('click', toggleMenu);

/* We wanna check the state of showMenu, if not (! means not false) so if it is not already
open then open it.*/
/*classList is used to add a class to the element without accesing the html document. A class 
can also be removed using classList remove. */

function toggleMenu() {
    if (!showMenu) {
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuNav.classList.add('show');
      menuBranding.classList.add('show');
      navItems.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true; /* True as in m0enu should be open. */
       
        /* With else if the menu is shown then we want to remove all these classes. */
    } else { /* ctrl + d select all the same words bellow. */
        menuBtn.classList.remove('close'); 
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false; /* Menu should be clsoed. */
    }
}

