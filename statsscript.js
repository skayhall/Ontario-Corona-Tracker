/*
var data = $.ajax({
    type: "GET",
    url: "https://api.smartable.ai/coronavirus/stats/CA-ON",

    // Request headers
    beforeSend: function(xhrObj) {
        xhrObj.setRequestHeader("Subscription-Key", "fa4cb3e91fa04405b764206734f8bfa6");
        },
    })
.done(function (data) {
    alert("success");
})
.fail(function () {
    alert("error");
});

console.log(data);

*/




$.getJSON("https://cors-anywhere.herokuapp.com/https://data.ontario.ca/api/3/action/datastore_search?resource_id=ed270bb8-340b-41f9-a7c6-e8ef587e6d11", function(data) {
    console.log(data);

    //var weathericon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    //console.log(weathericon);

    var statscon = data.result.records[72].Deaths;
    console.log(statscon);

    var statsreso = data.result.records[72].Resolved;

    var statstotal = data.result.records[72]["Total Cases"];

    //var weathername = data.weather[0].description;

    //var locationname = data.name;

    //$('.icon').attr('src', weathericon);
    $('.statsconfirmed').append(statscon);
    $('.statsresolved').append(statsreso);
    $('.statstotal').append(statstotal);

    //$('.location').append(locationname);

});


/*

var data = {
    resource_id: 'ed270bb8-340b-41f9-a7c6-e8ef587e6d11', // the resource id
    limit: 5 // get 5 results
    //q: 'jones' // query for 'jones'
  };
  $.ajax({
    url: 'https://data.ontario.ca/api/3/action/datastore_search',
    data: data,
    dataType: 'jsonp',
    success: function(data) {
      alert('Total results found: ' + data.result.total)
    }
  });

  console.log(data);

*/