function js_styles() {
    var firstname = $("input[name=fname]").val();
    var lastname = $("input[name=lname]").val();
    alert("Họ: " + firstname + "\nTên: " + lastname);
    return false; 
}
