const planetContainer = document.getElementById('random-planets');
const planetImages = document.createElement("img");

const getRandomPlanet = () => {
  
  fetch("assets/data/planets.json")
  .then((response) => response.json())
  .then((data) => {
    let planets = data.map(image => [
      image.planet
    ]);
    
    const planetIndex = Math.floor(planets.length * Math.random());
    planetContainer.src = planets[planetIndex];
  });
};

setInterval(getRandomPlanet, 5000);