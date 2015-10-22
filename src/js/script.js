$.ajax({url: "https://raw.githubusercontent.com/droidconpl/droidcon-2015-web/master/src/views/main-view.html", success: function(result){
    $("#loading-box").html(result);
}});
// $.ajax({url: "https://droidconpl.github.io/droidcon-2015-web/src/views/main-view.html", success: function(result){
//     $("#loading-box").html(result);
// }});

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

var sponsorsUrl = "https://raw.githubusercontent.com/droidconpl/droidcon-2015-web/master/model/sponsors.json";
var bracketDest;
// var sponsorsUrl = "https://droidconpl.github.io/droidcon-2015-web/model/sponsors.json";
$.getJSON(sponsorsUrl, function(data){
  $.each(data.sponsors, function(index, element){
    if( element.sponsorRange == "Bronze" ){
      bracketDest = "section#sponsors-section .brackets-bronze";
    }else if( element.sponsorRange == "Gold" ){
      bracketDest = "section#sponsors-section .brackets-gold";
    }
    $(bracketDest).append(
      "<div class=\"bracket \"><a href=\"" + element.sponsorUrl
      + "\" target=\"_blank\" title=\"" + element.sponsorTitle
      + "\"><img src=\"" + element.sponsorLogo
      + "\" alt=\"" + element.sponsorName + "\" /></a></div>");
  });
});

var speakersUrl = "https://droidconpl.github.io/droidcon-2015-web/model/speakers.json";
// var speakersUrl = "https://raw.githubusercontent.com/droidconpl/droidcon-2015-web/master/model/speakers.json";
$.getJSON(speakersUrl, function(data){
  $.each(data.people, function(index, element){
    $("section#speakers-secion-test .people-brackets").append(
      "<div class=\"round-bracket " + element.firstName + " " + element.lastName + "\"><a href=\"" + element.imageUrl
      + "\" target=\"_blank\" title=\"" + element.firstName
      + "\"><img src=\"" + element.imageUrl
      + "\" alt=\"" + element.firstName + "\" /></a>"
      + "<p id=\"speaker-subtitle\"><b>" + element.firstName + " " + element.lastName +"</b><br />"
      + element.websiteTitle + "</p>"
      + "</div>");
  });
});

$(document).ready(function(){
  $('#hamburger').click(function() {
    $('#menu-list').toggleClass('expanded');
  });

  $('#menu-list li').click(function() {
    $('#menu-list').toggleClass('expanded');
  });
});
