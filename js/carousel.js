$("#myCarousel .left").on("click", function () {
    rollCarousel(-1);
});

$("#myCarousel .right").on("click", function () {
    rollCarousel(1);
});

$(".carousel-dot").on("click", function () {
    var selectedIndex = $(this).index();
    var activeIndicator = $(".carousel-indicators ol li").filter('.active');
    var activeIndex = $(".carousel-indicators ol li").index(activeIndicator);

    rollCarousel(selectedIndex - activeIndex);
});

function rollCarousel(step) {
    var itemGroups = $("#myCarousel .row .item-group");
    var activeGroup = $(itemGroups).filter('.active');
    var index = $(itemGroups).index(activeGroup);

    var indicators = $(".carousel-dot");
    var activeIndicator = indicators.filter('.active');

    $(activeGroup).removeClass("active");
    $(activeIndicator).removeClass("active");

    var next = index + step;

    if (next === -1) {
        next = itemGroups.length - 1;
    } else if (next === itemGroups.length) {
        next = 0;
    }

    $(itemGroups[next]).addClass("active");
    $(indicators[next]).addClass("active");
}