
document.querySelector('#one').addEventListener('click', function () {
    document.querySelector('.main_menu').style.left = "0";
    document.querySelector('#one').style.display = "none";
    document.querySelector('#two').style.display = "block";
})
document.querySelector('#two').addEventListener('click', function () {
    document.querySelector('.main_menu').style.left = "-100vw";
    document.querySelector('#one').style.display = "block";
    document.querySelector('#two').style.display = "none";
})
var dd_main = document.querySelector(".dd_main");
dd_main.addEventListener("click", function () {
    this.classList.toggle("active");
})
// $(".styled-table").DataTable();
$('.menu_link').on('click', this, function () {
    if (!$(this).hasClass('notificationicon')) {
        $('.main_menu').find('.menu_link.selected').removeClass('selected')
        $(this).addClass('selected')
    }
})
$(".styled-table").on("click", "tbody tr", function () {
    $(".styled-table").find("tr").removeClass("active-row")
    $(this).addClass("active-row")
})
jQuery(function ($) {
    function adjustNav() {
        var winWidth = $(window).width(),
            dropdown = $('.dropdown'),
            dropdownMenu = $('.dropdown-menu');

        if (winWidth >= 768) {
            dropdown.on('mouseenter', function () {
                $(this).addClass('show')
                    .children(dropdownMenu).addClass('show');
            });

            dropdown.on('mouseleave', function () {
                $(this).removeClass('show')
                    .children(dropdownMenu).removeClass('show');
            });
        } else {
            dropdown.off('mouseenter mouseleave');
        }
    }

    $(window).on('resize', adjustNav);

    adjustNav();
});
$(document).ready(function () {
    $(".notificationicon").click(function () {
        $(this).toggleClass("open");
        $("#notificationMenu").toggleClass("open");
    });
});
