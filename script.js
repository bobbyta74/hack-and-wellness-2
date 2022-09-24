let daysoftheweek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

function presentschedule() {
    document.getElementById("monpres").innerHTML = localStorage.getItem("mon");
    document.getElementById("tuepres").innerHTML = localStorage.getItem("tue");
    document.getElementById("wedpres").innerHTML = localStorage.getItem("wed");
    document.getElementById("thupres").innerHTML = localStorage.getItem("thu");
    document.getElementById("fripres").innerHTML = localStorage.getItem("fri");
    document.getElementById("satpres").innerHTML = localStorage.getItem("sat");
    document.getElementById("sunpres").innerHTML = localStorage.getItem("sun");
}

function saveschedule() {
    localStorage.clear()
    for(let i=0; i < daysoftheweek.length; i++) {
        localStorage.setItem(daysoftheweek[i], document.getElementById(daysoftheweek[i]).value);
    }
    presentschedule();
}

function todaysexercise() {
    const d = new Date();
    let day = d.getDay();
    console.log(day);

}

