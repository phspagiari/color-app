const http = new XMLHttpRequest()

http.open("GET", "http://localhost:3000/")
http.send()
http.onload = function () {
  var data = JSON.parse(http.responseText);
  var status_code = http.status;

  document.getElementById("service_name").innerHTML = "service: " + data.service_name
  document.getElementById("version").innerHTML = "version: " + data.version
  document.getElementById("status_code").innerHTML = "status_code: " + status_code 
  document.getElementById('colored_div').style.backgroundColor = data.color
}
