const _0x42bd25 = _0xce49;
(function (_0x1a93e9, _0x52650a) {
    const _0x1d5c21 = _0xce49,
        _0x5aed33 = _0x1a93e9();
    while (!![]) {
        try {
            const _0x3c1cc3 =
                (-parseInt(_0x1d5c21(0xec)) / 0x1) * (-parseInt(_0x1d5c21(0xfb)) / 0x2) +
                -parseInt(_0x1d5c21(0xcf)) / 0x3 +
                parseInt(_0x1d5c21(0xf7)) / 0x4 +
                -parseInt(_0x1d5c21(0xac)) / 0x5 +
                (-parseInt(_0x1d5c21(0xa5)) / 0x6) * (parseInt(_0x1d5c21(0xe9)) / 0x7) +
                -parseInt(_0x1d5c21(0xc1)) / 0x8 +
                parseInt(_0x1d5c21(0xca)) / 0x9;
            if (_0x3c1cc3 === _0x52650a) break;
            else _0x5aed33["push"](_0x5aed33["shift"]());
        } catch (_0x5026f8) {
            _0x5aed33["push"](_0x5aed33["shift"]());
        }
    }
})(_0x171c, 0x36bed);
const calendar = document[_0x42bd25(0xbf)](".calendar"),
    date = document[_0x42bd25(0xbf)](".date"),
    daysContainer = document[_0x42bd25(0xbf)](_0x42bd25(0xb0)),
    prev = document[_0x42bd25(0xbf)](_0x42bd25(0xf1)),
    next = document[_0x42bd25(0xbf)](_0x42bd25(0xbb)),
    todayBtn = document["querySelector"](_0x42bd25(0xe2)),
    gotoBtn = document[_0x42bd25(0xbf)](_0x42bd25(0xf5)),
    dateInput = document[_0x42bd25(0xbf)](_0x42bd25(0xb5)),
    eventDay = document[_0x42bd25(0xbf)](_0x42bd25(0xa6)),
    eventDate = document[_0x42bd25(0xbf)](".event-date"),
    eventsContainer = document[_0x42bd25(0xbf)](_0x42bd25(0xc8)),
    addEventBtn = document["querySelector"](".add-event"),
    addEventWrapper = document[_0x42bd25(0xbf)](_0x42bd25(0xed)),
    addEventCloseBtn = document["querySelector"](_0x42bd25(0xe1)),
    addEventTitle = document[_0x42bd25(0xbf)](_0x42bd25(0xbd)),
    addEventFrom = document[_0x42bd25(0xbf)](_0x42bd25(0x9a)),
    addEventTo = document[_0x42bd25(0xbf)](_0x42bd25(0xcc)),
    addEventSubmit = document[_0x42bd25(0xbf)](".add-event-btn\x20");
let today = new Date(),
    activeDay,
    month = today[_0x42bd25(0xd5)](),
    year = today["getFullYear"]();
const months = [_0x42bd25(0xae), _0x42bd25(0xdb), _0x42bd25(0xdd), "April", _0x42bd25(0xf8), _0x42bd25(0xd6), _0x42bd25(0xb1), "August", "September", "October", "November", "Décembre"],
    eventsArr = [];
