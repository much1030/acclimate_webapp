function getsensordata(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false ); // false for synchronous request
    xmlHttp.send(null );
    return xmlHttp.responseText;
}

function setsensordata(sensordata, theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", theUrl, false ); // false for synchronous request
    xmlHttp.send(sensordata);
    return xmlHttp.responseText;
}

function starten(){
    setInterval(period, 5000);
}

function period(){
    sensordata = getsensordata("http://localhost:8088/sensor-data");
    document.getElementById("01").innerHTML = sensordata;
    setsensordata("42", "http://localhost:8088/sensor-data");
}