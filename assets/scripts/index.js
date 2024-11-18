// Exercises on DOM Manipulation Part 1
// 1. What is the name of the recipe?
let temp = document.getElementById("recipe-name");
console.log(`#1: ${temp.innerText}`);
// #1: Frozen Cheescake

// 2. What HTML tag is used to display the Recipe name?
console.log(`#2: ${temp.tagName}`);
// #2: H1

// 3. What is the font size of the paragraph tag with the class "description".
temp = document.querySelector(".description");
console.log(
  `#3: ${window.getComputedStyle(temp).getPropertyValue("font-size")}`
);
// #3: 16px

// 4. What is the value of the alt atrribute on the image?
temp = document.querySelector(".image-container img");
console.log(`#4: ${temp.getAttribute("alt")}`);
// #4: Slice of Frozen Cheescake

/*
5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:
{
  url: string
  height: number,
  width: number,
}
*/
const myObj = { url: temp.src, height: temp.height, width: temp.width };
console.log(myObj);
// #5: {url: 'http://127.0.0.1:5500/assets/frozen-cheesecake-slice.jpg', height: 423, width: 425}

// 6. How many ingredients has the paste?
temp = document.querySelector(".ingredients-list-paste");
console.log(`#6: ${temp.children.length}`);
// #6: 5

// 7. Which is the forth element in the list containing the ingredients for the paste?
console.log(`#7: ${temp.children[3].innerText}`);
// #7: 3dl vispgrädde

/*
8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:
{
  order: number;
  text: instruction;
}
*/
const myArr = [];
temp = document.querySelector(".instructions-list");
for (let index = 0; index < temp.children.length; index++) {
  const element = temp.children[index];
  myArr.push({ order: index + 1, text: element.innerText });
}
console.log(`#8: ${JSON.stringify(myArr, null, 2)}`);