getEvents(), console[_0x42bd25(0xfc)](eventsArr);
function initCalendar() {
    const _0x73eae4 = _0x42bd25,
        _0x32056c = new Date(year, month, 0x1),
        _0x436261 = new Date(year, month + 0x1, 0x0),
        _0x5a8e65 = new Date(year, month, 0x0),
        _0x25e599 = _0x5a8e65[_0x73eae4(0xc2)](),
        _0x46f0ae = _0x436261[_0x73eae4(0xc2)](),
        _0x142d7b = _0x32056c["getDay"](),
        _0xc161ec = 0x7 - _0x436261[_0x73eae4(0xf9)]() - 0x1;
    date[_0x73eae4(0xff)] = months[month] + "\x20" + year;
    let _0xfcee68 = "";
    for (let _0x685540 = _0x142d7b; _0x685540 > 0x0; _0x685540--) {
        _0xfcee68 += _0x73eae4(0x9c) + (_0x25e599 - _0x685540 + 0x1) + _0x73eae4(0xb6);
    }
    for (let _0x69e3e7 = 0x1; _0x69e3e7 <= _0x46f0ae; _0x69e3e7++) {
        let _0x5ebfa5 = ![];
        eventsArr[_0x73eae4(0xce)]((_0x2b9554) => {
            const _0x456594 = _0x73eae4;
            _0x2b9554[_0x456594(0xc0)] === _0x69e3e7 && _0x2b9554["month"] === month + 0x1 && _0x2b9554["year"] === year && (_0x5ebfa5 = !![]);
        }),
            _0x69e3e7 === new Date()[_0x73eae4(0xc2)]() && year === new Date()["getFullYear"]() && month === new Date()["getMonth"]()
                ? ((activeDay = _0x69e3e7), getActiveDay(_0x69e3e7), updateEvents(_0x69e3e7), _0x5ebfa5 ? (_0xfcee68 += _0x73eae4(0xeb) + _0x69e3e7 + _0x73eae4(0xb6)) : (_0xfcee68 += _0x73eae4(0xcb) + _0x69e3e7 + _0x73eae4(0xb6)))
                : _0x5ebfa5
                ? (_0xfcee68 += _0x73eae4(0xe0) + _0x69e3e7 + _0x73eae4(0xb6))
                : (_0xfcee68 += _0x73eae4(0xc9) + _0x69e3e7 + _0x73eae4(0xb6));
    }
    for (let _0x2a8daf = 0x1; _0x2a8daf <= _0xc161ec; _0x2a8daf++) {
        _0xfcee68 += _0x73eae4(0xb9) + _0x2a8daf + "</div>";
    }
    (daysContainer[_0x73eae4(0xff)] = _0xfcee68), addListner();
}
function prevMonth() {
    month--, month < 0x0 && ((month = 0xb), year--), initCalendar();
}
function nextMonth() {
    month++, month > 0xb && ((month = 0x0), year++), initCalendar();
}
function _0xce49(_0x3c031c, _0x32c2ea) {
    const _0x171c7c = _0x171c();
    return (
        (_0xce49 = function (_0xce49c0, _0x118bfa) {
            _0xce49c0 = _0xce49c0 - 0x9a;
            let _0x4d7e06 = _0x171c7c[_0xce49c0];
            return _0x4d7e06;
        }),
        _0xce49(_0x3c031c, _0x32c2ea)
    );
}
prev[_0x42bd25(0xc5)](_0x42bd25(0xda), prevMonth), next[_0x42bd25(0xc5)](_0x42bd25(0xda), nextMonth), initCalendar();
function addListner() {
    const _0x3e17b8 = _0x42bd25,
        _0x7ddd49 = document[_0x3e17b8(0xdc)](_0x3e17b8(0xbe));
    _0x7ddd49[_0x3e17b8(0xce)]((_0x18dc83) => {
        const _0x4881e1 = _0x3e17b8;
        _0x18dc83[_0x4881e1(0xc5)]("click", (_0x28fbc5) => {
            const _0x1ae588 = _0x4881e1;
            getActiveDay(_0x28fbc5[_0x1ae588(0xa1)][_0x1ae588(0xff)]),
                updateEvents(Number(_0x28fbc5["target"][_0x1ae588(0xff)])),
                (activeDay = Number(_0x28fbc5[_0x1ae588(0xa1)][_0x1ae588(0xff)])),
                _0x7ddd49[_0x1ae588(0xce)]((_0x502f1b) => {
                    const _0x43c1cd = _0x1ae588;
                    _0x502f1b[_0x43c1cd(0xd1)][_0x43c1cd(0xd2)]("active");
                });
            if (_0x28fbc5[_0x1ae588(0xa1)][_0x1ae588(0xd1)][_0x1ae588(0x9f)](_0x1ae588(0xe3)))
                prevMonth(),
                    setTimeout(() => {
                        const _0x4bdfeb = _0x1ae588,
                            _0x2a1908 = document[_0x4bdfeb(0xdc)](".day");
                        _0x2a1908[_0x4bdfeb(0xce)]((_0x45265c) => {
                            const _0x424210 = _0x4bdfeb;
                            !_0x45265c[_0x424210(0xd1)][_0x424210(0x9f)](_0x424210(0xe3)) && _0x45265c["innerHTML"] === _0x28fbc5["target"][_0x424210(0xff)] && _0x45265c[_0x424210(0xd1)]["add"](_0x424210(0xba));
                        });
                    }, 0x64);
            else
                _0x28fbc5["target"]["classList"][_0x1ae588(0x9f)](_0x1ae588(0xd3))
                    ? (nextMonth(),
                      setTimeout(() => {
                          const _0x31091a = _0x1ae588,
                              _0x45df1e = document[_0x31091a(0xdc)](_0x31091a(0xbe));
                          _0x45df1e[_0x31091a(0xce)]((_0x3c3e90) => {
                              const _0xe9d54f = _0x31091a;
                              !_0x3c3e90[_0xe9d54f(0xd1)]["contains"]("next-date") && _0x3c3e90[_0xe9d54f(0xff)] === _0x28fbc5[_0xe9d54f(0xa1)][_0xe9d54f(0xff)] && _0x3c3e90["classList"][_0xe9d54f(0xd9)]("active");
                          });
                      }, 0x64))
                    : _0x28fbc5[_0x1ae588(0xa1)][_0x1ae588(0xd1)][_0x1ae588(0xd9)](_0x1ae588(0xba));
        });
    });
}
todayBtn[_0x42bd25(0xc5)](_0x42bd25(0xda), () => {
    const _0x2ad30 = _0x42bd25;
    (today = new Date()), (month = today[_0x2ad30(0xd5)]()), (year = today[_0x2ad30(0xe6)]()), initCalendar();
}),
    dateInput["addEventListener"](_0x42bd25(0x9d), (_0x37c597) => {
        const _0x2bd575 = _0x42bd25;
        (dateInput[_0x2bd575(0xab)] = dateInput[_0x2bd575(0xab)]["replace"](/[^0-9/]/g, "")),
            dateInput[_0x2bd575(0xab)][_0x2bd575(0xa3)] === 0x2 && (dateInput[_0x2bd575(0xab)] += "/"),
            dateInput[_0x2bd575(0xab)]["length"] > 0x7 && (dateInput["value"] = dateInput[_0x2bd575(0xab)][_0x2bd575(0xd4)](0x0, 0x7)),
            _0x37c597[_0x2bd575(0xa0)] === _0x2bd575(0xde) && dateInput[_0x2bd575(0xab)]["length"] === 0x3 && (dateInput[_0x2bd575(0xab)] = dateInput[_0x2bd575(0xab)][_0x2bd575(0xd4)](0x0, 0x2));
    }),
    gotoBtn[_0x42bd25(0xc5)](_0x42bd25(0xda), gotoDate);
