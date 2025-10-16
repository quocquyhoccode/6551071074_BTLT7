    $(document).ready(function () {
        $('#linkForm').on('submit', function (e) {
            e.preventDefault();

            var link = $('#linkInput').val(); 

            if (link.trim() === "") {
                alert("Vui lòng nhập đường link!");
                return;
            }

            var confirmRedirect = confirm("Bạn có chắc muốn chuyển đến liên kết này không?");
            
            if (confirmRedirect) {
                window.location.href = link; 
            }
        });
    });