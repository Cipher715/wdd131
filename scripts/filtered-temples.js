const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const header = document.querySelector('header');
const cards = document.querySelector('#temples');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    header.classList.toggle('open');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Sapporo Japan",
		location: "Sapporo, Japan",
		dedicated: "2016, August, 21",
		area: 48480,
		imageUrl:
		"images/sapporo-temple.webp"
	},
	{
		templeName: "Neiafu Tonga",
		location: "Neiafu Vavau, Tonga",
		dedicated: "2021, September, 11",
		area: 17000,
		imageUrl:
		"images/neiafu-tonga.webp"
	},
	{
		templeName: "Memthis Tennessee",
		location: "Bartlett, Tennessee",
		dedicated: "2000, April, 23",
		area: 10890,
		imageUrl:
		"images/memphis-tennessee.webp"
	},
];

displayTemples(temples);

const oldTemples = document.querySelector('#old-temples');
const newTemples = document.querySelector('#new-temples');
const largeTemples = document.querySelector('#large-temples');
const smallTemples = document.querySelector('#small-temples');
const allTemples = document.querySelector('#all-temples');

oldTemples.addEventListener("click", () => {
	displayTemples(temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) <= 1900));
});

newTemples.addEventListener("click", () => {
	displayTemples(temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) >= 2000));
});

largeTemples.addEventListener("click", () => {
	displayTemples(temples.filter(temple => temple.area >= 90000));
})

smallTemples.addEventListener("click", () => {
	displayTemples(temples.filter(temple => temple.area <= 10000));
})

allTemples.addEventListener("click",() => displayTemples(temples));

function displayTemples(temples){
	cards.innerHTML = "";
	console.log(temples)
	temples.forEach((temple) => {
		let card = document.createElement('section');
		let templeName = document.createElement('h3');
		let info = document.createElement('div');
		let location = document.createElement('p');
		let dedicated = document.createElement('p');
		let size = document.createElement('p');
		let image = document.createElement('img');

		templeName.textContent = `${temple.templeName}`;
		location.innerHTML = `<b>Location: </b>${temple.location}`;
		dedicated.innerHTML = `<b>Dedicated: </b>${temple.dedicated}`;
		size.innerHTML = `<b>Size: </b>${temple.area}`;
		image.setAttribute('src', temple.imageUrl);
		image.setAttribute('alt', `Image of ${temple.templeName}`);
        image.setAttribute('loading', 'lazy');

		info.appendChild(location);
		info.appendChild(dedicated);
		info.appendChild(size);
		card.appendChild(templeName);
		card.appendChild(info);
		card.appendChild(image);
		cards.appendChild(card);
	})
}
