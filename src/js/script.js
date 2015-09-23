$(document).ready(function(){

  $('#hamburger').click(function() {
    $('#menu-list').toggleClass('expanded');
  });

  $('#menu-list li').click(function() {
    $('#menu-list').toggleClass('expanded');
  });

  var partnersUrl = "https://droidconpl.github.io/droidcon-2015-web/model/partners.json";
  $.getJSON(partnersUrl, function(data){
    $.each(data.partners, function(index, element){
      $("section#partner-section .brackets").append(
        "<div class=\"bracket\"><a href=\"" + element.partnerUrl
        + "\" target=\"_blank\"><img src=\"" + element.partnerLogo
        + "\" alt=\"" + element.partnerName + "\" /></a></div>");
    }).error(function(data) {
    console.log("Error!");
    });
    
    $.each(data.medias, function(index, element){
      $("section#media-section .brackets").append(
        "<div class=\"bracket\"><a href=\"" + element.partnerUrl
        + "\" target=\"_blank\"><img src=\"" + element.partnerLogo
        + "\" alt=\"" + element.partnerName + "\" /></a></div>");
    }).error(function(data) {
    console.log("Error!");
    });
  });

});
