const url =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

let app = document.querySelector('#results');

const addDrinksToDOM = (drinks) => {
  let element = document.createElement('div');
  let card = document.createElement('div');
  let img = document.createElement('img');
  let beverage = document.createElement('p');

  img.alt = 'Image of non-alcoholic drinks';
  img.src = drinks.strDrinkThumb;
  beverage.textContent = drinks.strDrink;
  card.onmouseenter = function() {
    card.style.backgroundColor = 'purple';
    beverage.style.color = 'white';
  };
  card.onmouseleave = function() {
    card.style.backgroundColor = '#f5f5f5';
    beverage.style.color = 'black';
  };

  card.append(img);
  card.append(beverage);
  element.append(card);

  element.style.display = 'inline-grid';
  card.style.margin = '4px';
  card.style.height = '280px';
  card.style.width = '250px';
  card.style.backgroundColor = '#f5f5f5';
  card.style.borderRadius = '0.2rem';
  img.style.height = '200px';
  img.style.width = '200px';
  img.style.marginTop = '10px';
  img.style.borderRadius = '0.2rem';
  beverage.style.fontWeight = 'bold';

  app.append(element);
};

const fetchData = (url) => {
  fetch(url)
    .then(response => response.json())
    .then((data) => {

      console.log(data);
      data.drinks.forEach((drinks) => {
        console.log(drinks.strDrink);
        addDrinksToDOM(drinks);
      });
    })
    .catch((error) => {
      console.error(error);

      let element = document.createElement('div');
      element.textContent = "An error occurred.";
      app.append(element);
    })
    .finally(() => {
      let loader = document.querySelector('#loading');
      app.removeChild(loader);
    });

};

fetchData(url);