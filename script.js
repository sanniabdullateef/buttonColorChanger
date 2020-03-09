// To get Acees to DOM element

const header = document.querySelector('header');
const blueColorButton = document.getElementById('color-button-blue');
const brownColorButton = document.getElementById('color-button-brown');
const greenColorButton = document.getElementById('color-button-green');
const noneColorButton = document.getElementById('color-button-none');
const addPostButton = document.getElementById('add-post');
const removePostButton = document.getElementById('remove-post');
const articleSection = document.querySelector('section')

// Using DOM for eventListner

blueColorButton.addEventListener('click',() => {
  header.classList.remove('brown-background', 'green-background');
  header.classList.add('blue-background', 'text-white');
});

brownColorButton.addEventListener('click',() => {
    header.classList.remove('blue-background', 'green-background');
    header.classList.add('brown-background', 'text-white');
  });

  greenColorButton.addEventListener('click',() => {
    header.classList.remove('brown-background', 'blue-background');
    header.classList.add('green-background', 'text-white');
  });

  noneColorButton.addEventListener('click',() => {
    header.classList.remove('brown-background', 'green-background', 'blue-background', 'text-white');
  });

  addPostButton.addEventListener('click', ()=>{
      const newPost = createNewPost();
      articleSection.appendChild(newPost);
  });

  removePostButton.addEventListener('click', ()=>{
    const articleCount = articleSection.childElementCount;
    if (articleCount > 1 ){
        articleSection.removeChild(articleSection.children[articleCount - 1])
    }
});

//   funtion page

function createNewPost(){
    let newArticle = document.createElement('article');
    let newHeding = document.createElement('h5');
    let newPara = document.createElement('p');

    newHeding.textContent = "Recent Blog post";
    newHeding.style["textAlign"] = "center"
    newPara.textContent = "One summer day in 1957, we headed to the courthouse for a marriage license. My husband-to-be, Steve, asked the clerk for a fishing license. She advised him a fishing license cost $1.50 and a marriage license cost $2.50. With some thought and a smile, he chose the marriage license, and so our life together, later filled with two children, began.";

    newArticle.appendChild(newHeding);
    newArticle.appendChild(newPara);

    newArticle.classList.add('list-group-item');
    return newArticle;
}

