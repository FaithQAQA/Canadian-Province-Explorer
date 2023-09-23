


function externalXMLHttpRequest() 
{
  const year = 2023;
const countryCode = "CA";
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`, true);
  xhr.send();

  xhr.onload = function () {
    const rawData = this.responseText;
    console.log('raw data from xmlhttprequest:', rawData);

    const processedData = JSON.parse(rawData);
    console.log('processed data from xmlhttprequest:', processedData);

   

    const globalHolidays = processedData.filter(holiday => holiday.global === true);
    console.log('global holidays:', globalHolidays);

    const holidayList = globalHolidays.map(holiday => `<strong>${holiday.name}</strong> - ${holiday.date} ${holiday.countryCode} ${holiday.types.join(', ')}`);
    
    document.getElementById('test').innerHTML = holidayList.join('<br>');
    const province1 = localStorage.getItem("Province");
    console.log(processedData[1],province1);

     var varnum;
console.log(province1,"test");

var varnum = [];

if (province1 === "Manitoba") {
  varnum.push(1);
  varnum.push(16);

}

if (province1 === "Prince Edward Island") {
  varnum.push(2);
  varnum.push(21);

}

if (province1 === "Nova Scotia") {
  varnum.push(3);
  varnum.push(19);
  varnum.push(29);

}

if(province1 === "British Columbia")
{
  varnum.push(4);
  varnum.push(16);

}
if(province1 === "Ontario")
{
  varnum.push(4);
  varnum.push(16);
  varnum.push(29);


}
if(province1 === "Saskatchewan")
{
  varnum.push(4);
  varnum.push(20);

}
if(province1 === "New Brunswick")
{
  varnum.push(18);
  varnum.push(29);


}
if (province1 === "Newfoundland and Labrador") {
  varnum.push(5);
  varnum.push(8);
  varnum.push(12);
  varnum.push(15);
  varnum.push(16);
  varnum.push(26);

}


if (province1 === "Nunavut") 
{
  varnum.push(16);
}

if (province1 === "Yukon") 
{
  varnum.push(17);
  varnum.push(22);

}

if (province1 === "Alberta") {
  varnum.push(7);
  varnum.push(4);
  varnum.push(17);
  varnum.push(29);

}
if (province1 === "Prince Edward Island") {
  varnum.push(7);
  varnum.push(4);
  varnum.push(29);

}

if (province1 === "Quebec") {
  varnum.push(9);
  varnum.push(13);

}
if (province1 === "Northwest Territories") {
  varnum.push(11);
  varnum.push(16);

}


// Loop through selected holiday numbers and display holidays
varnum.forEach(num => {
  const selectedHoliday = processedData[num];
  const holidayInfo = `<strong>${selectedHoliday.name}</strong> - ${selectedHoliday.date} ${selectedHoliday.countryCode} ${selectedHoliday.types.join(', ')}`;
  const holidayElement = document.createElement('p');
  holidayElement.innerHTML = holidayInfo;
  document.getElementById('test1').appendChild(holidayElement);
});

    
  
  };
}




externalXMLHttpRequest();







function externalFetchRequest() {
  fetch('https://www.boredapi.com/api/activity')
    .then((rawResponse) => {
      console.log('raw response is:', rawResponse);
      return rawResponse.json();
    })
    .then((refinedResponse) => {
      console.log('refined response:', refinedResponse);
      document.getElementById('question').innerHTML = `<strong>${refinedResponse.activity}</strong>`;
      document.getElementById('joke').innerHTML = `<strong>${refinedResponse.type}</strong>`;
      document.getElementById('participants').innerHTML=`<strong>${refinedResponse.participants}</strong>`;
      document.getElementById('price').innerHTML=`<strong>${refinedResponse.price}</strong>`;
      const linkElement = document.getElementById('link');
      linkElement.innerHTML = `<a href="${refinedResponse.link}" target="_blank">${refinedResponse.link}</a>`;
      document.getElementById('key').innerHTML=`<strong>${refinedResponse.key}</strong>`;
      document.getElementById('accessibility').innerHTML=`<strong>${refinedResponse.accessibility}</strong>`;
   


    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

  
  const city = localStorage.getItem("city");

  const xhr = new XMLHttpRequest();

  const filePath = "../Json/cities.json";

  xhr.open('GET', filePath);
  xhr.send();

  xhr.onload = function() 
  {
    if (xhr.status === 200) {
      const rawData = xhr.responseText;
      const cityData = JSON.parse(rawData);
    externalFetchRequest();
      // Get the data for the selected city
      const data = cityData[city];
      const province = localStorage.getItem("Province");
      const cityDisplay=  localStorage.getItem("city");

      if (data) {
        document.getElementById('ActivitiesProvName').innerHTML= "Activities in "+ cityDisplay+" , "+province;
        document.getElementById('name').innerHTML = `<strong>${data.name}</strong>`;
        document.getElementById('latitude').textContent = data.latitude;
        document.getElementById('longitude').textContent = data.longitude;
        document.getElementById('description').textContent = data.description;

        const collegesList = document.getElementById('colleges');
        if (data.topThreeCollegesUniversities === "N/A") 
        {
          const listItem = document.createElement('li');
          listItem.textContent = data.topThreeCollegesUniversities;
          collegesList.appendChild(listItem);
        } 
        else 
        {
          data.topThreeCollegesUniversities.forEach(college => {
            const listItem = document.createElement('li');
            listItem.textContent = college;
            collegesList.appendChild(listItem);
          });
        }
      }
    } else {
      console.error("Failed to retrieve city data.");
    }
  };


  