function gotoDate() {
    const _0x43bc5a = _0x42bd25;
    console[_0x43bc5a(0xfc)](_0x43bc5a(0xe5));
    const _0x23d1ec = dateInput[_0x43bc5a(0xab)][_0x43bc5a(0xb7)]("/");
    if (_0x23d1ec[_0x43bc5a(0xa3)] === 0x2) {
        if (_0x23d1ec[0x0] > 0x0 && _0x23d1ec[0x0] < 0xd && _0x23d1ec[0x1][_0x43bc5a(0xa3)] === 0x4) {
            (month = _0x23d1ec[0x0] - 0x1), (year = _0x23d1ec[0x1]), initCalendar();
            return;
        }
    }
    alert(_0x43bc5a(0xbc));
}
function getActiveDay(_0x2214e4) {
    const _0x2ca832 = _0x42bd25,
        _0x1ee77e = new Date(year, month, _0x2214e4),
        _0x33292d = _0x1ee77e["toString"]()[_0x2ca832(0xb7)]("\x20")[0x0];
    (eventDay[_0x2ca832(0xff)] = _0x33292d), (eventDate[_0x2ca832(0xff)] = _0x2214e4 + "\x20" + months[month] + "\x20" + year);
}
function updateEvents(_0x197a9f) {
    const _0xe51460 = _0x42bd25;
    let _0x9ddb85 = "";
    eventsArr[_0xe51460(0xce)]((_0x548ac1) => {
        const _0x2be002 = _0xe51460;
        _0x197a9f === _0x548ac1[_0x2be002(0xc0)] &&
            month + 0x1 === _0x548ac1[_0x2be002(0xfd)] &&
            year === _0x548ac1["year"] &&
            _0x548ac1["events"][_0x2be002(0xce)]((_0x323486) => {
                const _0x26d819 = _0x2be002;
                _0x9ddb85 += _0x26d819(0xa2) + _0x323486[_0x26d819(0xf4)] + _0x26d819(0x9b) + _0x323486[_0x26d819(0xfa)] + "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>";
            });
    }),
        _0x9ddb85 === "" && (_0x9ddb85 = "<div\x20class=\x22no-event\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>No\x20Events</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>"),
        (eventsContainer[_0xe51460(0xff)] = _0x9ddb85),
        saveEvents();
}
addEventBtn[_0x42bd25(0xc5)](_0x42bd25(0xda), () => {
    const _0x2a6cb4 = _0x42bd25;
    addEventWrapper[_0x2a6cb4(0xd1)][_0x2a6cb4(0xa4)](_0x2a6cb4(0xba));
}),
    addEventCloseBtn[_0x42bd25(0xc5)]("click", () => {
        const _0x67fb55 = _0x42bd25;
        addEventWrapper[_0x67fb55(0xd1)][_0x67fb55(0xd2)](_0x67fb55(0xba));
    }),
    document[_0x42bd25(0xc5)](_0x42bd25(0xda), (_0x4c41ad) => {
        const _0xa4ce80 = _0x42bd25;
        _0x4c41ad[_0xa4ce80(0xa1)] !== addEventBtn && !addEventWrapper[_0xa4ce80(0x9f)](_0x4c41ad[_0xa4ce80(0xa1)]) && addEventWrapper[_0xa4ce80(0xd1)][_0xa4ce80(0xd2)](_0xa4ce80(0xba));
    }),
    addEventTitle[_0x42bd25(0xc5)]("input", (_0x401d3e) => {
        const _0x463c96 = _0x42bd25;
        addEventTitle["value"] = addEventTitle[_0x463c96(0xab)][_0x463c96(0xd4)](0x0, 0x3c);
    });
