/*
  Created 11/11/2015 by Grażyna

  This file contains all agenda scripts for droidcon Kraków 2015 website.
*/

var srcUrl = "https://raw.githubusercontent.com/droidconpl/droidcon-2015-web/master/";
// var srcUrl = "https://droidconpl.github.io/droidcon-2015-web/";

$(document).ready(function(){

  var fillBackground = "#4D4D4D";
  var fontStyle = "24px nerissemibold";
  var fillStyleText = "#6EB300";

  // tab one canvas
  var ctx = document.getElementById("day-one-tab").getContext("2d");
  ctx.strokeStyle = fillBackground;
  ctx.moveTo(0,0);
  ctx.lineTo(200,0);
  ctx.lineTo(253,62);
  ctx.lineTo(0,62);
  ctx.lineTo(0,0);
  ctx.fillStyle = fillBackground;
  ctx.fill();
  ctx.stroke();

  ctx.font = fontStyle;
  ctx.fillStyle = fillStyleText;
  ctx.fillText("4.12.2015",54,40);

  // tab two canvas
  var ctx = document.getElementById("day-two-tab").getContext("2d");
  ctx.strokeStyle = fillBackground;
  ctx.moveTo(0,0);
  ctx.lineTo(200,0);
  ctx.lineTo(253,62);
  ctx.lineTo(53,62);
  ctx.lineTo(0,0);
  ctx.fillStyle = fillBackground;
  ctx.fill();
  ctx.stroke();

  ctx.font = fontStyle;
  ctx.fillStyle = fillStyleText;
  ctx.fillText("5.12.2015",75,40);

  // tab three canvas
  var ctx = document.getElementById("day-three-tab").getContext("2d");
  ctx.strokeStyle = fillBackground;
  ctx.moveTo(0,0);
  ctx.lineTo(200,0);
  ctx.lineTo(253,62);
  ctx.lineTo(53,62);
  ctx.lineTo(0,0);
  ctx.fillStyle = fillBackground;
  ctx.fill();
  ctx.stroke();

  ctx.font = fontStyle;
  ctx.fillStyle = fillStyleText;
  ctx.fillText("6.12.2015",75,40);

  // table with the agenda
  // Partners Section
  var agendaUrl = srcUrl + "model/agenda.json";
  $.getJSON(agendaUrl, function(data){
    $.each(data.sessions, function(index, element){
      $('table#agenda-table').append(
        "<tr>" +
          "<td><img src=\"\" alt=\"\" /></td>" +
          "<td>Slot 1</td>" +
          "<td>Slot 2</td>" +
          "<td><img src=\"\" alt=\"\" /></td>" +
        "</tr>"
      );
    });
  });

});
