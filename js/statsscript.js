
  $.getJSON("https://cors-anywhere.herokuapp.com/https://data.ontario.ca/api/3/action/datastore_search?resource_id=ed270bb8-340b-41f9-a7c6-e8ef587e6d11", function(data) {
      console.log(data);



      //stores the stats
      var laststats = data.result.records.length;
      //var statstot =  data.result.laststats.Deaths;
      //var lastitem = laststats[laststats.length -1];
      //console.log("The last item is " + lastitem);
      console.log("The last item is " + laststats);


      //grabs deaths
      var statsdead = data.result.records[data.result.records.length-1].Deaths;
      console.log(statsdead);
      //var statsdead = data.result.records[72].Deaths;
      //console.log(statsdead);

      //grabs resolved cases
      var statsreso = data.result.records[data.result.records.length-1].Resolved;
      //var statsreso = data.result.records[72].Resolved;

      //grabs total cases
      var statstotal = data.result.records[data.result.records.length-1]["Total Cases"];
      //var statstotal = data.result.records[72]["Total Cases"];

      var lastupdated = data.result.records[data.result.records.length-1]["Reported Date"];


      //attaches the stats to the appropriate section in HTML
      $('.stats-dead').append(statsdead);
      $('.stats-reso').append(statsreso);
      $('.stats-con').append(statstotal);
      $('.lastupdated').append(lastupdated);


  });
