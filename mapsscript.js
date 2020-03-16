    // Function to be executed 
    function initMap() {
        var humber = {
            lat: 43.7291338,
            lng: -79.6087013
        };

        var cobourg = {
            lat: 43.95977,
            lng: -78.16515
        };


        var ottawa = {
            lat: 45.424721,
            lng: -75.695000
        };


        var ajax = {
            lat: 43.850857,
            lng: -79.020370
        };



        var map = new google.maps.Map(document.getElementById('map'), {

            zoom: 7,
            center: humber,


            styles: [
                {
                stylers: [
                    { hue: "#e9e9e9" },
                    { saturation: -90 }
                ]
                }, 
                
                
                /*
                {
                    featureType: "all",
                    elementType: "geometry",
                    stylers: [
                        {
                            "color": "#202c3e"
                        }
                    ]
                },
                */
                
                
                {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                    { lightness: 90 },
                    { visibility: "simplified" }
                ]
                }, {
                featureType: "transit",
                elementType: "geometry",
                stylers: [
                    { hue: "#346545" },
                    { saturation: +80 }
                ]
                }, {
                featureType: "transit",
                elementType: "labels",
                stylers: [
                    { hue: "#ffCA00" },
                    { saturation: 80 }
                ]
                }, {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
                }, {
                featureType: "poi.park",
                elementType: "labels",
                stylers: [
                    { visibility: "on" }
                ]
                }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    { hue: "#1B64AE" },
                    {saturation:70}
                ]
                }, {
                featureType: "road",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
                }
            ]
        

        });


        var torontoContent = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Toronto</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Numerous Toronto cases have been confirmed.</p>' +
        '</div>'+
        '</div>';


        var infowindow = new google.maps.InfoWindow({
            content: torontoContent
          });


        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icon = 'virus.png';


        var marker = new google.maps.Marker({
            position: humber,
            map: map,
            title: 'Toronto Case',
            icon: icon,
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
          });


        var marker = new google.maps.Marker({
            position:cobourg,
            map:map,
            title: 'Cobourg Case',
            icon: icon
        }
        );

        var marker = new google.maps.Marker({
            position:ottawa,
            map:map,
            title: 'Ottawa Case',
            icon: icon
        }
        );

        var marker = new google.maps.Marker({
            position:ajax,
            map:map,
            title: 'Ajax Case',
            icon: icon
        }
        );

    }


window.onload=initMap;
      