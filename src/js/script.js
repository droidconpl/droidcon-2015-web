// var srcUrl = "https://raw.githubusercontent.com/droidconpl/droidcon-2015-web/master/";
var srcUrl = "https://droidconpl.github.io/droidcon-2015-web/";

$.ajax({url: srcUrl + "src/views/main-view.html", success: function(result){
    $("#loading-box").html(result);
}});
$.ajax({url: srcUrl + "src/views/speaker-modals.html", success: function(result){
    $("#speaker-modals").html(result);
}});

var partnersUrl = srcUrl + "model/partners.json";
$.getJSON(partnersUrl, function(data){
  $.each(data.partners, function(index, element){
    $("section#partner-section .brackets").append(
      "<div class=\"bracket " + element.partnerName + "\"><a href=\"" + element.partnerUrl
      + "\" target=\"_blank\" title=\"" + element.partnerName
      + "\"><img src=\"" + element.partnerLogo
      + "\" alt=\"" + element.partnerName + "\" /></a></div>");
  });
});

var mediasUrl = srcUrl + "model/medias.json";
$.getJSON(mediasUrl, function(data){
  $.each(data.medias, function(index, element){
    $("section#media-section .brackets").append(
      "<div class=\"bracket " + element.mediaName + "\"><a href=\"" + element.mediaUrl
      + "\" target=\"_blank\" title=\"" + element.mediaName
      + "\"><img src=\"" + element.mediaLogo
      + "\" alt=\"" + element.mediaName + "\" /></a></div>");
  });
});

var bracketDest;
var sponsorsUrl = srcUrl + "model/sponsors.json";
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

var speakersUrl = srcUrl + "model/speakers.json";
$.getJSON(speakersUrl, function(data){
  $.each(data.people, function(index, element){
    $("section#speakers-secion-test .people-brackets").append(
      "<div class=\"round-bracket " + element.firstName + " " + element.lastName + "\">"
      + "<img src=\"" + element.imageUrl
      + "\" alt=\"" + element.firstName + "\" data-toggle=\"modal\" data-target=\"#modal-" + element.id + "\"/>"
      + "<p id=\"speaker-subtitle\"><b>" + element.firstName + " " + element.lastName +"</b><br />"
      + element.websiteTitle + "</p>"
      + "</div>");

    $("#modal-" + element.id + " .modal-dialog .modal-title").append(
      "<img src=\"" + element.imageUrl + "\" alt=\"" + element.firstName + "\" />"
      + "<div class=\"speaker-title\"><h3>" + element.firstName + " " + element.lastName + "</h3>"
      + "<p>" + element.websiteTitle + "</p>"
      + ((element.websiteLink != null) ? "<a class=\"modal-social-link\" href=\"" + element.websiteLink + "\" target=\"_blank\" title=\"" + element.websiteLink
      + "\"><i class=\"fa fa-globe fa-2x\"></i></a>" : "")
      + ((element.facebookLink != null) ? "<a class=\"modal-social-link\" href=\"" + element.facebookLink + "\" target=\"_blank\" title=\"" + element.facebookLink
      + "\"><i class=\"fa fa-facebook fa-2x\"></i></a>" : "")
      + ((element.twitterHandler != null) ? "<a class=\"modal-social-link\" href=\"https://twitter.com/" + element.twitterHandler + "\" target=\"_blank\" title=\"" + element.twitterHandler
      + "\"><i class=\"fa fa-twitter fa-2x\"></i></a>" : "")
      + ((element.githubLink != null) ? "<a class=\"modal-social-link\" href=\"https://github.com/" + element.githubLink + "\" target=\"_blank\" title=\"" + element.githubLink
      + "\"><i class=\"fa fa-github fa-2x\"></i></a>" : "")
      + ((element.linkedIn != null) ? "<a class=\"modal-social-link\" href=\"" + element.linkedIn + "\" target=\"_blank\" title=\"" + element.linkedIn
      + "\"><i class=\"fa fa-linkedin fa-2x\"></i></a>" : "")
      + ((element.googlePlus != null) ? "<a class=\"modal-social-link\" href=\"" + element.googlePlus + "\" target=\"_blank\" title=\"" + element.googlePlus
      + "\"><i class=\"fa fa-google-plus fa-2x\"></i></a>" : "")
      + "</div>"
    );
    $("#modal-" + element.id + " .modal-dialog .modal-body").append(
      "<p>" + element.bio + "</p>"
    );
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
