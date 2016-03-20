$(document).ready(function() {
  $("#submit-button").click(function() {
    var searchInput = $("#search-input").val();
    $("#wiki-output").html("");
    $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&list=search&srsearch="+searchInput+"&utf8&callback=?", function(data) {
      console.log(data);
      for (var i=0; i<data.query.search.length; i++) {
        $("#wiki-output").html($("#wiki-output").html()+
          "<p><a href='https://en.wikipedia.org/wiki/"+encodeURI(data.query.search[i].title)+"' target='_blank'><strong>"+data.query.search[i].title+"</strong><br><br>"+
          data.query.search[i].snippet+"</a></p>"
        );
      }
    });
  });
});