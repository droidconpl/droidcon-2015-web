// $.ajax({url: "https://raw.githubusercontent.com/droidconpl/droidcon-2015-web/master/src/views/main-view.html", success: function(result){
//     $("#loading-box").html(result);
// }});
$.ajax({url: "https://droidconpl.github.io/droidcon-2015-web/src/views/main-view.html", success: function(result){
    $("#loading-box").html(result);
}});

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
        "<div class=\"bracket " + element.partnerName + "\"><a href=\"" + element.partnerUrl
        + "\" target=\"_blank\" title=\"" + element.partnerName
        + "\"><img src=\"" + element.partnerLogo
        + "\" alt=\"" + element.partnerName + "\" /></a></div>");
    });
  });

  var mediasUrl = "https://droidconpl.github.io/droidcon-2015-web/model/medias.json";
  $.getJSON(mediasUrl, function(data){
    $.each(data.medias, function(index, element){
      $("section#media-section .brackets").append(
        "<div class=\"bracket " + element.mediaName + "\"><a href=\"" + element.mediaUrl
        + "\" target=\"_blank\" title=\"" + element.mediaName
        + "\"><img src=\"" + element.mediaLogo
        + "\" alt=\"" + element.mediaName + "\" /></a></div>");
    });
  });

  var sponsorsUrl = "https://droidconpl.github.io/droidcon-2015-web/model/sponsors.json";
  $.getJSON(sponsorsUrl, function(data){
    $.each(data.sponsors, function(index, element){
      $("section#sponsors-section .brackets").append(
        "<div class=\"bracket " + element.sponsorName + "\"><a href=\"" + element.sponsorUrl
        + "\" target=\"_blank\" title=\"" + element.sponsorName
        + "\"><img src=\"" + element.sponsorLogo
        + "\" alt=\"" + element.sponsorName + "\" /></a></div>");
    });
  });

});