function _0x171c() {
    const _0x322c19 = [
        "toggle",
        "6GYFkds",
        ".event-day",
        "right",
        "Are\x20you\x20sure\x20you\x20want\x20to\x20delete\x20this\x20event?",
        "borderBottomRightRadius",
        "push",
        "value",
        "428285gueTyI",
        "div",
        "January",
        "events",
        ".days",
        "July",
        "indexOf",
        "padding",
        "boxShadow",
        ".date-input",
        "</div>",
        "split",
        "getItem",
        "<div\x20class=\x22day\x20next-date\x22>",
        "active",
        ".next",
        "Invalid\x20Date",
        ".event-name\x20",
        ".day",
        "querySelector",
        "day",
        "2453488nplkCC",
        "getDate",
        "Event\x20already\x20added",
        "absolute",
        "addEventListener",
        "event",
        "parse",
        ".events",
        "<div\x20class=\x22day\x20\x22>",
        "7340211mOmREl",
        "<div\x20class=\x22day\x20today\x20active\x22>",
        ".event-time-to\x20",
        "A\x20Project\x20By\x20<a\x20href=\x27#\x27\x20target=_blank>Open\x20Source\x20Coding</a>",
        "forEach",
        "691935tzzlLq",
        "Please\x20fill\x20all\x20the\x20fields",
        "classList",
        "remove",
        "next-date",
        "slice",
        "getMonth",
        "June",
        "style",
        "#ccc",
        "add",
        "click",
        "February",
        "querySelectorAll",
        "March",
        "deleteContentBackward",
        "sans-serif",
        "<div\x20class=\x22day\x20event\x22>",
        ".close\x20",
        ".today-btn",
        "prev-date",
        "color",
        "here",
        "getFullYear",
        "5px",
        "0\x200\x205px\x20#ccc",
        "2718744ZMQKPr",
        "year",
        "<div\x20class=\x22day\x20today\x20active\x20event\x22>",
        "3143sdojGl",
        ".add-event-wrapper\x20",
        "position",
        "10px",
        "setItem",
        ".prev",
        "splice",
        ".day.active",
        "title",
        ".goto-btn",
        "fontSize",
        "1567004ClfzQq",
        "May",
        "getDay",
        "time",
        "18UiPeDO",
        "log",
        "month",
        "stringify",
        "innerHTML",
        ".event-time-from\x20",
        "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22event-time\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22event-time\x22>",
        "<div\x20class=\x22day\x20prev-date\x22>",
        "input",
        "replace",
        "contains",
        "inputType",
        "target",
        "<div\x20class=\x22event\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-circle\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22event-title\x22>",
        "length",
    ];
    _0x171c = function () {
        return _0x322c19;
    };
    return _0x171c();
}
function defineProperty() {
    const _0x30f198 = _0x42bd25;
    var _0x162e66 = document["createElement"](_0x30f198(0xad));
    (_0x162e66[_0x30f198(0xff)] = _0x30f198(0xcd)),
        (_0x162e66["style"][_0x30f198(0xee)] = _0x30f198(0xc4)),
        (_0x162e66[_0x30f198(0xd7)]["bottom"] = "0"),
        (_0x162e66[_0x30f198(0xd7)][_0x30f198(0xa7)] = "0"),
        (_0x162e66[_0x30f198(0xd7)][_0x30f198(0xf6)] = _0x30f198(0xef)),
        (_0x162e66[_0x30f198(0xd7)][_0x30f198(0xe4)] = _0x30f198(0xd8)),
        (_0x162e66[_0x30f198(0xd7)]["fontFamily"] = _0x30f198(0xdf)),
        (_0x162e66[_0x30f198(0xd7)][_0x30f198(0xb3)] = _0x30f198(0xe7)),
        (_0x162e66[_0x30f198(0xd7)]["background"] = "#fff"),
        (_0x162e66[_0x30f198(0xd7)]["borderTopLeftRadius"] = _0x30f198(0xe7)),
        (_0x162e66["style"][_0x30f198(0xa9)] = "5px"),
        (_0x162e66[_0x30f198(0xd7)][_0x30f198(0xb4)] = _0x30f198(0xe8)),
        document["body"]["appendChild"](_0x162e66);
}
defineProperty(),
    addEventFrom[_0x42bd25(0xc5)](_0x42bd25(0x9d), (_0x979425) => {
        const _0x2a2e9e = _0x42bd25;
        (addEventFrom[_0x2a2e9e(0xab)] = addEventFrom[_0x2a2e9e(0xab)][_0x2a2e9e(0x9e)](/[^0-9:]/g, "")),
            addEventFrom[_0x2a2e9e(0xab)][_0x2a2e9e(0xa3)] === 0x2 && (addEventFrom[_0x2a2e9e(0xab)] += ":"),
            addEventFrom[_0x2a2e9e(0xab)]["length"] > 0x5 && (addEventFrom[_0x2a2e9e(0xab)] = addEventFrom[_0x2a2e9e(0xab)][_0x2a2e9e(0xd4)](0x0, 0x5));
    }),
    addEventTo[_0x42bd25(0xc5)](_0x42bd25(0x9d), (_0x1b7d3b) => {
        const _0x4fb512 = _0x42bd25;
        (addEventTo[_0x4fb512(0xab)] = addEventTo[_0x4fb512(0xab)][_0x4fb512(0x9e)](/[^0-9:]/g, "")),
            addEventTo["value"][_0x4fb512(0xa3)] === 0x2 && (addEventTo[_0x4fb512(0xab)] += ":"),
            addEventTo[_0x4fb512(0xab)]["length"] > 0x5 && (addEventTo[_0x4fb512(0xab)] = addEventTo["value"][_0x4fb512(0xd4)](0x0, 0x5));
    }),
    addEventSubmit[_0x42bd25(0xc5)](_0x42bd25(0xda), () => {
        const _0x496c2e = _0x42bd25,
            _0x5d145e = addEventTitle[_0x496c2e(0xab)],
            _0x3f3dc0 = addEventFrom[_0x496c2e(0xab)],
            _0x244ad1 = addEventTo["value"];
        if (_0x5d145e === "" || _0x3f3dc0 === "" || _0x244ad1 === "") {
            alert(_0x496c2e(0xd0));
            return;
        }
        const _0xdad504 = _0x3f3dc0[_0x496c2e(0xb7)](":"),
            _0x2049e9 = _0x244ad1["split"](":");
        if (_0xdad504[_0x496c2e(0xa3)] !== 0x2 || _0x2049e9[_0x496c2e(0xa3)] !== 0x2 || _0xdad504[0x0] > 0x17 || _0xdad504[0x1] > 0x3b || _0x2049e9[0x0] > 0x17 || _0x2049e9[0x1] > 0x3b) {
            alert("Invalid\x20Time\x20Format");
            return;
        }
        const _0xc6bdad = convertTime(_0x3f3dc0),
            _0x3d852e = convertTime(_0x244ad1);
        let _0x2b551d = ![];
        eventsArr[_0x496c2e(0xce)]((_0xa6c644) => {
            const _0x18b490 = _0x496c2e;
            _0xa6c644[_0x18b490(0xc0)] === activeDay &&
                _0xa6c644[_0x18b490(0xfd)] === month + 0x1 &&
                _0xa6c644[_0x18b490(0xea)] === year &&
                _0xa6c644["events"][_0x18b490(0xce)]((_0x1e4f20) => {
                    const _0x30311b = _0x18b490;
                    _0x1e4f20[_0x30311b(0xf4)] === _0x5d145e && (_0x2b551d = !![]);
                });
        });
        if (_0x2b551d) {
            alert(_0x496c2e(0xc3));
            return;
        }
        const _0x32653c = { title: _0x5d145e, time: _0xc6bdad + "\x20-\x20" + _0x3d852e };
        console[_0x496c2e(0xfc)](_0x32653c), console[_0x496c2e(0xfc)](activeDay);
        let _0x533d7b = ![];
        eventsArr["length"] > 0x0 &&
            eventsArr[_0x496c2e(0xce)]((_0x4f387f) => {
                const _0x138828 = _0x496c2e;
                _0x4f387f["day"] === activeDay && _0x4f387f[_0x138828(0xfd)] === month + 0x1 && _0x4f387f[_0x138828(0xea)] === year && (_0x4f387f[_0x138828(0xaf)][_0x138828(0xaa)](_0x32653c), (_0x533d7b = !![]));
            });
        !_0x533d7b && eventsArr[_0x496c2e(0xaa)]({ day: activeDay, month: month + 0x1, year: year, events: [_0x32653c] });
        console[_0x496c2e(0xfc)](eventsArr),
            addEventWrapper[_0x496c2e(0xd1)][_0x496c2e(0xd2)](_0x496c2e(0xba)),
            (addEventTitle[_0x496c2e(0xab)] = ""),
            (addEventFrom[_0x496c2e(0xab)] = ""),
            (addEventTo[_0x496c2e(0xab)] = ""),
            updateEvents(activeDay);
        const _0x9a1072 = document[_0x496c2e(0xbf)](".day.active");
        !_0x9a1072[_0x496c2e(0xd1)][_0x496c2e(0x9f)](_0x496c2e(0xc6)) && _0x9a1072[_0x496c2e(0xd1)][_0x496c2e(0xd9)](_0x496c2e(0xc6));
    }),
    eventsContainer[_0x42bd25(0xc5)](_0x42bd25(0xda), (_0x5c1703) => {
        const _0x1b1165 = _0x42bd25;
        if (_0x5c1703[_0x1b1165(0xa1)][_0x1b1165(0xd1)][_0x1b1165(0x9f)]("event")) {
            if (confirm(_0x1b1165(0xa8))) {
                const _0x36beb7 = _0x5c1703[_0x1b1165(0xa1)]["children"][0x0]["children"][0x1]["innerHTML"];
                eventsArr[_0x1b1165(0xce)]((_0x43f88e) => {
                    const _0x4c7cf3 = _0x1b1165;
                    if (_0x43f88e[_0x4c7cf3(0xc0)] === activeDay && _0x43f88e["month"] === month + 0x1 && _0x43f88e[_0x4c7cf3(0xea)] === year) {
                        _0x43f88e["events"][_0x4c7cf3(0xce)]((_0x53693b, _0x18d636) => {
                            const _0x5731b1 = _0x4c7cf3;
                            _0x53693b[_0x5731b1(0xf4)] === _0x36beb7 && _0x43f88e[_0x5731b1(0xaf)][_0x5731b1(0xf2)](_0x18d636, 0x1);
                        });
                        if (_0x43f88e[_0x4c7cf3(0xaf)][_0x4c7cf3(0xa3)] === 0x0) {
                            eventsArr[_0x4c7cf3(0xf2)](eventsArr[_0x4c7cf3(0xb2)](_0x43f88e), 0x1);
                            const _0x13b53b = document[_0x4c7cf3(0xbf)](_0x4c7cf3(0xf3));
                            _0x13b53b[_0x4c7cf3(0xd1)][_0x4c7cf3(0x9f)]("event") && _0x13b53b[_0x4c7cf3(0xd1)][_0x4c7cf3(0xd2)](_0x4c7cf3(0xc6));
                        }
                    }
                }),
                    updateEvents(activeDay);
            }
        }
    });
function saveEvents() {
    const _0x19f955 = _0x42bd25;
    localStorage[_0x19f955(0xf0)](_0x19f955(0xaf), JSON[_0x19f955(0xfe)](eventsArr));
}
function getEvents() {
    const _0x249fdd = _0x42bd25;
    if (localStorage[_0x249fdd(0xb8)](_0x249fdd(0xaf)) === null) return;
    eventsArr["push"](...JSON[_0x249fdd(0xc7)](localStorage[_0x249fdd(0xb8)](_0x249fdd(0xaf))));
}
function convertTime(_0x3623a6) {
    const _0x5e63e1 = _0x42bd25;
    let _0x299cec = _0x3623a6[_0x5e63e1(0xb7)](":"),
        _0x3b4680 = _0x299cec[0x0],
        _0xc9f4bc = _0x299cec[0x1],
        _0x24a9f3 = _0x3b4680 >= 0xc ? "PM" : "AM";
    return (_0x3b4680 = _0x3b4680 % 0xc || 0xc), (_0x3623a6 = _0x3b4680 + ":" + _0xc9f4bc + "\x20" + _0x24a9f3), _0x3623a6;
}