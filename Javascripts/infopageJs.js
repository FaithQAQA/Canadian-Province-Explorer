
const province = localStorage.getItem("Province");
console.log(province);

const xhr = new XMLHttpRequest();
xhr.open('GET', '../Json/provinces.json');
xhr.send();

xhr.onload = function () {
  const rawData = this.responseText;
  const provincesData = JSON.parse(rawData);
  const provinceData = provincesData[province];

  // Access the individual fields
  const name = provinceData.name;
  const flag = provinceData.flag;
  const description = provinceData.description;
  const cities = provinceData.cities;

  // Do something with the data (e.g., update the HTML)
  document.getElementById('name').innerHTML = `<strong>${name}</strong>`;
  document.getElementById('flag').src = flag;
  document.getElementById('description').innerHTML = description;
  document.getElementById('cities').innerHTML = cities.map(city => `<li><button onclick="handleCityClick('${city}')">${city}</button></li>`).join('');
};

function handleCityClick(city) {
  // Add your logic here to handle the city button click
  window.location.href = "cityInfo.html";
  console.log(`City clicked: ${city}`);
  localStorage.setItem("city", city);

}
