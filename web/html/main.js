$(function(){

fetch("http://localhost:3000")
  .then( response => {
    if (!response.ok) { throw response }
    console.log("status_code: " + response.status)
    document.getElementById("status_code").innerHTML = "status_code: " + response.status
    return response.json()
  })
  .then( content => {
    console.log("version: " + content.version + "," + "service: " + content.service_name)
    document.getElementById("service_name").innerHTML = "service: " + content.service_name
    document.getElementById("version").innerHTML = "version: " + content.version
    document.getElementById('colored_div').style.backgroundColor = content.color
  })
  .catch( err => {
    console.log("error")
    document.getElementById("status_code").innerHTML = "status_code: 503"
  })
});
