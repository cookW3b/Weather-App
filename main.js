const api = '38bbed77e4c03f08310b7604b869df2f';

const btn = document.getElementById('city__btn');
const inpt = document.querySelector('.city');
const spanTemp = document.getElementById('temp__num');
const spanCity = document.getElementById('temp__city');
const tempBlock = document.querySelector('.temp');
const imgTemp = document.getElementById('temp__icon');
const tempCountry = document.getElementById('temp__country');

let inptVal;
let url;

btn.addEventListener('click', (e) => {
	inptVal = inpt.value;

	url = `https://api.openweathermap.org/data/2.5/weather?q=${inptVal}&appid=${api}`;
	fetch(url)
		.then(response => response.json())
		.then(json => {
			inpt.classList.remove('error');
			
			spanTemp.textContent = Math.floor(json.main.temp - 273.15);
			spanCity.textContent = json.name;
			// console.log(json.weather[0].description);
			let iconId = json.weather[0].icon;

			imgTemp.src = `img/static/` + (iconId + '.svg');

			tempBlock.style.display = 'block';

			tempCountry.textContent = json.sys.country;

		})
		.catch(() => {
			inpt.classList.add('error');
			inpt.value = '';
			inpt.placeholder = "Enter a valid city";
		})

})



