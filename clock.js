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
  jh = checkTime(jh);
  ph = checkTime(ph);
  eh = checkTime(eh);
  lh = checkTime(lh);
  
  document.getElementById('clk').innerHTML = "&#127482;&#127480; " + ph + ":" + m + ":" + s + "/&#127482;&#127480; " + eh + ":" + m + ":" + s ;
  document.getElementById('clk2').innerHTML =  "&#127466;&#127482; " + lh + ":" + m + ":" + s + "/&#127471;&#127477; " + jh + ":" + m + ":" + s ;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
