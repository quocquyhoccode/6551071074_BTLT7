$(document).ready(function() {
    $("#fileupload").change(function() {
        const file = $(this).prop("files")[0];

        if (file) {
            const fileName = file.name;
            const fileExtension = fileName.split('.').pop().toLowerCase();
            $(".filename").html("File name: <b>" + fileName + "</b><br>Extension: <b>." + fileExtension + "</b>");
        } else {
            $(".filename").text("No file selected");
        }
    });
});