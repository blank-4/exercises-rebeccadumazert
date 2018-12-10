function temps() {
    var d = new Date(); 
    d.getDate();
    d.getMonth();
    d.getFullYear();
    d.getHours();
    d.getMinutes();
    d.getSeconds();
    var time = d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()+" ~ Heure "+d.getHours()+":"+ d.getMinutes()+":"+d.getSeconds();
    setInterval(temps, 1000);
    document.getElementById("horloge").innerHTML = time;
}
temps();