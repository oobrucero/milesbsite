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
  var jhs = jh.toString();
  var phs = ph.toString();
  var ehs = eh.toString();
  var lhs = lh.toString();
  if (jh < 10) {
    jhs = "0" + jhs;
  }
  if (ph < 10) {
    phs = "0" + phs;
  }
  if (lh < 10) {
    lhs = "0" + lhs;
  }
  if (jh < 10) {
    lhs = "0" + lhs;
  }
  document.getElementById('clk').innerHTML =
  "&#127482;&#127480;PST " + phs + ":" + m + ":" + s +
  "/&#127482;&#127480;EST " + ehs + ":" + m + ":" + s ;
  document.getElementById('clk2').innerHTML = 
  "&#127468;&#127463;GMT " +lhs + ":" + m + ":" + s +
  "/&#127471;&#127477;JST " + jhs + ":" + m + ":" + s ;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}