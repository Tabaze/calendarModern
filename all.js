$(document).ready(function () {
    $('select').select2()
    const calendar = $(".calendar"),
        date = $(".date"),
        daysContainer = $(".days"),
        prev = $(".prev"),
        todayBtn = $(".today-btn"),
        gotoBtn = $(".goto-btn"),
        dateInput = document.querySelector(".date-input"),
        next = $(".next"),
        addReser = document.querySelector('.add-event'),
        reserContainer = $(".add-event-wrapper"),
        saveReser = $('.add-event-btn'),
        btnClose = document.querySelector('.close')

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
    const dayFrench = {
        Sun: "Dim",
        Mon: "Lun",
        Tue: "Mar",
        Wed: "Mer",
        Thu: "Jeu",
        Fri: "Ven",
        Sat: "Sam"
    }
    const eventList = [
        {
            day: 1,
            month: 1,
            year: 2023,
            events: [
                {
                    id: 1,
                    client: "Ouail Barni",
                    chambre: "etage 1",
                    dateEntre: "01-01-2023",
                    dateSortie: "01-01-2023",
                    modP: "Espece"

                },
                {
                    id: 2,
                    client: "Test 2",
                    chambre: "etage 2",
                    dateEntre: "01-01-2023",
                    dateSortie: "01-01-2023",
                    modP: "Cheque"
                },
            ]
        }
    ]

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
            let event = false;
            eventList.forEach((even) => {
                if (even.day == x && even.month == month + 1 && even.year == year) {
                    event = true;
                }
            })
            //if day is today add class today
            if (x == new Date().getDate() && year == new Date().getFullYear() && month == new Date().getMonth()) {
                activeDayEvent(x)
                updateEvent(x)
                if (event) {
                    days += `<div class="day today active event">${x}</div>`
                }
                else
                    days += `<div class="day today active">${x}</div>`
            }
            //remaining of days
            else {
                if (event) {
                    days += `<div class="day event">${x}</div>`
                }
                else
                    days += `<div class="day">${x}</div>`
            }
        }
        //next month days
        for (let x = 1; x <= nextDays; x++) {
            days += `<div class="day next-date">${x}</div>`
        }
        daysContainer.html(days)
        addListner()
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


    addReser.addEventListener('click', () => {
        reserContainer.toggleClass('active')
        if (reserContainer.hasClass('active')) {
            addReser.classList.add('rotate')
        }
        else {
            addReser.classList.remove('rotate')
        }
    })
    btnClose.addEventListener('click', () => {
        reserContainer.removeClass('active')
        addReser.classList.remove('rotate')
    })

    function addListner() {
        const days = document.querySelectorAll('.day')
        days.forEach((day) => {
            day.addEventListener('click', (e) => {
                activeDay = e.target.innerHTML
                activeDayEvent(e.target.innerHTML)
                updateEvent(e.target.innerHTML)
                days.forEach((day) => {
                    day.classList.remove('active')
                })
                if (e.target.classList.contains('prev-date')) {
                    prevMonth()
                    console.log(e.target.innerHTML)
                    setTimeout(() => {
                        const days = document.querySelectorAll('.day')
                        days.forEach((day) => {
                            if (!day.classList.contains('prev-date') && day.innerHTML == e.target.innerHTML)
                                day.classList.add('active')
                        })
                    }, 100)
                }
                else if (e.target.classList.contains('next-date')) {
                    nextMonth()
                    console.log(e.target.innerHTML)
                    setTimeout(() => {
                        const days = document.querySelectorAll('.day')
                        days.forEach((day) => {
                            if (!day.classList.contains('next-date') && day.innerHTML == e.target.innerHTML)
                                day.classList.add('active')
                        })
                    }, 100)
                }
                else {
                    e.target.classList.add('active')
                }
            })
        })
    }

    function activeDayEvent(date) {
        const day = new Date(year, month, date)
        const dayname = dayFrench[day.toString().split(' ')[0]]
        $(".event-day").html(dayname)
        $('.event-date').html(date + ' ' + months[month] + " " + year)
    }
    function updateEvent(date) {
        let event = ""
        eventList.forEach((even) => {
            if (date == even.day && month + 1 == even.month && year == even.year) {
                even.events.forEach((eve) => {
                    event += `
                    <div class="event" id="${eve.id}">
                        <div class="title">
                            <i class="fas fa-circle"></i>
                            <h3 class="event-title">${eve.client}</h3>
                        </div>
                        <div class="event-time">
                            <span class='event-time'>${eve.chambre + " : " + moment(eve.dateEntre).format('L') + " - " + moment(eve.dateSortie).format('L')}</span>
                        </div>
                    </div>
                    `
                })
            }
        })
        if (event == "") {
            event = `
                <div class='no-event'>
                    <h3>No Reservation</h3>
                </div>
            `
        }
        $('.events').html(event)
    }
    saveReser.on('click', this, function () {
        let chambre = $('#chambre').val()
        let client = $('#client').val()
        let modP = $('#modP').val()
        let dateEntre = $('#dateEntre').val()
        let dateSortie = $('#dateSortie').val()
        if (dateEntre == "" || dateSortie == '') {
            alert("")
            return
        }
        else {
            const newEvent = {
                id: 3,
                client: client,
                chambre: chambre,
                dateEntre: moment(dateEntre, "DD-MM-YYYY"),
                dateSortie: moment(dateSortie, "DD-MM-YYYY"),
                modP: modP
            }
            let added = false;
            if (eventList.length > 0) {
                eventList.forEach((eve) => {
                    if (activeDay == eve.day && eve.month == month + 1 && eve.year == year) {
                        eve.events.push(newEvent)
                        added = true;
                    }
                })
            }
            if (!added) {
                eventList.push({
                    day: activeDay,
                    month: month + 1,
                    year: year,
                    events: [newEvent]
                })
            }
            reserContainer.classList.remove('active')
            $('#chambre').val("").trigger('change')
            $('#client').val("").trigger('change')
            $('#modP').val("").trigger('change')
            $('#dateEntre').val('')
            $('#dateSortie').val('')
            updateEvent(activeDay)
            const activeDayElem = $('.day.active');
            if (!activeDayElem.hasClass('event'))
                activeDayElem.addClass('event')
        }
    })
    $('.events').on('click', '.event', function () {
        let id = $(this).attr('id')
        reserContainer.addClass('active')
        addReser.classList.add('rotate')
        let activeEvent;
        eventList.forEach((event) => {
            event.events.forEach((eve) => {
                if (eve.id == id) {
                    activeEvent = eve
                }
            })
        })
        $('#chambre').val(activeEvent.chambre).trigger('change')
        $('#client').val(activeEvent.client).trigger('change')
        $('#modP').val(activeEvent.modP).trigger('change')
        $('#dateEntre').val(moment(activeDay.dateEntre, 'MM/DD/YYYY'))
        $('#dateSortie').val()
    })
});