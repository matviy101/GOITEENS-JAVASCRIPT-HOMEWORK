// task 1

const categories = document.querySelectorAll('#categories .item');

console.log(`In the list ${categories.length} categories.`);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;

  console.log(`Category: ${title}`);
  console.log(`Number of items: ${itemsCount}`);
});


// task 2

const ingredients = ['Potatoes','Mushrooms','Garlic','Tomatoes','Greens','Seasonings'];
const list = document.querySelector('#ingredients');
const items = ingredients.map(i => {
  const li = document.createElement('li');
  li.textContent = i;
  return li;
});
list.append(...items);


//task 3

 const images = [ 
      { 
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
        alt: 'White and Black Long Fur Cat', 
      }, 
      { 
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish', 
      }, 
      { 
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
        alt: 'Group of Horses Running', 
      }
    ];

    const gallery = document.querySelector('#gallery');
    const galleryMarkup = images.map(img => `<li><img src="${img.url}" alt="${img.alt}"></li>`).join('');
    gallery.insertAdjacentHTML('beforeend', galleryMarkup);


    //task4

      let counterValue = 0;

    const valueEl = document.querySelector('#value');
    const decrementBtn = document.querySelector('button[data-action="decrement"]');
    const incrementBtn = document.querySelector('button[data-action="increment"]');

    const updateDisplay = () => {
      valueEl.textContent = counterValue;
    };

    const increment = () => {
      counterValue += 1;
      updateDisplay();
    };

    const decrement = () => {
      counterValue -= 1;
      updateDisplay();
    };

    incrementBtn.addEventListener('click', increment);
    decrementBtn.addEventListener('click', decrement);