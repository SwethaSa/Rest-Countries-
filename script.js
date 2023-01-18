fetch("https://restcountries.com/v2/all")
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      const { capital, region, latlng, name, flag, alpha2Code } = country;
      const card = `
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">${name}</h3>
          </div>
          <div class="card-body">
          <img src="${flag}" class="card-img-top">
            <p>Capital: ${capital}</p>
            <p>Region: ${region}</p>
            <p>Latitude and Longitude: ${latlng[0]}, ${latlng[1]}</p>
            <p>Country Code: ${alpha2Code}</p>
          </div>
          
          <button class="btn btn-primary" data-capital="${capital}">Click for Weather</button>

        </div>
      </div>
      `;
      document.getElementById("card-container").insertAdjacentHTML("beforeend", card);
      const btn = document.querySelector(".card button");
       btn.addEventListener("click", function (event) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&APPID=b60c0ef4a95f22c6b59d38d7bbb3235f`)
            .then(response => response.json())
            .then(data => {
              console.log(data);
            });
        });
    });
  });

    