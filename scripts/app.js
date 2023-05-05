//  set initial counter
let count = 0;

//  select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//  function to select all buttons and put them in an array using forEach
btns.forEach(function(btn) {

    //  function to change counter when clicking a button
    btn.addEventListener('click', function(button) {
        //  variable to hold button that is selected, includes all the buttons
        const option = button.currentTarget.classList;
        
        //  logic to increase, decrease, or reset counter
        if (option.contains("decrease")) {
            count--;
        } else if (option.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        //  change color of counter value
        if (count < 0) {
            value.style.color = 'red';
        } else if (count > 0) {
            value.style.color = 'green';
        } else {
            value.style.color = '#222';
        }

        //  display new counter value in html
        value.textContent = count;
    })
});