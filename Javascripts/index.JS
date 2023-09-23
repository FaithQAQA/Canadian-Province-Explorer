function handleFlagClick(province) {
  // Handle the click event for the province flag
  // You can perform any desired action here based on the clicked province
  localStorage.setItem("Province", province);

  // Perform an XMLHttpRequest to fetch data for the selected province
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
      document.getElementById('cities').innerHTML = cities.map(city => `<li><button>${city}</button></li>`).join('');
  };

  // Redirect to the infoPage.html page
  window.location.href = "infoPage.html";
}

document.addEventListener('DOMContentLoaded', function() {
  const randomProvinceButton = document.getElementById('randomProvinceButton');

  if (randomProvinceButton) {
      randomProvinceButton.addEventListener('click', function() {
          // Your random province selection and other logic here
          const provinces = [
              "Alberta",
              "British Columbia",
              "Manitoba",
              "New Brunswick",
              "Newfoundland and Labrador",
              "Nova Scotia",
              "Ontario",
              "Prince Edward Island",
              "Quebec",
              "Saskatchewan"
          ];

          const randomIndex = Math.floor(Math.random() * provinces.length);
          const randomProvince = provinces[randomIndex];
          console.log("Randomly selected province:", randomProvince);
          // Call your handleFlagClick function with the randomProvince here
           handleFlagClick(randomProvince);
      });
  }
});
// Your existing code for getRandomProvince and handleFlagClick remains the same
