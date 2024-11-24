
function calculateWindChill(t, v){
    return 13.12+(0.6215*t)-(11.37*(v**0.16))+(0.3965*t*(v**0.16));
}

const temp = document.querySelector("#temp");
const wind = document.querySelector("#wind");
const windChill = document.querySelector("#wind-chill");

const t = parseFloat(temp.textContent);
const v = parseFloat(wind.textContent);

if(t <= 10 && v >= 4.8){
    const result = calculateWindChill(t, v);
    windChill.innerHTML = `${result.toFixed(1)}&deg;C`;
}
else {
    windChill.textContent = "N/A"
}
