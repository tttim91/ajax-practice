$(document).ready(function() {

    $("#submit").click(function() {
        var submission = $("#text").val();
        var url = "http://www.omdbapi.com/\?"
        url += submission;
        console.log(url);
        $.get(url, function(data) {
    	       console.log(data);
        });
    });
});
