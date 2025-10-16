$(document).ready(function() {
    $(".tab-item").hide();
    $(".tab-item:first").show();
    $(".tab li:first").addClass("active");

    $(".tab li a").click(function(e) {
        e.preventDefault();
        $(".tab li").removeClass("active");
        $(this).parent().addClass("active");
        $(".tab-item").hide();
        var tab_id = $(this).attr("href");
        $(tab_id).show();
    });
});
