let daysoftheweek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
let mylist = [['monpres', 'mon'], ['tuepres', 'tue'], ['wedpres', 'wed'], ['thupres', 'thu'], ['fripres', 'fri'], ['satpres', 'sat'], ['sunpres', 'sun']];
let goalslist = [['gmon', 'mongoal1'], ['gtue', 'tuegoal1'], ['gwed', 'wedgoal1'], ['gthu', 'thugoal1'], ['gfri', 'frigoal1'], ['gsat', 'satgoal1'], ['gsun', 'sungoal1']]

//setup.html
function presentschedule() {

    //Replace placeholders (monpres etc.) with values from localstorage (e.g. Monday's exercise: deadlift)
    //Iterates through 2d list
    for (let i=0;i < mylist.length; i++) {
        let sublist = mylist[i];
        console.log(localStorage.getItem(sublist[1]));
        document.getElementById(sublist[0]).innerHTML = localStorage.getItem(sublist[1]);
        try {
            document.getElementById(sublist[0]+'1').innerHTML = localStorage.getItem(sublist[1]);
        } catch {
            console.log("fail");
        }
    }
}

//setup.html
function saveschedule() {
    for(let i=0; i < daysoftheweek.length; i++) {
        localStorage.removeItem(daysoftheweek[i]);
        //Make localstorage key and add value of text input to it (e.g. tue, benchpress)
        if (document.getElementById(daysoftheweek[i]).value != null && document.getElementById(daysoftheweek[i]).value.trim() != "") {
            localStorage.setItem(daysoftheweek[i], document.getElementById(daysoftheweek[i]).value);
        } else {
            localStorage.setItem(daysoftheweek[i], "rest");
        }
    }
    presentschedule();
}

//goals.html
function savegoals() {
    for (let day in daysoftheweek) {
        //Assigns goals to localStorage variables (even if empty)
        if (document.getElementById(daysoftheweek[day]+'pres').innerHTML != "rest") {
            localStorage.setItem('g'+daysoftheweek[day], document.getElementById(daysoftheweek[day] + "goal").value);
        } else {
            localStorage.setItem('g'+daysoftheweek[day], 0);
        }
        
    }
    window.location.reload();
}

//goals.html
function presentgoals() {
    for(let i=0; i < goalslist.length; i++) {
        let sublist = goalslist[i];
        //Gets goal from localStorage variable (e.g. gmon), displays it on span (e.g. mongoal1)
        if (localStorage.getItem(sublist[0]) != null && localStorage.getItem(sublist[0]) != 0) {
            document.getElementById(sublist[1]).innerHTML = localStorage.getItem(sublist[0]);
        }
    }
    presentschedule();
}

//index.html
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

    console.log(day);
    //Unless there's no value or the string is empty, output today's exercise to the h2 on the main page (except it doesn't want to work because localstorage doesn't sync between webpages!!!!!!!!!)
    if (localStorage.getItem(day) != null && localStorage.getItem(day).trim().length != 0) {
        if (localStorage.getItem(day) != "rest") {
            document.getElementById("whattodo").innerHTML = "Today's exercise is " + localStorage.getItem(day);
        } else {
            document.getElementById("whattodo").innerHTML = "Today is a rest day!";
        }
    } else {
        document.getElementById("whattodo").innerHTML = "Today is a rest day!";
    }
    

}

//index.html
function comparerecs() {
    //Get day of the week (number)
    const d = new Date();
    let day = d.getDay();
    //Convert number to name of day of the week
    if (day > 0) {
        day = daysoftheweek[day - 1];
    } else {
        day = 'sun';
    }

    //checks if it's a rest day (can't beat records if you're not lifting)
    if (localStorage.getItem(day) != "rest") {
        if (Number(localStorage.getItem('g'+day)) <= Number(document.getElementById("todaysrec").value)) {
            console.log("pls halp");
            document.getElementById("goalachieved").innerHTML = "Congrats! You've reached your goal of " + localStorage.getItem('g'+day) + 'kg ' + localStorage.getItem(day) + '!';
        } else {
            document.getElementById("goalachieved").innerHTML = "Keep pushing! You're " + String(Number(localStorage.getItem('g'+day)) - Number(document.getElementById("todaysrec").value)) + "kg away from reaching your goal of " + localStorage.getItem('g'+day) + 'kg ' + localStorage.getItem(day) + '!';
        }

    } else {
        document.getElementById("goalachieved").innerHTML = "Come back tomorrow!"
    }
}
