var inputField = document.querySelector('#"docsearch-input');
var searchForm = document.querySelector('#search-form');
// парсим только элементы, находящиеся в body, но не внутри формы
var elems = [].slice
  .call(document.querySelectorAll('body *'))
  .filter(el => !el.closest('#search-form') && el.tagName !== 'SCRIPT');

function search(event) {
  event.preventDefault();
  var searchString = inputField.value;
  var matches = 0;

  elems.forEach((elem, index) => {
    if (elem.innerText.toLowerCase().indexOf(searchString.toLowerCase()) >= 0) {
      matches++;
      elem.style.color = 'red';
    } else {
      elem.style.color = 'initial';
    }
  });

  alert(`Слово ${searchString} найдено ${matches} раз`);
}

document.querySelector('button[type="submit"]').addEventListener('click', search);
