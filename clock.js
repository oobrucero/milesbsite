function startTime() {
  var today = new Date();
  var h = today.getUTCHours();
  var m = today.getUTCMinutes();
  var s = today.getUTCSeconds();
  m = checkTime(m);
  s = checkTime(s);
  
  var jh = ((h + 9) + 24) % 24;
  var ph = ((h -7) + 24) % 24;
  var eh = ((h - 4)+ 24) % 24;
  var lh = ((h + 1) + 24) % 24;
  document.getElementById('clk').innerHTML =
  "&#127482;&#127480;PST " + ph + ":" + m + ":" + s +
  "/&#127482;&#127480;EST " + eh + ":" + m + ":" + s ;
  document.getElementById('clk2').innerHTML = 
  "&#127468;&#127463;GMT " +lh + ":" + m + ":" + s +
  "/&#127471;&#127477;JST " + jh + ":" + m + ":" + s ;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}