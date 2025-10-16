$(document).ready(function () {
    // Khi click vào checkbox "Yes"
    $('.checkme').click(function () {
        // Tìm thẻ .checkbox-card gần nhất (cha của checkbox)
        var parent = $(this).closest('.checkbox-card');

        // Nếu checkbox được chọn
        if ($(this).is(':checked')) {
            // Hiện textbox nhập thông tin và ẩn nút "Apply"
            parent.find('.passport-box').slideDown();
            parent.find('.apply-box').slideUp();
        } else {
            // Nếu bỏ chọn thì ẩn textbox và hiện nút "Apply"
            parent.find('.passport-box').slideUp();
            parent.find('.apply-box').slideDown();
        }
    });
});
