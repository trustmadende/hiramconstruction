// nav dropdown
$(document).ready(function() {

    $("<select />").appendTo(".navigation nav div");
    
    $("<option />", {
        "selected": "selected",
        "value"   : "",
        "text"    : "Go to..."

    }).appendTo("nav select");
    
    $(".navigation nav li a").each(function() {
      var el = $(this);
      $("<option />", {
        "value"  : el.attr("href"),
        "text"   : el.text()
      }).appendTo("nav select");
    });
  });
