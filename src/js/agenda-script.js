/*
  Created 11/11/2015 by Grażyna

  This file contains all agenda scripts for droidcon Kraków 2015 website.
*/

var srcUrl = "https://raw.githubusercontent.com/droidconpl/droidcon-2015-web/master/";
// var srcUrl = "https://droidconpl.github.io/droidcon-2015-web/";

// make each slot height even
function setHeight(element1, element2) {
  var height1 = $(element1).css('height').replace(/px/,"");
  var height2 = $(element2).css('height').replace(/px/,"");

  var max = Math.max(height1, height2);

  return max;
};


$(document).ready(function(){

  // table with the agenda
  var agendaUrl = srcUrl + "model/agenda.json";
  var speakerUrl = srcUrl + "model/speakers.json";
  var appendValue;
  //

  $.when(
    // loading both JSONS
    $.getJSON( agendaUrl ),
    $.getJSON( speakerUrl )
  ).done(function(sessions, speakers) {
    // when it's done we can continue with the rest

    // only the first value from them give the JSON array
    var sessionsJSON = sessions[0].sessions;
    var speakersJSON = speakers[0].people;

    // for each agenda JSON entry
    for (var i = 0; i < sessionsJSON.length; i++) {
      // Open row
      appendValue = "<div id=\"row-" + i + "\" class=\"row time-table col-xs-12\">";

      if ( sessionsJSON[i].roomId[0] == 0 ) {

        appendValue += "<div class=\"slot-img col-xs-3 col-sm-2\">" +
                          "<img src=\"" + sessionsJSON[i].slotImg + "\" alt=\"img\" />" +
                       "</div>";

        appendValue += "<div class=\"slot-desc col-xs-9 col-sm-8\">" +
                         "<div class=\"header\">" +
                           "<div class=\"hour\">" + sessionsJSON[i].sessionDisplayHour + "</div>" +
                           "<div class=\"room\"></div>" +
                         "</div>" +
                         "<div class=\"content\">" +
                           "<p class=\"title\">" + sessionsJSON[i].sessionTitle[0] + "</p>" +
                           "<p class=\"description\">" + sessionsJSON[i].sessionDescription[0] + "</p>" +
                         "</div>" +
                       "</div>";

      } else if ( sessionsJSON[i].roomId[0] == 1 &&  sessionsJSON[i].roomId[1] == 1 ) {

        appendValue += "<div class=\"slot-img col-xs-3 col-sm-2\">";

        // when it's a keynote
        if ( sessionsJSON[i].speakerIDs[0].length > 0 ) {
           appendValue += "<img class=\"speaker-image\" src=\"../" + speakersJSON[sessionsJSON[i].speakerIDs[0]-1].imageUrl + "\" alt=\"img\" />" +
                          "<p class=\"speaker-subtitle\"><b>" + speakersJSON[sessionsJSON[i].speakerIDs[0]-1].firstName + " " + speakersJSON[sessionsJSON[i].speakerIDs[0]-1].lastName +"</b><br />"
           + speakersJSON[sessionsJSON[i].speakerIDs[0]-1].websiteTitle + "</p></div>";
        }else {
            appendValue += "<img src=\"" + sessionsJSON[i].slotImg + "\" alt=\"img\" /></div>";
        }

        appendValue += "<div class=\"slot-desc col-xs-9 col-sm-8\">" +
                        "<div class=\"header\">" +
                          "<div class=\"hour\">" + sessionsJSON[i].sessionDisplayHour + "</div>" +
                          "<div class=\"room\">Room 1</div>" +
                        "</div>" +
                        "<div class=\"content\">" +
                          "<p class=\"title\">" + sessionsJSON[i].sessionTitle[0] + "</p>" +
                          "<p class=\"description\">" + sessionsJSON[i].sessionDescription[0] + "</p>" +
                        "</div>" +
                      "</div>";
      } else if ( sessionsJSON[i].roomId[0] == 1 &&  sessionsJSON[i].roomId[1] == 2 ) {

        // left and right slots
        for (var k = 0; k < sessionsJSON[i].roomId.length; k++) {
          // open left or right slot
          appendValue += "<div class=\"" + ((k == 0) ? "left" : "right") + "-slot col-xs-12 col-sm-6\">" +
                            "<div class=\"slot-img col-xs-3 col-sm-4\">";
          // each double slot has a speaker array for a slot
          var speakerIDs = sessionsJSON[i].speakerIDs[k];

          for (var speaker = 0; speaker < speakerIDs.length; speaker++) {
            appendValue += "<img src=\"../" + speakersJSON[speakerIDs[speaker]-1].imageUrl + "\" alt=\"\" />" +
                           "<p class=\"speaker-subtitle\"><b>" + speakersJSON[speakerIDs[speaker]-1].firstName + " " + speakersJSON[speakerIDs[speaker]-1].lastName +"</b><br />"
                           + speakersJSON[speakerIDs[speaker]-1].websiteTitle + "</p>";
          }
          // close image div
          appendValue += "</div>";

          var room = ((sessionsJSON[i].roomId[k] == 0 ) ? "" : "Room " + sessionsJSON[i].roomId[k]);
          // this is the common section, all cases has it
          appendValue += "<div class=\"slot-desc col-xs-9 col-sm-8\">" +
                            "<div class=\"header\">" +
                              "<div class=\"hour\">" + sessionsJSON[i].sessionDisplayHour + "</div>" +
                              "<div class=\"room\">" + room + "</div>" +
                            "</div>" +
                            "<div class=\"content\">" +
                              "<p class=\"title\">" + sessionsJSON[i].sessionTitle[k] + "</p>" +
                              "<p class=\"description\">" + sessionsJSON[i].sessionDescription[k] + "</p>" +
                            "</div>" +
                          "</div>";
          // Close left/right div
          appendValue += "</div>";
        }

      } else {
        console.log("Wrong room");
      }

      // Close row
      appendValue += "</div>";

      // Append to html
      $("#day-" + sessionsJSON[i].dayId).append(appendValue);

      // only for double slots
      if ( sessionsJSON[i].roomId[0] == 1 &&  sessionsJSON[i].roomId[1] == 2 && window.screen.availWidth >= 768 ) {
        var maxHeight = setHeight("#row-"+i+" .left-slot .content", "#row-"+i+" .right-slot .content");
        $("#row-"+i+" .left-slot .content").css("height", maxHeight);
        $("#row-"+i+" .right-slot .content").css("height", maxHeight);
      }
    }
    $("#day-2").css("display", "none");
    $("#day-3").css("display", "none");
  });

  // show and hide particular day tables
  $("#agenda-tabs div.tabs").click(function(){
    if ($(this).hasClass("active") == false ) {
      $(this).attr("Id")
      $(this).toggleClass("active");
      $(this).siblings(".active").toggleClass("active");
    }
    if ($(this).attr("Id") == "tab-1") {
      // for each row in day tab
      $("#day-1 .row").each(function(index){
        // check if it's double slot
        if( $(this).children().hasClass("left-slot") && window.screen.availWidth >= 768 ) {
          // get max height and set it to both
          var maxHeight = setHeight("#" + $(this).attr("Id") +" .left-slot .content", "#" + $(this).attr("Id") +" .right-slot .content");
          $("#day-1 #" + $(this).attr("Id") +".row .left-slot .content").css("height", maxHeight);
          $("#day-1 #" + $(this).attr("Id") +".row .right-slot .content").css("height", maxHeight);
        }
      });
      $("#day-1").css("display", "block");
      $("#day-2").css("display", "none");
      $("#day-3").css("display", "none");
    }
    if ($(this).attr("Id") == "tab-2") {
      // for each row in day tab
      $("#day-2 .row").each(function(index){
        // check if it's double slot
        if( $(this).children().hasClass("left-slot") && window.screen.availWidth >= 768 ) {
          // get max height and set it to both
          var maxHeight = setHeight("#" + $(this).attr("Id") +" .left-slot .content", "#" + $(this).attr("Id") +" .right-slot .content");
          $("#day-2 #" + $(this).attr("Id") +".row .left-slot .content").css("height", maxHeight);
          $("#day-2 #" + $(this).attr("Id") +".row .right-slot .content").css("height", maxHeight);
        }
      });
      $("#day-1").css("display", "none");
      $("#day-2").css("display", "block");
      $("#day-3").css("display", "none");
    }
    if ($(this).attr("Id") == "tab-3") {
      // for each row in day tab
      $("#day-3 .row").each(function(index){
        // check if it's double slot
        if( $(this).children().hasClass("left-slot") && window.screen.availWidth >= 768 ) {
          // get max height and set it to both
          var maxHeight = setHeight("#" + $(this).attr("Id") +" .left-slot .content", "#" + $(this).attr("Id") +" .right-slot .content");
          $("#day-3 #" + $(this).attr("Id") +".row .left-slot .content").css("height", maxHeight);
          $("#day-3 #" + $(this).attr("Id") +".row .right-slot .content").css("height", maxHeight);
        }
      });
      $("#day-1").css("display", "none");
      $("#day-2").css("display", "none");
      $("#day-3").css("display", "block");
    }
  });

});
