function httpGet() {
    let theUrl = "https://api.adviceslip.com/advice";
  
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    let responseText = JSON.parse(xmlHttp.responseText).slip;
   
    $("#number").text(responseText.id);
    $("#advice-text").text(responseText.advice);
}
