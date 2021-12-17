/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */
 /*
 File: app.js
 Author: Oliver Mohr
 Version: #V3 1.0.3
 Date: 17.12.2021
 */


/**
 * Define Global Variables
 *
 */

// Constant fixed variable for determining the section number from the HTML document
const sections = document.querySelectorAll('section');

// HTML position in which the navigation elements are to be inserted.
const navbarList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// Specifying the scrolling behavior with the "smooth" instruction
document.querySelector('html').style.scrollBehavior = 'smooth';

// The scroll function in the vertical with the transfer of the class "your-active-class"
onScroll = (e) => {
    for (const section of sections) {

        // Fixed variable for the scrollable Y value
        const scrollY = window.scrollY;

        // Fixed variable for the distance to the next section
        const offsetTop = section.offsetTop;

        // Both values, the scrollable Y-value and the distance to the next section are compared and if the variable "scrollY" is greater than the value "offsetTop", the section is assigned the class: "your-active-class".
        if (scrollY > offsetTop - 200) {
            section.classList.add('your-active-class');
        }

        // otherwise the “your-active-class” will be removed.
        else {
            section.classList.remove('your-active-class');
        }
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// First main function of building or filling the navigation bar with the collected section names.
buildNavbarList = () => {

    // simple for loop that is repeated depending on the number of sections.
    for (let i = 0; i < sections.length; i++) {

        // Variable navbarListItem for creating a single HTML list element
        let navbarListItem = document.createElement('li');

        // Variable anchor for creating a single HTML link element
        let anchor = document.createElement('a');

        // Variable section Name for reading out the attribute "data-nav" if this has a proper name. The number of the section is also assigned.
        let sectionName = document.createTextNode(`${sections[i].getAttribute('data-nav')}`)

        // Assignment of the link (anchor) to the child node of the section name.
        anchor.appendChild(sectionName);

        // Allocation of the whole list of the compiled sections as a navigation bar to the child node of the individual navigation list Item.
        navbarList.appendChild(navbarListItem);

        // The actual important function of scrolling to the selected and clicked section including the read ID number.
        anchor.addEventListener('click', e => {
            e.preventDefault();
            scrollInto(`${sections[i].id}`);
        })

        // Assignment to the link (anchor) to the individual navigation item
        navbarListItem.appendChild(anchor);

        // Assignment of the HTML class "menu__link" to the individual navigation item
        anchor.classList.add("menu__link")
    }
}

// Now the actual and most important function of scrolling the screen
scrollInto = element => {

        // Variable that reads the link / anchor and the selected element of the Section ID.
        let anchor = document.getElementById(element);

        // The "scrollIntoView" command is executed with the selected Section ID.
        anchor.scrollIntoView({behavior: "smooth"});
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build the main menu or Navbar
buildNavbarList();

// The Event of Scrolling to section on mouse click
window.addEventListener('scroll', onScroll);