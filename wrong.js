// Exercises in DOM manipulation Part 2
// 1. The logo text of the site has the wrong color. Change it to the correct one.
let temp = document.querySelector(".logo-text");
temp.style.color = "#384241";

// 2. The alignment of the elements inside the header element are wrong. Change it to the correct one. Hint, check the flex properties for the correct alignment. Here is a link that might help: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
temp = document.querySelector("body header");
temp.style.justifyContent = "initial";

// 3. The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
temp.style.borderColor = "lightgray";

// 4. The recipe name is wrong, change it to the correct one.
temp = document.getElementById("recipe-name");
temp.innerText = "Frozen Cheescake";

// 5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.
temp = document.querySelector(".time-container span");
temp.classList.add("material-icons");

// 6. The estimated time of the recipe is also incorrect. Change it to the correct time estimation.
temp.nextElementSibling.innerText = "60+ min";

// 7. The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder.
temp = document.querySelector(".image-container img");
temp.src = "assets/frozen-cheesecake-slice.jpg";

// 8. The background color of the ingredients list container is wrong. Fix it.
temp = document.querySelector(".ingredients-container");
temp.style.backgroundColor = "#f9f9f9";

// 9. The ingredients are divided in to two parts, one for the bottom and one for the paste. In the list of the ingredients to the bottom, there is a text instead of two list items. Remove the text and add those two list items.
temp = document.querySelector(".ingredients-list-bottom p");
temp.remove();

temp = document.querySelector(".ingredients-list-bottom");
temp.innerHTML = `<li>15st digistivetex</li><li>Lite smör</li>`;

// 10. The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.
temp = document.querySelector(".ingredients-list-paste");
temp.children[2].innerText = "3tsk vaniljsocker";

// 11. There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.
temp.innerHTML += `<li>400g naturell philadelphiaost</li>`;

// 12. The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.
temp = document.querySelector(".instructions-container h3");
temp.style.boxShadow = "none";

// 13. Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.
temp = document.querySelector(".instructions-list");
temp.children[1].innerText =
  "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
temp.children[8].innerText = "Ställ in i frysen över natten.";
