// Fetch data from the JSON file and display recommendations
fetch('travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => displayRecommendations(data))
  .catch(error => console.error('Error fetching data:', error));

function displayRecommendations(data) {
  const recommendationsContainer = document.getElementById('recommendations');

  data.countries.forEach(country => {
    country.cities.forEach(city => {
      const cityDiv = document.createElement('div');
      cityDiv.className = 'recommendation';

      const cityImage = document.createElement('img');
      cityImage.src = city.imageUrl;
      cityImage.alt = city.name;

      const cityName = document.createElement('h3');
      cityName.textContent = city.name;

      const cityDescription = document.createElement('p');
      cityDescription.textContent = city.description;

      cityDiv.appendChild(cityImage);
      cityDiv.appendChild(cityName);
      cityDiv.appendChild(cityDescription);

      recommendationsContainer.appendChild(cityDiv);
    });
  });

  data.temples.forEach(temple => {
    const templeDiv = document.createElement('div');
    templeDiv.className = 'recommendation';

    const templeImage = document.createElement('img');
    templeImage.src = temple.imageUrl;
    templeImage.alt = temple.name;

    const templeName = document.createElement('h3');
    templeName.textContent = temple.name;

    const templeDescription = document.createElement('p');
    templeDescription.textContent = temple.description;

    templeDiv.appendChild(templeImage);
    templeDiv.appendChild(templeName);
    templeDiv.appendChild(templeDescription);

    recommendationsContainer.appendChild(templeDiv);
  });

  data.beaches.forEach(beach => {
    const beachDiv = document.createElement('div');
    beachDiv.className = 'recommendation';

    const beachImage = document.createElement('img');
    beachImage.src = beach.imageUrl;
    beachImage.alt = beach.name;

    const beachName = document.createElement('h3');
    beachName.textContent = beach.name;

    const beachDescription = document.createElement('p');
    beachDescription.textContent = beach.description;

    beachDiv.appendChild(beachImage);
    beachDiv.appendChild(beachName);
    beachDiv.appendChild(beachDescription);

    recommendationsContainer.appendChild(beachDiv);
  });
}

function searchFunction() {
  const keyword = document.getElementById('search').value.toLowerCase();
  const recommendations = document.querySelectorAll('.recommendation');

  recommendations.forEach(recommendation => {
    const name = recommendation.querySelector('h3').textContent.toLowerCase();
    const description = recommendation.querySelector('p').textContent.toLowerCase();
    
    if (name.includes(keyword) || description.includes(keyword)) {
      recommendation.style.display = 'block';
    } else {
      recommendation.style.display = 'none';
    }
  });
}

function resetFunction() {
  document.getElementById('search').value = '';
  const recommendations = document.querySelectorAll('.recommendation');

  recommendations.forEach(recommendation => {
    recommendation.style.display = 'block';
  });
}
