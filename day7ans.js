
  //a..Get all the countries from Asia continent /region using Filter function

  var Request = new XMLHttpRequest();
  Request.open("GET","https://restcountries.com/v3.1/all",true)
  Request.send();
  Request.onload = function(){
      var data = Request.response;
      var Result = JSON.parse(data);
      var Asia_Reg = Result.filter((country) => country.region === "Asia");
      Asia_Reg.map((country) => console.log(country.name));
  }
  
  
   //b..! filter and map country name with population less than 2 laks
   var request1 = new XMLHttpRequest();
   request1.open("GET","https://restcountries.com/v3.1/all",true)
   request1.send();
   request1.onload = function(){
       var data1 = request1.response;
      var result1 = JSON.parse(data1);
      var res1 = result1.filter((x)=>x.population<200000)
      res1.map((ele)=>console.log(ele.name.common))
   }
  
   
   //c...Print the following details name, capital, flag using forEach function.
  
  var requestt = new XMLHttpRequest();
  requestt.open("GET","https://restcountries.com/v3.1/all",true);
  requestt.send();
  requestt.onload=function(){
      var resultt=JSON.parse(requestt.response);
     resultt.forEach(element => {
      console.log(element.name);
          console.log(element.capital);
          console.log(element.flag); 
  
     });
  }
  
  //d..! reduce total population
  var request2 = new XMLHttpRequest();
   request2.open("GET","https://restcountries.com/v3.1/all",true)
   request2.send();
   request2.onload = function(){
       var data2 = request2.response;
      var result2 = JSON.parse(data2);
      var res2 = result2.reduce((acc,cv)=>acc+cv.population,0)
      console.log(res2);
  }
  
  //e...Print the country which use US Dollars as currency.
  
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "https://restcountries.com/v3.1/all",true)
      xhr.send();
      xhr.onload = () => {
          let data = JSON.parse(xhr.response)
          let answer = data.filter((dummy) => (dummy.currencies !== undefined))
          console.log(answer.length)
          let currency = answer.filter((data) =>  {
          for (let key in data.currencies) {
              if(data.currencies[key].name === "United States dollar"){
            return data
            }
          }
          })
          console.log(currency)
      }