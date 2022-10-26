let myParagraph = document.querySelector("p");
let paragraphContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque doloribus minus illum repellat commodi culpa laboriosam nostrum laudantium? Consequatur ad enim modi magnam, esse deleniti voluptas laborum dignissimos. Sapiente, beatae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque doloribus minus illum repellat commodi culpa laboriosam nostrum laudantium? Consequatur ad enim modi magnam, esse deleniti voluptas laborum dignissimos. Sapiente, beatae?";
function addParagraph() {
  myParagraph.textContent = paragraphContent;
}
function deleteParagraph() {
  myParagraph.textContent = "";
}
function getReady() {
  myParagraph.textContent = "Press the button";
}
