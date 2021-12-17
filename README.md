# Structure of the JavaScript file: app.js

## Global Variables

- „const sections“ =  Constant fixed variable for determining the section number from the HTML document
- „const navbarList“ = Constant fixed variable with the HTML position in which the navigation elements are to be inserted.

## Helper Functions

- Specifying the scrolling behavior with the "smooth" instruction
- The scroll function in the vertical with the transfer of the class "your-active-class"
  - Fixed variable for the scrollable Y value
  - Fixed variable for the distance to the next section
  - Both values, the scrollable Y-value and the distance to the next section are compared and if the variable "scrollY" is greater than the value "offsetTop", the section is assigned the class: "your-active-class".
  - Otherwise the “your-active-class” will be removed.

## Main Functions
- First main function of building or filling the navigation bar with the collected section names.
  - Variable navbarListItem for creating a single HTML list element.
  - Variable anchor for creating a single HTML link element.
  - Variable section Name for reading out the attribute "data-nav" if this has a proper name. The number of the section is also assigned.
  - Assignment of the link (anchor) to the child node of the section name.
  - Allocation of the whole list of the compiled sections as a navigation bar to the child node of the individual navigation list Item.
  - The actual important function of scrolling to the selected and clicked section including the read ID number.
  - Assignment to the link (anchor) to the individual navigation item
  - Assignment of the HTML class "menu__link" to the individual navigation item
- Now the actual and most important function of scrolling the screen.
  - The "scrollIntoView" command is executed with the selected Section ID.

## Events Functions
- Build the main menu or Navbar
- The Event of Scrolling to section on mouse click

# Structure of CSS styles in the file: styles.css
- Customization to keep the headings visible even on small screens and not to let them disappear under the header.
  (See from line 225 "Custom Style for the Headlines")

# Structure of the file index.HTML
- In the Index.html, in addition to the 3 existing sections from the supplied code, I have also incorporated 2 further sections (Section 4 and 5). The section ID etc. have been adapted to match the existing syntax.
- Finally, at the very end of the HTML code, before the closing body tag and after the last visible HTML element (footer), I incorporated the link to load the JavaScript app that was created, app.js.
- 