var inputCountry =document.getElementById('inputCountry');
var btnFind =document.getElementById('btnFind');

getInfo('cairo')

btnFind.addEventListener('click',function(){
    var country = inputCountry.value;
    console.log(country);
    getInfo(country)
})

async function getInfo(countryName){
    var result = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=55435e1883fc454aab9191158240701&q=${countryName}&days=7`);
    var data = await result.json();
    console.log(data.current.condition.text);
    display(data);
}

function display(data){
    var box=``;
    box+=`
    
    <div class="col-xl-4 col-lg-12 col-md-12 col1">
                  <div class="title d-flex  justify-content-center align-content-center px-3 pt-2">
                    <p>${ new Date(`${data.forecast.forecastday[0].date}`).toDateString()}</p>
                  </div>
                  <div class="info px-3 me-3 ">
                    <p class="country">${data.location.name}</p>
                    <p class="d-flex align-items-end">
                       <span>${data.current.temp_c}°c</span>
                        <img src='https:${data.current.condition.icon}' alt="" class="ms-4" >
                    </p>
                    <p class="status">${data.current.condition.text}</p>
                    <div class="icons d-flex align-items-center pb-2">
                      <div class="d-flex align-items-start pe-4"><i class="fa-solid fa-umbrella pe-1 fs-5"></i> <p>20%</p></div>
                      <div class="d-flex align-items-start pe-4"><i class="fa-solid fa-wind pe-1 fs-5"></i> <p>18km/h</p></div>
                      <div class="d-flex align-items-start pe-4"><i class="fa-solid fa-gauge pe-1 fs-5"></i> <p>East</p></div>
                    </div>
                  </div>
                </div>
              <div class="col-xl-4 col-lg-12 col-md-12 text-center col2">
                  <div class="title  py-1">
                    <p>${ new Date(`${data.forecast.forecastday[1].date}`).toDateString()}</p>
                  </div>
                  <img src="https:${data.forecast.forecastday[1].day.condition.icon}" width="70px" height="70px" class="mt-4 mb-4">
                  <p class="deg">${data.forecast.forecastday[1].day.maxtemp_c}°c</p>
                  <p class="deg2">${data.forecast.forecastday[1].day.mintemp_c}°c</p>
                  <p class="status">${data.forecast.forecastday[1].day.condition.text}</p>
                  
                </div>
              
                <div class="col-xl-4 col-lg-12 col-md-12 text-center col3">
                  <div class="title  py-1">
                    <p>${ new Date(`${data.forecast.forecastday[2].date}`).toDateString()}</p>
                  </div>
                  <img src="https:${data.forecast.forecastday[2].day.condition.icon}" width="70px" height="70px" class="mt-4 mb-4">
                  <p class="deg">${data.forecast.forecastday[2].day.maxtemp_c}°c</p>
                  <p class="deg2">${data.forecast.forecastday[2].day.mintemp_c}°c</p>
                  <p class="status">${data.forecast.forecastday[2].day.condition.text}</p>
                  
                </div> 
    
    `

    document.getElementById('body').innerHTML=box;
}


// async function getIpInfo (){
//     const ip = '197.48.76.251';
//     const accessKey = 'efb251e5-073b-4e9f-aee6-1b64e3a47efa';
//     const url = 'https://apiip.net/api/check?ip='+ ip +'&accessKey='+ accessKey; 
//     const response = await fetch(url);  
//     const result = await response.json();
    
//     return result.city;
//   };
//  var ip = getIpInfo();
//  getInfo(ip)