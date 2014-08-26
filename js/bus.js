$.getJSON('js/busstops.json', function(busstops){
    $('#busstopplist').empty();

    $.each(busstops, function(i,busstop){
        $('#busstoplist').append(generateLStopLink(busstop));
});

    $('#busstoplist').listview('refresh');
});

function generateLStopLink(busstop){

    return '<li><a href="javascript:void(0)'
        + '"onclick="goToStopDetailPage(\''
        + busstop.stop_name
        + '\',\''        
        +busstop.station_decriptive_name +'\')">'
        + busstop.stop_name
        + '</a></li>';
}
function goToStopDetailPage(busstopName){
    //create the page html template
var busstopPage = $("<div data-role= 'page' data-url=station><div data-role='header'><h1>"
        + busstopName +"</h1></div><div data-role='content'></div><div data-role='footer'><h4>"
        + busstopName + "</h4></div></div>");
   
    //append the new page to the page container
    busstopPage.appendTo( $.mobile.pageContainer );
    
    //go to the newly created page
    $.mobile.changePage(busstopPage);
}