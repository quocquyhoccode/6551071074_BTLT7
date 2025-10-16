$(document).ready(function () {
    let operator = null; // lưu phép tính được chọn

    // Khi nhấn nút phép tính
    $(".operator").click(function () {
        $(".operator").removeClass("active"); // xóa màu đỏ ở các nút khác
        $(this).addClass("active");           // tô đỏ nút hiện tại
        operator = $(this).data("op");        // lưu phép tính
    });

    // Khi nhấn nút "="
    $("#equal").click(function () {
        const num1 = parseFloat($("#num1").val());
        const num2 = parseFloat($("#num2").val());
        let result = "";

        if (isNaN(num1) || isNaN(num2)) {
            result = "Vui lòng nhập đủ 2 số!";
        } else if (!operator) {
            result = "Chưa chọn phép tính!";
        } else {
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num2 === 0 ? "Không chia được cho 0" : num1 / num2;
                    break;
                case "^":
                    result = Math.pow(num1, num2);
                    break;
                default:
                    result = "Phép tính không hợp lệ"
            }
        }

        $("#result").val(result);
    });
});
