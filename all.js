const calendar = $(".calendar"),
    date = $(".date"),
    daysContainer = $(".days"),
    prev = $(".prev"),
    next = $(".next")


let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
];


function initCalendar() {
    //to get all prev month days and currnets month all days and rem next month days
    const firstDay = new Date(year, month , 1)
    const lastDay = new Date(year, month + 1, 0)
    const prevLastDay = new Date(year, month, 0)
    const prevDays = prevLastDay.getDate()
    const lastDate = lastDay.getDate()
    const day = firstDay.getDay()
    const nextDays = 7 - lastDay.getDay() - 1

    //update date in the top of calendar
    date.html(months[month] + " " + year)

    // Adding Days on dom
    let days = ""
    //prev month days
    console.log(firstDay)
    for (let x = day; x > 0; x--) {
        console.log(x)
        days += `<div class="day prev-date">${prevDays - x + 1}</div>`
    }
    //current month
    for (let x = 1; x <= lastDate; x++) {
        //if day is today add class today
        if (x == new Date().getDate() && year == new Date().getFullYear() && month == new Date().getMonth()) {
            days += `<div class="day today">${x}</div>`
        }
        //remaining of days
        else {
            days += `<div class="day">${x}</div>`
        }
    }
    //next month days
    for (let x = 1; x < nextDays; x++) {
        days += `<div class="day next-date">${x}</div>`
    }
    daysContainer.html(days)
}
initCalendar()