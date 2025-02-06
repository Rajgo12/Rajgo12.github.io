const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const copyBtn = document.getElementById('copyBtn');
const shareBtn = document.getElementById('shareBtn');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

const cocktailDetails = document.getElementById('cocktailDetails');
const cocktailName = document.getElementById('cocktailName');
const cocktailGlass = document.getElementById('cocktailGlass');
const cocktailInstructions = document.getElementById('cocktailInstructions');
const cocktailIngredients = document.getElementById('cocktailIngredients');

function fetchCocktail() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {
      const cocktail = data.drinks[0];
      cocktailName.textContent = cocktail.strDrink;
      cocktailGlass.textContent = cocktail.strGlass;
      cocktailInstructions.textContent = cocktail.strInstructions;

      cocktailIngredients.innerHTML = '';
      for (let i = 1; i <= 15; i++) {
        if (cocktail[`strIngredient${i}`]) {
          const li = document.createElement('li');
          li.textContent = `${cocktail[`strIngredient${i}`]} - ${cocktail[`strMeasure${i}`]}`;
          cocktailIngredients.appendChild(li);
        }
      }

      cocktailDetails.style.display = 'block';
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function fetchCocktailByName() {
  const searchQuery = searchInput.value;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const cocktail = data.drinks ? data.drinks[0] : null;

      if (cocktail) {
        cocktailName.textContent = cocktail.strDrink;
        cocktailGlass.textContent = cocktail.strGlass;
        cocktailInstructions.textContent = cocktail.strInstructions;

        cocktailIngredients.innerHTML = '';
        for (let i = 1; i <= 15; i++) {
          if (cocktail[`strIngredient${i}`]) {
            const li = document.createElement('li');
            li.textContent = `${cocktail[`strIngredient${i}`]} - ${cocktail[`strMeasure${i}`]}`;
            cocktailIngredients.appendChild(li);
          }
        }

        cocktailDetails.style.display = 'block';
      } else {
        cocktailDetails.style.display = 'none';
        alert('No cocktail found with that name.');
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

document.getElementById('newCocktailBtn').addEventListener('click', fetchCocktail);
searchBtn.addEventListener('click', fetchCocktailByName);
