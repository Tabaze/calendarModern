$(document).ready(function () {

    const calendar = $(".calendar"),
        date = $(".date"),
        daysContainer = $(".days"),
        prev = $(".prev"),
        todayBtn = $(".today-btn"),
        gotoBtn = $(".goto-btn"),
        dateInput = document.querySelector(".date-input"),
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
        const firstDay = new Date(year, month, 1)
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
        for (let x = day; x > 0; x--) {
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
        for (let x = 1; x <= nextDays; x++) {
            days += `<div class="day next-date">${x}</div>`
        }
        daysContainer.html(days)
    }
    initCalendar()

    //prev month
    function prevMonth() {
        month--
        if (month < 0) {
            month = 11
            year--
        }
        initCalendar()
    }
    //next month
    function nextMonth() {
        month++
        if (month > 11) {
            month = 0
            year++
        }
        initCalendar()
    }
    //add event next and previous to buttons
    prev.on('click', this, prevMonth)
    next.on('click', this, nextMonth)

    //Add go to date and today
    todayBtn.on('click', this, function () {
        today = new Date();
        month = today.getMonth();
        year = today.getFullYear();
        initCalendar()
    })
    dateInput.addEventListener('input', function (e) {
        // allow only number
        dateInput.value = dateInput.value.replace(/[^0-9/]/g, "")
        if (dateInput.value.length == 2)
            dateInput.value += '/'
        if (dateInput.value.length > 7)
            dateInput.value = dateInput.value.slice(0, 7)
        if (e.inputType == "deleteContentBackward") {
            if (dateInput.value.length === 3)
                dateInput.value = dateInput.value.slice(0, 2)
        }
    })
    gotoBtn.on('click', this, function () {
        const dateArr = dateInput.value.split('/')
        if (dateArr.length == 2) {
            if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length == 4) {
                month = dateArr[0] - 1
                year = dateArr[1]
                initCalendar()
                return
            }
        }
        //invalid date
        alert("Date incorrect")
    })
    const addReser = document.querySelector('.add-event'),
        reserContainer = document.querySelector(".add-event-wrapper"),
        saveReser = document.querySelector('.add-event-btn'),
        btnClose = document.querySelector('.close')

    addReser.addEventListener('click', () => {
        reserContainer.classList.toggle('active')
    })
    btnClose.addEventListener('click', () => {
        reserContainer.classList.remove('active')
    })
    document.addEventListener('click', (e) => {
        if (e.target != addReser && !reserContainer.contains(e.target))
            reserContainer.classList.remove('active')
    })
});