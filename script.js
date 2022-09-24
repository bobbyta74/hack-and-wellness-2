let daysoftheweek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
let exercises;
function presentschedule() {
    //Replace placeholders (monpres etc.) with values from localstorage (e.g. Monday's exercise: deadlift)
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
        //Make localstorage key and add value of text input to it (e.g. tue, benchpress)
        localStorage.setItem(daysoftheweek[i], document.getElementById(daysoftheweek[i]).value);
    }
    presentschedule();
    exercises = [localStorage.getitem("mon"), localStorage.getItem("tue"), localStorage.getItem("wed"), localStorage.getItem("thu"), localStorage.getItem("fri"). localStorage.getItem("sat"), localStorage.getItem("sun")]
}


function todaysexercise() {
    //Get day of the week (number)
    const d = new Date();
    let day = d.getDay();
    //Convert number to name of day of the week
    if (day > 0) {
        day = daysoftheweek[day - 1];
    } else {
        day = 'sun';
    }

    console.log(exercises);
    //Unless there's no value or the string is empty, output today's exercise to the h2 on the main page (except it doesn't want to work because localstorage doesn't sync between webpages!!!!!!!!!)
    if (localStorage.getItem(day) != null && localStorage.getItem(day).trim().length != 0) {
        document.getElementById("whattodo").innerHTML = "Today's exercise is" + localStorage.getItem(day);
    } else {
        document.getElementById("whattodo").innerHTML = "Today is a rest day!";
    }
    

}

