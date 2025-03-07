// your function here
// Open the task01 folder.
// Write a function in main.js that adds the dark-mode class to the body tag if it is not already present, and removes the dark-mode class from the body tag if it is present.
// Attach the function you just wrote to the button’s click event.

function changeTheme(className) {
  const body = document.querySelector("body");
  if (body.className == className) {
    //if it's already in dark mode
    body.className = ""; //take it away
  } else {
    body.className = className; //else put it into dark mode
  }
}
