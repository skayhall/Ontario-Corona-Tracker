

$.getJSON("https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=ca&category=health&topic=coronavirus&apiKey=9c98383e10434c29803670e19f812233", function(data) {
console.log(data);



    var newsarticlesource = data.articles[data.articles.length-1].source.name;
    //console.log("The news article source is " + newsarticlesource);

    var newsarticletitle = data.articles[data.articles.length-1].title;
    //console.log("The news article title is " + newsarticletitle);

    var newsarticledesc = data.articles[data.articles.length-1].description;
    //console.log("The news article is " + newsarticledesc);

    //var articleimage = data.articles[data.articles.length-1].urlToImage;
    //console.log('The news article image is ' + articleimage );


    //---------------------------------------------------------


    //variable that holds the news articles
    var newsarticles = data.articles;


    var output = "";


    //for each article in the array, look through and display the title, content and url for 4 of them
    for (var i = 0; i < 4; i++) {
        console.log('The 4 news articles are: ' + newsarticles[i].title + newsarticles[i].description + newsarticles[i].url + newsarticles[i].source.name);
        
        output += '<div class="articlecon">' + '<div class="articlecon-c">' + '<b>' + newsarticles[i].title + '</b>' + '<br>' + newsarticles[i].description + '<br><br>' + '<a href="' + newsarticles[i].url + '" target="new">Read More</a>' + '</div>' + '</div>';

    }

    //display the results in the artles section on the page
    document.getElementById('articles').innerHTML = output;


    //$('.articleimage').attr('src', articleimage);
    //$('.article-source').append(newsarticlesource);
    //$('.article-title').append(newsarticletitle);
    //$('.article-desc').append(newsarticledesc);
    //$('.newsarticles').append(newsarticles);

    //$('.article-image').append(articleimage);





});




